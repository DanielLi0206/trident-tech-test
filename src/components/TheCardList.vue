<script setup>
  defineProps({
    cardList: {
      type: Array,
      required: true
    }
  })
</script>

<template>
  <div class="flex flex-wrap justify-between px-9 py-12 md:p-12 bg-[#DCCCBC]">
    <div v-for="(item, index) in cardList" :key="index" class="flex font-NotoSans items-start mb-12">
      <h3 class="card__title mr-9 text-4xl font-bold">{{ item.title }}</h3>
      <p class="text-base w-full md:w-[176px]">{{ item.content }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card{
    &__title{
      position: relative;
      writing-mode:vertical-lr;
      &::before{
        content: '';
        width: 25px;
        height: 25px;
        position: absolute;
        bottom: -12px;
        right: -16px;
        border: 8px solid rgba(170, 102, 102, 0.6);
        border-radius: 999px;
      }
    }
  }
</style>