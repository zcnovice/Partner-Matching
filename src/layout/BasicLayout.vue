<template>
    <van-nav-bar
        title="标题"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
    >
        <!--        自定义的插槽-->
        <!--        可以放到对应位置-->
        <template #right>
            <van-icon name="search" size="18"/>
        </template>

    </van-nav-bar>


<!--  vue-router 提供的动态组件，它充当一个占位符，用于显示当前路由所匹配的组件  -->
    <div id="content">
        <router-view></router-view>
    </div>

    <van-tabbar route @change="onChange">
        <van-tabbar-item to="/" icon="home-o" name="index">主页</van-tabbar-item>
        <van-tabbar-item to="/team" icon="search" name="team">队伍页</van-tabbar-item>
        <van-tabbar-item to="/user" icon="setting-o" name="user">个人</van-tabbar-item>
    </van-tabbar>

</template>


<script setup lang="ts">
// import {ref} from 'vue';
import { showToast } from "vant";// 引入 showToast 方法
import { useRouter } from "vue-router";// 引入 useRoute 方法

/* useRouter 用于获取当前应用的路由实例。借助这个实例，你能进行编程式的路由跳转、添加路由守卫等操作。 */
const route = useRouter();

const onClickLeft = () => {
    /* 导航到浏览器历史记录中的上一个页面 */
    route.back();
}
const onClickRight = () => {
    route.push('/search');
};

/* active表示当前是哪个底边栏高亮 */
// 默认值应该是index，因为第一个是主页
// const active = ref("index");
//const onChange = (index: string | number) => showToast(`标签 ${index}`);
//const onChange1 = (index:string |number) => Toast(`标签 ${index}`);
const onChange = (index: string) => showToast(`标签 ${index}`);
</script>


<style scoped>

</style>