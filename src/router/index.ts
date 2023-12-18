import { createRouter, createWebHashHistory } from 'vue-router';

import NotFound from '@/views/ViewNotFound.vue';
import LayoutHome from '@/layouts/LayoutHome.vue';


const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL), // Способ сохранения истории переходов по маршрутам
    routes: [
        // Определяем маршруты
        {
            path: '/', // путь маршрута
            name: 'layoutHome',
            component: LayoutHome, // Каждый маршрут должен сопоставляться с компонентом.
            children: [
                {
                    path: '',
                    name: 'content',
                    component: () => import('../views/ViewHome.vue')
                },
                {
                    path: '/video/:id',
                    name: 'video',
                    component: () => import('../views/ViewVideo.vue')
                },
                {
                    path: '/community',
                    name: 'community',
                    component: () => import('@/views/ViewCommunity.vue')
                },
                {
                    path: '/channel',
                    name: 'channel',
                    component: () => import('../views/ViewChannel.vue')
                },
                {
                    path: '/settings',
                    name: 'settings',
                    component: () => import('../views/ViewSettings.vue')
                },
                {
                    path: '/marketplace',
                    name: 'marketplace',
                    component: () => import('../layouts/LayoutMarketplace.vue'),
                    children: [
                        {
                            path: 'rankings',
                            name: 'rankings',
                            component: () => import('@/views/ViewRankings.vue')
                        }
                    ]
                },
                {
                    path: '/:pathMatch(.*)*',
                    name: 'noteFound',
                    component: NotFound,
                }
            ]
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/ViewLogin.vue')
        }
    ],
});

router.beforeEach((to, from) => {
    const isAuthenticated = true //  localStorage.getItem('user') || localStorage.getItem('metaMaskAccount') 
    if (to.name !== 'login' && !isAuthenticated) {
        return { name : 'login'} // Не авторизован
    } 
    return true // Авторизован
})

export default router;
