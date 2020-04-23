import Vue from 'vue'
import App from './App'
import store from "./store"
import { vuePlugin } from 'castle-haozijunqaq-uni-utils'

Vue.config.productionTip = false;
Vue.use(vuePlugin);

Vue.prototype.$store = store;

App.mpType = 'app';

const app = new Vue({
  ...App
});
app.$mount();
