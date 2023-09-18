<script setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'
  import iconMenuOpen from '@/assets/images/menu_open.svg'
  import iconMenuClose from '@/assets/images/menu_close.svg'
  

  defineProps({
    navList: {
      type: Array,
      required: true
    }
  })
  const isShowMobileMenu = ref(false)
</script>

<template>
  <header class="bg-white shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
    <nav class="w-full md:w-[345px] md:overflow-visible overflow-hidden">
      <div class="my-5 md:mb-[50.65px] md:mt-[78.33px] relative">
        <button class="block md:hidden absolute top-0 left-5 h-12" @click="isShowMobileMenu = !isShowMobileMenu">
          <img v-show="!isShowMobileMenu" :src="iconMenuOpen" alt="">
          <img v-show="isShowMobileMenu" :src="iconMenuClose" alt="">
        </button>
        <h1 class="block text-center font-bold font-NotoSans text-xl md:text-3xl leading-[48px] md:leading-10">白頭翁不吃小米</h1>
        <div class="w-12 md:w-24 h-12 md:h-24 absolute z-10 top-0 md:-top-1/2 right-5 md:-right-12 rounded-full bg-white shadow-[0_0_6px_0_rgba(0,0,0,0.25)] flex items-center justify-center">
          <div class="logo scale-50 md:scale-100">
            <div class="logoTop"></div>
            <div class="logoBeak"></div>
            <div class="logoBottom"></div>
            <div class="logoCenter"></div>
          </div>
        </div>
      </div>
      <ul class="h-0 md:h-full transition" :class="{'h-full' : isShowMobileMenu}">
        <li v-for="(item, index) in navList" :key="index"
          class="w-full py-2 text-center text-lg font-NotoSans leading-6"
        >
          <RouterLink :to="item.to">{{ item.name }}</RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
  .router-link-active{
    color: #AA6666;
    text-decoration: underline #AA6666;
    text-underline-offset: 4.21px;
    text-decoration-thickness: 2px;
  }

  $logo-color: #333333;
  .logo{
    width: 48px;
    height: 48px;
    position: relative;

    &Top{
      //鳥頭上
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      border-style: solid;
      border-color: $logo-color;
      border-width: 9px;
      border-top-left-radius: 59%;
      border-top-right-radius: 25%;
      border-left: 0px;
      border-right: 0px;
      border-bottom: 0px;
    }
    &Beak{
      //鳥嘴
      position: absolute;
      top: 12px;
      left: 47px;
      width: 14px;
      height: 15px;
      border-style: solid;
      border-color: $logo-color;
      border-width: 7px;
      border-top-right-radius: 46%;
      border-left: 0px;
      border-right: 0px;
      border-bottom: 0px;
      transform: rotate(352deg);
    }
    &Bottom{
      //鳥頭下
      position: absolute;
      top: -4px;
      left: 0px;
      width: 100%;
      height: 100%;
      border-style: solid;
      border-color: $logo-color;
      border-width: 9px;
      border-left: 0px;
      border-right: 0px;
      border-top: 0px;
      border-bottom-right-radius: 38%;
    }
    &Center{
      // 鳥眼
      position: absolute;
      top: 17px;
      left: 28px;
      width: 20.8%;
      height: 20.8%;
      background-color: $logo-color;
      border-radius: 50%;
    }
  }
</style>