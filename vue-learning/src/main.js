import Vue from 'vue'
import App from './App.vue'
import warriors from './Doethe.vue'

Vue.component('doethe', warriors);

new Vue({
  el: '#app',
  render: h => h(App)
});
