import { createApp } from 'vue'
import './style.css'
import router from '@/router'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

const app = createApp(App)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
    
});
app.use(router)
app.mount('#app')