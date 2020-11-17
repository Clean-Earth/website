/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/fancy-borders.css";

createApp(App)
  .use(router)
  .mount("#app");
