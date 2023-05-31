const files = require.context('./', true, /Api.js$/)

let apiEntire = {}

files.keys().forEach((key) => {
    const temp = files(key).default
    apiEntire = {
        ...apiEntire,
        ...temp
    }
})

export default apiEntire
