import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from './router';
// import publicJS from '../../static/lib/public';
import '../assets/css/style.less';

// 声明使用vue-router
Vue.use(VueRouter);

// 创建路由
const router = new VueRouter({
	routes
});

window.onload = function() {
	// publicJS.setCNLang();
};

// 开始应用
/* eslint-disable no-new */
new Vue({
	router,
    template: '<App/>',
    components: { App }
}).$mount('#app');
