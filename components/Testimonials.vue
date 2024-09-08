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
  perPage: 5,
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
    <section class="testimonial-section">
        <p data-aos="fade-up" class="main-heading">What <span>People Say</span></p>
        <p data-aos="fade-up"> See Testimonial what our clients say about the exceptional service  and expertise <span class="br-mobile"> we've delivered in their projects.</span></p>
        <div class="testimonial-wrapper ">
            <div data-aos="fade-right" class="my-image">
                <img src="../assets/Images/umairgif.gif" alt="">
             </div>
            <div data-aos="fade-left" class="testimonials" >
                <Splide :options="options"  >
                    
                    <SplideSlide>
                        <div class="testimonial">
                            <img class="qoutes" src="../assets/Images/icon/Quote.svg" alt="Qoute" title="Qoute" style="margin-left: auto;">

                            <div class="testimonial-inside">

                                <div class="testimonial-content">

                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, deleniti voluptates. Saepe, dignissimos nemo. Soluta incidunt magnam neque cum laudantium, culpa facilis! Atque, dicta? Error laboriosam accusantium.
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
                                    <div class="social-follwing">
                                        <a href="https://www.linkedin.com/in/umair-anwar-arain/" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill="#181818" viewBox="0 0 512 512"><path d="M116.504 500.219V170.654H6.975v329.564h109.529v.001zM61.751 125.674c38.183 0 61.968-25.328 61.968-56.953-.722-32.328-23.785-56.941-61.252-56.941C24.994 11.781.5 36.394.5 68.722c0 31.625 23.772 56.953 60.53 56.953h.721v-.001zm115.373 374.545s1.437-298.643 0-329.564H286.67v47.794h-.727c14.404-22.49 40.354-55.533 99.44-55.533 72.085 0 126.116 47.103 126.116 148.333V500.22H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531-30.254 0-48.284 20.38-56.202 40.08-2.897 7.012-3.602 16.861-3.602 26.711v184.047H177.124z" style="display:inline;fill-rule:evenodd;clip-rule:evenodd"/></svg>
                                        </a>
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

                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, deleniti voluptates. Saepe, dignissimos nemo. Soluta incidunt magnam neque cum laudantium, culpa facilis! Atque, dicta? Error laboriosam accusantium.
                                </p>
                                </div>
                                <div class="testimonial-name">
                                    <div class="client-profile-img">
                                    <img src="../assets/Images/jawwad.jpg" alt="faiz" title="Faiz">

                                    </div>
                                    <div>
                                        <span>Jawwad Qadri</span>
                                    <p>
                                       Technical Software Engineering</p>
                                    </div>
                                    <div class="social-follwing">
                                        <a href="https://www.linkedin.com/in/umair-anwar-arain/" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill="#181818" viewBox="0 0 512 512"><path d="M116.504 500.219V170.654H6.975v329.564h109.529v.001zM61.751 125.674c38.183 0 61.968-25.328 61.968-56.953-.722-32.328-23.785-56.941-61.252-56.941C24.994 11.781.5 36.394.5 68.722c0 31.625 23.772 56.953 60.53 56.953h.721v-.001zm115.373 374.545s1.437-298.643 0-329.564H286.67v47.794h-.727c14.404-22.49 40.354-55.533 99.44-55.533 72.085 0 126.116 47.103 126.116 148.333V500.22H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531-30.254 0-48.284 20.38-56.202 40.08-2.897 7.012-3.602 16.861-3.602 26.711v184.047H177.124z" style="display:inline;fill-rule:evenodd;clip-rule:evenodd"/></svg>
                                        </a>
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

                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, deleniti voluptates. Saepe, dignissimos nemo. Soluta incidunt magnam neque cum laudantium, culpa facilis! Atque, dicta? Error laboriosam accusantium.
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
                                    <div class="social-follwing">
                                        <a href="https://www.linkedin.com/in/umair-anwar-arain/" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill="#181818" viewBox="0 0 512 512"><path d="M116.504 500.219V170.654H6.975v329.564h109.529v.001zM61.751 125.674c38.183 0 61.968-25.328 61.968-56.953-.722-32.328-23.785-56.941-61.252-56.941C24.994 11.781.5 36.394.5 68.722c0 31.625 23.772 56.953 60.53 56.953h.721v-.001zm115.373 374.545s1.437-298.643 0-329.564H286.67v47.794h-.727c14.404-22.49 40.354-55.533 99.44-55.533 72.085 0 126.116 47.103 126.116 148.333V500.22H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531-30.254 0-48.284 20.38-56.202 40.08-2.897 7.012-3.602 16.861-3.602 26.711v184.047H177.124z" style="display:inline;fill-rule:evenodd;clip-rule:evenodd"/></svg>
                                        </a>
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

                                 <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, deleniti voluptates. Saepe, dignissimos nemo. Soluta incidunt magnam neque cum laudantium, culpa facilis! Atque, dicta? Error laboriosam accusantium.
                                </p>
                                </div>
                                <div class="testimonial-name">
                                    <div class="client-profile-img">
                                    <img src="../assets/Images/jawwad.jpg" alt="faiz" title="Faiz">

                                    </div>
                                    <div>
                                        <span>Jawwad Qadri</span>
                                    <p>
                                       Technical Software Engineering</p>
                                    </div>
                                    <div class="social-follwing">
                                        <a href="https://www.linkedin.com/in/umair-anwar-arain/" target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill="#181818" viewBox="0 0 512 512"><path d="M116.504 500.219V170.654H6.975v329.564h109.529v.001zM61.751 125.674c38.183 0 61.968-25.328 61.968-56.953-.722-32.328-23.785-56.941-61.252-56.941C24.994 11.781.5 36.394.5 68.722c0 31.625 23.772 56.953 60.53 56.953h.721v-.001zm115.373 374.545s1.437-298.643 0-329.564H286.67v47.794h-.727c14.404-22.49 40.354-55.533 99.44-55.533 72.085 0 126.116 47.103 126.116 148.333V500.22H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531-30.254 0-48.284 20.38-56.202 40.08-2.897 7.012-3.602 16.861-3.602 26.711v184.047H177.124z" style="display:inline;fill-rule:evenodd;clip-rule:evenodd"/></svg>
                                        </a>
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
@media screen and (max-width: 767px) {
        .splide{
        .splide__slide{
            // min-width: unset !important;
            max-width: unset !important;
        }
    }
}
    @media screen and (max-width: 575px) {
        .splide{
            .splide__slide{
            min-width: unset !important;
        }
        .splide__pagination{
            align-items: end;
            justify-content: center;
            margin: 0;
            padding: 0;
            bottom: -35px;
        }
    }
  
    
    }
}
</style>
<style lang="scss" scoped>
.testimonial-section{
    margin: 100px 0;
    p {
        .br-mobile{
            display: block ;
        }
    }
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
        // transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);

        /* Ensuring smooth transitions */
        // transition: transform 0.5s ease-in-out;
        // will-change: transform;
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
           
        }
        .testimonial-inside{
            position: relative;
        }
        
        .testimonial-content{
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
          
        }
        .client-profile-img{
                width: 60px;
                height: 60px;
                border-radius: 100px;
                overflow: hidden;
                min-width: 60px;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        .social-follwing{
            text-align: end;
            transition-duration: 0.5s;
            margin-left: auto;
            a{
                text-decoration: none;
                position: relative;
                background-color: #d4d4d4;
                margin: 1px;
                padding: 10px;
                border-radius: 50px;
                width: 20px;
                height: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                transition-duration: 0.5s;
                
                &:hover {
                background-color: #0ead69;
                transition-duration: 0.5s;

                }
            }
    
        }
    }
}
.dark-mode .testimonial{
    background-color: #00000014 !important;
    color: #181818;
}
.dark-mode .testimonial-name{
    color: #181818 !important;
}
.dark-mode .social-follwing a {
   background-color: #FFF !important;
}
.dark-mode .social-follwing a SVG{
   fill: #0ead69 !important;
}
@media screen and (max-width: 767px) {
    .testimonial-wrapper{
        flex-direction: column-reverse;
        .testimonials{
            width: 100%;
        }
        .my-image{
            display: none;
        }
       
    }
}
@media screen and (max-width: 575px) {
  
    .testimonial-section{
        p {
            .br-mobile{
                display: inline ;
            }
        }
        .testimonials{
            .client-profile-img{
                width: 50px;
                height: 50px;
                min-width: 50px;
               
            }
            .testimonial-name{
            color: #fdfdfd;
            font-size: 16px;
          
            p{
                font-size: 10px;
            }
          
        }
        }
    }
}
</style>