import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Destination from "./components/Destination.vue";
import Crew from "./components/Crew.vue";
import Technology from "./components/Technology.vue";

// importing assets for prelaod
// destination
import destinationBgMobile from "./assets/destination/background-destination-mobile.jpg"
import destinationBgTablet from "./assets/destination/background-destination-tablet.jpg"
import destinationBgDesktop from "./assets/destination/background-destination-desktop.jpg"
import imgEuropa from "./assets/destination/image-europa.webp"
import imgMars from "./assets/destination/image-mars.webp"
import imgMoon from "./assets/destination/image-moon.webp"
import imgTitan from "./assets/destination/image-titan.webp"
// crew
import crewBgMobile from "./assets/crew/background-crew-mobile.jpg"
import crewBgTablet from "./assets/crew/background-crew-tablet.jpg"
import crewBgDesktop from "./assets/crew/background-crew-desktop.jpg"
import imgDouglas from "./assets/crew/image-douglas-hurley.webp"
import imgMark from "./assets/crew/image-mark-shuttleworth.webp"
import imgAnousheh from "./assets/crew/image-anousheh-ansari.webp"
import imgVictor from "./assets/crew/image-victor-glover.webp"
// tech
import bgTechMobile from "./assets/tech/background-technology-mobile.jpg"
import bgTechTablet from "./assets/tech/background-technology-tablet.jpg"
import bgTechDesktop from "./assets/tech/background-technology-desktop.jpg"
import launchPortrait from "./assets/tech/image-launch-vehicle-portrait.jpg"
import launchLandscape from "./assets/tech/image-launch-vehicle-landscape.jpg"
import capsulePortrait from "./assets/tech/image-space-capsule-portrait.jpg"
import capsuleLandscape from "./assets/tech/image-space-capsule-landscape.jpg"
import spaceportPortrait from "./assets/tech/image-spaceport-portrait.jpg"
import spaceportLandscape from "./assets/tech/image-spaceport-landscape.jpg"
const routes = [
  { path: '/', component: Home },
  { path: '/destination', component: Destination },
  { path: '/crew', component: Crew },
  { path: '/technology', component: Technology }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

async function preloadAssets(urls: string[]) {
  return Promise.all(
    urls.map(url => {
      return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = resolve
        img.onerror = reject
        img.src = url
      })
    })
  )
}

router.beforeEach(async (to, _from, next) => {
  const routeAssets: Record<string, string[]> = {
    '/destination': [
      destinationBgMobile,
      destinationBgTablet,
      destinationBgDesktop,
      imgMoon,
      imgMars,
      imgEuropa,
      imgTitan
    ],
    '/crew': [
      crewBgMobile,
      crewBgTablet,
      crewBgDesktop,
      imgDouglas,
      imgMark,
      imgAnousheh,
      imgVictor
    ],
    '/technology': [
      bgTechMobile,
      bgTechTablet,
      bgTechDesktop,
      launchPortrait,
      launchLandscape,
      capsulePortrait,
      capsuleLandscape,
      spaceportPortrait,
      spaceportLandscape

    ]
  }

  const assets = routeAssets[to.path]
  if (assets) {
    await preloadAssets(assets)
  }
  next()
})
