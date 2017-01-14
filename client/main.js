import Vue from 'vue';
import App from '/imports/ui/App.vue';

Meteor.startup(() => {
  // Main app
  console.log("App > ", App);
  new Vue({
    render: h => h(App)
  }).$mount('app');
});