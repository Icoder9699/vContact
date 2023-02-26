import { createApp } from "vue";
import Maska from "maska";
import Toast from "vue-toastification";

import App from "@/App.vue";
import router from "@/routes";
import pinia from "@/plugins/pinia";

import "vue-toastification/dist/index.css";
import "@/assets/styles/main.scss";

const app = createApp(App);

app.use(Maska);
app.use(pinia);
app.use(router);
app.use(Toast);
app.mount("#app");
