import Vue from "vue";
import VueRouter from "vue-router";
import login from "@/layout/login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "app",
    component: () => import("@/layout/basicLayout"),
    children: [
      {
        path: "/",
        redirect: "home",
      },
      {
        path: "home",
        component: () => import("@/views/home"),
        children: [
          {
            path: "/",
            redirect: "company",
          },
          {
            path: "company",
            component: () => import("@/views/home/company"),
            meta: {
              title: "用户",
            },
          },
          {
            path: "story",
            component: () => import("@/views/home/Story"),
          },
        ],
      },
      {
        path: "about",
        component: () => import("@/views/about"),
        meta: {
          title: "关于",
        },
      },
      {
        path: "life",
        component: () => import("@/views/Life"),
        meta: {
          title: "时间线",
        },
      },
      {
        path: "echart",
        component: () => import("@/views/echart"),
        meta: {
          title: "笔记",
        },
      },
      {
        path: "book",
        component: () => import("@/views/book"),
        meta: {
          title: "笔记",
        },
      },
    ],
  },
  {
    path: "/login",
    component: login,
    name: "login",
    children: [
      {
        path: "/",
        component: login,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  console.log("beforeEach", to);
  document.title = to.meta.title;
  next();
});
router.afterEach((to, from) => {
  document.title = to.meta.title;
  console.log("afterEach", from);
  console.log(111);
});
export default router;
