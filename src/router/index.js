import { createRouter, createWebHistory } from "vue-router";
import LayoutComponent from "../Layout/LayoutComponent.vue";

const routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "",
        name: "home",
        redirect: { name: "CharacteristicView" },
      },
      {
        path: "/about",
        name: "AboutView",
        component: () => import("../views/AboutView.vue"),
      },
      {
        path: "/pictures",
        name: "PictureView",
        component: () => import("../views/PictureView.vue"),
      },
      {
        path: "/characteristic",
        name: "CharacteristicView",
        component: () => import("../views/CharacteristicView.vue"),
      },
      {
        path: "/danger",
        name: "DangerView",
        component: () => import("../views/DangerView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
