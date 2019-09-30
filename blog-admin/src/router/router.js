import Home from '../views/home/Home';
import BasicLayout from '../components/layout/BasicLayout'
export default [
    {
        path: '/',
        name:"首页",
        key:'home',
        icon:"home",
        component: Home,
    },
    {
        path:'/user',
        name:"用户管理",
        key:'user',
        icon:"user",
        component:Home
    },
    {
        path:'/article',
        name:"文章管理",
        key:'article',
        icon:"file-text",
        component:Home
    },
    {
        path:'/setting',
        name:"设置中心",
        key:'setting',
        icon:"setting",
        component:Home
    },
]