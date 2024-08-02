<script>
import { Carousel, Slide } from 'vue-carousel';
</script>
<template>
  <carousel :items-to-show="1.5">
    <slide v-for="slide in 10" :key="slide">
      {{ films }}
    </slide>
  </carousel>
</template>