<template>
    <van-form @submit="onSubmit">
        <van-field
            v-model="editUser.currentValue"
            :name="editUser.editKey"
            :label="editUser.editName"
            :placeholder="`请输入${editUser.editName}`"
        />
        <div style="margin: 16px;">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import myAxios  from "../plugins/myAxios";
import { showToast } from "vant";// 引入 showToast 方法

const route = useRoute();
const editUser = ref({
    editKey: route.query.editKey as string,
    currentValue: route.query.currentValue as string,
    editName: route.query.editName as string,
});

const onSubmit = async () => {
     /* 用户编辑自己的详细资料(管理员可以编辑全部人的) */
    const res = await  myAxios.post('/user/update', {
        'id':1,
        [editUser.value.editKey]: editUser.value.currentValue,
    })
    console.log(res,"更新请求");
    if(res.code === 0 && res.data>0){
        showToast({
            message: '修改成功',
            type: 'success',
        });
    }else{
        showToast({
            message:'修改失败',
            type:'fail'
        })
    }

};
</script>

<style scoped>
</style>