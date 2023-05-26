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

import { UPDATE_MODEL_EVENT } from 'cm/contants'
import { fileUpload, type OssApiResult } from '@/api/oss'

const visible = ref<boolean>(false)

const emit = defineEmits([UPDATE_MODEL_EVENT, 'change'])

const handleClose = () => {
  emit(UPDATE_MODEL_EVENT, false)
}
const imageUrl = ref()

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  avatarUrl: {
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
  const reader = new FileReader()
  reader.readAsDataURL(file.raw)
  reader.onload = (e) => {
    imageUrl.value = e?.target?.result
  }
  confirmUpload()
}

// 重新上传
const avatarUploadBtnRef = ref()
const uploadPreviewEvent = () => {
  avatarUploadBtnRef.value.$el.click()
}

// 确认上传
const avatarCropperRef = ref()
// 获取裁剪后的图片数据
const getCropBlob = (): Promise<Blob> => {
  return new Promise((resolve) => {
    avatarCropperRef.value.getCropBlob((data: Blob) => {
      resolve(data)
    })
  })
}
const loading = ref<boolean>(false)
const confirmUpload = async () => {
  loading.value = true
  const formData = new FormData()
  const cropData = await getCropBlob()
  formData.append('file', cropData)
  formData.append('business', '头像')
  const res = await fileUpload(formData)
  loading.value = false
  if (res?.code === 200) {
    const data = res.data as OssApiResult[]
    emit('update:modelValue', data[0].url)
    handleClose()
  } else {
    ElMessage({ type: 'error', message: res?.msg || '网络异常，请稍后重试' })
  }
}

watch(
  () => props.modelValue,
  (val: boolean) => {
    visible.value = val
    if (val) {
      imageUrl.value = props.avatarUrl
    }
  }
)
</script>

<style lang="scss" scoped></style>
