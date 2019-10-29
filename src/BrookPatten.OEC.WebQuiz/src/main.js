// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'core-js/es6/promise'
import 'core-js/es6/string'
import 'core-js/es7/array'
// import cssVars from 'css-vars-ponyfill'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import router from './router'

import Axios from 'axios'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

import Es6Promise from 'es6-promise'
Es6Promise.polyfill()

// todo
// cssVars()

Vue.use(BootstrapVue)
Vue.use(VueLodash, lodash)

if (process.env.NODE_ENV === 'production') {
  Axios.defaults.baseURL = '.'
} else {
  Axios.defaults.baseURL = ''
}

// debated adding axios at $http, but that could be confusing if another
// developer then interpretted that to mean they were using vue-resource
// this is slightly odd to look at but at least the developer knows what lib is being used
Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
