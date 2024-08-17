<template>
    <Splide :options="options">
      <SplideSlide>
        <h1>Slider 1</h1>
        <h1>Slider 1</h1>

      </SplideSlide>
      <SplideSlide>
        <h1>Slider 1</h1>
        <h1>Slider 1</h1>

      </SplideSlide>
    </Splide>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Splide, SplideSlide } from '@splidejs/vue-splide'
  
  const options = ref({
    rewind: true,
    width: 800,
    gap: '1rem',
  })
  </script>