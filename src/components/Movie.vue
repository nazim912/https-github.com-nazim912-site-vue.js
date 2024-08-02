<script setup>
defineProps({
  title: String,
  img: String,
  id: String,
});
function removeFromShop() {
  store.removeFilm(id);
}
</script>

<template>
  <router-link :to="'/movie/' + id">
    <div class="Movie">
      <img v-if="img" :src="img" width="200px" height="300px" />
      <h3>{{ title }}</h3>
    </div>
  </router-link>
</template>
<style scoped></style>
