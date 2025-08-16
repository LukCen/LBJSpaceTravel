<script setup lang="ts">
import bgDesktop from "../../src/assets/home/background-home-desktop.jpg"
import bgTablet from "../../src/assets/home/background-home-tablet.jpg"
import bgMobile from "../../src/assets/home/background-home-mobile.jpg"
import { computed } from "vue"
import { useMediaQuery } from "@vueuse/core"
const isMobile = useMediaQuery("(max-width:765px)")
const isTablet = useMediaQuery("(min-width:768px) and (max-width:1439px)")
const isDesktop = useMediaQuery("(min-width:1440px)")

const chooseImage = computed(() => {
  if (isMobile.value) {
    return bgMobile
  } else if (isTablet.value) {
    return bgTablet
  } else if (isDesktop.value) {
    return bgDesktop
  }
})
console.log(`mob: ${isMobile.value} | tab ${isTablet.value} | desk ${isDesktop.value}`)
</script>
<template>
  <main class="h-screen w-screen bg-center bg-cover" v-bind:style="{ backgroundImage: `url(${chooseImage})` }">

  </main>
</template>
<style scoped></style>
