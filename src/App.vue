<script setup>
import { RouterView } from 'vue-router'
import TheMenu from './components/TheMenu.vue'
import useEnume from "@/stores/enume.js";

const enumeList = useEnume();

</script>

<template>
  <TheMenu :nav-list="enumeList.menu" />
  <RouterView />
</template>
