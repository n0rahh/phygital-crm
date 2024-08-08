import { createRouter, createWebHistory } from 'vue-router';

import DashboardHome from '@/views/DashboardHome.vue';
import Player from '@/views/Player.vue';

const routes = [
  {
    path: '/',
    name: 'DashboardHome',
    component: DashboardHome,
  },
  {
    path: '/player',
    name: 'Player',
    component: Player,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
