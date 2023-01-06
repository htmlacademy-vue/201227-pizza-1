import Vue from "vue";
import Router from "vue-router";
import routes from "@/router/routes";

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  next();
});

export default router;
