<script setup>
import { ref, computed } from 'vue';
import Moviescarousel from './Moviescarousel.vue';
import Movie from './Movie.vue';
import 'vue3-carousel/dist/carousel.css';
import { filmsdepossession, tueurs, documentaires } from '../config/films.js';

const film1 = ref(filmsdepossession);
const film2 = ref(tueurs);
const film3 = ref(documentaires);
</script>

<template></template>
<style scoped>
.liste {
  display: flex;
  justify-content: center;
  gap: 30px;
  list-style-type: none;
}

:deep(.carousel__viewport) {
  width: 100%;
}
:deep(.carousel__slide) {
  gap: 55px;
}
</style>
