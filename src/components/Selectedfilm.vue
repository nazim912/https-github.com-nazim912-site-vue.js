<script setup>
import { films } from '../config/films.js';
import { useFilmsStore } from '../store.js';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const store = useFilmsStore();
const movieId = route.params.id;
const selectedfilm = computed(() => {
  return films.find((film) => film.id === movieId);
});
</script>

<template>
  <div class="selected">
    <div class="imagefilm">
      <img
        v-if="selectedfilm.img"
        :src="selectedfilm.img"
        width="350px"
        height="500px"
      />
    </div>
    <div class="details">
      <h4>{{ movieId }}</h4>
      <p>{{ selectedfilm.description }}</p>
      <p>{{ date }}</p>
      <button type="button" @click="store.addFilm(movieId)">
        ajouter au panier
      </button>
    </div>
  </div>
</template>
<style scoped>
.selected {
  display: flex;
}
.imagefilm {
  height: 600px;
  width: 700px;
}
.details {
  padding-left: 40px;
}
img {
  margin-left: 20px;
  margin-top: 50px;
}
p {
}
h4 {
  margin-left: -800px;
  font-size: 40px;
}
button {
  margin-left: -800px;
  margin-top: 50px;
}
</style>
