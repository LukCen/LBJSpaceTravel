<script setup lang="ts">
import { ref } from 'vue';
import moon from "../assets/destination/image-moon.webp"
import mars from "../assets/destination/image-mars.webp"
import europa from "../assets/destination/image-europa.webp"
import titan from "../assets/destination/image-titan.webp"
import { isPreloading } from '../main';
const data = [
  {
    id: 0,
    planet: "Moon",
    desc: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384.400 KM",
    travel_time: "3 days",
    img: moon
  },
  {
    id: 1,
    planet: "Mars",
    desc: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 Mil. KM",
    travel_time: "9 months",
    img: mars
  },
  {
    id: 2,
    planet: "Europa",
    desc: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 Mil. KM",
    travel_time: "3 years",
    img: europa
  },
  {
    id: 3,
    planet: "Titan",
    desc: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 Bil. KM",
    travel_time: "7 years",
    img: titan
  }

]
const activeId = ref(0)

</script>
<template>
  <main :class="{ 'animate-pulse': isPreloading === true }"
    class="destination relative flex flex-col min-h-[calc(100%-96px)] w-full gap-300 p-600 tablet:p-1200 desktop:px-1200 desktop:py-0 desktop:items-center desktop:justify-center">
    <section
      class="content flex flex-col items-center desktop:justify-center gap-300 text-white desktop:gap-1600 desktop:min-h-[800px] desktop:max-w-[80%]">
      <!-- view title -->
      <h1 class="w-full text-preset-5 uppercase text-white text-center desktop:text-left desktop:relative">
        <span class="text-superlight font-bold">01
        </span>Pick your destination
      </h1>
      <div class="content flex flex-col w-full desktop:flex-row gap-600">
        <transition name="fade" mode="out-in">
          <div :key="activeId" class="img flex justify-center flex-2/4">
            <img :src="data[activeId].img" alt="" class="scale-75 aspect-square">
          </div>
        </transition>
        <div class="text flex-2/4 desktop:flex desktop:flex-col gap-300 w-full text-center desktop:text-left">
          <!-- nav/pagination -->
          <ul class="flex justify-center gap-300 desktop:justify-start">
            <li v-for="item in data"><button :id="String(item.id)" @click="activeId = item.id"
                :class="{ isActive: activeId === item.id }"
                class="w-full text-light uppercase text-preset-8 cursor-pointer pb-100 border-b-2 border-transparent p-1">{{
                  item.planet
                }}</button>
            </li>
          </ul>
          <!-- actual text (this probably should have its own container) -->
          <transition name="fade" mode="out-in">
            <h2 :key="activeId" class="text-preset-2 uppercase">{{ data[activeId].planet }}</h2>
          </transition>
          <transition name="fade" mode="out-in">
            <p :key="activeId" class="text-preset-9">{{ data[activeId].desc }}</p>
          </transition>
          <transition name="fade" mode="out-in">
            <hr :key="activeId" class="my-8 border-light">
          </transition>
          <transition name="fade" mode="out-in">
            <div :key="activeId" class="flex gap-400 flex-col tablet:flex-row desktop:h-full desktop:flex-row">
              <div class="flex flex-1/2 flex-col gap-300">
                <span class="text-preset-7 uppercase text-light">Avg. Distance</span>
                <span class="text-preset-6 uppercase">{{ data[activeId].distance }}</span>
              </div>
              <div class="flex flex-1/2 flex-col gap-300">
                <span class="text-preset-7 uppercase text-light">Est. Travel Time</span>
                <span class="text-preset-6 uppercase">{{ data[activeId].travel_time }}</span>
              </div>
            </div>
          </transition>
        </div>

      </div>
    </section>
  </main>
</template>
<style scoped>
.isActive {
  border-bottom: 2px solid lightblue;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
