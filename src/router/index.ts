import { createRouter, createWebHistory } from "vue-router";
import SplashPage from '@/views/SplashPage.vue';
import WorkPage from '@/views/WorkPage.vue';

// Routes other than the home splash page are lazy loaded
const routes = [
    { path: '/', component: SplashPage },
    { path: '/me', component: () => import('@/views/AboutMe.vue') },
    { path: '/work', component: WorkPage },
    { path: '/interests', component: () => import('@/views/InterestsPage.vue') },
    { path: '/resume', redirect: (_: any) => { window.location.replace('/resume.pdf'); return '' } 
    },
    {
        // Catch all for undefined URLs
        path: '/:pathMatch(.*)*', component: () => import('@/views/404Page.vue'),
    },
];

// @ts-ignore <- ignore it
const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

export default router;