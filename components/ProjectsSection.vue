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
    <section class="project-section">
        <p class="main-heading">My <span>Latest Work</span></p>
        <div class="project-wrapper ">
            <div class="project-description">
                <p>
                    Explore projects where my creativity in UI merges with technical expertise and design excellence across diverse domains.
                 From <span style="color:#0ead69;font-weight:500;">Dashboards</span> and <span style="color:#0ead69;font-weight:500;">AI Chatbots</span> to <span style="color:#0ead69;font-weight:500;">Websites</span> and  <span style="color:#0ead69;font-weight:500;">Mobile Apps</span>.
            </p>
            <nuxt-link style="text-decoration: none;" to="/projects">
                <button  class="view-all">All Projects</button>
            </nuxt-link >
            </div>
            <div class="projects">
                <Splide :options="options" >
                    <SplideSlide>
                        <div class="project">
                            <div class="project-inside">
                                <div class="project-image">
                                    <img src="../assets/Images/project/project-2.png" alt="">
                                </div>
                                <p class="project-status"><img src="../assets/Images/icon/live-svgrepo-com.svg" alt="live" title="Live"> Live</p>

                                <div class="project-name">
                                    Analytics Dashboard
                                    <p class="short-info">This dashboard integrates real-time market data with a focus on design excellence and development efficiency. Built with Vue.js, it offers a high-performance platform that balances aesthetic appeal with the technical rigor needed for precise financial analysis.</p>
                                </div>
                                <img class="Project-link" src="../assets/Images/icon/link-out-svgrepo-com.svg" alt="Open Project" title="Open Project">
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="project">
                            <div class="project-inside">
                                <div class="project-image">
                                    <img src="../assets/Images/project/project-umair-1s.jpg" alt="">
                                </div>
                                <p class="project-status"><img src="../assets/Images/icon/live-svgrepo-com.svg" alt="live" title="Live"> Live</p>

                                <div class="project-name">
                                    Analytics Dashboard
                                    <p class="short-info">This dashboard integrates real-time market data with a focus on design excellence and development efficiency. Built with Vue.js, it offers a high-performance platform that balances aesthetic appeal with the technical rigor needed for precise financial analysis.</p>
                                </div>
                                <img class="Project-link" src="../assets/Images/icon/link-out-svgrepo-com.svg" alt="Open Project" title="Open Project">
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="project">
                            <div class="project-inside">
                                <div class="project-image">
                                    <img src="../assets/Images/project/project-2.png" alt="">
                                </div>
                                <p class="project-status"><img src="../assets/Images/icon/live-svgrepo-com.svg" alt="live" title="Live"> Live</p>

                                <div class="project-name">
                                    Analytics Dashboard
                                    <p class="short-info">This dashboard integrates real-time market data with a focus on design excellence and development efficiency. Built with Vue.js, it offers a high-performance platform that balances aesthetic appeal with the technical rigor needed for precise financial analysis.</p>
                                </div>
                                <img class="Project-link" src="../assets/Images/icon/link-out-svgrepo-com.svg" alt="Open Project" title="Open Project">
                            </div>
                        </div>
                    </SplideSlide>

                    <SplideSlide>
                        <div class="project">
                            <div class="project-inside">
                                <div class="project-image">
                                    <img src="../assets/Images/project/project-umair-1s.jpg" alt="">
                                </div>
                                <p class="project-status"><img src="../assets/Images/icon/live-svgrepo-com.svg" alt="live" title="Live"> Live</p>

                                <div class="project-name">
                                    Analytics Dashboard 2
                                    <p class="short-info">This dashboard integrates real-time market data with a focus on design excellence and development efficiency. Built with Vue.js, it offers a high-performance platform that balances aesthetic appeal with the technical rigor needed for precise financial analysis.</p>
                                </div>
                                <img class="Project-link" src="../assets/Images/icon/link-out-svgrepo-com.svg" alt="Open Project" title="Open Project">
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="project">
                            <div class="project-inside">
                                <div class="project-image">
                                    <img src="../assets/Images/project/project-POST.jpg" alt="">
                                </div>
                                <p class="project-status"><img src="../assets/Images/icon/live-svgrepo-com.svg" alt="live" title="Live"> Live</p>

                                <div class="project-name">
                                    Mobile App Design
                                    <p class="short-info">This dashboard integrates real-time market data with a focus on design excellence and development efficiency. Built with Vue.js, it offers a high-performance platform that balances aesthetic appeal with the technical rigor needed for precise financial analysis.</p>
                                </div>
                                <img class="Project-link" src="../assets/Images/icon/link-out-svgrepo-com.svg" alt="Open Project" title="Open Project">
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>

            </div>

            <div class="feature-section">
                <ul>
                    <li><img src="../assets/Images/intro-ft-icon1.png" alt="Dedication" title="Dedication" width="50" >Dedication</li>
                    <li><img src="../assets/Images/intro-ft-icon2.png" alt="Smart Work" title="Smart Work" width="50">Smart Work</li>
                    <li><img src="../assets/Images/intro-ft-icon3.png" alt="Collaboration" title="Collaboration" width="30">Collaboration</li>
                    <li><img src="../assets/Images/intro-ft-icon4.png" alt="Technology" title="Technology" width="40">Technology</li>

                </ul>
            </div>
        </div>
    </section>
</template>
  
