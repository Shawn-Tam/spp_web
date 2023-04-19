import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(VueCodemirror, { 
  options: { theme: 'base16-dark'},
  events: ['scroll']
}).use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

