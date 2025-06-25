<template>
    <van-nav-bar
        title="标题"
        right-text="按钮"
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
<!--    定义了一个中间的插槽可以放东西  -->
    <slot>
        <div>在这里写东西</div>
    </slot>

    <van-tabbar v-model="active" @change="onChange">
        <van-tabbar-item icon="home-o" name="index">主页</van-tabbar-item>
        <van-tabbar-item icon="search" name="team">队伍页</van-tabbar-item>
        <van-tabbar-item icon="setting-o" name="user">个人</van-tabbar-item>
    </van-tabbar>

</template>


<script setup lang="ts">
import {ref} from 'vue';
import { showToast } from "vant";// 引入 showToast 方法

const onClickLeft = () => alert('返回');
const onClickRight = () => alert('按钮');

/* active表示当前是哪个底边栏高亮 */
// 默认值应该是index，因为第一个是主页
const active = ref("index");
//const onChange = (index: string | number) => showToast(`标签 ${index}`);
//const onChange1 = (index:string |number) => Toast(`标签 ${index}`);
const onChange = (index: string) => showToast(`标签 ${index}`);
</script>


<style scoped>

</style>