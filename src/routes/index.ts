import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory();

const LoginPage = () => import("@/views/pages/LoginPage.vue")
const RegisterPage = () => import("@/views/pages/RegisterPage.vue")

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/auth/login",
      component: LoginPage,
      name: 'auth.login'
    },
    {
      path: "/auth/registration",
      component: RegisterPage,
      name: 'auth.registration'
    },
  ],
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
