import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Destination from "./components/Destination.vue";
import Crew from "./components/Crew.vue";
import Technology from "./components/Technology.vue";

const routes = [
  { path: '/', component: Home },
  { path: '/destination', component: Destination },
  { path: '/crew', component: Crew },
  { path: '/technology', component: Technology }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})
