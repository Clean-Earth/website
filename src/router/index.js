/* eslint-disable */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/learn",
    name: "Learn",
    component: () => import(/* webpackChunkName: "about" */ "../views/Learn.vue")
  },
  {
    path: "/donate",
    name: "Donate",
    component: () => import(/* webpackChunkName: "about" */ "../views/Donate.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
