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
  interval: 3000,
  perPage: 5,
  perMove: 1,
  snap   : true,
  focus  : 0,
  omitEnd: true,
  gap: '1rem',
  arrows: false,
  wheel  : true,
  pagination: true,

  });
  </script>

<template>
    <section class="testimonial-section">
        <p class="main-heading">What <span>People Say</span></p>
        <p> See Testimonial what our clients say about the exceptional service  and expertise <br> we've delivered in their projects.</p>
        <div class="testimonial-wrapper ">
            <div class="my-image">
                <img src="../assets/Images/umairgif.gif" alt="">
             </div>
            <div class="testimonials" >
                <Splide :options="options"  >
                    
                    <SplideSlide>
                        <div class="testimonial">
                            <img class="qoutes" src="../assets/Images/icon/Quote.svg" alt="Qoute" title="Qoute" style="margin-left: auto;">

                            <div class="testimonial-inside">

                                <div class="testimonial-content">

                                 <p>  Working with [Umair Anwar Arain] has been a game-changer. Their expertise in frontend development is unparalleled, bringing creativity and precision to every project. Highly recommend them for any web development needs.
                                   
                                   </p>
                                </div>
                                <div class="testimonial-name">
                                    <div class="client-profile-img">
                                    <img src="../assets/Images/faiz.jpg" alt="faiz" title="Faiz">

                                    </div>
                                    <div>
                                        <span>Faiz Ahmed</span>
                                    <p>
                                       Software Engineering Fundamentals</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="testimonial">
                            <img class="qoutes" src="../assets/Images/icon/Quote.svg" alt="Qoute" title="Qoute" style="margin-left: auto;">

                            <div class="testimonial-inside">

                                <div class="testimonial-content">

                                 <p>  Working with [Umair Anwar Arain] has been a game-changer. Their expertise in frontend development is unparalleled, bringing creativity and precision to every project. Highly recommend them for any web development needs.
                                   
                                   </p>
                                </div>
                                <div class="testimonial-name">
                                    <div class="client-profile-img">
                                    <img src="../assets/Images/jawwad.jpg" alt="faiz" title="Faiz">

                                    </div>
                                    <div>
                                        <span>JAWWAD QADRI</span>
                                    <p>
                                       Technical Software Engineering</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="testimonial">
                            <img class="qoutes" src="../assets/Images/icon/Quote.svg" alt="Qoute" title="Qoute" style="margin-left: auto;">

                            <div class="testimonial-inside">

                                <div class="testimonial-content">

                                 <p>  Working with [Umair Anwar Arain] has been a game-changer. Their expertise in frontend development is unparalleled, bringing creativity and precision to every project. Highly recommend them for any web development needs.
                                   
                                   </p>
                                </div>
                                <div class="testimonial-name">
                                    <div class="client-profile-img">
                                    <img src="../assets/Images/faiz.jpg" alt="faiz" title="Faiz">

                                    </div>
                                    <div>
                                        <span>Faiz Ahmed</span>
                                    <p>
                                       Software Engineering Fundamentals</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="testimonial">
                            <img class="qoutes" src="../assets/Images/icon/Quote.svg" alt="Qoute" title="Qoute" style="margin-left: auto;">

                            <div class="testimonial-inside">

                                <div class="testimonial-content">

                                 <p>  Working with [Umair Anwar Arain] has been a game-changer. Their expertise in frontend development is unparalleled, bringing creativity and precision to every project. Highly recommend them for any web development needs.
                                   
                                   </p>
                                </div>
                                <div class="testimonial-name">
                                    <div class="client-profile-img">
                                    <img src="../assets/Images/jawwad.jpg" alt="faiz" title="Faiz">

                                    </div>
                                    <div>
                                        <span>JAWWAD QADRI</span>
                                    <p>
                                       Technical Software Engineering</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    
                </Splide>

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
        min-width: 450px;
        max-width: 500px;
      }
  }


.splide__pagination{
    align-items: start;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    margin: 0;
    pointer-events: none;
    height: 100%;
    padding-bottom: 20px;
    padding-right: 0;
}

.splide__pagination__page{
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
.splide__pagination__page.is-active {
    background: #0ead69;
    z-index: 1;
}
.splide__pagination__page:hover{
    background: #12d17e;
    z-index: 1;
}
}
</style>
<style lang="scss" scoped>
.testimonial-section{
    // height: 100vh;
}
.testimonial-wrapper{
    display: flex;
    align-items: flex-start;
    gap: 15px;
    margin-top: 25px;
    .qoutes{
    width: 50px;
    
    }
    .my-image{
        width: 30%;
        min-width: 30%;
        max-height: 293px;
        overflow: hidden;
        border-radius: 15px;
        transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);

        /* Ensuring smooth transitions */
        transition: transform 0.5s ease-in-out;
        will-change: transform;
        &:hover {
            /* Transform on hover */
            transform: perspective(1000px) rotateX(15deg) rotateY(15deg) scale3d(1.1, 1.1, 1.1);
        }
        img{
            width: 100%;
        }
    }
    .testimonials{
        width: 68%;
        .testimonial{
            // z-index: 5;
            position: relative;
            background-color: #181818;
            border-radius: 15px;
            padding: 20px;
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
             
            }
          
            .testimonial-content{
                // height: 190px;
                position: relative;
                overflow: hidden;
                p{
                    font-size: 14px;
                    margin-top: 5px;
                    min-height: 140px;
                }
            }

            .testimonial-name{
                color: #fdfdfd;
                font-size: 20px;
                font-weight: 500;
                z-index: 9;
                display: flex;
                align-items: center;
                gap: 15px;
                margin-top: 10px;
                position: relative;
                bottom: 0;
                p{
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    gap: 5px;
                    color: #0ead69;
                    line-height: 1.5;
                }
                .client-profile-img{
                    width: 60px;
                    height: 60px;
                    border-radius: 100px;
                    overflow: hidden;
                    img{
                        width: 100%;
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>