<script setup>
import { ref } from 'vue';
import vehicleMobile from "../assets/tech/image-launch-vehicle-landscape.jpg"
import vehicleDesktop from "../assets/tech/image-launch-vehicle-portrait.jpg"
import spaceportMobile from "../assets/tech/image-spaceport-landscape.jpg"
import spaceportDesktop from "../assets/tech/image-spaceport-portrait.jpg"
import capsuleMobile from "../assets/tech/image-space-capsule-landscape.jpg"
import capsuleDesktop from "../assets/tech/image-space-capsule-portrait.jpg"
import { useMediaQuery } from '@vueuse/core';
import { isPreloading } from '../main';

const data = [
  {
    id: 0,
    title: "Launch Vehicle",
    desc: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imgMobile: vehicleMobile,
    imgDesktop: vehicleDesktop
  },
  {
    id: 1,
    title: "Spaceport",
    desc: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    imgMobile: spaceportMobile,
    imgDesktop: spaceportDesktop
  },
  {
    id: 2,
    title: "Space capsule",
    desc: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imgMobile: capsuleMobile,
    imgDesktop: capsuleDesktop
  }
]

const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1439px)')
const activeId = ref(0)
</script>
<template>
  <main :class="{ 'animate-pulse': isPreloading === true }"
    class="technology flex flex-col gap-300 h-[calc(100%-96px)] text-white items-center desktop:justify-center desktop:py-600">
    <!-- view title -->
    <h1 class="text-preset-6 uppercase inline-flex gap-300">
      <span class="opacity-50">03</span>
      <span>Space launch 101</span>
    </h1>
    <!-- box with content -->
    <div class="content flex flex-col gap-300 items-center desktop:flex-row-reverse">
      <transition name="tech_fade" mode="out-in">
        <img :key="activeId" :src="isTablet ? data[activeId].imgMobile : data[activeId].imgDesktop" alt=""
          class="w-full desktop:w-auto">
      </transition>
      <div class="pagination flex gap-300 z-10 desktop:flex-col desktop:order-1">
        <button @click="activeId = item.id" :id="item.id"
          class="h-[40px] w-[40px] rounded-[50%] text-center border-1 border-white cursor-pointer desktop:h-[60px] desktop:w-[60px] "
          :class="{ isActive: activeId === item.id }" v-for="item in data">{{ item.id + 1 }}</button>
      </div>
      <transition name="tech_fade" mode="out-in">
        <div :key="activeId"
          class="text flex flex-col gap-100 text-center tablet:w-3/4 desktop:text-left desktop:w-1/2">
          <span class="opacity-50 uppercase text-preset-4">The terminology...</span>
          <h2 class="text-preset-3 uppercase">{{ data[activeId].title }}</h2>
          <p class="text-preset-9 text-light px-300 desktop:px-0">{{ data[activeId].desc }}</p>
        </div>
      </transition>
    </div>
  </main>
</template>
<style scoped>
.isActive {
  background: var(--color-white);
  color: #000 !important;
}

.tech_fade-enter-active, .tech_fade-leave-active {
  transition: opacity .5s
}

.tech_fade-enter-from, .tech_fade-leave-to {
  opacity: 0;
}
</style>
