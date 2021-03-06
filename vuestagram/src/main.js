import { createApp } from 'vue';
import App from './App.vue';
import store from './store';
import mitt from 'mitt';
import router from '@/routes/index';

// fortawesome setup
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// bootstrap setup
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.esm.js';
import 'bootstrap';

// createApp
let app = createApp(App);

// emitter 전역 설정
let emitter = mitt();
app.config.globalProperties.emitter = emitter;

// fortawesome setup
library.add(faBars, faInstagram);
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(store);
app.use(router);
app.mount('#app');
