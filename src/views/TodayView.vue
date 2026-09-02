<script setup>
import { computed } from 'vue'

import { useTasksStore } from '../stores/tasksStore'
import { useProjectsStore } from '../stores/projectsStore'

const tasksStore = useTasksStore()
const projectsStore = useProjectsStore()

const today = new Date().toISOString().split('T')[0]

const todayTasks = computed(() =>
    tasksStore.tasks.filter(task =>
        task.dueDate <= today &&
        !task.completed
    )
)

function getProjectName(projectId) {
  const project = projectsStore.projects.find(
      p => p.id === projectId
  )

  return project ? project.name : 'Unknown Project'
}
</script>

<template>
  <div>
    <h1>Today</h1>

    <div v-if="todayTasks.length">
      <ul>
        <li
            v-for="task in todayTasks"
            :key="task.id"
        >
          <input
              type="checkbox"
              :checked="task.completed"
              @change="tasksStore.toggleTask(task.id)"
          />

          <strong>{{ task.title }}</strong>

          — {{ task.priority }}

          — {{ getProjectName(task.projectId) }}
        </li>
      </ul>
    </div>

    <div v-else class="noToday">
      <p>No tasks for today!</p>
    </div>
  </div>
</template>

<style scoped>
h1{
  padding: 12px 0 48px 24px;
}
ul{
  padding: 0;
}

.noToday{
  padding: 12px 0 12px 24px;
}

</style>