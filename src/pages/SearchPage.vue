<template>
    <form action="/">
        <van-search
            v-model="searchText"
            show-action
            placeholder="请输入搜索标签"
            @search="onSearch"
            @cancel="onCancel"
        />
    </form>

<!--  van-divider 是 Vant 组件库提供的分割线组件  -->
    <van-divider content-position="left">已选标签</van-divider>

<!--  简单判断activeIds变量没有数据是  显示  -->
    <div v-if="activeIds.length === 0">请选择标签</div>

<!--  <van-row> 组件：Vant 提供的行布局组件，用于水平排列子元素。  -->
    <van-row gutter="16" style="padding: 0 16px">
<!--    循环打印activeIds里面的元素    -->
        <van-col v-for="tag in activeIds">
<!--     close 是 van-tag 组件（Vant 组件库中的标签组件）触发的一个自定义事件。当标签可关闭（即设置了 closeable 属性），并且用户点击关闭按钮时，van-tag 组件会触发 close 事件。
doclose(tag) 是事件触发时要调用的方法。doclose 是在 <script setup> 中定义的一个函数，tag 是传递给该函数的参数。       -->
            <van-tag closeable size="small" type="primary" @close="doclose(tag)">
                {{ tag }}
            </van-tag>
        </van-col>
    </van-row>


    <van-divider content-position="left">已选标签</van-divider>

    <!--    下面这个  tagList  是标签列表    -->
    <van-tree-select
        v-model:active-id="activeIds"
        v-model:main-active-index="activeIndex"
        :items="tagList"
    />
</template>

<script setup lang="ts">
import {ref} from 'vue';

const searchText = ref('');

const originTagList = [{
    text: '性别',
    children: [
        {text: '男', id: '男'},
        {text: '女', id: '女'},
        {text: '嬲', id: '嬲'},
    ],
}, {
    text: '年级',
    children: [
        {text: '大一', id: '大一'},
        {text: '大二', id: '大二'},
        {text: '大三', id: '大三'},
        {text: '大四', id: '大四'},
        {text: '大五', id: '大五'},
        {text: '大六', id: '大六'},
        {text: '研一', id: '研一'},
    ],
},
];
//标签列表
let tagList = ref(originTagList);

/**
 *  搜索过滤
 * @param val
 */
const onSearch = (val) => {
    // 使用 map 方法遍历 originTagList 数组中的每个父标签对象
    tagList.value = originTagList.map(parentTag => {
        // 复制当前父标签对象的子标签数组，使用扩展运算符实现浅拷贝
        /* 扩展运算符 ... 可以将一个可迭代对象（如数组、字符串等）展开为一个个独立的元素。在 [...parentTag.children] 里，
        parentTag.children 是一个数组，...parentTag.children 会把这个数组的所有元素展开，然后外层的 [] 会将这些展开的
        元素重新组合成一个新数组。 */
        const tempChildren = [...parentTag.children];
        // 复制当前父标签对象，使用扩展运算符实现浅拷贝
        const tempParentTag = {...parentTag};
        // 对复制后的子标签数组进行过滤
        /* filter 是 JavaScript 数组对象的一个内置方法，用于创建一个新数组，新数组中的元素是原数组中满足指定条件的所有元素 */
        tempParentTag.children = tempChildren.filter(item => {
            // 只保留子标签文本包含搜索关键词的子标签
            /* item 是 tempChildren 数组里的每个元素 */
            /* item.text 则是该子标签对象的 text 属性 */
            /* 用于判断一个字符串是否包含另一个字符串。 */
            /* searchText.value 存储的是用户在搜索框中输入的关键词。 */
            return item.text.includes(searchText.value)
        })
        // 返回过滤后的父标签对象
        return tempParentTag;
    })
};

//取消  清空
const onCancel = () => {
    searchText.value = '';
    tagList.value = originTagList;
};


//已选中的标签
const activeIds = ref([]);
const activeIndex = ref(0);


//关闭标签
/* filter 是 JavaScript 数组的一个方法，它会创建一个新数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。 */
const doclose = (tag) => {
    activeIds.value = activeIds.value.filter(item => {
        /*  item 是 activeIds.value 数组中的每个元素。
        item !== tag 是过滤条件，即只保留那些不等于 tag 的元素。*/
        return item !== tag;
    })
}

</script>

<style scoped>

</style>