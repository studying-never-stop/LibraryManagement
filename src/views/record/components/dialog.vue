<template>
  <el-dialog
    :model-value="dialogVisible"
    :title="dialogTitle"
    width="40%"
    @close="handleClose"
  >
    <el-form ref="formRef" :model="form" label-width="70px" :rules="rules">
      <el-form-item label="姓名" prop="actor">
        <el-input v-model="form.actor" />
      </el-form-item>
      <el-form-item label="书名" prop="book">
        <el-input v-model="form.book" />
      </el-form-item>
      <el-form-item label="操作类型">
        <el-select v-model="form.acttype">
          <el-option label="借书登记" value="lend" />
          <el-option label="还书登记" value="return" />
          <el-option label="卖书登记" value="buy" />
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
import { addRecord } from '@/api/switch'
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

const emits = defineEmits(['update:modelValue', 'initRecordList'])

const handleClose = () => {
  emits('update:modelValue', false)
}

const handleConfirm = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      props.dialogTitle === (await addRecord(form.value))
      ElMessage({
        message: '登记成功',
        type: 'success'
      })
      emits('initRecordList')
      handleClose()
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const formRef = ref(null)

const form = ref({
  actor: '',
  book: '',
  acttype: ''
})

const rules = ref({
  actor: [
    { required: true, message: 'Please input actorname', trigger: 'blur' },
    { min: 1 }
  ],
  book: [
    { required: true, message: 'Please input bookname', trigger: 'blur' },
    { min: 1 }
  ],
  acttype: []
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
