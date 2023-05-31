<template>
  <el-dialog
    title="Banner"
    v-model="visible"
    top="10vh"
    width="800px"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    v-loading="loading"
  >
    <el-form ref="bannerFormRef" :model="newsForm" :rules="newsFormRules" label-position="left" label-width="80px">
      <el-form-item label="名称" prop="title">
        <el-input v-model="newsForm.title" placeholder="请输入名称"></el-input>
      </el-form-item>
      <el-form-item label="图片" prop="img">
        <single-upload v-model="newsForm.url"></single-upload>
      </el-form-item>
      <el-form-item label="内容" prop="content">
        <el-input v-model="newsForm.content" placeholder="请输入内容"></el-input>
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

import { getNewsInfo, type NewsApiResult, updateNews, createNews } from '@/api/news'
import { ElMessage } from 'element-plus'

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
  }
})

const emit = defineEmits([UPDATE_MODEL_EVENT, 'change'])

const visible = ref<boolean>(false)

const handleClose = () => {
  emit(UPDATE_MODEL_EVENT, false)
}

const defaultForm = {
  id: '',
  title: '',
  content: '',
  url: ''
}
// 表单逻辑
let newsForm = ref<NewsApiResult>({ ...defaultForm })

const newsFormRules = {
  title: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  content: [{ required: true, message: '请输入内容', trigger: 'blur' }],
  url: [{ required: true, message: '请上传图片', trigger: 'blur' }]
}

const loading = ref<boolean>(false)
// 查询用户详情
const getNewsInfoApi = async (currId: string) => {
  loading.value = true
  const res = await getNewsInfo(currId)
  loading.value = false
  if (res?.code === 200) {
    newsForm.value = res.data as NewsApiResult
  }
}

watch(
  () => props.modelValue,
  async () => {
    visible.value = props.modelValue
    if (props.modelValue && props.currId && props.currId !== '0') {
      await getNewsInfoApi(props.currId)
    } else {
      newsForm = ref<NewsApiResult>({ ...defaultForm })
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
          ...newsForm.value,
          id: null
        }
        res = await createNews(params)
      } else {
        res = await updateNews(newsForm.value)
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
