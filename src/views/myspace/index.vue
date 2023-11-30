<template>
  <el-form
    ref="formRef"
    :model="(form, staticInformation)"
    label-width="120px"
    :rules="rules"
  >
    <el-form-item label="用户名" prop="name">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="邮箱" prop="email">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="手机" prop="phone">
      <el-input v-model="form.phone" />
    </el-form-item>
    <el-form-item label="身份: "
      ><div>{{ staticInformation.role }}</div></el-form-item
    >
    <el-form-item label="本月借阅次数: ">{{
      staticInformation.lendnumber
    }}</el-form-item>
    <el-form-item label="购买数量: ">{{
      staticInformation.buynumber
    }}</el-form-item>
  </el-form>
  <div style="width: 100%; text-align: center">
    <el-button
      type="primary"
      style="width: 30%; box-sizing: border-box"
      @click="handleConfirm"
    >
      确认更新
    </el-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { editUser, getUserData } from '@/api/users'
import { ElMessage } from 'element-plus'

const handleConfirm = () => {
  formRef.value.validate(async (valid) => {
    if (valid) {
      await editUser(form.value)
      ElMessage({
        message: '更新成功',
        type: 'success'
      })
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const formRef = ref(null)

const form = ref({
  name: '',
  email: '',
  phone: ''
})

const staticInformation = ref({
  role: '',
  buynumber: 0,
  lendnumber: 0
})

const initgetmyData = async () => {
  const myData = await getUserData()
  form.value = myData.data
  staticInformation.value = myData.data
  // console.log(myData.data)
}
initgetmyData()

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
</script>

<style lang="scss" scoped>
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
