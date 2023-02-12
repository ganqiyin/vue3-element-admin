import { createApp } from "vue";
import ElementUI from "./plugins/elementui";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App).use(ElementUI).use(store).use(router).mount("#app");
