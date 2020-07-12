//这个是全局文件

//import mock from '../mock/mock.js'

import $ from 'jquery';
import Vue from 'vue';


import './styles/common.scss';      //CSS
import './styles/fonts/iconfont.css'; //字体
import router from './router';      //路由


import store from './store/store';


//resource拦截器
import './axios/';
import Axios from 'axios';
Vue.prototype.$http = Axios


//引入需要渲染的视图组件
import App from './App';

//创建全局实例
new Vue({
    el:'#app',
    router,
    store,
    template:'<App/>',
    components:{App}
})


