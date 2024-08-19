<template>
    <div class="skill-slider">
      <Splide :options="options" :extensions="{ AutoScroll }">
        <!-- Custom Arrows within Splide -->
        <template #arrows>
          <div class="splide__arrows">
            <button class="splide__arrow splide__arrow--prev" type="button">
              <p>Prev</p>
            </button>
            <button class="splide__arrow splide__arrow--next" type="button">
              <p>Next</p>
            </button>
          </div>
        </template>
        
        <!-- Slides -->
        <SplideSlide>
                <div class="skill-logo">
                    <img src="../../assets/Images/skill/javascript-svgrepo-com (1).svg" alt="javaScript" title="javaScript">
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="skill-logo">
                    <img src="../../assets/Images/skill/reactjs-svgrepo-com.svg" alt="react.js" title="React.js">
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="skill-logo">
                    <img src="../../assets/Images/skill/vue-9-logo-svgrepo-com.svg" alt="Vue.js" title="Vue.js">
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="skill-logo">
                    <img src="../../assets/Images/skill/sass-svgrepo-com" alt="scss" >
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="skill-logo">
                    <img src="../../assets/Images/skill/sass-svgrepo-com.svg" alt="nuxt.js" title="Nuxt.js">
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="skill-logo">
                    <img src="../../assets/Images/skill/nuxt-dot-js-svgrepo-com.svg" alt="nuxt.js" title="Nuxt.js">
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="skill-logo">
                    <img src="../../assets/Images/skill/jquery-fill-svgrepo-com.svg" alt="jQuery" title="jQuery">
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="skill-logo">
                    <img src="../../assets/Images/skill/git-svgrepo-com.svg" alt="git" title="git">
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="skill-logo">
                    <img src="../../assets/Images/skill/photoshop-svgrepo-com.svg" alt="Photoshop" title="Photoshop">
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="skill-logo">
                    <img src="../../assets/Images/skill/html5-01-svgrepo-com.svg" alt="Html5" title="Html5">
                </div>
            </SplideSlide>
            <SplideSlide>
                <div class="skill-logo">
                    <img src="../../assets/Images/skill/css3-01-svgrepo-com.svg" alt="css3" title="css3">
                </div>
            </SplideSlide>
        <!-- Add more SplideSlide elements here -->
      </Splide>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
  
  const options = ref({
    // classes: {
    //   arrows: 'splide__arrows splide__arrows--custom', // Your custom class
    //   arrow: 'splide__arrow', 
    //   prev: 'splide__arrow--prev',
    //   next: 'splide__arrow--next',
    // },
    gap: '1rem',
    rewind: true,
    type: 'loop',
    perPage: 10,
    width: '100%',
    perMove: 1,
    arrows: false,
    pauseOnHover: false,
    pagination: false,
    autoScroll: {
      speed: 0.5,
    },
  });
  </script>
  
  <style lang="scss" >
  .skill-slider {
    margin-top: 30px;
    position: relative;
    .splide{
        .splide__slide{
            min-width: 50px;
        }
    }
  }
  
  .skill-logo img {
    width: 50px;
  }
  
  .splide  .splide__arrows{
    display: flex;
    justify-content: end !important;
    position: relative;
    top: -50px; /* Adjust based on your design */
  }
//   .splide__arrow {
//     -ms-flex-align: center;
//     align-items: center;
//     background: #ccc;
//     border: 0;
//     border-radius: 50%;
//     cursor: pointer;
//     display: -ms-flexbox;
//     display: flex;
//     height: 2em;
//     -ms-flex-pack: center;
//     justify-content: center;
//     opacity: .7;
//     padding: 0;
//     position: unset !important;
//     top: unset !important;
//     transform: unset !important;
//     width: 2em;
//     z-index: 1;
// }
//   .splide__arrow--prev,
//   .splide__arrow--next {
//     background-color: #333;
//     color: #fff;
//     padding: 10px;
//     border: none;
//     cursor: pointer;
//   }
  </style>
  