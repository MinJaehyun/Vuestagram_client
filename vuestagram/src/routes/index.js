// vue-router 라이브러리 { createWebHistory, createRouter } 사용
import { createWebHistory, createRouter } from 'vue-router';
import Signup from '@/views/Signup.vue';
import Login from '@/views/Login.vue';
// import ErrorPage from '@/views/ErrorPage.vue';
// import Section from '@/components/Section.vue';

// routes 설정
const routes = [
  // {
  //   path: '/',
  //   component: Section,
  //   redirect: '/login',
  // },
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/login',
    component: Login,
  },
  // {
  //   path: '/:anything(.*)',
  //   component: ErrorPage,
  // },
];

//  위에서 설정한 routes 경로 가져와서 라이브러리 적용
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
