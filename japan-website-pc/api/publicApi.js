
const getNewsList = {
    url: '/news/list',
    method: 'get',
}

const getNewsInfo = {
    url: '/news/{id}',
    method: 'get',
}

const contactAdd = {
    url: '/contact',
    method: 'POST'
}

export default {
    getNewsList,
    contactAdd,
}
