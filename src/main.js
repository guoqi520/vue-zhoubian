import Vue from 'vue'
import App from './App.vue'
//路由
import router from "@/router/index.js"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);



//axios请求
import axios from "axios"
Vue.prototype.axios = axios
Vue.config.productionTip = false

Vue.prototype.px2vw = function (px) {
  return 100 * px / 750 + 'vw'
}

// 引入vant组件
import 'vant/lib/index.css';
import { Tab, Tabs ,Swipe, SwipeItem,Lazyload,Icon,Collapse, CollapseItem ,Stepper,Overlay,CountDown} from 'vant';
Vue.use(CountDown);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Icon);
Vue.use(Lazyload);
Vue.use(Stepper);
Vue.use(Overlay);

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
