import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/post/:id",
      name: "post",
      component: () => import("../views/post/_id.vue"),
    },
    {
      path: "/authors",
      name: "authors",
      component: () => import("../views/Authors.vue"),
    },
    {
      path: "/author/:id",
      name: "author",
      component: () => import("../views/author/_id.vue"),
    },
  ],
});

router.afterEach((to, from) => {
  if (from.name) {
    document.documentElement.scrollTop = 0;
    store.dispatch("CloseMenu");
  }
});

export default router;
