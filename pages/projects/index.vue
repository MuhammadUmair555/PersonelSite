<script setup>
  import { ref } from 'vue';
  import MyButton from '../../components/feature/MyButton.vue'
  import ProjectModal from '../../components/feature/ProjectModal.vue'
  import { projects } from '../../data/projects.js';

  const isModalVisible = ref(false);
  const selectedProject = ref({});

  const openProject = (project) => {
    selectedProject.value = project;
    isModalVisible.value = true;
  };

  const closeProject = () => {
    isModalVisible.value = false;
  };
</script>

<template>

    <section class="project-section">
        <p class="main-heading">My Latest<span> Work</span></p>
        <div class="project-description">
              <p>
                A selection of projects I've designed and engineered across different domains. Clean code, thoughtful design, and real-world impact in every one. Each built with a focus on performance, scalability, and attention to detail.
              </p>
              
          </div>
        <div class="project-wrapper ">
            <div v-for="project in projects" :key="project.slug" class="project" @click="openProject(project)">
              <div class="project-inside">
                  <div class="project-image">
                      <img :src="project.mainImage"  alt="">
                  </div>
                  <p class="project-status"><img src="~/public/assets/Images/icon/live-svgrepo-com.svg" alt="live" title="Live"> Live</p>

                  <div class="project-name">
                    {{ project.title }}
                      <p class="short-info"> {{ project.info }}</p>
                  </div>
                  <img class="Project-link" src="~/public/assets/Images/icon/link-out-svgrepo-com.svg" alt="Open Project" title="Open Project">
              </div>
            </div>
              <!-- <div class="project">
                  <div class="project-inside">
                      <div class="project-image">
                          <img src="~/publicassets/Images/project/project-POST.jpg" alt="">
                      </div>
                      <p class="project-status"><img src="~/publicassets/Images/icon/live-svgrepo-com.svg" alt="live" title="Live"> Live</p>

                      <div class="project-name">
                          Analytics Dashboard
                          <p class="short-info">This dashboard integrates real-time market data with a focus on design excellence and development efficiency. Built with Vue.js, it offers a high-performance platform that balances aesthetic appeal with the technical rigor needed for precise financial analysis.</p>
                      </div>
                      <img class="Project-link" src="~/publicassets/Images/icon/link-out-svgrepo-com.svg" alt="Open Project" title="Open Project">
                  </div>
              </div>
              <div class="project">
                  <div class="project-inside">
                      <div class="project-image">
                          <img src="~/publicassets/Images/project/project-umair-1s.jpg" alt="">
                      </div>
                      <p class="project-status"><img src="~/publicassets/Images/icon/live-svgrepo-com.svg" alt="live" title="Live"> Live</p>

                      <div class="project-name">
                          Analytics Dashboard
                          <p class="short-info">This dashboard integrates real-time market data with a focus on design excellence and development efficiency. Built with Vue.js, it offers a high-performance platform that balances aesthetic appeal with the technical rigor needed for precise financial analysis.</p>
                      </div>
                      <img class="Project-link" src="~/publicassets/Images/icon/link-out-svgrepo-com.svg" alt="Open Project" title="Open Project">
                  </div>
              </div> -->
         
        </div>
        
        <ProjectModal 
          :is-visible="isModalVisible" 
          :project="selectedProject" 
          @close="closeProject" 
        />

            <nuxt-link style="text-decoration: none; text-align: center;" to="/projects">
            
                  <MyButton buttonMargin="25px auto 0;" buttonText="Load More Projects" />
           
              </nuxt-link >
          
    </section>
</template>
  

<style lang="scss" scoped>
.project-section{
    margin: 0;
    padding-bottom: 100px;
    .project-description{
        margin-bottom: 25px;
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
        -webkit-line-clamp: 2; 
        line-clamp: 2; 
        }
    } 
}

@media screen and (max-width: 850px) {
  .project-wrapper{
    grid-template-columns: 1fr;
  }
}

@media screen and (min-width: 575px) {
.main-heading{
    text-align: center;
}
.project-section{

    .project-description{
       text-align: center;
    }
}
}
</style>