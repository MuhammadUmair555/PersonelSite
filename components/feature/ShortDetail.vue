<script setup>
  import { ref } from 'vue';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';

// import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';
// Define the component
defineComponent( {
  components: {
    Splide,
    SplideSlide,
    
  },
} );
  const options = ref({
  type  : 'loop',
  autoplay: true, 
  interval: 3500,
  perPage: 1,
  perMove: 1,
  snap   : true,
  focus  : 0,
  omitEnd: true,
  gap: '1rem',
  arrows: false,
  wheel  : true,
  pagination: true,
  speed: 1000,
  breakpoints: {
    575: {
    perPage: 1,
    perMove: 1,
    gap: '0.7rem',
    },
},
  });
  </script>
<template>
    <div class="project-content-section">
    <div class="ProjectShortSlider">
        <div data-aos="fade-left" class="stock-images" >
                <Splide :options="options"  >
                    
                    <SplideSlide>
                        <img class="laptop" src="~/public/assets/Images/project/project-stock.jpg" alt="Analytics Project" title="Powerfull Analytics Dashboard">
                    </SplideSlide>
                    <SplideSlide>
                        <img class="laptop" src="~/public/assets/Images/project/project-stock.jpg" alt="Analytics Project" title="Powerfull Analytics Dashboard">
                   
                    </SplideSlide>
                    <SplideSlide>
                        <img class="laptop" src="~/public/assets/Images/project/project-stock.jpg" alt="Analytics Project" title="Powerfull Analytics Dashboard">
                   
                    </SplideSlide>
                </Splide>
        </div>
    </div>

    <div class="screen-content" >
        <div>
           <p class="main-heading" style=" margin-bottom: 10px;"> Contact Me</p>

            <p>I’m always open to new projects and collaborations.</p>
        </div>
        <div class="service">
            <a href="mailto:eng.umairanwar@gmail.com">
            
                <svg fill="#0ead69" version="1.1" baseProfile="tiny" id="Layer_1" xmlns:x="&amp;ns_extend;" xmlns:i="&amp;ns_ai;" xmlns:graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" viewBox="-0.5 0.5 42 42" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M40.5,31.5v-18c0,0-18.2,12.7-19.97,13.359C18.79,26.23,0.5,13.5,0.5,13.5v18c0,2.5,0.53,3,3,3h34 C40.029,34.5,40.5,34.061,40.5,31.5z M40.471,9.971c0-1.821-0.531-2.471-2.971-2.471h-34c-2.51,0-3,0.78-3,2.6l0.03,0.28 c0,0,18.069,12.44,20,13.12C22.57,22.71,40.5,10.1,40.5,10.1L40.471,9.971z"></path> </g></svg>
            
            eng.umairanwar@gmail.com
            </a>
        </div>
        <div class="service">
            <a href="https://wa.me/923123840405?text=Hello,%20I%20want%20to%20know%20more%20about%20your%20services">
            
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#0ead69" fill-rule="evenodd" d="M23.993 0C10.7623 0 0 10.7653 0 23.9998c0 5.2487 1.6927 10.1162 4.57 14.0671l-2.9904 8.9169 9.2248-2.9483C14.5986 46.547 19.1264 48 24.007 48 37.2377 48 48 37.2343 48 24.0002 48 10.7657 37.2377.0004 24.007.0004h-.014V0ZM17.293 12.1908c-.4654-1.1145-.8181-1.1567-1.5231-1.1854-.24-.014-.5076-.0279-.8042-.0279-.9171 0-1.8761.268-2.4546.8605-.705.7196-2.4542 2.3984-2.4542 5.8412 0 3.4428 2.5108 6.7726 2.8491 7.2384.3527.4651 4.895 7.6327 11.9474 10.5539 5.515 2.2856 7.1516 2.0738 8.4068 1.8058 1.8336-.395 4.1329-1.75 4.7113-3.3863.5784-1.637.5784-3.0338.4089-3.33-.1692-.2963-.635-.4652-1.34-.8184-.705-.3528-4.133-2.046-4.7818-2.2717-.635-.2397-1.2412-.155-1.7205.5224-.6772.9454-1.34 1.905-1.8762 2.4832-.4232.4516-1.1147.5081-1.6927.268-.7758-.3242-2.9478-1.0867-5.6281-3.4711-2.0736-1.848-3.484-4.1476-3.8929-4.839-.4092-.7051-.0422-1.1149.2818-1.4955.3528-.4377.6911-.7479 1.0438-1.1572.3527-.409.5502-.6208.7759-1.1006.24-.4655.0705-.9454-.0987-1.2982s-1.5796-3.7956-2.158-5.192Z"/></svg>
            
            +92 312 3840 405
            </a>
            
        </div>
    </div>
   
  </div>
</template>
<style lang="scss">
 .ProjectShortSlider .splide{
    padding: 0;
      .splide__slide{
      }
  }

  .ProjectShortSlider  .splide__pagination{
    align-items: end;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    pointer-events: none;
    height: 100%;
    padding-bottom: 20px;
    // padding-right: 0;
    bottom: -4em;
}


.ProjectShortSlider  .splide__pagination__page{
    border: 0;
    border-radius: 8.5px;
    display: inline-block;
    height: 10px;
    margin: 5px;
    padding: 0;
    position: relative;
    transition: background-color .2s linear;
    width: 10px;
}
.ProjectShortSlider  .splide__pagination__page.is-active {
    background: #0ead69;
    z-index: 1;
}
.ProjectShortSlider  .splide__pagination__page:hover{
    background: #12d17e;
    z-index: 1;
}
@media screen and (max-width: 767px) {
    .ProjectShortSlider     .splide{
        .splide__slide{
            // min-width: unset !important;
            max-width: unset !important;
        }
    }
}
@media screen and (max-width: 575px) {
    .ProjectShortSlider    .splide{
        .splide__slide{
        min-width: unset !important;
    }
    .ProjectShortSlider   .splide__pagination{
        align-items: end;
        justify-content: center;
        margin: 0;
        padding: 0;
        bottom: -35px;
    }
}


}
</style>
<style lang="scss" scoped>
.project-content-section{
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  margin-top: 40px;
  margin-bottom: 100px;
  gap: 30px;
  
}
.ProjectShortSlider{
    width: calc(100% / 2 - 15px);
    .laptop{
        // max-width: 400px;
        width: 100%;
        border-radius: 15px;
    }
  }
.screen-content{
background-color: #181818;
  border-radius: 15px;
  padding: 25px 25px;
  width: calc(100% / 2 - 15px);
  display: flex;
  justify-content:center;
  flex-direction: column;
  overflow: hidden;
}
.service a{
            position: relative;
            text-decoration: none;
            border-radius: 10px;
            padding: 15px 25px;
            min-width: 190px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            overflow: hidden;
            color: #fdfdfd;
            font-size: 16px;
            font-weight: 500;
            margin-top: 15px;
            background-color: #0e0e0e;
            svg{
                width: 30px;
                min-width: 30px;
            }
         
            &:hover{
                background-image: linear-gradient(90deg, #181818 21%, #0e5d3b9c 54%, #181818 90%);
            }
        }
  </style>