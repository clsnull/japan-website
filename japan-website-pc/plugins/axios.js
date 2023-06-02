import apiEntire from "@/api";

export default ({ app, $axios, store, redirect }, inject) => {
    $axios.defaults.baseURL = 'http://www.tamasaki-group.com/api'
    $axios.defaults.timeout = 5000

    $axios.onRequest((config) => {

    })

    $axios.onError((error) => {
        return error.response.data
    })

    $axios.onResponse((response) => {
        return response.data
    })

    const API = {}

    for (const i in apiEntire) {
        API[i] = function ({ data = {}, params = '' }) {
            const { url, method, headers } = { ...apiEntire[i] }
            return $axios({
                url,
                method,
                headers,
                data,
                params
            })
        }
    }
    app.api = API
    inject('api', API)
}
