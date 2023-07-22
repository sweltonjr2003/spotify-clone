<script lang="ts">
import SpotifyLogo from '@/components/icons/SpotifyLogo.vue'
 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
export default {
  name: 'App',
  components: {
    SpotifyLogo,
    Swiper,
    SwiperSlide 
  }
}
</script>

<template>
  <header class="p-2.5 bg-black flex items-center justify-between font-bold">
    <SpotifyLogo />
    <div class="flex items-center justify-between space-x-2.5">
      <a><i class="bi bi-search text-base"></i></a>
      <button
      class="bg-white px-4 py-2 text-black text-xs font-bold tracking-widest border-none rounded-full uppercase">Abrir
        App</button>
      <a><i class="bi bi-list text-3xl font-extrabold"></i></a>
    </div>
  </header>
  <div class="bg-ad text-black px-3 py-6 relative">
    <button class="text-2xl absolute top-2 right-2">
      <i class="bi bi-x"></i>
    </button>
    <h1 class="font-bold mt-0 text-background">Obtém o Premium</h1>
    <p>Assume o controlo do que ouves com música sem anúncios. Cancela quando quiseres.</p>
    <div>
      <button class="bg-black px-3 py-1 text-white text-sm font-bold border-none rounded-full">Obtém o Premium</button>
    </div>
  </div>

  <main class="p-4 space-y-5">
    <div id="concentration">
      <h2 class="text-lg font-bold tracking-tight">Concentração</h2>
      <swiper
    :slides-per-view="3.5"
    :space-between="50"
  >
  <!-- Colocar 9 elementos -->
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    ...
  </swiper>
    </div>
  </main>
</template>
