import { defineStore } from 'pinia';

export default defineStore('enumeStore', {
  state: () => ({
    menu: [
      {
        name: '白頭翁的特性',
        to: '/',
      },
      {
        name: '白頭翁的故事',
        to: '/story',
      },
      {
        name: '白頭翁的美照',
        to: '/photo',
      },
      {
        name: '白頭翁的危機',
        to: '/crisis',
      },
    ],
  }),
});