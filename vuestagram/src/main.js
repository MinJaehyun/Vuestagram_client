import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import mitt from 'mitt';
let emitter = mitt();
let app = createApp(App)
app.config.globalProperties.emitter = emitter;

// createApp(App).use(store).mount('#app')
app.use(store).mount('#app')
