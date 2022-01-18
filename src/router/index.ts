import { createRouter, createWebHistory } from "vue-router";

import SplashPage from '@/views/SplashPage.vue'

// Routes other than the home splash page are lazy loaded
const routes = [
    {
        path: '/', component: SplashPage,
    },
    {
        path: '/swe', component: () => import('@/views/WorkPage.vue'),
    },
    {
        path: '/interests', component: () => import('@/views/InterestsPage.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router