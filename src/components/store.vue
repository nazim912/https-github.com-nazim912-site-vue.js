<script setup>
import { ref, computed } from 'vue';
import Movie from './Movie.vue';
import { useFilmsStore } from '../store.js';
import { films } from '../config/films.js';
const store = useFilmsStore();

function removeFromShop(movieId) {
  store.removeFilm(movieId);
}
function getFilmFromId(movieId) {
  return films.find((film) => film.id === movieId);
}
const MovieInShop = computed(() => {
  return store.films.map((film) => getFilmFromId(film));
});
</script>
<template>
  <div id="store" class="sectionPage">
    <h2>Shop</h2>
    <div v-if="MovieInShop.length === 0">
      <p>Aucun film dans le shop.</p>
    </div>
    <div v-else>
      <Movie
        v-for="(movie, index) in MovieInShop"
        :key="index"
        :title="movie.title"
        :img="movie.img"
        :id="movie.id"
      />
      <button type="button" @click="store.removeFilm(movieId)">x</button>
    </div>
  </div>
</template>
