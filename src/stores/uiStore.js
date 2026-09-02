import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
    state: () => ({
        filter: 'all',
        sort: 'date',
        theme: 'light'
    }),

    actions: {
        setFilter(filter) {
            this.filter = filter
        },

        setSort(sort) {
            this.sort = sort
        },

        toggleTheme() {
            this.theme =
                this.theme === 'light'
                    ? 'dark'
                    : 'light'
        }
    },

    persist: true
})