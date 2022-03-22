import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import mitt from 'mitt';

import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.esm.js'
import "bootstrap"

let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;

app.use(store).mount('#app');
