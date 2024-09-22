<template>
    <section class="project-section">
      <div class="analytics-cover">
        
        <img class="scrolling-image" src="~/public/assets/Images/project/analytics/project-analytics.jpg" alt="Analytics Project" title="Powerfull Analytics Dashboard">

      </div>
      <div class="analytics-title">
          <p class="main-heading" style="display: flex; align-items: center; justify-content: center;">
            <img class="analytics-logo" src="~/public/assets/Images/project/analytics/analytics-logo.png" alt="Analytics Project" title="logo">
            Analytics</p>
          <div class="project-description">
                <p>"Powerfull Analytics Dashboard Based on Vue.js"
                </p>
                <p>
                  This project showcases my ability to integrate multiple technologies and design principles to create a high  quality, professional-grade  Modern UI product. It stands as a testament to my dedication to  pushing the boundaries of UI development and delivering comprehensive solutions that meet the sophisticated demands of modern analytics.
               </p>
                
          </div>
      </div>
      <ProjectPoints style="    margin-bottom: 50px;"/>
      <div class="project-screens">
        <div class="screen-content">
          <p class="main-heading">Discover</p>
          <p>
            Dive deep into our extensive platform, offering a comprehensive and in-depth overview of stock market dynamics, trends, and shifts, ensuring you're always informed and equipped for smart investment decisions.
          </p>
        </div>
        <img class="laptop" src="~/public/assets/Images/project/laptop4.png" alt="Analytics Project" title="Powerfull Analytics Dashboard">
      </div>
      <div class="project-screens">
        <img class="laptop" src="~/public/assets/Images/project/laptop5.png" alt="Analytics Project" title="Powerfull Analytics Dashboard">

        <div class="screen-content" style="text-align: end;">
          <p class="main-heading">Explore</p>
          <p>
            Enhance your understanding of the financial world by amplifying your market insights. Our platform offers diverse analytical instruments, tools, and resources, ensuring a comprehensive approach to smart investing.
          </p>
        </div>
      </div>
      
      <div class="implementation">
        <p class="main-heading" style="font-size: 20px; margin-bottom: 15px;">Technical Implementation:</p>
        <p> Built using Vue.js, this dashboard leverages the full potential of the progressive JavaScript framework, ensuring a responsive and performant application. I utilized the Quasar UI library to create a sleek, modern interface that maintains high performance across all devices. The integration of Material Icons contributes to the visual clarity and aesthetic appeal of the dashboard.
        </p>
      </div>
      <div class="implementation">
        <p class="main-heading" style="font-size: 20px; margin-bottom: 15px">UI Features:</p>
        <ul>
          
          <li><p>Custom UI Components: Designed from the ground up to cater to specific analytic needs,component-based development that enhances user experience with modern UI elements.</p></li>
          <li><p>SCSS: Used to enhance the styling process, allowing for more flexible and maintainable CSS coding through variables, nesting, and mixins</p></li>          
        </ul>
      </div>
      
      <ShortDetail />
    </section>
</template>
  
<script setup>
import ProjectPoints from '../feature/ProjectPoints.vue';
import ShortDetail from '../feature/ShortDetail.vue'
</script>


<style lang="scss" scoped>
.analytics-cover{
  height: 450px;
  overflow: hidden;
  position: relative;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    box-sizing: border-box;
    transition: background 1s ease;
    transition-duration: 0.5s;
    z-index: -1;
    background: linear-gradient(0deg, rgba(14,14,14,1) 5%, rgba(14,14,14,0.7960434173669468) 42%, rgba(14, 14, 14, 0) 100%);
}
  .scrolling-image{
    width: 100%;
    z-index: -2;
  }
}
.analytics-logo{
  width: 70px;
}
.analytics-title{
  margin-top: -150px;
  z-index: 1;

}
.scrolling-image {
  // height: 1200px;
  width: 100%;
  top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  position: absolute;
  animation: scrollImage 20s linear infinite alternate;
}

@keyframes scrollImage {
  0% {
    transform: translateY(0); /* Start with the image's bottom at the container's bottom */
  }
  100% {
    transform: translateY(-300px); /* Move image up but keep the bottom visible */
  }
}

.project-screens{
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #181818;
  border-radius: 15px;
  padding: 10px 20px;
  margin-bottom: 30px;
  .laptop{
    width: 50%;
  }
}

.implementation{
  margin-top: 40px;
}


@media screen and (min-width: 575px) {
  // .main-heading{
  //     text-align: center;
  // }
  .project-section{
      .project-description{
        text-align: center;
      }
  }
}
</style>