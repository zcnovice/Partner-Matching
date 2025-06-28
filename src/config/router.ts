import Index from '../pages/Index.vue';
import TeamPage from "../pages/TeamPage.vue";
import UserPage from "../pages/UserPage.vue";
import Search from "../pages/SearchPage.vue";
import UserEdit from "../pages/UserEditPage.vue";

const routes = [
    {path: '/', component: Index},
    {path: '/team', component: TeamPage},
    {path: '/user', component: UserPage},
    {path: '/search', component: Search},
    {path: '/user/edit', component: UserEdit},
]

/* 把 routes 这个变量作为默认导出项“丢出去”，供其他模块引入使用。 */
export default routes;