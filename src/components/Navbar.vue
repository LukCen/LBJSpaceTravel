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
  <nav
    class="mobile-nav flex tablet:hidden desktop:hidden sticky justify-between min-h-[45px] max-h-[88px] bg-transparent p-5 items-center z-10">
    <img :src="logo" alt="Page logo" height="48">
    <button class="min-w-fit min-h-fit" @click="safeClick">
      <img v-if="!menuOpen" :src="menu" alt="Open main menu" height="48" width="48">
      <img v-if="menuOpen" :src="menuClose" alt="Close main menu" height="48" width="48">
    </button>
  </nav>
  <aside :class="{ 'v-active': menuOpen === true, '-right-full': menuOpen === false, ' right-0': menuOpen === true }"
    class="absolute flex desktop:hidden flex-col top-0 w-3/4 h-[100vh] z-2 duration-200">
    <ul class="flex flex-col gap-400 relative min-h-1/2 w-3/4 top-[130px] mx-400">
      <li v-for="entry in menuEntries" class="text-white flex items-center justify-center relative min-h-400 w-full">
        <router-link class="w-full h-full flex items-center text-preset-8 gap-200 uppercase" :to="entry.path"><span
            class="font-bold">{{
              entry.id }}
          </span> {{
            entry.content
          }}</router-link>
      </li>
    </ul>
  </aside>
  <!-- tablet -->
  <nav
    class="tablet-nav hidden tablet:flex desktop:hidden sticky top-0 justify-between min-h-[45px] h-[96px] bg-transparent items-center z-10">
    <img :src="logo" alt="Page logo" height="48" class="relative left-400">
    <ul class="tablet-nav_entries flex gap-600 items-center relative justify-between w-4/5 h-full px-400">

      <li v-for="entry in menuEntries" class="text-white relative flex items-center justify-center h-full">
        <router-link class="w-full text-preset-8 flex h-full justify-center items-center gap-200" :to="entry.path">
          <span class="font-bold uppercase">{{ entry.id }}
          </span><span class="uppercase">{{ entry.content }}</span></router-link>
      </li>
    </ul>
  </nav>

  <!-- desktop -->
  <nav
    class="desktop-nav hidden tablet:hidden desktop:flex sticky top-0 justify-between min-h-[45px] h-[136px] bg-transparent items-center z-10 opacity-100 duration-250 transition-opacity">
    <img :src="logo" alt="Page logo" height="48" class="relative left-400">

    <ul
      class="desktop-nav_entries flex gap-800 items-center relative justify-around max-w-1/2 h-[calc(100%-var(--spacing-500))] px-1600">
      <div class="spacer w-full absolute top-1/2 h-[2px] left-[50px] -translate-x-full z-20 bg-light opacity-50">
      </div>
      <li v-for="entry in menuEntries" class="text-white relative flex items-center justify-center h-full">
        <router-link class="w-full text-preset-6 flex h-full justify-center items-center gap-200" :to="entry.path">
          <span class="font-bold uppercase">{{ entry.id }}
          </span><span class="uppercase">{{ entry.content }}</span></router-link>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
nav img {
  max-height: 48px;
  max-width: 48px;
}
aside, .desktop-nav_entries, .tablet-nav_entries {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(25px);
}

aside li:has(.router-link-active)::after {
  content: '';
  width: 2px;
  height: 100%;
  position: absolute;
  right: 0;
  background: var(--color-light)
}

.desktop-nav_entries li:has(.router-link-active)::after,
.desktop-nav_entries li:hover::after,
.tablet-nav_entries li:has(.router-link-active)::after {
  content: '';
  width: 100%;
  height: var(--radius-md);
  position: absolute;
  bottom: 0;
}
.desktop-nav_entries li:has(.router-link-active)::after,
.tablet-nav_entries li:has(.router-link-active)::after {
  background: var(--color-white);
}
.desktop-nav_entries li:hover::after {
  background: var(--color-light);
}
</style>
