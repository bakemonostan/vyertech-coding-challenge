import HomeVue from '@/views/Home.vue';
import IssuesVue from '@/views/Issues.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeVue,
  },
  {
    path: '/issues',
    name: 'issues',
    component: IssuesVue,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

