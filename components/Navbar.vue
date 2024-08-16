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
        <!-- <li><nuxt-link to="/"><div class="logo">U<span>AA</span></div></nuxt-link></li> -->
        <li><nuxt-link to="/"><div class="logo"><span>U</span><span>A</span><span>A</span></div></nuxt-link></li>

        <li><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <li><nuxt-link to="/blog">Blog</nuxt-link></li>
        <li><nuxt-link to="/contact">Contact</nuxt-link></li>
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
    -webkit-backdrop-filter: blur(8px);
    backdrop-filter: blur(8px);
    background-color:#0e0e0e4b;
    // border-bottom: 1px solid #3f3f46;
    nav{
      max-width: 1000px;
      margin: auto;
    }
  }
  nav ul {
    display: flex;
    list-style: none;
    gap: 20px;
    margin: 45px 0 30px;
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
    perspective: 600px;
    span{
      // font-weight: 200;
      // color: #fdfdfd;
        width: 60px;
        min-width: 60px;
        height: 50px;
        min-height: 50px;
        background: #0ead69;
        background: linear-gradient(90deg, rgba(14,173,105,1) 33%, rgba(2,134,77,1) 92%);
        border-radius: 8px;
        color: #FFF;
        // opacity: 0.7;
        transform: rotateY(45deg);
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: -5px;
        transition-duration: 0.5s;
        transform: perspective(135px) rotateY(39deg);
    }
    &:hover span{
      transform:none;
      width: 50px;
      min-width: 50px;
      height: 50px;
      margin-right: 12px;

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
  