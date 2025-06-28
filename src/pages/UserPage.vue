<template>
<!-- van-cell 是 Vant 组件库提供的单元格组件，常用于展示列表信息，能展示文字、图标等内容，还可配置成链接样式，引导用户进行页面跳转 -->
    <van-cell title="昵称" is-link to="/user/edit" :value="user.username" />
    <van-cell title="账号" :value="user.userAccount" />
    <van-cell title="头像" is-link to="/user/edit">
        <img style="height: 48px" :src="user.avatarUrl">
    </van-cell>
    <van-cell title="性别" is-link to="/user/edit" :value="user.gender" />
    <van-cell title="电话" is-link to="/user/edit" :value="user.phone" />
    <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" />
    <van-cell title="星球编号" :value="user.planetCode" />
    <van-cell title="注册时间" :value="user.createTime.toISOString()" />
</template>

<script setup>
const user = {
    id: 9527,
    username: 'shayu',
    userAccount: '931',
    avatarUrl: 'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/shayu/shayu.png',
    gender: '男',
    phone: '430821',
    email: 'shayu-yusha@qq.com',
    planetCode: '931',
    createTime: new Date(),
}
</script>

<style scoped>
</style>