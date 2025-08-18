<script setup lang="ts">




</script>
<template>
  <main class="flex flex-col items-center h-full">
    <section class="text flex flex-col items-center gap-300 p-300">
      <h1 class="flex flex-col text-center">
        <span class="text-light text-preset-6 text-preset-5 block uppercase">So, you want to travel to</span>
        <span class="text-preset-1 block text-white">SPACE</span>
        <span class="text-preset-9 text-light block">Let’s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
          give you a truly out of this world experience!</span>
      </h1>
    </section>
    <section class="button h-1/2 flex justify-center items-center">
      <router-link to="/destination"
        class="bg-white text-dark text-preset-4 rounded-[50%] aspect-square h-[144px] w-[144px] uppercase text-center flex items-center justify-center">Explore</router-link>
    </section>

  </main>
</template>
<style scoped></style>
