<script setup>
import { computed } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
import Movie from './Movie.vue';

const props = defineProps({
  title: String,
  films: Array,
});
const slides = computed(() => {
  if (!props.films?.length) {
    return [];
  }

  const size = 4;
  return Array.from({ length: Math.ceil(props.films.length / size) }, (v, i) =>
    props.films.slice(i * size, i * size + size)
  );
});
console.log(props, slides);
</script>

<template>
  <div>
    <h2>{{ title }}</h2>
    <Carousel :items-to-show="1.5">
      <Slide v-for="(slide, index) in slides" :key="index">
        <Movie
          v-for="(movie, index) in slide"
          :title="movie.titre"
          :img="movie.img"
          :id="movie.id"
        >
        </Movie>
        <films
          v-for="(movie, index) in slide"
          :title="movie.titre"
          :img="movie.img"
          :id="movie.id"
        >
        </films>
      </Slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </Carousel>
  </div>
</template>
<style scoped>
.carousel__slide {
  gap: 50px;
}
</style>
