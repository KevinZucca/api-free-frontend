import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import Posts from "./pages/Posts.vue";
import Form from "./pages/Form.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "homepage",
      component: HomePage,
    },
    {
      path: "/posts",
      name: "posts",
      component: Posts,
    },
    {
      path: "/form",
      name: "form",
      component: Form,
    },
  ],
});

export { router };
