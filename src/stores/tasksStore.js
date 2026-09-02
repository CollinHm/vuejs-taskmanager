import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
    state: () => ({
        tasks: []
    }),

    actions: {
        addTask(projectId, title, priority, dueDate) {
            this.tasks.push({
                id: Date.now(),
                projectId,
                title,
                completed: false,
                priority,
                dueDate
            })
        },

        toggleTask(id) {
            const task = this.tasks.find(t => t.id === id)

            if (task) {
                task.completed = !task.completed
            }
        },

        deleteTask(id) {
            this.tasks = this.tasks.filter(t => t.id !== id)
        }
    },
    persist: true
})