import request from '@/utils/request'
import config from '@/config/index'
import { ApiMethodContants, type BaseResult, type ListResultData, type Pagination, type ResultData } from './base'
import { getRefreshToken } from '@/utils/cache'

/** 返回Banner类型 */
export interface BannerApiResult extends BaseResult {
  /** 名称 */
  name?: string
  /** 跳转url */
  url?: string
  /** 图片 */
  img?: string
}

export interface UserLogin {
  account: string
  password: string
}

export interface LoginResult {
  accessToken: string
  refreshToken: string
}

export interface ICreateOrUpdateUser extends BannerApiResult {
  password?: string
  roleIds?: number[]
}

export interface QueryBannerList extends Pagination {}

export interface BindUserData {
  userIds: string[]
  roleId: string
  type: 'create' | 'cancel'
}

/** 登录 */
export function login(loginData: UserLogin): Promise<ResultData<LoginResult>> {
  return request<ResultData<LoginResult>>({
    url: `${config.api.baseUrl}/login`,
    method: ApiMethodContants.POST,
    data: loginData
  })
}

export function updateToken(): Promise<ResultData<LoginResult>> {
  return request({
    url: `${config.api.baseUrl}/update/token`,
    method: ApiMethodContants.POST,
    headers: { Authorization: 'Bearer ' + getRefreshToken() }
  })
}

export function resetPassword(userId: string): Promise<ResultData<null>> {
  return request<ResultData<null>>({
    url: `${config.api.baseUrl}/user/password/reset/${userId}`,
    method: ApiMethodContants.PUT
  })
}

export function updateStatus(data: ICreateOrUpdateUser): Promise<ResultData<null>> {
  return request<ResultData<null>>({
    url: `${config.api.baseUrl}/user/status/change`,
    method: ApiMethodContants.PUT,
    data
  })
}

export function getUserRoleIds(id: string): Promise<ResultData<number[]>> {
  return request<ResultData<number[]>>({
    url: `${config.api.baseUrl}/user/${id}/role`,
    method: ApiMethodContants.GET
  })
}

export function delBanner(id: string): Promise<ResultData<null>> {
  return request<ResultData<null>>({
    url: `${config.api.baseUrl}/banner/${id}`,
    method: ApiMethodContants.DELETE
  })
}

export function getBannerInfo(id?: string): Promise<ResultData<BannerApiResult>> {
  return request<ResultData<BannerApiResult>>({
    url: `${config.api.baseUrl}/banner/${id}`,
    method: ApiMethodContants.GET
  })
}

export function getBannerList(params: QueryBannerList): Promise<ResultData<ListResultData<BannerApiResult>>> {
  return request<ResultData<ListResultData<BannerApiResult>>>({
    url: `${config.api.baseUrl}/banner/list`,
    method: ApiMethodContants.GET,
    params
  })
}

export function updateBanner(data: BannerApiResult): Promise<ResultData<null>> {
  return request<ResultData<null>>({
    url: `${config.api.baseUrl}/banner`,
    method: ApiMethodContants.PUT,
    data
  })
}

export function createBanner(data: BannerApiResult): Promise<ResultData<null>> {
  return request<ResultData<null>>({
    url: `${config.api.baseUrl}/banner`,
    method: ApiMethodContants.POST,
    data
  })
}
