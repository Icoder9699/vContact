import { createApp } from 'vue'
import App from './App.vue'

import "@/assets/styles/main.scss"
import router from './routes'

const app = createApp(App)

app.use(router)

app.mount('#app')
