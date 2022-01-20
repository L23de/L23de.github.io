import { createRouter, createWebHistory } from "vue-router";
import SplashPage from '@/views/SplashPage.vue';
import WorkPage from '@/views/WorkPage.vue';

// Routes other than the home splash page are lazy loaded
const routes = [
    { path: '/', component: SplashPage },
    { path: '/me', component: () => import('@/views/AboutMe.vue') },
    { path: '/work', redirect: '/work/1' },
    { path: '/work/:id', component: WorkPage },
    { path: '/interests', component: () => import('@/views/InterestsPage.vue') },
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