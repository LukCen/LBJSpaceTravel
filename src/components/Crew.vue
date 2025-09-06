<script setup>
import { ref } from "vue"
import commander from "../assets/crew/image-douglas-hurley.webp"
import missionSpec from "../assets/crew/image-mark-shuttleworth.webp"
import pilot from "../assets/crew/image-victor-glover.webp"
import engineer from "../assets/crew/image-anousheh-ansari.webp"

const data = [
  {
    id: 0,
    role: "Commander",
    name: "Douglas Hurley",
    desc: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: commander
  },
  {
    id: 1,
    role: "Mission Specialist",
    name: "Mark Shuttleworth",
    desc: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: missionSpec
  },
  {
    id: 2,
    role: "Pilot",
    name: "Victor Glover",
    desc: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    img: pilot
  },
  {
    id: 3,
    role: "Flight Engineer",
    name: "Anousheh Ansari",
    desc: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    img: engineer
  }
]
const activeId = ref(0)
</script>
<template>
  <main class="crew flex flex-col h-[calc(100%-96px)] gap-300 text-white p-600 desktop:px-1600 desktop:py-0">
    <section
      class="content h-full flex flex-col desktop:flex-row items-center desktop:justify-center gap-600 text-white desktop:gap-1600 desktop:min-h-[800px] desktop:min-w-[1600px]">
      <div class="text flex flex-col items-center desktop:items-start gap-600 tablet:w-3/4 desktop:max-w-[80%]">
        <!-- view title -->
        <h1
          class="w-full inline-flex text-preset-6 uppercase text-center justify-center items-center desktop:justify-start desktop:text-left font-barlow-condensed gap-100">
          <span class="font-bold opacity-50 h-full inline-flex">02</span><span class="inline-flex">Meet
            your crew</span>
        </h1>
        <!-- box with content inside -->
        <div class="content flex flex-col desktop:flex-row w-full gap-200 items-center">
          <div class="text flex flex-col gap-300 items-center desktop:items-start desktop:h-full">
            <!-- text contents - yes these should be in a container together but this'll do for now -->
            <transition name="fade" mode="out-in">
              <span :key="activeId" class="name text-preset-3 uppercase">{{ data[activeId].name }}</span>
            </transition>
            <transition name="fade" mode="out-in">
              <h2 :key="activeId" class="opacity-60 text-preset-4 uppercase">{{ data[activeId].role }}</h2>
            </transition>
            <transition name="fade" mode="out-in">
              <p :key="activeId" class="desc text-preset-9 text-light text-center desktop:text-left">{{
                data[activeId].desc }}</p>
            </transition>
            <!-- pagination -->
            <div class="pagination flex gap-300">
              <button v-for="item in data" :id="item.id" @click="activeId = item.id"
                class="w-[10px] h-[10px] rounded-[50%] bg-white cursor-pointer"
                :class="{ isActive: activeId === item.id }"></button>
            </div>
          </div>
          <transition name="fade" mode="out-in">
            <img :key="activeId" :src="data[activeId].img" alt="" class="max-h-1/2 tablet:max-h-auto desktop:max-h-auto"
              fetchpriority="high">
          </transition>
        </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
.isActive {
  background: gray;
}
</style>
