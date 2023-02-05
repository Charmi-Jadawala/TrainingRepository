import { createRouter, createWebHashHistory } from "vue-router";
import AdminView from "../views/AdminView.vue";
import UserView from "../views/UserView.vue";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/Admin",
    name: "Admin",
    component: AdminView,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("user") == "admin") {
        next();
      } else {
        next({
          name: "Login",
        });
      }
    },
  },
  {
    path: "/User",
    name: "User",
    component: UserView,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("user") == "user") {
        next();
      } else {
        next({
          name: "Login",
        });
      }
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
