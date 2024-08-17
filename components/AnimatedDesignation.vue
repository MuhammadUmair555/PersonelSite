<template>
    <div class="type-wrap">
      <Typed :options="options">
        <span class="typing"></span>
      </Typed>
    </div>
  </template>
    
    <script setup lang="ts">
  import { Typed } from "@duskmoon/vue3-typed-js";
  import type { TypedOptions } from "@duskmoon/vue3-typed-js";
  
  const options: TypedOptions = {
    strings: [
      "Software Engineer Frontend",
      "Modren UI/UX Designer",
      "Graphic Designer",
      "Bloger, Social Activest",
  
    ],
    typeSpeed: 90,
    startDelay: 500,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    cursorChar: "|",
    contentType: "html",
  };
  </script>
    <style lang="scss" scoped>
  .typing {
    font-size: 30px;
    line-height: 1;
    font-family: "Caveat", cursive;

  }
  .type-wrap {
    font-size: 35px;
    font-family: "Caveat", cursive;
    line-height: 1;
    color: #0ead69;
    margin-bottom: 10px;
    
  }
 
  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
 
  </style>
  <style>
 .typed-cursor {
  color: #fdfdfd !important; 
}
</style>