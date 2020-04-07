// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'    //导入创建的路由对象
import axios from 'axios'
import VueAxios from "vue-axios";   //该插件简单化axios的使用
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './assets/css/base.css'  //表示当前路径下的/assets/base.css   //main.js 的路径时.../src/
import './assets/css/index.css'
import './assets/css/v-input.css'
import './assets/css/v-container.css'
import './assets/css/confsys.css'

Vue.use(VueAxios,axios);
Vue.use(ViewUI);


//提示开关
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
