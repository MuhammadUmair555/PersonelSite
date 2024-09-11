
  <script setup>
  import { ref } from 'vue';
  import MyButton from '../components/feature/MyButton.vue'
  </script>

<template>
    <section class="blog-section">
        <p class="main-heading">My Blog <span>Posts </span></p>
        <div class="blog-description">
              <p>
                Welcome to my blog, where I share my journey as a frontend software engineer. Here, you'll find articles on the latest trends in web development, tips and tricks for crafting beautiful and efficient UIs, and insights into the creative process behind my projects.
            </p>
          
          </div>
        <div class="blog-wrapper ">
     
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
              <div class="blog">
                  <div class="blog-inside">
                      <div class="blog-image">
                          <img src="~/public/assets/Images/blogs/blog-post 2.jpg" alt="">
                      </div>
                      <div class="blog-name-area">
                          <div class="author"><a href="/">By : Umair Anwar Arain <span style="padding-left: 5px;">- January 15, 2025</span> </a></div>
                          <p class="blog-name">Accessibility in Web Design..!</p>
                          <p class="blog-link" >Read the story <img src="~/public/assets/Images/icon/link-out-svgrepo-com.svg" alt="Open blog" title="Open blog"></p>
                      </div>
                  </div>
              </div>
              <div class="blog">
                  <div class="blog-inside">
                      <div class="blog-image">
                          <img src="~/public/assets/Images/blogs/blog-post 4.jpg" alt="">
                      </div>
                      <div class="blog-name-area">
                          <div class="author"><a href="/">By : Umair Anwar Arain <span style="padding-left: 5px;">- January 15, 2025</span> </a></div>
                          <p class="blog-name">Accessibility in Web Design..!</p>
                          <p class="blog-link" >Read the story <img src="~/public/assets/Images/icon/link-out-svgrepo-com.svg" alt="Open blog" title="Open blog"></p>
                      </div>
                  </div>
              </div>

        </div>
        <nuxt-link style="text-decoration: none;" to="/blog">
          <MyButton buttonMargin="25px auto 0;" buttonText="Load More Posts" />
        </nuxt-link>
    </section>
</template>
  

<style lang="scss" scoped>
.blog-section{
   margin:  0;
   padding-bottom: 100px;

}
.blog-description{
      margin-bottom: 25px;
  }

.blog-wrapper{
  background-color: #181818;
    border-radius: 18px;
    padding: 30px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
  //  gap: 20px;
  //  flex-wrap: wrap;
}
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
            width: 30px !important;
            height: 30px !important;
        }
        }
      
        .blog-inside{
            border-radius: 15px;
            position: relative;
          
        }
        
        .blog-image{
            height: auto;
            position: relative;
            border-radius: 15px;
            overflow: hidden;
            img{
                width: 100%;
                margin-bottom: -10px;
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
        .blog-name-area{
            z-index: 9;
            position: relative;
            padding-top: 10px ;
          
            .blog-link{
                color: #0ead69;
                padding-top: 10px;
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

    
@media screen and (max-width: 850px) {
  .blog-wrapper{
    grid-template-columns: 1fr;
  }
}
@media screen and (max-width: 575px) {
  .blog-wrapper{
    background-color: transparent;
    border-radius: 0;
    padding: 0;
  }
  .blog {
    .blog-name-area{
      .blog-name{
      padding-top: 0 ;
    }
      .blog-link{
        padding-top: 0;
      }
    }
   
  }
}
</style>
  
  
  