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
      <el-form-item label="库存" prop="keep">
        <el-input v-model="form.keep" />
      </el-form-item>
      <el-form-item label="定价" prop="cost">
        <el-input v-model="form.cost" />
      </el-form-item>
      <el-form-item label="图书类型">
        <el-select v-model="form.kind">
          <el-option label="总类" value="Class of classes" />
          <el-option label="哲学类" value="philosophy" />
          <el-option label="宗教类" value="religion" />
          <el-option label="科学类" value="science" />
          <el-option label="应用科学" value="Applied science" />
          <el-option label="社会科学" value="Social sciences" />
          <el-option label="史地" value="Historical land class" />
          <el-option label="中国史地" value="Historical places in China" />
          <el-option label="世界史地" value="World-historical site" />
          <el-option label="语文类" value="Language category" />
          <el-option label="艺术类" value="arts" />
        </el-select>
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
  writer: '',
  kind: '',
  cost: '',
  keep: ''
})

const rules = ref({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 1, message: 'Length should be 3 to 20', trigger: 'blur' }
  ],
  writer: [
    { required: true, message: 'Please input writer', trigger: 'blur' },
    { min: 1, message: 'Length should be 4 to 20', trigger: 'blur' }
  ],
  kind: [],
  cost: []
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
