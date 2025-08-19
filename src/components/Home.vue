<template>
  <main
    class="home flex flex-col desktop:flex-row items-center flex-1 h-[calc(100%-96px)] desktop:items-end desktop:p-1600">
    <section
      class="text desktop:relative flex flex-col flex-1 h-1/2 items-center tablet:justify-center gap-300 p-300 tablet:p-1600 desktop:bottom-1600">
      <h1 class="flex flex-col text-center desktop:w-2/3 desktop:text-left desktop:gap-400">
        <span class="text-light text-preset-5 block uppercase">So, you want to travel to</span>
        <span class="text-preset-1 block text-white">SPACE</span>
        <span class="text-preset-9 text-light block">Let’s face it; if you want to go to space, you might as well
          genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
          give you a truly out of this world experience!</span>
      </h1>
    </section>
    <section
      class="button desktop:relative flex-1 h-1/2 w-full flex justify-center items-center desktop:justify-end tablet:p-600 desktop:bottom-1600">
      <router-link to="/destination"
        class="btn-explore bg-white text-dark relative text-preset-4 rounded-[50%] p-[88px] tablet:h-[250px] tablet:w-[250px] uppercase text-center flex items-center justify-center">Explore</router-link>
    </section>
  </main>
</template>
<style scoped>
.btn-explore::after {
  content: '';
  position: absolute;
  inset: 0;
  /* <-- rozciąga pseudo na całość przycisku */
  border-radius: 50%;
  background-color: transparent;
  /* default, żeby nie przykrywał */
  transition: transform 0.5s ease, background-color 0.3s ease;
  z-index: -1;
  /* <-- daje go pod spód */
}
.btn-explore:hover::after {
  transform: scale(1.75);
  /* zamiast height/width bawisz się skalą */
  background-color: rgba(255, 255, 255, 0.3);
}
/* .btn-explore:hover {
  border: 40px solid lightgray;
} */
</style>
