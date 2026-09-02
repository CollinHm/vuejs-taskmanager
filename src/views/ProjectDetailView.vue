<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

import { useProjectsStore } from '../stores/projectsStore'
import { useTasksStore } from '../stores/tasksStore'

const route = useRoute()

const projectsStore = useProjectsStore()
const tasksStore = useTasksStore()

const newTask = ref('')
const priority = ref('medium')
const dueDate = ref('')

const projectId = Number(route.params.id)

const project = computed(() =>
    projectsStore.projects.find(p => p.id === projectId)
)

const projectTasks = computed(() =>
    tasksStore.tasks.filter(t => t.projectId === projectId)
)

function addTask() {
  if (!newTask.value) return

  tasksStore.addTask(
      projectId,
      newTask.value,
      priority.value,
      dueDate.value
  )

  newTask.value = ''
  priority.value = 'medium'
  dueDate.value = ''
}

function formatDate(dateString) {
  const [year, month, day] = dateString.split('-')
  return `${day}-${month}-${year}`
}
</script>

<template>
  <div v-if="project">
    <h1>{{ project.name }}</h1>


    <div class="input">
    <input v-model="newTask" placeholder="New task" />
      <select v-model="priority">
  <option value="low">Low</option>
  <option value="medium">Medium</option>
  <option value="high">High</option>
      </select>

  <input type="date" v-model="dueDate" />
      <button @click="addTask">
        Add Task
      </button>
    </div>



    <ul>
      <li
          v-for="task in projectTasks"
          :key="task.id"
      >
        <input
            type="checkbox"
            :checked="task.completed"
            @change="tasksStore.toggleTask(task.id)"
        />

        <span class="task-content">
  {{ task.title }} -
  {{ task.priority }} -
  {{ formatDate(task.dueDate) }}
</span>

        <button @click="tasksStore.deleteTask(task.id)">
          X
        </button>
      </li>
    </ul>
  </div>

  <div v-else>
    <h1>Project not found</h1>
  </div>
</template>

<style scoped>
h1{
  padding: 12px 0 12px 24px;
}
ul{
  padding: 0 12px 0 24px;
}

.task-content {
  flex: 1;
}
input{
margin-right: 12px;
}
select{
  margin-right: 12px;
}
.input{
  padding: 0 0 48px 24px;
}

</style>