import Vue from "vue";
import VueRouter from "vue-router";
import PassengerList from "../views/PassengerList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "PassengerList",
    component: PassengerList,
  },
  {
    path: "/about",
    name: "User",
    component: () => import("../views/About.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
