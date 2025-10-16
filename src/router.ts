import { createRouter, createWebHistory } from 'vue-router'
import Case from './pages/Case.vue'
import Home from './pages/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/case', name: 'case', component: Case },
  ],
})

export default router
export { router }