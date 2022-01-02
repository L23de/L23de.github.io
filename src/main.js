import { createApp } from 'vue'
import { Quasar } from 'quasar'
import quasarIconSet from 'quasar/icon-set/fontawesome-v5'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import 'quasar/src/css/index.sass'

import App from './App.vue'

const myApp = createApp(App)

myApp.use(Quasar, {
    plugins: {},
    iconSet: quasarIconSet,
})

myApp.mount('#app') // Mounts to 'app' id in index.html
