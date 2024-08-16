<script setup>
import AnimatedDesignation from './AnimatedDesignation.vue'
</script>
<template>
    <section class="home-section">
        <div class="my-name">
            <AnimatedDesignation  />

            <h1 >Umair <span> Anwar Arain </span></h1>

        </div>
        <p class="my-bio">
            Hello! I'm Umair, a passionate Software Engineer specializing in Frontend(UI/UX) Development with a strong focus on crafting immersive, user-friendly interfaces. With a deep understanding of modern web technologies and frameworks, including Vue.js, Nuxt.js, and React.js, I have dedicated my career to bringing creative ideas to life through elegant and efficient code.
        </p>
    </section>
</template>
<style lang="scss" scoped>
.home-section{
    height: 100vh;
    .my-name{
        position: relative;
        width: fit-content;
       h1{
        font-size: 55px;
        font-weight: 600;
        line-height: 1;
        color: #fdfdfd;
        text-transform: uppercase;
        margin: 0;
       }
        span{
            font-weight: 200;
            color: #dddddddd;
        }
    }
   
    .my-bio{
        margin-top: 20px;
        max-width: 65%;
    }
}
</style>