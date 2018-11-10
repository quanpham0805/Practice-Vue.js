import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';
import VueRouter from 'vue-router';
import Home from './Home.vue';

Vue.use(BootstrapVue);
Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
		{path: '', component: Home}
	],
	mode: 'history'
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
