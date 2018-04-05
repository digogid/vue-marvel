import Vue from 'vue'
import Router from 'vue-router'

import CharList from '../components/CharList.vue'
import CharInfo from '../components/CharInfo.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: CharList
    },
    { 
      path: '/char/:id', 
      component: CharInfo 
    }
  ]
})
