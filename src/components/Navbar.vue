<script setup lang="ts">
import logo from "../assets/shared/logo.svg"
import menu from "../assets/shared/icon-hamburger.svg"
import menuClose from "../assets/shared/icon-close.svg"
import { ref } from "vue"
import { useThrottleFn } from "@vueuse/core"

const menuOpen = ref(false)
const safeClick = useThrottleFn(() => {
  menuOpen.value ? menuOpen.value = false : menuOpen.value = true
}, 250)

const menuEntries = [
  { id: '00', path: '/', content: 'Home' },
  { id: '01', path: '/destination', content: 'Destination' },
  { id: '02', path: '/crew', content: 'Crew' },
  { id: '03', path: '/technology', content: 'Technology' }
]

</script>
<template>
  <!-- mobile nav -->
  <nav class="mobile-nav flex sticky justify-between min-h-[45px] max-h-[88px] bg-transparent p-5 items-center z-10">
    <img :src="logo" alt="Page logo" height="48">
    <button class="min-w-fit min-h-fit" @click="safeClick">
      <img v-if="!menuOpen" :src="menu" alt="Open main menu" height="48" width="48">
      <img v-if="menuOpen" :src="menuClose" alt="Close main menu" height="48" width="48">
    </button>
  </nav>
  <aside :class="{ 'v-active': menuOpen === true, '-right-full': menuOpen === false, ' right-0': menuOpen === true }"
    class="absolute flex flex-col top-0 w-3/4 h-[100vh] z-2 duration-200">
    <ul class="flex flex-col gap-400 relative w-3/4 top-[130px] mx-400">
      <li v-for="entry in menuEntries" class="text-white">
        <router-link class="w-full text-preset-8" :to="entry.path"><span class="font-bold">{{ entry.id }}
          </span> {{
            entry.content
          }}</router-link>
      </li>
    </ul>
  </aside>
</template>
<style scoped>
aside {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
}
nav img {
  max-height: 48px;
  max-width: 48px;
}
</style>
