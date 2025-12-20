import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from "vue-router";

import Activity from "../components/Activity.vue";
import Home from "../components/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/activity",
    name: "Activity",
    component: Activity,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../components/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../components/Contact.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
