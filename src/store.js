import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useFilmsStore = defineStore('product', () => {
  const films = ref([]);

  const totalPrice = computed(() =>
    films.value.reduce(
      (accumulator, currentValue) => (accumulator || 0) + currentValue.price,
      0
    )
  );

  function addFilm(movieId) {
    films.value.push(movieId);
  }

  function removeFilm(movieId) {
    films.value.pop(movieId);
  }

  return { totalPrice, films, addFilm, removeFilm };
});
