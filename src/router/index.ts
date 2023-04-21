import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    name: "admin",
    path: "/",
    component: () => import("../pages/admin.vue"),
  },
  {
    name: "photo",
    path: "/photos",
    component: () => import("../pages/photo/index.vue"),
  },
  {
    name: "photo-id",
    path: "/photos/:id",
    component: () => import("../pages/photo/id.vue"),
  },
  {
    name: "todos",
    path: "/todos",
    component: () => import("../pages/todo/index.vue"),
  },
  {
    name: "todos-id",
    path: "/todos/:id",
    component: () => import("../pages/todo/id.vue"),
  },
  {
    name: "posts",
    path: "/posts",
    component: () => import("../pages/post/index.vue"),
  },
  {
    name: "post-id",
    path: "/posts/:id",
    component: () => import("../pages/post/id.vue"),
  },
  {
    name: "comments",
    path: "/comments",
    component: () => import("../pages/comment/index.vue"),
  },
  {
    name: "comment-id",
    path: "/comments/:id",
    component: () => import("../pages/comment/id.vue"),
  },
  {
    name: "user",
    path: "/users",
    component: () => import("../pages/user/index.vue"),
  },
  {
    name: "user-id",
    path: "/users/:id",
    component: () => import("../pages/user/id.vue"),
  },
  {
    name: "album",
    path: "/albums",
    component: () => import("../pages/album/index.vue"),
  },
  {
    name: "album-id",
    path: "/albums/:id",
    component: () => import("../pages/album/id.vue"),
  },
  {
    name: "register",
    path: "/login/register",
    component: () => import("../pages/login/register.vue"),
    meta: {
      layout: "login",
    },
  },
];
const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
});

export default router;
