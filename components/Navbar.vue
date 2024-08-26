<template>
    <!-- <nav>
      <ul>
      <li><a href="/">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#blog">Blog</a></li>
      <li><a href="#contact">Contact</a></li>
      </ul>
    </nav> -->
<div class="navbar-top">
    <nav>
      <ul>
        <li><nuxt-link to="/"><div class="logo">U<span>AA</span></div></nuxt-link></li>
        <!-- <li><nuxt-link to="/"><div class="logo">
          <div class="animated-perspective">U</div>
          <div class="animated-perspective">A</div>
          <div class="animated-perspective">A</div>
        </div></nuxt-link></li> -->

        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
      </ul>
    </nav> 
  </div>
<!-- 
    <nav>
  <ul>
    <li><a @click="scrollToSection('home')">Home</a></li>
    <li><a @click="scrollToSection('about')">About</a></li>
    <li><a @click="scrollToSection('projects')">Projects</a></li>
    <li><a @click="scrollToSection('blog')">Blog</a></li>
    <li><a @click="scrollToSection('contact')">Contact</a></li>
  </ul>
</nav> -->
<!-- <nav>
  <ul>
    <li><a @click="navigateTo('home')">Home</a></li>
    <li><a @click="navigateTo('about')">About</a></li>
    <li><a @click="navigateTo('projects')">Projects</a></li>
    <li><a @click="navigateTo('blog')">Blog</a></li>
    <li><a @click="navigateTo('contact')">Contact</a></li>
  </ul>
</nav>  -->
  </template>
  
  <script setup>
// const scrollToSection = (section) => {
//   const element = document.getElementById(section);
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth' });
//   }
// };
</script>
  
  <style scoped lang="scss">
  .navbar-top{
    position: fixed;
    padding: 0 25px;
    top: 0;
    transition: background-color .5s, border-color .5s;
    left: 0;
    right: 0;
    z-index: 1100;
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(8px);
    background-color:#0e0e0e84;
    // background-color:#0e0e0e;
    border-bottom: 1px solid #3f3f46;
    nav{
      max-width: 1000px;
      margin: auto;
    }
  }
  nav ul {
    display: flex;
    list-style: none;
    gap: 25px;
    margin: 40px 0 20px;
    padding: 0;
    align-items: center;
    justify-content: end;
  }
  
  nav ul li {
    margin: 0;
    &:first-child{
      margin-right: auto;
    }
  }
  .logo {
    font-size: 30px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 400px;
    transition-duration: 1s;

    .animated-perspective {
        width: 60px;
        min-width: 60px;
        height: 50px;
        min-height: 50px;
        background: linear-gradient(90deg, rgba(14,173,105,1) 33%, rgba(2,134,77,1) 92%);
        border-radius: 8px;
        color: #fdfdfd;
        display: flex;
        justify-content: center;
        align-items: center;
        transition-duration: 1s;
        // margin-left: -5px;
        transform-style: preserve-3d;
        animation: animated-perspective 8s ease-in-out;
        animation-fill-mode: forwards;
    }
    
    &:hover .animated-perspective {
      animation: animated-perspective 6s infinite ease-in-out;

    }
}

@keyframes animated-perspective {
    0% {
        transform: perspective(135px) rotateY(45deg);
    }
    // 25% {
    //     transform: perspective(135px) rotateY(90deg);
    // }
    // 50% {
    //     transform: perspective(135px) rotateY(135deg);
    // }
    75% {
        transform: perspective(135px) rotateY(180deg);
    }
    100% {
        transform: perspective(135px) rotateY(225deg);
    }
    50%, 100% {
        transform: perspective(135px) rotateY(225deg); /* Complete rotation */
    }
    100%, 50% {
        transform: perspective(135px) rotateY(225deg); /* Hold the final state */
    }
}



  nav ul li a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
  }
  .router-link-active {
    /* color: #00FF7F; */
    color: #0ead69;


  }
  </style>
  