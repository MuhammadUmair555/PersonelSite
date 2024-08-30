<script setup>
  import { ref } from 'vue';
 
</script>

<template>
    <section class="project-section">
        <p class="main-heading">My Latest<span> Work</span></p>
        <div class="project-description">
              <p>
                  Explore projects where my creativity in UI merges with technical expertise and design excellence across diverse domains.
                From <span style="color:#0ead69;font-weight:500;">Dashboards</span> and <span style="color:#0ead69;font-weight:500;">AI Chatbots</span> to <span style="color:#0ead69;font-weight:500;">Websites</span> and  <span style="color:#0ead69;font-weight:500;">Mobile Apps</span>.
              </p>
              
          </div>
        <div class="project-wrapper ">
            
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
              <div class="project">
                  <div class="project-inside">
                      <div class="project-image">
                          <img src="../assets/Images/project/project-POST.jpg" alt="">
                      </div>
                      <p class="project-status"><img src="../assets/Images/icon/live-svgrepo-com.svg" alt="live" title="Live"> Live</p>

                      <div class="project-name">
                          Analytics Dashboard
                          <p class="short-info">This dashboard integrates real-time market data with a focus on design excellence and development efficiency. Built with Vue.js, it offers a high-performance platform that balances aesthetic appeal with the technical rigor needed for precise financial analysis.</p>
                      </div>
                      <img class="Project-link" src="../assets/Images/icon/link-out-svgrepo-com.svg" alt="Open Project" title="Open Project">
                  </div>
              </div>
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
         
        </div>
            <nuxt-link style="text-decoration: none; text-align: center;" to="/projects">
                  <button  class="view-all">Load More Projects</button>
              </nuxt-link >
          
    </section>
</template>
  

<style lang="scss" scoped>
.project-section{
    margin: 0;
    padding-bottom: 100px;
    .project-description{
        margin-bottom: 25px;
        text-align: left;
    }
    .view-all{
        margin: 25px auto 0;
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

.project-wrapper{
    border-radius: 18px;
    // padding: 30px;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 30px;
    .project{
        z-index: 5;
        position: relative;
        overflow: hidden;
        border-radius: 15px;
        padding: 2px;
        cursor: pointer;
        border-radius: 15px;
        flex: 1;
        background: linear-gradient(180deg, #0e0e0e 48%, #0ead69);
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
            height: auto;
            max-height: 320px;
            position: relative;
            border-top-left-radius: 13px;
            border-top-right-radius: 13px;
            overflow: hidden;
            img{
                width: 100%;
                margin-bottom: -10px;
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
}

@media screen and (max-width: 850px) {
  .project-wrapper{
    grid-template-columns: 1fr;
  }
}
@media screen and (max-width: 575px) {

}
</style>