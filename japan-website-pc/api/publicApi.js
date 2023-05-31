/**
 * 获取友情链接列表
 */
const getNewsList = {
    url: '/news/list',
    method: 'get',
}

/**
 * 用户留言
 */
const contactAdd = {
    url: '/contact',
    method: 'POST'
}

export default {
    getNewsList,
    contactAdd,
}
