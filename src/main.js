import Vue from 'vue'
import store from './store/store'
import App from './App.vue'


import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

import VTooltip from 'v-tooltip'
Vue.use(VTooltip)




Vue.config.productionTip = false

new Vue({
    store,
    render: h => h(App),
}).$mount('#app')
