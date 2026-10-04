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
<div :class="{ 'scrolled': isScrolled }" class="navbar-top">
    <nav>
      <ul>
        <li class="logo-li"><nuxt-link to="/"><div class="logo">
          <img src="../public/assets/logo.png" alt="">
        </div></nuxt-link></li>
        <!-- <li><nuxt-link to="/"><div class="logo">
          <div class="animated-perspective">U</div>
          <div class="animated-perspective">A</div>
          <div class="animated-perspective">A</div>
        </div></nuxt-link></li>  -->

        <li class="on-mobile"><nuxt-link to="/">Home</nuxt-link></li>
        <li><nuxt-link to="/projects">Projects</nuxt-link></li>
        <!-- <li><nuxt-link to="/blog">Blog</nuxt-link></li> -->
        <li class="mode-toggle">
          <button @click="toggleDarkMode" aria-label="Toggle dark mode" class="mode-toggle-btn">
            <span :class="{ 'animate-toggle': isAnimating }">
              <svg v-if="isDarkMode" width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.34323 0.906284C8.18434 0.927335 8.02513 0.952691 7.86572 0.982437C2.96934 1.89614 -0.259268 6.60615 0.654436 11.5025C1.56814 16.3989 6.27815 19.6275 11.1745 18.7138C12.8551 18.4002 14.3391 17.6394 15.5267 16.5774C10.8051 17.203 6.36803 14.0269 5.48408 9.28995C4.88397 6.07409 6.07071 2.93862 8.34323 0.906284Z" fill="#0e0e0e"/>
              </svg>
              <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="4" fill="#FDC200"/>
                <path d="M12 5V3" stroke="#FDC200" stroke-width="2" stroke-linecap="round"/>
                <path d="M12 21V19" stroke="#FDC200" stroke-width="2" stroke-linecap="round"/>
                <path d="M16.9498 7.04996L18.364 5.63574" stroke="#FDC200" stroke-width="2" stroke-linecap="round"/>
                <path d="M5.63608 18.3644L7.05029 16.9502" stroke="#FDC200" stroke-width="2" stroke-linecap="round"/>
                <path d="M19 12L21 12" stroke="#FDC200" stroke-width="2" stroke-linecap="round"/>
                <path d="M3 12L5 12" stroke="#FDC200" stroke-width="2" stroke-linecap="round"/>
                <path d="M16.9498 16.95L18.364 18.3643" stroke="#FDC200" stroke-width="2" stroke-linecap="round"/>
                <path d="M5.63608 5.63559L7.05029 7.0498" stroke="#FDC200" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </span>
          </button>
        </li>

      </ul>
    </nav> 
  </div>

  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted } from 'vue';
import { useDarkMode } from '../components/feature/useDarkMode'; // Ensure this path is correct

const { isDarkMode, toggleDarkMode, isAnimating } = useDarkMode(); // Ensure isAnimating is destructured here
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
 
  
  <style scoped lang="scss">
  .navbar-top{
    position: fixed;
    padding: 0 25px;
    top: 0;
    // transition: background-color .5s, border-color .5s;
    left: 0;
    right: 0;
    z-index: 1100;
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(8px);
    background-color:#0e0e0e84;
    transition: transform 1s ease;
    border-bottom: 1px solid transparent;
    nav{
      max-width: 1200px;
      margin: auto;
    }
  }
  .navbar-top.scrolled {
  transform: translateY(-20px); /* Adjust this value to control the upward movement */
  border-bottom: 1px solid #3f3f469c;
}
.mode-toggle {
  cursor: pointer;
}

.mode-toggle-btn {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mode-toggle span {
  display: inline-block;
  transition: transform 1s ease-in-out;
  width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.mode-toggle span.animate-toggle {
  transform: rotate(360deg);
  transform-origin: center;
  transition: transform 0.5s ease-in-out;
}
  nav ul {
    display: flex;
    list-style: none;
    gap: 25px;
    margin: 32px 0 12px;
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
    font-family: "Dancing Script", cursive;
    perspective: 400px;
    transition-duration: 1s;
    max-width: 60px;
    img{
      width: 100%;
    }

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
    color: #f5f5f5a2;
    font-size: 18px;
  }
  .logo-li a{
   color: #ffffff;
  }
  
  .router-link-active {
    /* color: #00FF7F; */
    color: #ffffff;

  }
.dark-mode nav ul li a {
    
    color: #181818;
 
  }
  .dark-mode  .router-link-active {
    /* color: #00FF7F; */
    color: #0ead69;

  }
.dark-mode .navbar-top {
  background-color: rgb(255 255 255 / 52%);
}
@media screen and (max-width: 575px) {
  .logo {
    font-size: 28px;
  }
  nav ul li a {

    font-size: 16px;
  }
  .navbar-top{
    border: unset;
    padding: 0 15px;
  }
 
  .navbar-top.scrolled {
    transform: unset; 
    border-bottom: 1px solid #3f3f469c;
  }
  nav ul{
    margin: 15px 0 10px;
    // align-items: baseline;
    gap: 20px;
  }
}
  </style>
  