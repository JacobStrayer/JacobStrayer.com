import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'
import Projects from '../views/ProjectsView.vue'
import Contact from '../views/ContactView.vue'
import Resume from '../views/ResumeView.vue'
import RedChat from '@/views/RedChat.vue'
import About from '@/views/AboutView.vue'
import Simulations from '@/views/SimulationsView.vue'
import Deals from '@/views/DealsView.vue'
import Share from '@/views/ShareView.vue'
import AuthView from '@/views/auth/AuthView.vue' // Parent component

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/projects', name: 'Projects', component: Projects },
    { path: '/contact', name: 'Contact', component: Contact },
    { path: '/resume', name: 'Resume', component: Resume },
    { path: '/redchat', name: 'RedChat', component: RedChat },
    { path: '/about', name: 'About', component: About },
    { path: '/simulations', name: 'Simulations', component: Simulations },
    { path: '/deals', name: 'Links', component: Deals },
    {
        path: '/share/:customLink',
        name: 'Share',
        component: Share
    },

    {
        path: '/auth',
        name: 'Auth',
        component: AuthView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
