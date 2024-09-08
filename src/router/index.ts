import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ActiveTodos from "@/views/ActiveTodos.vue";
import CompletedTodos from "@/views/CompletedTodos.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/active", component: ActiveTodos },
  { path: "/completed", component: CompletedTodos },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
