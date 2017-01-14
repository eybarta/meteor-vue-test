import Vue from 'vue';
import VueRouter from 'vue-router';
// import Vuex from 'vuex'

// import {VuexStore} from '/imports/vuex';
import {routes} from '/imports/routes/'
// pages

// Vue.config.devtools = true;
// Vue.config.debug = true;
// Vue.use(VueRouter);
// Vue.use(Vuex)

// const store = new Vuex.Store(VuexStore)
const router =  new VueRouter({
  mode: 'history',
  routes
})

Meteor.startup(() => {
  // Main app
  import App from '/imports/ui/App.vue';
  console.log("App > ", App);
  new Vue({
    // router,
    // store,
    render: h => h(App)
  }).$mount('app');
});