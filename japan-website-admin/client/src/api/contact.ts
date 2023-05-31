import request from '@/utils/request'
import config from '@/config/index'
import { ApiMethodContants, type BaseResult, type ListResultData, type Pagination, type ResultData } from './base'

/** 返回Contact类型 */
export interface ContactApiResult extends BaseResult {
  /** 名称 */
  title?: string
  /** 跳转url */
  businessName?: string
  /** 担当者 */
  username?: string
  /** フリガナ(氏名) */
  nomen?: string
  /** 住所 */
  address?: string
  /** 电话番号 */
  phone?: string
  /** 郵便番号 */
  postCode?: string
  /** メールアドレス(邮箱地址) */
  email?: string
  /** お問合せ内容(咨询内容) */
  content?: string
  /** 创建时间 */
  createDate?: string
  /** 更新时间 */
  updateDate?: string
}

export interface QueryContactList extends Pagination {}

export function delContact(id: string): Promise<ResultData<null>> {
  return request<ResultData<null>>({
    url: `${config.api.baseUrl}/contact/${id}`,
    method: ApiMethodContants.DELETE
  })
}

export function getContactInfo(id?: string): Promise<ResultData<ContactApiResult>> {
  return request<ResultData<ContactApiResult>>({
    url: `${config.api.baseUrl}/contact/${id}`,
    method: ApiMethodContants.GET
  })
}

export function getContactList(params: QueryContactList): Promise<ResultData<ListResultData<ContactApiResult>>> {
  return request<ResultData<ListResultData<ContactApiResult>>>({
    url: `${config.api.baseUrl}/contact/list`,
    method: ApiMethodContants.GET,
    params
  })
}

export function updateContact(data: ContactApiResult): Promise<ResultData<null>> {
  return request<ResultData<null>>({
    url: `${config.api.baseUrl}/contact`,
    method: ApiMethodContants.PUT,
    data
  })
}
