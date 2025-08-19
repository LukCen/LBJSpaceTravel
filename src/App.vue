<script setup lang="ts">
import Navbar from './components/Navbar.vue';

</script>

<template>
  <Navbar />
  <transition name="fade" mode="out-in">
    <RouterView />
  </transition>
</template>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
