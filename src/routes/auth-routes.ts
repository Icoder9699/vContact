import LoginPage from '@/views/pages/auth/LoginPage.vue'
import RegisterPage from '@/views/pages/auth/RegisterPage.vue'

const authRoutes = [
   {
      path: "/auth/login",
      component: LoginPage,
   },
   {
      path: "/auth/registration",
      component: RegisterPage,
   },
]

export default authRoutes