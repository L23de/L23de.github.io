import { createApp } from 'vue';
import { Quasar } from 'quasar';
import quasarIconSet from 'quasar/icon-set/ionicons-v4';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import 'quasar/src/css/index.sass';

import App from './App.vue';
import router from './router'

const myApp = createApp(App);

myApp.use(Quasar, {
    plugins: {},
    iconSet: quasarIconSet,
});

myApp.use(router);

myApp.mount('#app');