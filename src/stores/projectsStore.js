import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
    state: () => ({
        projects: []
    }),

    actions: {
        addProject(name) {
            this.projects.push({
                id: Date.now(),
                name
            })
        },

        deleteProject(id) {
            this.projects = this.projects.filter(p => p.id !== id)
        }
    },
    persist: true
})