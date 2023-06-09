import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyCzMGbdmv8TBUJUI_9nKRwx7LroXYjj-fA',
    libraries: 'places', // 你需要哪些库就在这里添加
    region: 'ja',
    language: 'ja',
  }
})