<script setup>
import { ref } from 'vue';
import { starfilm } from '../config/films.js';
import Movie from './Movie.vue';
import { computed } from 'vue';
import Moviescarousel from './Moviescarousel.vue';
import { filmsdepossession, tueurs, documentaires } from '../config/films.js';

const items = ref(starfilm);
const film1 = ref(filmsdepossession);
const film2 = ref(tueurs);
const film3 = ref(documentaires);
</script>
<template>
  <div class="main">
    <div>
      <h1>Fearflix</h1>
      <p>
        Explorez notre vaste collection de films d'horreur, soigneusement
        sélectionnés pour vous offrir des expériences inoubliables. Des
        classiques intemporels aux dernières nouveautés du genre, notre
        catalogue saura satisfaire les goûts les plus exigeants des adeptes du
        macabre.
      </p>
    </div>
  </div>
  <div>
    <h2>Liste des films de la semaine :</h2>
    <ul class="liste">
      <li v-for="(item, index) in items" :key="index">
        <Movie :title="item.titre" :img="item.img" :id="item.id"></Movie>
      </li>
    </ul>
  </div>
  <div>
    <Moviescarousel
      title="-films de possession-"
      :films="film1"
    ></Moviescarousel>
    <Moviescarousel title="-films de tueurs-" :films="film2"></Moviescarousel>
    <Moviescarousel title="-documentaires-" :films="film3"></Moviescarousel>
  </div>
</template>

<style scoped>
h1 {
  font-size: 48px;
  color: #d3d3d9;
}
h2 {
  font-size: 28px;
  padding-bottom: 52px;
}
h3 {
  padding-bottom: 50px;
}
p {
  font-size: 18px;
  padding-left: 150px;
  padding-right: 150px;
}
.liste {
  display: flex;
  justify-content: center;
  gap: 20px;
  list-style-type: none;
}
.logo {
  height: 30px;
  padding: 2px;
  width: 30px;
}
.menu {
  display: flex;
}
</style>
