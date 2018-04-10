/*
  arquivo responsável por criar as rotas
*/

import Vue from 'vue'
import Router from 'vue-router'

import CharList from '../components/chars/CharList.vue'
import CharInfo from '../components/chars/CharInfo.vue'
import EventList from '../components/events/EventList.vue'
import EventInfo from '../components/events/EventInfo.vue'

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
    },
    {
      path: '/events',
      component: EventList
    },
    { 
      path: '/event/:id', 
      component: EventInfo 
    }
  ]
})
