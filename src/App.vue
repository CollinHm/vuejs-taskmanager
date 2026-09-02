<script setup>
import { watch } from 'vue'
import { useUiStore } from './stores/uiStore'

const uiStore = useUiStore()

watch(
    () => uiStore.theme,
    (newTheme) => {
      document.body.className = newTheme
    },
    { immediate: true }
)
</script>

<template>
  <div class="app-container">
    <nav>
      <router-link class="navButton" to="/">Today</router-link>
      <router-link class="navButton" to="/projects">Projects</router-link>
      <router-link class="navButton" to="/settings">Settings</router-link>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>
<style>
body{
  padding: 0 60px;
}
nav{
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  background-color: #333333;
  height: 72px;
}
.navButton{
  background-color: #2b2b2b;
  border-radius: 12px;
  padding: 12px 24px;
  text-decoration: none;
}

</style>