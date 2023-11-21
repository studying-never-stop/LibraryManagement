<template>
  <el-card>
    <el-row :gutter="20" class="header">
      <el-col :span="7">
        <el-input
          :placeholder="'请输入要查找的人名或书名'"
          clearable
          v-model="queryForm.query"
        ></el-input>
      </el-col>
      <el-button type="primary" :icon="Search" @click="initgetRecordsList"
        >搜索</el-button
      >
      <el-button type="primary" @click="handleDialogValue()"
        >新增记录</el-button
      >
      <div class="selecter">
        <el-select
          v-model="queryForm.acttype"
          placeholder="Select"
          style="width: 100px"
          @change="initgetRecordsList"
        >
          <el-option label="全部" value="" />
          <el-option label="借书登记" value="lend" />
          <el-option label="还书登记" value="return" />
          <el-option label="卖书登记" value="buy" />
        </el-select>
      </div>
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
            @click="delUser(row)"
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
    @initRecordList="initgetRecordsList"
    :dialogTableValue="dialogTableValue"
  />
</template>
<script setup>
import { ref } from 'vue'
import { Search, Edit, Setting, Delete } from '@element-plus/icons-vue'
import { getRecord } from '@/api/switch'
import { options } from './options'
import Dialog from './components/dialog.vue'
import { isNull } from '@/utils/filters'
import { ElMessage, ElMessageBox } from 'element-plus'

const queryForm = ref({
  query: '',
  acttype: '',
  pagenum: 1,
  pagesize: 5
})

const total = ref(0)

const tableData = ref([])

const dialogVisible = ref(false)
const dialogTitle = ref('')
const dialogTableValue = ref({})

const initgetRecordsList = async () => {
  const res = await getRecord(queryForm.value)
  tableData.value = res.data
  total.value = res.total
}
initgetRecordsList()

const handleSizeChange = (pageSize) => {
  queryForm.value.pagenum = 1
  queryForm.value.pagesize = pageSize
  initgetRecordsList()
}

const handleCurrentChange = (pageNum) => {
  queryForm.value.pagenum = pageNum
  initgetRecordsList()
}

const handleDialogValue = (row) => {
  if (isNull(row)) {
    dialogTitle.value = '添加记录'
    dialogTableValue.value = {}
  }
  dialogVisible.value = true
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

.selecter {
  padding-left: 10px;
  box-sizing: border-box;
  text-align: center;
}
</style>
