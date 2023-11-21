<template>
  <el-dialog
    :model-value="dialogVisible"
    :title="dialogTitle"
    width="40%"
    @close="handleClose"
  >
    <el-form ref="formRef" :model="form" label-width="70px" :rules="rules">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="手机" prop="phone">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="身份">
        <el-select v-model="form.role" prop="role">
          <el-option label="管理员" value="admin" />
          <el-option label="普通用户" value="common" />
          <el-option label="尊贵用户" value="vip" />
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
import { addUser, editUser } from '@/api/users'
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

const emits = defineEmits(['update:modelValue', 'initUserList'])

const handleClose = () => {
  emits('update:modelValue', false)
}

const handleConfirm = () => {
  // 统一效验
  formRef.value.validate(async (valid) => {
    if (valid) {
      props.dialogTitle === '添加用户'
        ? await addUser(form.value)
        : await editUser(form.value)
      ElMessage({
        message: '更新成功',
        type: 'success'
      })
      emits('initUserList')
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
  password: '',
  email: '',
  phone: '',
  role: ''
})

const rules = ref({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 20, message: 'Length should be 3 to 20', trigger: 'blur' }
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    { min: 4, max: 20, message: 'Length should be 4 to 20', trigger: 'blur' }
  ],
  email: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    {
      type: 'email',
      message: 'Please input correct email address',
      trigger: ['blur', 'change']
    }
  ],
  phone: [
    { required: true, message: 'Please input Activity phone', trigger: 'blur' },
    { min: 11, max: 11, message: 'Length should be 11', trigger: 'blur' }
  ],
  role: []
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
