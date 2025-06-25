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

/* 下面这个是样式，不导入，vant组件就都没有样式 */
import 'vant/lib/index.css';
/* 全部引用了 */
// 不再需要从 'vant' 导入组件，也不需要 app.use()
// 不再需要 import 'vant/lib/index.css';

const app = createApp(App);
app.mount('#app');
