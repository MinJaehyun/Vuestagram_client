import { createApp } from 'vue'
import App from './App.vue'
import store from './store';
import mitt from 'mitt';

// fortawesome setup
import { library as faLibrary } from '@fortawesome/fontawesome-svg-core';
import { faBuildingLock, faCodeBranch, faCamera } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook, faStackOverflow, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// bootstrap setup
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.esm.js'
import "bootstrap"


// emitter 전역 설정
let emitter = mitt();
app.config.globalProperties.emitter = emitter;

// createApp
let app = createApp(App)

// fortawesome setup
faLibrary.add(faInstagram, faTwitter, faFacebook, faStackOverflow, faGithub, faBuildingLock, faCodeBranch, faCamera)
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store)
app.mount('#app');
