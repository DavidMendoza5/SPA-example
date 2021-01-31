import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import { routes } from './routes'

// Creamos un enrutador
Vue.use(VueRouter)
Vue.use(VueResource)

Vue.config.productionTip = false

const enrutador = new VueRouter({
  routes: routes,
  // Srive para quitar el # de la url, si se va a correr en producción, se deben cambiar las configuraciones del servidor, en la página de Vue están
  mode: 'history'
})


new Vue({
  // Indicamos quién es el enrutador
  router: enrutador,
  render: h => h(App),
}).$mount('#app')
