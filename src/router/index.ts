import { createRouter, createWebHistory } from 'vue-router';

import Task from "../components/Task1.vue"

import otherPage1 from '../components/otherPage1.vue';
import otherPage2 from '../components/otherPage2.vue';
import otherPage3 from '../components/otherPage3.vue';

import Test from '../components/Test.vue'


const routes = [
  {
    path: '/',
    name: 'task',
    component: Test
  },
  {
    path: '/task',
    name: 'task-manager',
    component: Test
  },
  {
    path: '/other1',
    name: 'other1',
    component: otherPage1
  },
  {
    path: '/other2',
    name: 'other2',
    component: otherPage2
  },
  {
    path: '/other3',
    name: 'other3',
    component: otherPage3
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;