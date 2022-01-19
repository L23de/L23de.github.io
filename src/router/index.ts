import { createRouter, createWebHistory } from "vue-router";
import SplashPage from '@/views/SplashPage.vue';

// Routes other than the home splash page are lazy loaded
const routes = [
    {
        path: '/', component: SplashPage,
    },
    {
        path: '/me', component: () => import('@/views/AboutMe.vue')
    },
    {
        path: '/work', component: () => import('@/views/WorkPage.vue'),
    },
    {
        path: '/interests', component: () => import('@/views/InterestsPage.vue'),
    },
    {
        // Catch all for undefined URLs
        path: '/:pathMatch(.*)*', component: () => import('@/views/404Page.vue'),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;