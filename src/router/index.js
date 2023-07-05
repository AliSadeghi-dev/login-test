import { createRouter, createWebHashHistory } from 'vue-router'
import LoginView from '../views/login/LoginView.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: LoginView,
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import("../views/user/UserView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
