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
    <section class="project-section">
        <p class="main-heading">My Blog <span>Posts </span></p>
        <div class="project-wrapper ">
            <div class="project-description">
                <p>
                    Welcome to my blog, where I share my journey as a frontend software engineer. <br> Here, you'll find articles on the latest trends in web development, tips and tricks for crafting beautiful and efficient UIs, and insights into the creative process behind my projects.
            </p>
            <button class="view-all">All Posts</button>
            </div>
            <div class="projects">
                <Splide :options="options" >
                    
                    <SplideSlide>
                        <div class="project">
                            <div class="project-inside">
                                <div class="project-image">
                                    <img src="../assets/Images/blogs/blog-post 3.jpg" alt="">
                                </div>
                                <div class="project-name">
                                    <div class="author"><a href="/">By : Umair Anwar Arain <span style="padding-left: 5px;">- January 15, 2025</span> </a></div>
                                    <p class="blog-name">Accessibility in Web Design..!</p>
                                    <p class="Project-link" >Read the story <img src="../assets/Images/icon/link-out-svgrepo-com.svg" alt="Open Project" title="Open Project"></p>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="project">
                            <div class="project-inside">
                                <div class="project-image">
                                    <img src="../assets/Images/blogs/blog-post 2.jpg" alt="">
                                </div>
                                <div class="project-name">
                                    <div class="author"><a href="/">By : Umair Anwar Arain <span style="padding-left: 5px;">- January 15, 2025</span></a></div>
                                    <p class="blog-name">Become a Frontend Developer in 5 Simple Steps..!</p>
                                    <p class="Project-link" >Read the story <img src="../assets/Images/icon/link-out-svgrepo-com.svg" alt="Open Project" title="Open Project"></p>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="project">
                            <div class="project-inside">
                                <div class="project-image">
                                    <img src="../assets/Images/blogs/blog-post 4.jpg" alt="">
                                </div>
                                <div class="project-name">
                                    <div class="author"><a href="/">By : Umair Anwar Arain </a></div>
                                   <p class="blog-name">Coming Soon..!</p>
                                    <p class="Project-link" >Read the story <img src="../assets/Images/icon/link-out-svgrepo-com.svg" alt="Open Project" title="Open Project"></p>
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
.projects {
//   margin-top: 40px;
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
    background: #0ead69;
    border: 0;
    border-radius: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 0;
    position: absolute;
    top: 50%;
    border-radius: 10px;
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
.project-section{
   margin: 100px 0;
   background-color: #181818;
    border-radius: 15px;
    padding: 40px 25px;
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
            background-color: #303030;
            border: none;
            z-index: 2;
            transition-duration: 1s;
            cursor: pointer;
            &:after {
                content: "";
                position: absolute;
                left: 0;
                bottom: 0;
                height: 100%;
                z-index: -1;
                width: 100%;
                background-color: #202020;
             
            }

            &:hover:after {
                background-color: #303030;
                background-image: linear-gradient(90deg, #202020 21%, #0e5d3b9c 54%, #202020 90%);
            
            }
        }
    }
    .projects{
        margin-right: 5px;
        .project{
            z-index: 5;
            position: relative;
            overflow: hidden;
            // border-radius: 15px;
            cursor: pointer;
            flex: 1;
            box-sizing: border-box;
            transition-duration: 0.5s;
            transition-delay: 0s;
            &:hover .project-name{
                color: #0ead69;
            }
            &:hover .Project-link {
                img{
                width: 30px !important;
                height: 30px !important;
            }
            }
          
            .project-inside{
                border-radius: 15px;
                position: relative;
             
            }
           
            .project-image{
                height: 250px;
                position: relative;
               border-radius: 15px;
                overflow: hidden;
                img{
                    width: 100%;
                }
                
            
            }
            .author{
                
                a{
                    display: flex;
                    align-items: center;
                    align-items: center;
                    text-decoration: none;
                    color: #999;
                    font-size: 12px
                }
              
            }
            .project-name{
                z-index: 9;
                position: relative;
                padding-top: 10px ;
              
               .Project-link{
                    color: #0ead69;
                    padding-top: 10px;
                    width: max-content;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    height: 20px;
                    img{
                    width: 18px;
                    transition-duration: 0.5s;

                }
                }
               
            }
            .blog-name{
                color: #fdfdfd;
                font-size: 20px;
                font-weight: 500;
                transition-duration: 0.5s;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;  
                -webkit-line-clamp: 1; 
            }
        }
    }
    
}
</style>