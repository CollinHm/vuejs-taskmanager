<script setup>
import { useUiStore } from '../stores/uiStore'

const uiStore = useUiStore()
</script>

<template>
  <div>
    <h1>Settings</h1>

    <div class="settingsContent">
      <p>Current theme: {{ uiStore.theme }}</p>

      <button @click="uiStore.toggleTheme()">
        Toggle Theme
      </button>
    </div>

  </div>
</template>


<style scoped>
h1{
  padding: 12px 0 12px 24px;
}
p{
 padding: 12px 0 48px 24px;
}
button{
  margin: 12px 0 48px 24px;
}
.settingsContent{
  padding: 0;
}
</style>