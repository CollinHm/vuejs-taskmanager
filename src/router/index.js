import { createRouter, createWebHistory } from 'vue-router'

import TodayView from '../views/TodayView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import ProjectDetailView from '../views/ProjectDetailView.vue'
import SettingsView from '../views/SettingsView.vue'

const routes = [
    { path: '/', component: TodayView },
    { path: '/projects', component: ProjectsView },
    { path: '/projects/:id', component: ProjectDetailView },
    { path: '/settings', component: SettingsView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router