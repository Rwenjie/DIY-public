import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import store from './store/store'
import './plugins/iview.js'
import './plugins/element.js'
import './plugins/quill'
import vuetify from './plugins/vuetify'
import MyComponent from "./components/common/MyComponent";

Vue.config.productionTip = false

Vue.use(MyComponent)
new Vue({
 router,
 store,
 vuetify,
 render: h => h(App)
}).$mount('#app')
