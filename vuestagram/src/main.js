import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import axios from 'axios';
import router from '@/routes/index';

// fortawesome setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// bootstrap setup
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.js';
import 'bootstrap';

// createApp
let app = createApp(App);

// axios 전역 설정, 사용법: 전역 설정된 axios 를 this 로 접근하여 사용
app.config.globalProperties.axios = axios;

// fortawesome setup
library.add(faBars);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store);
app.use(router);
app.mount('#app');
