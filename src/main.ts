import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './style.css'

import Home from './pages/Home.vue'
import Features from './pages/Features.vue'
import Pricing from './pages/Pricing.vue'
import Contact from './pages/Contact.vue'
import Legal from './pages/Legal.vue'
import FAQ from './pages/FAQ.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/features', component: Features },
    { path: '/preise', component: Pricing },
    { path: '/kontakt', component: Contact },
    { path: '/faq', component: FAQ },
    { path: '/impressum', component: Legal },
    { path: '/datenschutz', component: Legal },
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

createApp(App).use(router).mount('#app')
