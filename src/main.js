import Vue from 'vue'
import App from './App.vue'
import Storage from 'vue-web-storage';

Vue.config.productionTip = false
Vue.use(Storage, {
  prefix: 'monticello_',
  drivers: ['local'],
}); 

new Vue({
  render: function (h) { return h(App) },
}).$mount('#home')
