import App from './App.vue'
import "vue-toastification/dist/index.css";
import "@/assets/styles/main.scss"

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './routes'
import Toast from "vue-toastification";

const app = createApp(App)
const pinia= createPinia()

app.use(pinia)
app.use(router)
app.use(Toast);
app.mount('#app')
