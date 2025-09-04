import { createApp, ref } from 'vue'
import App from './App.vue'
import { router } from './router'

export const isPreloading = ref(false) //checks if view is currently preloading (after user click), controls loading effects

createApp(App).use(router).mount('#app')
