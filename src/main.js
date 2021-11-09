import './assets/main.css'
import './assets/tailwind.css'

import App from './App.vue'
import { createApp } from 'vue'
/* import router from './router' */
import store from './store'

let app = createApp(App)

app.use(store)
/* app.use(router) */
app.mount('#app')
