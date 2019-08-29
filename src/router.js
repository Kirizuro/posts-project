import Vue from "vue";
import Router from "vue-router";

import PostsRoutes from "./features/posts/routes";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [...PostsRoutes]
});
