/* eslint-disable */
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/fancy-borders.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faTelegram, faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faGithub, faYoutube, faTelegram, faWhatsapp);

const app = createApp(App);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
