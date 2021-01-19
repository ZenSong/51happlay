// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/common/css/reset.css';

import 'vant/lib/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'


import { Swipe, SwipeItem,Popup,Tab,Tabs,Loading ,Icon ,PullRefresh ,ImagePreview,List,Collapse,CollapseItem } from 'vant';
 
import VueMeta from 'vue-meta'
import VueLazyload from 'vue-lazyload'
// import firebase from "firebase";
import  VueJsonp  from  'vue-jsonp' 
Vue.use(VueJsonp)
Vue.use(VueMeta)
Vue.use(Popup,VueAxios, axios);
Vue.use(VueLazyload)
Vue.use(Swipe).use(SwipeItem).use(Tab).use(Tabs).use(Loading).use(Icon).use(PullRefresh).use(ImagePreview).use(List).use(Collapse).use(CollapseItem);
 

// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3, 
  loading: '../static/img/close.png',
  attempt: 1
})
// router.beforeEach((to, from, next) => {
//   /* 路由发生变化修改页面title */
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   next()
// })
Vue.prototype.$axios = axios
// axios.defaults.baseURL = 'http://192.168.1.123:26228/happlay'//本地器地址 
axios.defaults.baseURL = 'https://51happlay.com/new/happlay'//服务器地址
// axios.defaults.baseURL = "http://192.168.1.37:8080/happlay"  // 37服务器
Vue.config.productionTip = false



 

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