<style lang="scss" >
.projects {
  position: relative;
  .splide{
    padding: 0;
      .splide__slide{
        min-width: 400px;
        max-width: 400px;
      }
  }

.splide__arrows{
    position: absolute;
    top: -50px;
    left: 160px;
}
.splide__arrow svg{
    fill: #fff !important;
    width: 1em !important;
}
.splide__arrow {
    align-items: center;
    background: transparent;
    outline-color: #0ead69;
    outline-width: 1px;
    outline-style: solid;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 0;
    position: absolute;
    top: 50%;
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

@media screen and (max-width: 575px) {
    .splide{
      .splide__slide{
        min-width: unset !important;
        max-width: 400px;
      }
  }
  
    .splide__arrows{
        position: absolute;
        top: -50px;
        right: 125px;
        left: unset;
        }
    }
}
</style>
<style lang="scss" scoped>
.project-section{
    margin: 100px 0;
}
.project-wrapper{
    .project-description{
        margin-bottom: 25px;
        .view-all{
            margin-top: 25px;
            position: relative;
            border-radius: 10px;
            overflow: hidden;
            padding: 15px 25px;
            min-width: 150px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fdfdfd;
            font-size: 18px;
            font-weight: 500;
            background-color: #181818;
            // transition: all 1s ease; 
            border: none;
            z-index: 2;
            cursor: pointer;
         

            &:hover {
                background-color: #0e0e0e;
                background-image: linear-gradient(90deg, #181818 21%, #0e5d3b9c 54%, #181818 90%);
            
            }
        }
    }
     
    .project{
        z-index: 5;
        position: relative;
        overflow: hidden;
        border-radius: 15px;
        padding: 2px;
        cursor: pointer;
        border-radius: 15px;
        flex: 1;
        background: linear-gradient(180deg, transparent 48%, #0ead69);
        box-sizing: border-box;
        transition-duration: 0.5s;
        transition-delay: 0s;
        &:hover .project-image:before{
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            box-sizing: border-box;
            transition: background 1s ease;
            transition-duration: 0.5s;
            z-index: 0;
            // background: linear-gradient(0deg, #0e0e0e 6%, #0e0e0e1c 90%);
            background: #0ead69c4;
        }
        &:hover .short-info{
            color: #fdfdfd;
            }
        &:hover .Project-link{
            opacity: 1;
            transform: scale(1.5);
        }
        &.project-image{
                transform: scale(1.1);
            }
        &:before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0;
            background: linear-gradient(180deg, #0e0e0e00 28%, #0ead69);
            transition: opacity .5s;
            z-index: -1;
        }
        .project-inside{
            overflow: hidden;
            border-radius: 13px;
            position: relative;
            
        }
        .Project-link{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 30px;
            height: 30px;
            opacity: 0;
            transition-duration: 0.5s;
        }
        .project-image{
            height: 285px;
            position: relative;
            border-top-left-radius: 13px;
            border-top-right-radius: 13px;
            overflow: hidden;
            img{
                width: 100%;
            }
            &:before{
                content: "";
                position: absolute;
                top: 0;
                right: 0;
                left: 0;
                bottom: 0;
                box-sizing: border-box;
                transition: background 1s ease;
                transition-duration: 0.5s;
                z-index: 0;
                background: linear-gradient(0deg, #090909 15%, rgba(0, 0, 0, 0) 60%);
            }
        
        }

        .project-name{
            color: #fdfdfd;
            font-size: 20px;
            font-weight: 500;
            z-index: 9;
            margin-top: -80px;
            padding: 10px 20px;
            position: absolute;
            bottom: 0;
            transition-duration: 0.5s;
            
            
        }
        .project-status{
            position: absolute;
            top: 10px;
            right: 20px;
            display: flex;
            align-items: center;
            font-size: 12px;
            gap: 5px;
            color: #fdfdfd;
            img{
                width: 18px;
            }
            }
        .short-info{
        font-size: 14px;
        color: #bcbcbc;
        line-height: normal;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;  
        -webkit-line-clamp: 3; 
        }
    }

    .feature-section{
        ul{
            padding: 30px 0 0;
            display: flex;
            justify-content: space-between;
            gap: 15px;
            flex-wrap: wrap;
            margin: 10px 0 0;
        }
        li{
            list-style-type: none;
            display: flex;
            align-items: center;
            gap: 15px;
            color:#bcbcbc;
            font-size: 20px;
            background-color: #181818;
            padding: 20px 25px;
            border-radius: 15px;
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
            /* Ensuring smooth transitions */
            transition: transform 0.5s ease-in-out;
            will-change: transform;
            img{
                transform: scale(1);
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            animation: heartbeat-middle 5s infinite alternate;
            -webkit-animation: heartbeat-middle 5s infinite alternate;
            animation: heartbeat 5s ease-in-out infinite;
            }
            
            &:hover {
                /* Transform on hover */
                transform: perspective(1000px) rotateX(15deg) rotateY(15deg) scale3d(1.1, 1.1, 1.1);
            }
        }
    }
  
    @keyframes heartbeat {
    0% {
        transform: scale(1);
    }
    14% {
        transform: scale(1.2);
    }
    28% {
        transform: scale(1);
    }
    42% {
        transform: scale(1.2);
    }
    70% {
        transform: scale(1);
    }
    }
    
}
.dark-mode{
    .feature-section li{
        background-color: #e0e0e0;
        color: #181818;
    }
}
@media screen and (max-width: 575px) {
    .project-wrapper{
        .project {
        .project-image{
            height: auto;
        }
    }

        .feature-section{
            ul{
                gap: 10px;
                flex-wrap: wrap;
            } 
            li{
                // flex-direction: column;
                flex: 1;
                gap: 15px;
                font-size: 13px;
                padding: 15px 15px;
                border-radius: 10px;
                img{
                    width: 26px;
                    overflow: hidden;
                    height: 26px;
                    object-fit: contain;
                }
            }   
        }
    }
}
</style>