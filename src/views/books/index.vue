<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          :placeholder="'请输入要查找的书名或作者名'"
          clearable
          v-model="queryForm.query"
        ></el-input>
      </el-col>
      <el-button type="primary" :icon="Search" @click="initgetBooksList"
        >搜索</el-button
      >
      <el-button type="primary" @click="handleDialogValue()"
        >新增书籍</el-button
      >
    </el-row>
    <el-table :data="tableData" stripe style="width: 100%" class="table">
      <el-table-column
        :width="item.width"
        :prop="item.prop"
        :label="item.label"
        v-for="(item, index) in options"
        :key="index"
      >
        <template #default="{ row }" v-if="item.prop === 'action'">
          <el-button
            type="primary"
            size="small"
            :icon="Edit"
            @click="handleDialogValue(row)"
          ></el-button>
          <el-button type="warning" size="small" :icon="Setting"></el-button>
          <el-button
            type="danger"
            size="small"
            :icon="Delete"
            @click="delBook(row)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:current-page="queryForm.pagenum"
      v-model:page-size="queryForm.pagesize"
      :page-sizes="[2, 5, 10, 15]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
  <Dialog
    v-model="dialogVisible"
    :dialogTitle="dialogTitle"
    v-if="dialogVisible"
    @initBookList="initgetBooksList"
    :dialogTableValue="dialogTableValue"
  />
</template>
<script setup>
import { ref } from 'vue'
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { getBook, deleteBook } from '@/api/book'
import { options } from './options'
import Dialog from './components/dialog.vue'
import { isNull } from '@/utils/filters'
import { ElMessage, ElMessageBox } from 'element-plus'

const queryForm = ref({
  query: '',
  pagenum: 1,
  pagesize: 5
})

const total = ref(0)

const tableData = ref([])

const dialogVisible = ref(false)
const dialogTitle = ref('')
const dialogTableValue = ref({})

const initgetBooksList = async () => {
  const res = await getBook(queryForm.value)
  tableData.value = res.data
  // console.log(res)
  total.value = res.total
  // console.log(total.value)
}
initgetBooksList()

const handleSizeChange = (pageSize) => {
  queryForm.value.pagenum = 1
  queryForm.value.pagesize = pageSize
  initgetBooksList()
}

const handleCurrentChange = (pageNum) => {
  queryForm.value.pagenum = pageNum
  initgetBooksList()
}

const handleDialogValue = (row) => {
  if (isNull(row)) {
    dialogTitle.value = '添加书籍'
    dialogTableValue.value = {}
  } else {
    dialogTitle.value = '编辑书籍'
    dialogTableValue.value = JSON.parse(JSON.stringify(row))
  }
  dialogVisible.value = true
}

const delBook = (row) => {
  ElMessageBox.confirm('确定要删除该书籍吗?', 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning'
  })
    .then(async () => {
      await deleteBook(row['id'])
      ElMessage({
        type: 'success',
        message: '删除成功'
      })
      initgetBooksList()
    })
    .catch(() => {
      ElMessage({
        type: 'info',
        message: '删除失败'
      })
    })
}
</script>

<style lang="scss" scoped>
.header {
  padding-bottom: 16px;
  box-sizing: border-box;
}
.table {
  padding-bottom: 16px;
  box-sizing: border-box;
  text-align: center;
}

.el-pagination {
  padding-top: 0px;
  box-sizing: border-box;
  text-align: right;
}
</style>
