import Vue from "vue";
import VueRouter from "vue-router";
import HelloWorld from "../views/HelloWorld.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HelloWorld
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: "/type-product",
    name: "type-product",
    component: () => import("../views/TypeProduct.vue")
  },
  {
    path: "/providers",
    name: "providers",
    component: () => import("../views/Providers.vue")
  },
  {
    path: "/create-product",
    name: "create-product",
    component: () => import("../views/CreateProduct.vue")
  },
  {
    path: "/edit-delete-product",
    name: "handle-product",
    component: () => import("../views/EditDeleteProduct.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
