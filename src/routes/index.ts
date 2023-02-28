import { useAuthStore } from "@/store/useAuthStore";
import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory();

const LoginPage = () => import("@/views/pages/LoginPage.vue")
const RegisterPage = () => import("@/views/pages/RegisterPage.vue")
const ContactsListPage = () => import('@/views/pages/ContactsListPage.vue')
const ContactsEditPage = () => import('@/views/pages/ContactsEditPage.vue')
const ContactsAddPage = () => import('@/views/pages/ContactsAddPage.vue')

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/auth/login",
      component: LoginPage,
    },
    {
      path: "/auth/registration",
      component: RegisterPage,
    },
    {
      path: "/contacts",
      component: ContactsListPage,
    },
    {
      path: "/contacts/add",
      component: ContactsAddPage,
    },
    {
      path: "/contacts/edit/:id",
      component: ContactsEditPage,
    },
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
