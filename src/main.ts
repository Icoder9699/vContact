import { createApp } from 'vue'
import App from './App.vue'

import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import "@/assets/styles/main.scss"
import router from './routes'

const app = createApp(App)

app.use(router)

app.use(Toast);
app.mount('#app')
