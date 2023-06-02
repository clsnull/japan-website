<template>
  <div class="box-bg-color">
    <div class="filter-container">
      <div class="filter-item">
        <el-button type="primary" @click="clickAddEvent">create banner</el-button>
      </div>
    </div>

    <k-table
      ref="tableRef"
      v-bind="tableData"
      :callback="getBannerListApi"
      :loading="loading"
      stripe
      current-row-key="id"
    >
      <template #img="{ row }">
        <div class="user-account-wrap">
          <el-image :src="row.img" style="width: 100px; height: 100px"></el-image>
        </div>
      </template>

      <template #actions="{ row }">
        <el-button type="primary" plain size="small" @click="clickEditEvent(row.id)" v-perm="'perm_users:edit'"
          >update</el-button
        >
        <el-button type="danger" plain size="small" @click="delBtnEvent(row)" v-perm="'perm_users:resetPw'"
          >delete</el-button
        >
      </template>
    </k-table>
    <!-- 用户编辑 -->
    <Edit v-model="showEdit" :curr-id="currId" :role-list="roleList" @change="updateUserSuccess"></Edit>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import type { IKTableProps } from 'k-ui'

import { getBannerList, type QueryBannerList, type BannerApiResult, delBanner } from '@/api/banner'
import type { ListResultData, Pagination } from '@/api/base'

import Edit from './components/Edit.vue'
import { hasPerms } from '@/utils/perm'
import { useApiLock } from '_hooks'

const tableRef = ref()
const tableData = ref<IKTableProps<BannerApiResult>>({
  mode: 'config',
  data: { list: [], total: 0 },
  auto: true,
  isPager: true,
  pageSize: 10,
  index: true,
  columns: [
    { label: '名称', prop: 'name', default: '--' },
    { label: '跳转链接', prop: 'url', default: '--' },
    { label: '图片地址', prop: 'img', slot: true }
  ]
})

/* 这里判断是否有整个操作列的权限；如果没有则不显示整列 */
const hasActionPerm = hasPerms(['perm_users:edit', 'perm_users:updateStatus', 'perm_users:resetPw'])
hasActionPerm && tableData.value.columns.push({ label: '取った', prop: 'actions', slot: true, width: 240 })

const loading = ref<boolean>(false)

// 查询表格事件
const queryReq = ref<QueryBannerList>({ page: 1, size: 10 })

const getBannerListApi = async ({ page, size }: Pagination) => {
  loading.value = true
  const res = await useApiLock(() => getBannerList({ ...queryReq.value, page, size } as QueryBannerList), 500)
  loading.value = false
  if (res?.code === 200) {
    const data = res.data as ListResultData<BannerApiResult>
    tableData.value.data = data
  } else {
    ElMessage({ message: res?.msg || '网络异常，请稍后重试', type: 'error' })
  }
}

const updateUserSuccess = (newPage = {}) => {
  // 在当前页 重新加载数据
  tableRef.value.refreshData(newPage)
}

// 用户编辑
const showEdit = ref<boolean>(false)
const currId = ref<string | undefined>(undefined)
const clickEditEvent = (id: string) => {
  currId.value = id
  showEdit.value = true
}

const clickAddEvent = () => {
  currId.value = '0'
  showEdit.value = true
}

const delBtnEvent = async (row: BannerApiResult) => {
  await ElMessageBox.confirm(`此操作将会永久删除【${row.name}】，是否继续`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
  loading.value = true
  const res = await delBanner(row.id as string)
  loading.value = false
  if (res?.code === 200) {
    ElMessage({ message: `【${row.name}】删除成功`, type: 'success' })
    updateUserSuccess()
  } else {
    ElMessage({ message: res.msg, type: 'error' })
  }
}
</script>

<style lang="scss" scoped>
.user-account-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
}

.upload-wrap {
  display: flex;
}
</style>
