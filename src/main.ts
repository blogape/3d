import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import 'photo-sphere-viewer/dist/photo-sphere-viewer.css';
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
