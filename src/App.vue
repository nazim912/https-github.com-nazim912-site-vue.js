<script setup>
import Main from './components/Main.vue';
import apropos from './components/apropos.vue';
import contact from './components/contact.vue';
import message from './components/message.vue';
import Shop from './components/store.vue';
import Header from './components/Header.vue';
import Liste from './components/Liste.vue';
import { films } from './config/films.js';
import Selectedfilm from './components/Selectedfilm.vue';
import { computed } from 'vue';
import Moviescarousel from './components/Moviescarousel.vue';

const selectedfilm = computed(() => {
  return films.value[0];
});
</script>

<template>
  <div class="page">
    <Header></Header>
    <router-view> </router-view>
  </div>
</template>
<style scoped>
.page {
  background-image: url('./assets/images/simple-grunge-distressed-effect-wallpaper-600nw-1551828347.webp');
  object-fit: cover;
  padding-top: 60px;
}
.logo {
  height: 6em;
  padding: 1.5em;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
