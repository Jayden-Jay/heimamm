// 导入Vue
import Vue from 'vue'

// 导入路由
import VueRouter from 'vue-router'

//导入组件
import Login from '@/views/login'
import Layout from '@/views/layout'

// 注册路由
Vue.use(VueRouter);

// 创建路由规则
let routes = [
    {
        path:'/login',
        component:Login
    },
    {
        path:'/layout',
        component:Layout
    },
    {
        path:'*',
        redirect: '/login'
    }
]

// 创建路由对象
let router = new VueRouter({
    routes
});

// 暴露出去
export default router;