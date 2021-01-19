import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
  
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', 
      component: resolve => require(['@/pages/index'],resolve),
      meta:{
        title:"Happlay--News、Games、Videos、Science", 
        keepAlive: true,
      },   
    },
    
    {
      path: '/type',
      name: 'type',
      component: resolve => require(['@/pages/details'],resolve), 
      meta:{ 
        keepAlive: false,
      },
    },
    {
      path: '/spain',
      name: 'spain',
      component: resolve => require(['@/pages/spain'],resolve), 
      meta:{ 
        keepAlive: false,
      },
    }, 
    {
      path: '/aboutus',
      name: 'aboutus',
      component: resolve => require(['@/pages/aboutus'],resolve),
      meta:{ 
        keepAlive: false,
      },
      
    },
    {
      path: '/privacyPolicy',
      name: 'privacyPolicy',
      component: resolve => require(['@/pages/privacyPolicy'],resolve),
      meta:{ 
        keepAlive: false,
      },
      
    },
    {
      path: '/termofuse',
      name: 'termOfUse',
      component: resolve => require(['@/pages/termOfUse'],resolve),
      meta:{ 
        keepAlive: false,
      },
    }, 
    {
      path: '/enList',
      name: 'enList',
      component: resolve => require(['@/pages/enList'],resolve),
      meta:{ 
        keepAlive: false,
      },
    }, 
    {
      path: '/esList',
      name: 'esList',
      component: resolve => require(['@/pages/spainList'],resolve),
      meta:{ 
        keepAlive: false,
      },
    }, 
  ]
})
