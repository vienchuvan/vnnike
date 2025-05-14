import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import piniaPersist from 'pinia-plugin-persistedstate';
import { createPinia } from 'pinia';

const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPersist)

app.use(pinia)
app.use(router)

app.mount('#app')

// THÊM đoạn này để báo cho PrerenderSPAPlugin biết:
document.dispatchEvent(new Event('render-event'))
