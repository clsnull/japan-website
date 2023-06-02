<template>
  <div class="box-bg-color">
    <k-table
      ref="tableRef"
      v-bind="tableData"
      :callback="getContactListApi"
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
          >詳しい情況</el-button
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

import { getContactList, type QueryContactList, type ContactApiResult, delContact } from '@/api/contact'
import type { ListResultData, Pagination } from '@/api/base'

import { hasPerms } from '@/utils/perm'
import { useApiLock } from '_hooks'
import Edit from './components/Edit.vue'

const tableRef = ref()
const tableData = ref<IKTableProps<BannerApiResult>>({
  mode: 'config',
  data: { list: [], total: 0 },
  auto: true,
  isPager: true,
  pageSize: 10,
  index: true,
  columns: [
    { label: 'お問合せ製品', prop: 'title', default: '--' },
    { label: '会社名', prop: 'businessName', default: '--' },
    { label: '担当者名', prop: 'username', default: '--' },
    { label: 'フリガナ', prop: 'nomen', default: '--' },
    { label: '住所', prop: 'address', default: '--' },
    { label: '電話番号', prop: 'phone', default: '--' },
    { label: '郵便番号', prop: 'postCode', default: '--' },
    { label: 'メールアドレス', prop: 'email', default: '--' },
    // { label: 'お問合せ内容', prop: 'content', default: '--'  },
    { label: '送信時刻です', prop: 'createDate', default: '--' }
  ]
})

/* 这里判断是否有整个操作列的权限；如果没有则不显示整列 */
const hasActionPerm = hasPerms(['perm_users:edit', 'perm_users:updateStatus', 'perm_users:resetPw'])
hasActionPerm && tableData.value.columns.push({ label: '取った', prop: 'actions', slot: true, width: 240 })

const loading = ref<boolean>(false)

// 查询表格事件
const queryReq = ref<QueryContactList>({ page: 1, size: 10 })

const getContactListApi = async ({ page, size }: Pagination) => {
  loading.value = true
  const res = await useApiLock(() => getContactList({ ...queryReq.value, page, size } as QueryContactList), 500)
  loading.value = false
  if (res?.code === 200) {
    const data = res.data as ListResultData<ContactApiResult>
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

const delBtnEvent = async (row: ContactApiResult) => {
  await ElMessageBox.confirm(`此操作将会永久删除【${row.title}】，是否继续`, '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
  loading.value = true
  const res = await delContact(row.id as string)
  loading.value = false
  if (res?.code === 200) {
    ElMessage({ message: `【${row.title}】删除成功`, type: 'success' })
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
