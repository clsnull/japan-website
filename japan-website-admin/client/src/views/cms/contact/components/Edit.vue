<template>
  <el-dialog
    title="お問い合わせ"
    v-model="visible"
    top="10vh"
    width="800px"
    :before-close="handleClose"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    v-loading="loading"
  >
    <el-form
      ref="bannerFormRef"
      :model="contactForm"
      :rules="contactFormRules"
      label-position="left"
      label-width="120px"
    >
      <el-form-item label="お問合せ製品" prop="name">
        <el-input v-model="contactForm.title" disabled></el-input>
      </el-form-item>
      <el-form-item label="会社名" prop="url">
        <el-input v-model="contactForm.businessName" disabled></el-input>
      </el-form-item>
      <el-form-item label="担当者名" prop="url">
        <el-input v-model="contactForm.username" disabled></el-input>
      </el-form-item>
      <el-form-item label="フリガナ" prop="url">
        <el-input v-model="contactForm.nomen" disabled></el-input>
      </el-form-item>
      <el-form-item label="住所">
        <el-input v-model="contactForm.address" disabled></el-input>
      </el-form-item>
      <el-form-item label="電話番号">
        <el-input v-model="contactForm.phone" disabled></el-input>
      </el-form-item>
      <el-form-item label="郵便番号">
        <el-input v-model="contactForm.postCode" disabled></el-input>
      </el-form-item>
      <el-form-item label="メールアドレス" prop="url">
        <el-input v-model="contactForm.email" disabled></el-input>
      </el-form-item>
      <el-form-item label="送信時刻です" prop="url">
        <el-input v-model="contactForm.createDate" disabled></el-input>
      </el-form-item>
      <el-form-item label="お問合せ内容" prop="url">
        <el-input type="textarea" autosize v-model="contactForm.content" disabled></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button type="primary" @click="handleClose">認める</el-button>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import singleUpload from '@/components/upload/singleUpload.vue'
import { ref, watch, type PropType } from 'vue'
import { UPDATE_MODEL_EVENT } from 'cm/contants'

import type { RoleApiResult } from '@/api/role'
import { getContactInfo, type ContactApiResult } from '@/api/contact'
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
let contactForm = ref<ContactApiResult>({ ...defaultForm })

const contactFormRules = {
  name: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  url: [{ required: true, message: '请输入跳转地址', trigger: 'blur' }],
  img: [{ required: true, message: '请上传图片', trigger: 'blur' }]
}

const loading = ref<boolean>(false)
// 查询用户详情
const getContactInfoApi = async (currId: string) => {
  loading.value = true
  const res = await getContactInfo(currId)
  loading.value = false
  if (res?.code === 200) {
    contactForm.value = res.data as ContactApiResult
  }
}

watch(
  () => props.modelValue,
  async () => {
    visible.value = props.modelValue
    if (props.modelValue && props.currId && props.currId !== '0') {
      await getContactInfoApi(props.currId)
    } else {
      contactForm = ref<ContactApiResult>({ ...defaultForm })
    }
  }
)
</script>
