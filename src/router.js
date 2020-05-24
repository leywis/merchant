import Vue from "vue";
import Router from "vue-router";
import Home from "./pages/home";
import Index from "./pages/index";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children: [
        {
          path: "/",
          name: "index",
          component: Index,
        },
        {
          path: "/index",
          name: "index",
          component: Index,
        },
        {
          path: "/index",
          name: "index",
          component: Index,
        },
      ],
    },
  ],
});
