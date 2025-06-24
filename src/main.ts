/* 前端项目入口 */

import { createApp } from 'vue'        // 从vue库导入createApp方法，用于创建Vue应用实例
import './style.css'                   // 导入全局样式文件
import App from './App.vue'            // 导入根组件App
import {Button} from 'vant';           // 从vant UI库导入Button组件

const app = createApp(App);            // 创建Vue应用实例，以App组件作为根组件
app.use(Button);                       // 注册vant的Button组件为全局组件
app.mount('#app')                      // 将Vue应用挂载到HTML中id为"app"的DOM元素上
