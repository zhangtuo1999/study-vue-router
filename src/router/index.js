import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserSettings from "@/views/Settings/UserSettings";

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
        component: () => import('../views/UserView.vue'),
        children: [
            {
                path: '',
                name: 'user',
                component: () => import('../views/UserHome.vue')
            },
            {
                path: 'profile',
                component: () => import('../views/UserProfile.vue'),
            },
            {
                path: 'posts',
                component: () => import('../views/UserPosts.vue'),
            }
        ]
    },
    {
        path: '/user-*',
        name: 'userInfo',
        component: () => import('../views/UserInfo.vue'),
    },
    {
        path: '/school/:schoolName',
        name: 'school',
        component: () => import('../views/School.vue'),
    },
    {
        path: '/settings',
        name: 'settings',
        component: UserSettings,
        children: [
            {
                path: 'email',
                name: 'email',
                component: () => import('../views/Settings/UserEmailSubscriptions')
            },
            {
                path: 'profile',
                name: 'profile',
                components: {
                    default: () => import('../views/Settings/UserProfile'),
                    helper: () => import('../views/Settings/UserProfilePreview')
                }
            }
        ]

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
