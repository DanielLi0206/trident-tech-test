<script setup>
  import bannerImage from '@/assets/images/banner.jpg';
  defineProps({
    introduction: {
      type: Object,
      required: true
    }
  })
</script>

<template>
  <div class="relative">
    <div class="h-[311px] md:h-[634px] overflow-hidden">
      <img class="h-full w-full object-center object-cover" :src="bannerImage" alt="banner">
    </div>
    <div class="absolute bottom-0 md:bottom-9 left-0 md:right-11 mx-5 my-6 md:m-0 font-NotoSans text-white">
      <h2 class="text-5xl text-right font-bold leading-[65px] break-keep">{{ introduction.name }}</h2>
      <p class="text-lg text-left md:text-right">{{ introduction.content }}</p>
    </div>
  </div>
</template>
