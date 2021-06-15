import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue';
import './plugins/bootstrap-vue'
import App from './App.vue';
import VueRouter from 'vue-router'
import routes from './routers';
import VCalendar from 'v-calendar';


// Use v-calendar

Vue.config.productionTip = false;
Vue.use(VueRouter)
Vue.use(VCalendar)
const router = new VueRouter({
  routes
})
new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
}).$mount('#app');
