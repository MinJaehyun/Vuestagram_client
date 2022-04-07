// vue-router 라이브러리 { createWebHistory, createRouter } 사용
import { createWebHistory, createRouter } from 'vue-router';
// import Signup from '@/components/Signup.vue';
import Signup from '../components/Signup.vue';

// routes 설정
const routes = [
  {
    path: '/signup',
    component: Signup,
  },
];

//  위에서 설정한 routes 경로 가져와서 라이브러리 적용
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
