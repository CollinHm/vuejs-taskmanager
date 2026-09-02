<script setup>
import
{ ref } from 'vue'
import { useProjectsStore } from '../stores/projectsStore'

const projectsStore = useProjectsStore()
const newProject = ref('')

function addProject() {
  if (!newProject.value) return

  projectsStore.addProject(newProject.value)
  newProject.value = ''
}
</script>

<template>
  <h1>Projects</h1>
<div>
  <input v-model="newProject" placeholder="New project" />
  <button @click="addProject">Add</button>
</div>


  <ul>
    <li v-for="project in projectsStore.projects" :key="project.id">
      <span class="projectname">
         <router-link :to="`/projects/${project.id}`">
        {{ project.name }}
      </router-link>
      </span>

      <button @click="projectsStore.deleteProject(project.id)">
        X      
      </button>
    </li>
  </ul>
</template>

<style scoped>
h1{
  padding: 12px 0 0 24px;
}
ul{
  padding: 0 12px 0 24px;
}
.projectname{
  flex: 1;
a{
  text-decoration: none;
}

}
div{
  padding: 0 0 48px 24px;
}
</style>