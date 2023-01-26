import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
    {
      path: "/",
      alias: "/tasks",
      name: "tasks",
      component: () => import("../components/TaskList.vue"),

    //   El @ sigfinica al inicio del proyecto y se parte desde ahi para ir entrando en las carpetas
    //   component: () => import("@/components/TaskList.vue"),
    },
    {
      path: "/tasks/new",
      name: "task-new",
      component: () => import("../components/TaskForm.vue"),
    },
    {
      path: "/tasks/:id",
      name: "task-details",
      component: () => import("../components/TaskDetail.vue"),
    },
  ];
  
//   console.log(process.env.BASE_URL);
  
  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;