import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/styles/main.css";
import App from "./App.vue";

const pinia = createPinia();
App.use(pinia);

createApp(App).mount("#app");
