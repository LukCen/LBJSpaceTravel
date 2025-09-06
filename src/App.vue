<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>
<template>
  <Navbar />
  <RouterView v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </RouterView>
</template>
