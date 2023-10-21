import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import OrangeUi from "orange-ui-plus";
import "../node_modules/orange-ui-plus/orange-ui.css";
Vue.use(OrangeUi);

new Vue({
  render: h => h(App),
}).$mount('#app')
