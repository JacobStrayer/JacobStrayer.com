import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Projects from '../views/ProjectsView.vue'
import Contact from '../views/ContactView.vue'
import Resume from '../views/ResumeView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/resume', name: 'Resume', component: Resume }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
