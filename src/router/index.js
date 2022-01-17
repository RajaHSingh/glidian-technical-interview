import Vue from "vue";
import VueRouter from "vue-router";
import UserList from "../views/UserList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "UserList",
    component: UserList,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
