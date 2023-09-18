<template>
  <el-dialog
    :model-value="dialogVisible"
    :title="dialogTitle"
    width="40%"
    @close="handleClose"
  >
    <el-form ref="formRef" :model="form" label-width="70px" :rules="rules">
      <el-form-item label="书名" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="作者" prop="writer">
        <el-input v-model="form.writer" />
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">取消</el-button>
        <el-button type="primary" @click="handleConfirm"> 确认 </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { defineEmits, ref, defineProps, watch } from 'vue'
import { addBook, editBook } from '@/api/book'
import { ElMessage } from 'element-plus'

const props = defineProps({
  dialogTitle: {
    type: String,
    default: '',
    required: true
  },
  dialogTableValue: {
    type: Object,
    default: () => {}
  }
})

// watch不能放在被监视对象的上面
// watch(() => props.dialogTableValue,() => {form.value=props.dialogTableValue},{ deep: true ,immediate: true} )

const emits = defineEmits(['update:modelValue', 'initBookList'])

const handleClose = () => {
  emits('update:modelValue', false)
}

const handleConfirm = () => {
  // 统一效验
  formRef.value.validate(async (valid) => {
    if (valid) {
      props.dialogTitle === '添加书籍'
        ? await addBook(form.value)
        : await editBook(form.value)
      ElMessage({
        message: '更新成功',
        type: 'success'
      })
      emits('initBookList')
      handleClose()
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const formRef = ref(null)

const form = ref({
  name: '',
  writer: ''
})

const rules = ref({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 1, message: 'Length should be 3 to 20', trigger: 'blur' }
  ],
  writer: [
    { required: true, message: 'Please input writer', trigger: 'blur' },
    { min: 1, message: 'Length should be 4 to 20', trigger: 'blur' }
  ]
})

watch(
  () => props.dialogTableValue,
  () => {
    console.log(props.dialogTableValue), (form.value = props.dialogTableValue)
  },
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped></style>
