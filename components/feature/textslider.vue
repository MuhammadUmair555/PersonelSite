<template>
  <div class="slider-skill">
    <Splide :options="options" :extensions="{ AutoScroll }">
      <SplideSlide>
        <img src="../../assets/Images/intro-ft-icon1.png" alt="">
      </SplideSlide>
      <SplideSlide>
        <img src="../../assets/Images/intro-ft-icon2.png" alt="">
      </SplideSlide>
      <SplideSlide>
        <img src="../../assets/Images/intro-ft-icon3.png" alt="">
      </SplideSlide>
      <SplideSlide>
        <img src="../../assets/Images/intro-ft-icon4.png" alt="">
      </SplideSlide>
      <SplideSlide>
        <img src="../../assets/Images/intro-ft-icon3.png" alt="">
      </SplideSlide>
      <SplideSlide>
        <img src="../../assets/Images/intro-ft-icon4.png" alt="">
      </SplideSlide>
    </Splide>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const options = ref({
  gap: 0,
  rewind: true,
  type: 'loop',
  perPage: 2.5,
  perMove: 1,
  autoplay: 'pause',
  pauseOnHover: false,
  arrows: false,
  pagination: false,
  autoScroll: {
    speed: 0.5, // Adjust speed to your liking
  },
  breakpoints: {
    991: {
      perPage: 10,
      gap: '1rem',
      width: 1000,
    },
   
  },
});

</script>

<style lang="scss">
.slider-skill {
  max-width: 300px ;
  align-self: end;
  .Splide {
    justify-content: center;
  }
  .splide__slide {
    min-width: 100px;
    // max-width: 100px;
    text-align: center;
  }
}
@media screen and (max-width: 991px) {
  .slider-skill{
        max-width: 100%;
        .splide .splide__track{
        
        }
    }

}
</style>
