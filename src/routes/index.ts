import { useAuthStore } from "@/store/useAuthStore";
import { createRouter, createWebHistory } from "vue-router";

const routerHistory = createWebHistory();

import authRoutes from "./auth-routes";
import contactsRoutes from "./contacts-routes";

const router = createRouter({
  history: routerHistory,
  routes: [
    ...authRoutes,
    ...contactsRoutes,
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (to.path == '/') {
    next('/contacts')
  }

  if (!authStore.token && to.path == '/') {
    next('/auth/login')
  } else {
    next()
  }

});

export default router;
