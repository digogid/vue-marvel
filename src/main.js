/*
  Arquivo principal do vue. Nele importamos a biblioteca vue
  e todas as demais que serão utilizadas por toda a aplicação.

  router é utilizado criar as rotas (SPA)

  VueResource é a biblioteca utilizada para criar requisições http (ajax)

  bus é um component utilizado para trafegar informações através dos 
  components sem a necessidade de passar pelo component pai
*/



import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

Vue.use(VueResource);
Vue.use(router);

export const bus = new Vue();

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
