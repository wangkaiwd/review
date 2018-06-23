import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastClick from 'fastclick'
// 移动端300毫秒的延迟
fastClick.attach(document.body)

// swiper组件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
// 初始化样式
import './assets/styles/reset.css'
import './assets/styles/base.less'

// 全局组件
import BaseIcon from './components/icon/BaseIcon.vue'

Vue.component('BaseIcon', BaseIcon)

Vue.config.productionTip = false

Vue.component()
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
