import { createRouter, createWebHistory } from 'vue-router';
import StartScreen from '../views/StartScreen.vue';
import QuestionScreen from '../views/QuestionScreen.vue';
import ResultScreen from '../views/ResultScreen.vue';

const routes = [
  {
    path: '/',
    name: 'Start',
    component: StartScreen,
    meta: { title: 'ANTARES 2045 - Start' }
  },
  {
    path: '/question',
    name: 'Question',
    component: QuestionScreen,
    meta: { title: 'ANTARES 2045 - Pytania' }
  },
  {
    path: '/result',
    name: 'Result',
    component: ResultScreen,
    meta: { title: 'ANTARES 2045 - Wyniki' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// Update document title based on route meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'ANTARES 2045';
  next();
});

export default router;
