<script setup>
  import { ref } from 'vue';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
  
  const options = ref({

    gap: '1rem',
    rewind: true,
    type: 'loop',
    perPage: 10,
    width: '100%',
    perMove: 1,
    arrows: true,
    // pauseOnHover: false,
    pagination: false,
    arrow: true,
    // autoScroll: {
    //   speed: 0.5,
    // },
  });
  </script>

<template>
    <section class="project-section">
        <p class="main-heading">My <span>Latest Work</span></p>
        <div class="project-wrapper ">
            <div class="project-description">
                <p>
                My Latest Work: Explore the projects where my creativity meets technical expertise, showcasing innovative solutions and design excellence.
            </p>
            <button class="view-all">All Projects</button>
            </div>
            <div class="projects">
                <Splide :options="options" >
                    
                    <SplideSlide>
                        <div class="project">
                            <div class="project-inside">
                                <div class="project-image">
                                    <img src="../assets/Images/project/project-umair-1.jpg" alt="">
                                </div>
                                <div class="project-name">
                                    Analytics Dashboard
                                    <p><img src="../assets/Images/icon/live-svgrepo-com.svg" alt="live" title="Live"> Live</p>
                                </div>
                                <img class="Project-link" src="../assets/Images/icon/link-out-svgrepo-com.svg" alt="Open Project" title="Open Project">
                            </div>
                        </div>
                    </SplideSlide>
                </Splide>

            </div>
            
        </div>
    </section>
</template>
  
<style lang="scss" >
.projects {
  margin-top: 40px;
  position: relative;
  .splide{
      .splide__slide{
        min-width: 300px;
        max-width: 300px;
      }
      .splide__arrow--prev {
        right: 4em !important;
    }
  }

}

.splide__arrows{
  display: flex;
  justify-content: end !important;
  position: relative;
  top: -50px; /* Adjust based on your design */
}
.splide__arrow--prev {
    right: 4em !important;
}
</style>
<style lang="scss" scoped>
.project-section{
    height: 100vh;
}
.project-wrapper{
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 25px;
    .project-description{
        width: 30%;
        .view-all{
            margin-top: 30px;
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
            background-color: #0e0e0e;
            transition: all 1s ease; 
            border: none;
            z-index: 2;
            cursor: pointer;
            &:after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                z-index: -1;
                width: 100%;
                background-image: linear-gradient(90deg, #181818 21%, #181818 54%, #181818 90%);
                transition: opacity 0.5s ease, background-color 1s ease; 
            }

            &:hover:after {
                background-color: #0e0e0e;
                background-image: linear-gradient(90deg, #181818 21%, #0e5d3b9c 54%, #181818 90%);
            
            }
        }
    }
    .projects{
        width: 70%;
        .project{
           
            z-index: 5;
            position: relative;
            overflow: hidden;
            border-radius: 15px;
            padding: 2px;
            cursor: pointer;
            flex: 1;
            background: linear-gradient(180deg, #0e0e0e 48%, #0ead69);
            box-sizing: border-box;
            transition-duration: 1s;
            transition-delay: 0s;
            // &:hover{
            //     box-shadow: 0px 4px 14px #0ead6854;
            // }
            &:hover .Project-link{
                opacity: 1;
                top: 20px;
                right: 20px;
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
            .project-inside{
                // background-color: #0e0e0e;
                overflow: hidden;
            border-radius: 13px;
            position: relative;
             
            }
            .Project-link{
                position: absolute;
                top: 30px;
                right: 30px;
                width: 30px;
                opacity: 0;
                transition-duration: 0.5s;
            }
            .project-image{
                height: 190px;
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
                    transition-duration: 1s;
                    z-index: 0;
                    background: linear-gradient(0deg, #0e0e0e 6%, #0e0e0e1c 90%);
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
                p{
                    display: flex;
                    align-items: center;
                    font-size: 12px;
                    gap: 5px;
                    color: #fdfdfd;
                }
                img{
                    width: 18px;
                }
            }
        }
    }
}
</style>