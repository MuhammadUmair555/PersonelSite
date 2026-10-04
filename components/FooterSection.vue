<template>

<div class="footer">
 <div class="footer-content">
      <ul>
        <li class="designDevelopment">Designed and Developed by: Muhammad Umair.</li>
        <li >Copyright &copy; {{ new Date().getFullYear() }} All rights reserved.</li>
      </ul>
    </div>
  </div>

  </template>
  
  <script setup>
  import { ref  } from 'vue';
  
  
  </script>
  
  <style scoped lang="scss">
  .footer{
    position: relative;
    margin-top: 100px;
    padding: 0;
    z-index: 1100;
    -webkit-backdrop-filter: blur(50px);
    backdrop-filter: blur(8px);
    background-color:#0e0e0e84;
    transition: transform 1s ease;
    border-top: 1px solid #3f3f469c;
    .footer-content{
      max-width: 1000px;
      margin: auto;
    }
  }

  .footer-content ul {
    display: flex;
    list-style: none;
    gap: 10px;
    margin:0px 0 10px;
    padding: 0;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  
  .footer-content ul li {
    font-size: 14px;
  }
  

.designDevelopment{
  color: #f5f5f5;
    margin-top: -11px;
    padding: 0 10px;
    background-color: #0e0e0e;
}
.dark-mode .footer{
  background-color: #fdfdfd;
  color: #181818;
}
.dark-mode .designDevelopment{
  background-color: #fdfdfd;
  color: #181818;
}

.footer-content ul li a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 14px;
    // margin: 0 5;

  }
  .router-link-active {
    /* color: #00FF7F; */
    color: #0ead69;

  }
.dark-mode .router-link-active {
    /* color: #00FF7F; */
    color: #0ead69;

  }

@media screen and (max-width: 575px) {
  
  .footer-content ul li  {
    font-size: 12px;
    a{
    font-size: 12px;
    // margin: 0 5px;
    }
  }
 

  
}
  </style>
  