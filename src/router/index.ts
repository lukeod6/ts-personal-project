import { createWebHistory, createRouter } from "vue-router";
import SalesStats from "@/Views/SalesStats.vue";
import Home from "@/Views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/SalesStats",
    name: "SalesStats",
    component: SalesStats,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
