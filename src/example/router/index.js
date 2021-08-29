"use strict";

import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../components/home.vue";
import Stores from "../components/stores.vue";
import User from "../components/user.vue";
import Users from "../components/users.vue";
import Computed from "../components/computed.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/stores",
    name: "Stores",
    component: Stores,
  },
  {
    path: "/user/:id",
    name: "User",
    component: User,
    props: function (route) {
      return {
        id: parseInt(route.params.id)
      };
    }
  },
  {
    path: "/users",
    name: "Users",
    component: Users,
  },
  {
    path: "/computed",
    name: "Computed",
    component: Computed,
    props: function (route) {
      return {
        query: route.query.q,
        message: "derp"
      };
    }
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});



export default router;