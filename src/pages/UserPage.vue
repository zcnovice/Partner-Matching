<template>
    <!-- van-cell 是 Vant 组件库提供的单元格组件，常用于展示列表信息，能展示文字、图标等内容，还可配置成链接样式，引导用户进行页面跳转 -->
    <div v-if="user">
        <van-cell title="昵称" is-link to="/user/edit" :value="user.username" @click="toEdit('username', '昵称', user.username)"/>
        <van-cell title="账号" :value="user.userAccount" />
        <van-cell title="头像" is-link to="/user/edit">
            <img style="height: 48px" :src="user.avatarUrl">
        </van-cell>
        <van-cell title="性别" is-link to="/user/edit" :value="user.gender" @click="toEdit('gender', '性别', user.gender)" />
        <van-cell title="电话" is-link to="/user/edit" :value="user.phone" @click="toEdit('phone', '电话', user.phone)"/>
        <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" @click="toEdit('email', '邮箱', user.email)"/>
        <van-cell title="星球编号" :value="user.planetCode" />
        <van-cell title="注册时间" :value="user.createTime?.toISOString()" />
    </div>
    <div v-else>
        <van-loading type="spinner" size="24px">加载中...</van-loading>
    </div>
</template>

<script setup lang="ts">
import {useRouter} from 'vue-router'
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {showToast} from "vant";

// const user = {
//     id: 9527,
//     username: 'shayu',
//     userAccount: '931',
//     avatarUrl: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/shayu/shayu.png',
//     gender: '男',
//     phone: '430821',
//     email: 'shayu-yusha@qq.com',
//     planetCode: '931',
//     createTime: new Date(),
// }

const user =ref();
const router = useRouter();

onMounted(async () =>{
    console.log('获取用户信息');
    const res = await myAxios.get('/user/current');
    if (res.code === 0){
        // 将 createTime 转换为 Date 对象
        if (res.data.createTime) {
            res.data.createTime = new Date(res.data.createTime);
        }
        user.value = res.data;
        showToast({
            message: '获取用户信息成功',
            type: 'success',
        })
    } else {
        showToast({
            message: '获取用户信息失败',
            type: 'fail',
        })
    }
})


/* 其主要功能是借助 vue-router 进行路由跳转，同时携带相关参数到目标页面 */
const toEdit = (editKey: string,editName:string,currentValue: string) => {
    console.log(editKey,editName,currentValue)
    router.push({
        /* 跳转位置 */
        path: '/user/edit',
        /* 传递的参数 */
        query: {
            editKey,
            editName,
            currentValue,
        }
    });
}
</script>

<style scoped>
</style>