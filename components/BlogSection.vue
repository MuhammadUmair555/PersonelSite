<script setup>
  import { ref } from 'vue';
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
  // or other themes
// import '@splidejs/vue-splide/css/skyblue';
import '@splidejs/vue-splide/css/sea-green';

// or only core styles
import '@splidejs/vue-splide/css/core';
import MyButton from './feature/MyButton.vue';

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
    <section class="blog-section">
        <p data-aos="fade-up" class="main-heading">My Blog <span>Posts </span></p>
        <div class="blog-wrapper ">
            <div data-aos="fade-up" class="blog-description">
                <p>
                    Welcome to my blog, where I share my journey as a frontend software engineer. <br> Here, you'll find articles on the latest trends in web development, tips and tricks for crafting beautiful and efficient UIs, and insights into the creative process behind my projects.
            </p>
            <nuxt-link style="text-decoration: none;" to="/blog">
                <MyButton buttonMargin="25px 0 0" buttonText="All Posts" />
            </nuxt-link>
            </div>
            <div data-aos="fade-left" class="blogs">
                <Splide :options="options" >
                    
                    <SplideSlide>
                        <div class="blog">
                            <div class="blog-inside">
                                <div class="blog-image">
                                    <img src="~/public/assets/Images/blogs/blog-post 3.jpg" alt="">
                                </div>
                                <div class="blog-name-area">
                                    <div class="author"><a href="/">By : Umair Anwar Arain <span style="padding-left: 5px;">- January 15, 2025</span> </a></div>
                                    <p class="blog-name">Accessibility in Web Design..!</p>
                                    <p class="blog-link" >Read the story <img src="~/public/assets/Images/icon/link-out-svgrepo-com.svg" alt="Open blog" title="Open blog"></p>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="blog">
                            <div class="blog-inside">
                                <div class="blog-image">
                                    <img src="~/public/assets/Images/blogs/blog-post 2.jpg" alt="">
                                </div>
                                <div class="blog-name-area">
                                    <div class="author"><a href="/">By : Umair Anwar Arain <span style="padding-left: 5px;">- January 15, 2025</span></a></div>
                                    <p class="blog-name">Become a Frontend Developer in 5 Simple Steps..!</p>
                                    <p class="blog-link" >Read the story <img src="~/public/assets/Images/icon/link-out-svgrepo-com.svg" alt="Open blog" title="Open blog"></p>
                                </div>
                            </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="blog">
                            <div class="blog-inside">
                                <div class="blog-image">
                                    <img src="~/public/assets/Images/blogs/blog-post 4.jpg" alt="">
                                </div>
                                <div class="blog-name-area">
                                    <div class="author"><a href="/">By : Umair Anwar Arain </a></div>
                                   <p class="blog-name">Coming Soon..!</p>
                                    <p class="blog-link" >Read the story <img src="~/public/assets/Images/icon/link-out-svgrepo-com.svg" alt="Open blog" title="Open blog"></p>
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
.blogs {
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
    right: 125px;
}
.splide__arrow svg{
    fill: #fff ;
    width: 1em !important;
}
.dark-mode .splide__arrow svg{
    fill: #181818 !important;
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
  
}
}
.dark-mode .blogs{
    .splide__arrow {
    background: #0ead69 !important;
    outline-color: #0ead69;
}
}
</style>
<style lang="scss" scoped>
.blog-section{
   margin: 100px 0;
   background-color: #181818;
    border-radius: 15px;
    padding: 40px 25px;
}
.blog-wrapper{
    .blog-description{
        margin-bottom: 25px;
        
    }
    .blogs{
        margin-right: 5px;
        .blog{
            z-index: 5;
            position: relative;
            overflow: hidden;
            // border-radius: 15px;
            cursor: pointer;
            flex: 1;
            box-sizing: border-box;
            transition-duration: 0.5s;
            transition-delay: 0s;
            &:hover .blog-name{
                color: #0ead69;
            }
            &:hover .blog-link {
                img{
                width: 20px !important;
                height: 20px !important;
            }
            }
          
            .blog-inside{
                border-radius: 15px;
                position: relative;
             
            }
           
            .blog-image{
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
         
            .blog-name-area {
                    z-index: 9;
                    position: relative;
                    padding-top: 10px;
                    .blog-link{
                    color: #0ead69;
                    width: max-content;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    height: 23px;
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
.dark-mode .blog-section {
    background-color: #00000014 ;
}
.dark-mode .blog-name{
    color: #181818 !important;
}
@media screen and (max-width: 575px) {
    .blog-section{
        margin: 100px -25px;

        .blog-image{
            height: auto !important;
            
        }
    }
}
</style>