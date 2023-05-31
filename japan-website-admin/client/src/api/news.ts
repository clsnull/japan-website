import request from '@/utils/request'
import config from '@/config/index'
import { ApiMethodContants, type BaseResult, type ListResultData, type Pagination, type ResultData } from './base'

/** 返回 News类型 */
export interface NewsApiResult extends BaseResult {
  /** 名称 */
  title?: string
  /** 摘要 */
  digest?: string
  /** 缩略图 */
  url?: string
  /** 内容 */
  content?: string
}

export interface CreateNewsParams {
  /** 名称 */
  title?: string
  /** 摘要 */
  digest?: string
  /** 缩略图 */
  url?: string
  /** 内容 */
  content?: string
}

export interface QueryNewsList extends Pagination {}

export function delNews(id: string): Promise<ResultData<null>> {
  return request<ResultData<null>>({
    url: `${config.api.baseUrl}/news/${id}`,
    method: ApiMethodContants.DELETE
  })
}

export function getNewsInfo(id?: string): Promise<ResultData<NewsApiResult>> {
  return request<ResultData<NewsApiResult>>({
    url: `${config.api.baseUrl}/news/${id}`,
    method: ApiMethodContants.GET
  })
}

export function getNewsList(params: QueryNewsList): Promise<ResultData<ListResultData<NewsApiResult>>> {
  return request<ResultData<ListResultData<NewsApiResult>>>({
    url: `${config.api.baseUrl}/news/list`,
    method: ApiMethodContants.GET,
    params
  })
}

export function updateNews(data: NewsApiResult): Promise<ResultData<null>> {
  return request<ResultData<null>>({
    url: `${config.api.baseUrl}/news`,
    method: ApiMethodContants.PUT,
    data
  })
}

export function createNews(data: CreateNewsParams): Promise<ResultData<null>> {
  return request<ResultData<null>>({
    url: `${config.api.baseUrl}/news`,
    method: ApiMethodContants.POST,
    data
  })
}
