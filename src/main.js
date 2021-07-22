import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './routes';
import './directives/Transform';
// import 'bootstrap/dist/css/bootstrap.css';
// import './assets/css/teste.css';

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);

// No ECMAScript 6, quando propriedade e valor tem mesmo nome, pode deixar só um (routes)
const router = new VueRouter({ routes })

new Vue({
  el: '#app',
  router,
  // mode: 'history',
  render: h => h(App)

  // Mesma coisa que isso abaixo, mas com ES5
  // render: function(h) {
  //   h(App);
// }

})
