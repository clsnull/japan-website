<template>
  <el-dialog
    title="Banner"
    v-model="visible"
    top="10vh"
    width="500px"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    v-loading="loading"
  >
    <el-form ref="bannerFormRef" :model="bannerForm" :rules="bannerFormRules" label-position="left" label-width="80px">
      <el-form-item label="名称" prop="name">
        <el-input v-model="bannerForm.name" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="跳转链接" prop="url">
        <el-input v-model="bannerForm.url" placeholder="请输入跳转URL"></el-input>
      </el-form-item>
      <el-form-item label="图片" prop="img">
        <single-upload v-model="bannerForm.img"></single-upload>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="handleClose">取消</el-button>
      <el-button type="primary" @click="updateOrCreate">确定</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import singleUpload from '@/components/upload/singleUpload.vue'
import { ref, watch, type PropType } from 'vue'
import { UPDATE_MODEL_EVENT } from 'cm/contants'

import type { RoleApiResult } from '@/api/role'
import { getBannerInfo, updateBanner, createBanner } from '@/api/banner'
import { ElMessage } from 'element-plus'
import type { BannerApiResult } from '@/api/banner'

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
    default: false
  },
  currId: {
    type: String,
    required: true,
    default: '0'
  },
  roleList: {
    type: Array as PropType<RoleApiResult[]>,
    default: () => []
  }
})

const emit = defineEmits([UPDATE_MODEL_EVENT, 'change'])

const visible = ref<boolean>(false)

const handleClose = () => {
  emit(UPDATE_MODEL_EVENT, false)
}

const defaultForm = {
  id: '',
  name: '',
  url: '',
  img: ''
}
// 表单逻辑
let bannerForm = ref<BannerApiResult>({ ...defaultForm })

const bannerFormRules = {
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  url: [{ required: true, message: '请输入跳转地址', trigger: 'blur' }],
  img: [{ required: true, message: '请上传图片', trigger: 'blur' }]
}

const loading = ref<boolean>(false)
// 查询用户详情
const getBannerInfoApi = async (currId: string) => {
  loading.value = true
  const res = await getBannerInfo(currId)
  loading.value = false
  if (res?.code === 200) {
    bannerForm.value = res.data as BannerApiResult
  }
}

const uploadSuccess = (url: string) => {
  bannerForm.value.img = url
}

watch(
  () => props.modelValue,
  async () => {
    visible.value = props.modelValue
    if (props.modelValue && props.currId && props.currId !== '0') {
      await getBannerInfoApi(props.currId)
    } else {
      bannerForm = ref<BannerApiResult>({ ...defaultForm })
    }
  }
)

const bannerFormRef = ref()
const updateOrCreate = async () => {
  bannerFormRef.value.validate(async (valid: boolean) => {
    if (valid) {
      loading.value = true
      let res = null
      if (props.currId === '0') {
        const params = {
          ...bannerForm.value,
          id: null
        }
        res = await createBanner(params)
      } else {
        res = await updateBanner(bannerForm.value)
      }
      loading.value = false
      if (res?.code === 200) {
        if (props.currId === '0') {
          ElMessage({ type: 'success', message: '添加成功' })
        } else {
          ElMessage({ type: 'success', message: '更新成功' })
        }
        emit('change')
        handleClose()
      } else {
        ElMessage({ type: 'error', message: res?.msg || '网络异常，请稍后重试！' })
      }
    }
  })
}
</script>
