// vue-router 라이브러리 { createWebHistory, createRouter } 사용
import { createWebHistory, createRouter } from 'vue-router';

// routes 설정
const routes = [
  {
    path: '/',
    // redirect: '/main',
    // component: () => import('@'),
    // component: MainPage,
    component: () => import('@/views/MainPage'),
  },
  {
    path: '/posts',
    component: () => import('@/views/PostsPage'),
  },
  {
    path: '/posts/:id',
    component: () => import('@/views/PostsEditPage'),
  },
  {
    path: '/vuestagram',
    component: () => import('@/components/vuestagram/Section'),
  },
  {
    path: '/auth/signup',
    component: () => import('@/views/SignupPage'),
  },
  {
    path: '/auth/login',
    component: () => import('@/views/LoginPage'),
  },
  // NOTE: error page 는 views/ 에 존재해야 한다.
  {
    path: '/:anything(.*)',
    component: () => import('@/views/ErrorPage'),
  },
];

//  위에서 설정한 routes 경로 가져와서 라이브러리 적용
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
