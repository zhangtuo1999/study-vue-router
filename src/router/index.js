import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/user/:id',
        name: 'user',
        component: () => import('../views/UserView.vue')
    },
    {
        path: '/user-*',
        name: 'userInfo',
        component: () => import('../views/UserInfo')
    },
    {
        path: '*',
        name: '404',
        component: () => import('../views/404')
    }
]

const router = new VueRouter({
    routes
})

export default router
