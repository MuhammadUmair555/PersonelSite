<script setup>
  import { ref } from 'vue';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
  // or other themes
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

  perPage: 5,
  perMove: 1,
  snap   : true,
  focus  : 0,
  omitEnd: true,
  drag   : 'free',
  gap: '1rem',
  arrows: true,
  wheel  : true,
  pagination: false,

  });
  </script>

<template>
    <section class="testimonial-section">
        <p class="main-heading">What <span>People Say</span></p>
        <p> See what our clients say about the exceptional service <br> and expertise we've delivered in their projects.</p>
        <div class="testimonial-wrapper ">
            
            <div class="testimonials">
                <Splide :options="options" >
                    
                    <SplideSlide>
                        <div class="testimonial">
                            <div class="testimonial-inside">

                                <div class="testimonial-content">
                                <img class="qoutes" src="../assets/Images/icon/quote-svgrepo-com.svg" alt="Qoute" title="Qoute">

                                 <p>  Working with [Umair Anwar Arain] has been a game-changer. Their expertise in frontend development is unparalleled, bringing creativity and precision to every project. Highly recommend them for any web development needs
                                   
                                   </p>
                                </div>
                                <div class="testimonial-name">
                                    <img src="../assets/Images/icon/live-svgrepo-com.svg" alt="live" title="Live">
                                    <div>
                                        <span>Analytics Dashboard</span>
                                    <p> Live</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="testimonial">
                            <div class="testimonial-inside">
                                <div class="testimonial-image">
                                    <img src="../assets/Images/testimonial/testimonial-umair-1.jpg" alt="">
                                </div>
                                <div class="testimonial-name">
                                    Analytics Dashboard
                                    <p><img src="../assets/Images/icon/live-svgrepo-com.svg" alt="live" title="Live"> Live</p>
                                </div>
                                <img class="testimonial-link" src="../assets/Images/icon/link-out-svgrepo-com.svg" alt="Open testimonial" title="Open testimonial">
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="testimonial">
                            <div class="testimonial-inside">
                                <div class="testimonial-image">
                                    <img src="../assets/Images/testimonial/testimonial-umair-1.jpg" alt="">
                                </div>
                                <div class="testimonial-name">
                                    Analytics Dashboard
                                    <p><img src="../assets/Images/icon/live-svgrepo-com.svg" alt="live" title="Live"> Live</p>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                         <div class="testimonial">
                            <div class="testimonial-inside">
                                <div class="testimonial-image">
                                    <img src="../assets/Images/testimonial/testimonial-umair-1.jpg" alt="">
                                </div>
                                <div class="testimonial-name">
                                    Analytics Dashboard
                                    <p><img src="../assets/Images/icon/live-svgrepo-com.svg" alt="live" title="Live"> Live</p>
                                </div>
                                <img class="testimonial-link" src="../assets/Images/icon/link-out-svgrepo-com.svg" alt="Open testimonial" title="Open testimonial">
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>

            </div>
            <div class="my-image">
                <p>
                Explore the testimonials where my creativity meets technical expertise, showcasing innovative solutions and design excellence.
                </p>
             </div>
        </div>
    </section>
</template>
  
<style lang="scss" >
.testimonials {
//   margin-top: 40px;
  position: relative;
  .splide{
    padding: 0;
      .splide__slide{
        min-width: 300px;
        max-width: 300px;
      }
  }



.splide__arrows{
    position: absolute;
    bottom: 26px;
    right: -139px;
}
.splide__arrow svg{
    fill: #fff !important;
    width: 1.5em !important;
}
.splide__arrow {
    align-items: center;
    background: #0ead69;
    border: 0;
    border-radius: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 0;
    position: absolute;
    top: 50%;
    border-radius: 5px;
    transform: translateY(-50%);
    width: 3.5em;
    height: 3.5em;
    z-index: 1;
}
.splide__arrow:disabled {
    opacity: .2;
    // background-color: #181818;
}
.splide__arrow--prev {
    right: 10em !important;
}
.splide__arrow--next {
    right: -9em !important;
}
}
</style>
<style lang="scss" scoped>
.testimonial-section{
    height: 100vh;
}
.testimonial-wrapper{
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 25px;
    .my-image{
        width: 30%;
        min-width: 30%;
    }
    .testimonials{
        width: 70%;
        .testimonial{
            // z-index: 5;
            position: relative;
            overflow: hidden;
            padding: 2px;
            cursor: pointer;
            flex: 1;
            box-sizing: border-box;
            transition-duration: 0.5s;
            transition-delay: 0s;
           
            // &:before{
            //     content: "";
            //     position: absolute;
            //     top: 0;
            //     left: 0;
            //     right: 0;
            //     bottom: 0;
            //     opacity: 0;
            //     background: linear-gradient(180deg, #0e0e0e00 28%, #0ead69);
            //     transition: opacity .5s;
            //     z-index: -1;
            // }
            // &:hover:before{
            //     content: "";
            //     position: absolute;
            //     top: 0;
            //     left: 0;
            //     right: 0;
            //     opacity: 1;
            //     bottom: 0;
            //     background: linear-gradient(360deg, #0e0e0e00 , #0ead69);
            //     transition: opacity .5s;
            //     z-index: -1;
            // }
            .testimonial-inside{
                // background-color: #0e0e0e;
                // overflow: hidden;
            position: relative;
             .qoutes{
                width: 50px;
                
             }
            }
          
            .testimonial-content{
                // height: 190px;
                position: relative;
               
                overflow: hidden;
                
            }

            .testimonial-name{
                color: #fdfdfd;
                font-size: 20px;
                font-weight: 500;
                z-index: 9;
                display: flex;
                align-items: center;
                gap: 15px;
                margin-top: 30px;
                position: relative;
                bottom: 0;
                p{
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    gap: 5px;
                    color: #fdfdfd;
                }
                img{
                    width: 50px;
                    height: 50px;
                }
            }
        }
    }
}
</style>