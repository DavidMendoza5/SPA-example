import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

// Creamos un enrutador
Vue.use(VueRouter)

Vue.config.productionTip = false

const enrutador = new VueRouter({
  routes: routes
})


new Vue({
  // Indicamos quién es el enrutador
  router: enrutador,
  render: h => h(App),
}).$mount('#app')
