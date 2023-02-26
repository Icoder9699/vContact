import { useAuthStore } from './../store/useAuthStore';
import { createRouter, createWebHistory } from "vue-router";
const routerHistory = createWebHistory();

const LoginPage = () => import("@/views/pages/LoginPage.vue")
const RegisterPage = () => import("@/views/pages/RegisterPage.vue")
const ContactsList = () => import('@/views/pages/ContactsList.vue')
const ContactsEdit = () => import('@/views/pages/ContactsEdit.vue')
const ContactsAdd = () => import('@/views/pages/ContactsAdd.vue')

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
    {
      path: "/",
      component: ContactsList,
      name: 'contacts'
    },
    {
      path: "/contacts/add",
      component: ContactsAdd,
      name: 'contacts.add'
    },
    {
      path: "/contacts/edit/:id",
      component: ContactsEdit,
      name: 'contacts.edit'
    },
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore()

  if (!authStore.token && to.path == '/') {
    next('/auth/login')
  } else {
    next()
  }

});

export default router;
