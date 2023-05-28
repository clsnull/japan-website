<template>
  <div class="avatar-cropper-wrapper">
    <div class="avatar-cropper">
      <el-upload
        class="avatar-uploader"
        accept="image/png, image/jpeg, image/jpg"
        action=""
        :auto-upload="false"
        :show-file-list="false"
        :on-change="uploadClickEvent"
      >
        <el-image v-if="imageUrl" :src="imageUrl" class="avatar" style="width: 120px; border: 1px solid #efefef" />
        <el-button v-else ref="avatarUploadBtnRef" type="primary">选择图片</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'
import { ElMessage } from 'element-plus'

import { fileUpload, type OssApiResult } from '@/api/oss'

const fileRaw = ref()
const imageUrl = ref()
const emit = defineEmits(['update:modelValue', 'change'])
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  }
})

const uploadClickEvent = (file: any) => {
  if ('image/png, image/jpeg, image/jpg'.indexOf(file.raw.type) === -1) {
    ElMessage({ type: 'error', message: '文件类型错误' })
    return false
  }
  if (file.raw.size > 1024 * 1024 * 5) {
    ElMessage({ type: 'error', message: '上传图片大小不能超过 5M' })
    return false
  }
  fileRaw.value = file
  const reader = new FileReader()
  reader.readAsDataURL(file.raw)
  reader.onload = (e) => {
    imageUrl.value = e?.target?.result
  }
  confirmUpload()
}

const loading = ref<boolean>(false)
const confirmUpload = async () => {
  loading.value = true
  const formData = new FormData()
  formData.append('file', fileRaw.value.raw)
  formData.append('business', 'common')
  const res = await fileUpload(formData)
  loading.value = false
  if (res?.code === 200) {
    const data = res.data as OssApiResult[]
    emit('update:modelValue', data[0].url)
  } else {
    ElMessage({ type: 'error', message: res?.msg || '网络异常，请稍后重试' })
  }
}

watch(
  () => props.modelValue,
  (val: string) => {
    imageUrl.value = props.modelValue || val
  }
)
</script>

<style lang="scss" scoped></style>
