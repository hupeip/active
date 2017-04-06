import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from './router';
import publicJS from '../../static/lib/public';

// 声明使用vue-router
Vue.use(VueRouter);

// 创建路由
const router = new VueRouter({
	routes
});

// 这里是适应手机屏幕的,调用这个方法，尺寸就可以按照设计稿来  0.1rem = 10px
publicJS.selfAdaptive();

// 开始应用
/* eslint-disable no-new */
new Vue({
	router,
    template: '<App/>',
    components: { App }
}).$mount('#app');
