import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/normalize.css'
import '@/assets/bootstrap.css'
import '@/assets/bootstrap.bundle.js'

const app = createApp(App)

app.use(router)

app.mount('#app')
