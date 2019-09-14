import Vue from 'vue'
import App from './App.vue'

export const bus = new Vue();


// this registers the Ninjas component globally 
// import Ninjas from './Ninjas.vue'

// creates a component based on the Ninja vue component (name, object)
// Vue.component('ninjas', Ninjas);

new Vue({
  el: '#app',
  render: h => h(App)
})
