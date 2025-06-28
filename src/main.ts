/* 前端项目入口 */

/*
import { createApp } from 'vue'        // 从vue库导入createApp方法，用于创建Vue应用实例
import './style.css'                   // 导入全局样式文件
import App from './App.vue'            // 导入根组件App
import {Button, NavBar} from 'vant';           // 从vant UI库导入Button组件

// 导入 Vant 的全部样式
import 'vant/lib/index.css';

const app = createApp(App);            // 创建Vue应用实例，以App组件作为根组件
app.use(Button);
app.use(NavBar)// 注册vant的Button组件为全局组件
app.mount('#app')                      // 将Vue应用挂载到HTML中id为"app"的DOM元素上
*/


import { createApp } from 'vue'
import App from './App.vue'
import  {Icon,Button, NavBar,Tabbar,TabbarItem,Toast} from "vant";

// @ts-ignore
import * as VueRouter from 'vue-router';
import routes from "./config/router";
import 'vant/lib/index.css';


const app = createApp(App);
app.use(Button);
app.use(NavBar);
app.use(Icon);
app.use(Tabbar);
app.use(TabbarItem);
app.use(Toast);


/* 这行代码调用 VueRouter 库中的 createRouter 方法创建一个路由实例 */
const router = VueRouter.createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

/* 这行代码调用 Vue 应用实例 app 的 use 方法，
将路由实例 router 作为插件安装到 Vue 应用中。安装后，
整个 Vue 应用就可以使用路由功能，包括路由跳转、路由守卫等。 */
app.use(router)

app.mount('#app')