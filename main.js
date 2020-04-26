import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

import VueRouter from "vue-router";
import routes from './routes'
import store from './store'

Vue.use(VueRouter)
const router = new VueRouter({
  routes
})

router.beforeEach(
  (to, from, next) => {
    console.log('In beforeEach: ', to.params)
    if (!to.params.id) {
      next()
    }
    if (to.params.id == 1) {
      next()
    }
  }
)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')