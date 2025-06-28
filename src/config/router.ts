import Index from '../pages/Index.vue';
import Team from "../pages/Team.vue";
import User from "../pages/User.vue";

const routes = [
    {path: '/', component: Index},
    {path: '/team', component: Team},
    {path: '/user', component: User}
]

/* 把 routes 这个变量作为默认导出项“丢出去”，供其他模块引入使用。 */
export default routes;