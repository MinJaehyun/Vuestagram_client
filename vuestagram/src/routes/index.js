// vue-router 라이브러리 { createWebHistory, createRouter } 사용
import { createWebHistory, createRouter } from 'vue-router';

// routes 설정
const routes = [
  {
    path: '/',
    // redirect: '/main',
    // component: Main,
    // component: () => import('@'),
    component: () => import('@/views/MainPage'),
  },
  {
    path: '/findAll',
    component: () => import('@/views/NonMembers'),
  },
  {
    path: '/posts/:id',
    component: () => import('@/views/PostEditPage'),
  },
  {
    path: '/posts/add',
    component: () => import('@/views/PostAddPage'),
  },
  {
    path: '/posts',
    component: () => import('@/views/PostsPage'),
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
