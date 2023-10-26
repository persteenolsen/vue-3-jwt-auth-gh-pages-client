import { createRouter, createWebHistory } from 'vue-router';

import { useAuthStore } from '@/stores';
import { HomeView, AboutView, LoginView } from '@/views';

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    linkActiveClass: 'active',
    routes: [
        { path: '/', component: HomeView },
		{ path: '/about', component: AboutView },
        { path: '/login', component: LoginView }
    ]
});

router.beforeEach(async (to) => {
	
    // redirect to About page if not logged in and trying to access a restricted page
	// Defining the publics routes
    const publicPages = ['/login', '/about'];
    const authRequired = !publicPages.includes(to.path);
    const auth = useAuthStore();

    if (authRequired && !auth.user) {
        auth.returnUrl = to.fullPath;
        return '/login';
    }
});
