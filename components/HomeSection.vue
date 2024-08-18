<script setup>
import AnimatedDesignation from './AnimatedDesignation.vue'
import textslider from '../components/feature/textslider.vue'
import MySkill from '../components/feature/MySkill.vue'


</script>
<template>
    <section class="home-section">
        <div class="my-name">
            <AnimatedDesignation  />

            <h1 >Umair <span> Anwar Arain </span></h1>

        </div>
        <p class="my-bio">
            I'm a <span style="color: #0ead69; font-weight: 500;">Software Engineer Frontend</span> specializing in Web and Mobile UI development. Proficient in modern frameworks and technologies, I bring extensive experience in creative design and efficient code implementation to deliver exceptional user interfaces.
        </p>
        <div class="umair-anwar-arain">
            <div class="circle heartbeat"></div>
            <img src="../assets/Images/umair-logo.png" alt="">
        </div>
         <div class="contact-info">
            <div class="info-row">
                <div class="info-item">
                <span class="label">Phone</span>
                <span class="colon">:</span>
                <span class="value">+92 312 3840 405</span>
                </div>
                <div class="info-item">
                <span class="label">Skype</span>
                <span class="colon">:</span>
                <span class="value">umair.anwar.arain</span>
                </div>
                <div class="info-item">
                <span class="label">Language</span>
                <span class="colon">:</span>
                <span class="value">English, Urdu</span>
                </div>
            </div>
            <div class="info-row">
                <div class="info-item">
                <span class="label">Email</span>
                <span class="colon">:</span>
                <span class="value">info@umairanwar.com</span>
                </div>
               
                <div class="info-item">
                <span class="label">Github</span>
                <span class="colon">:</span>
                <span class="value">github.com/MuhammadUmair555</span>
                </div>
                <div class="info-item">
                <span class="label">Residence:</span>
                <span class="colon">:</span>
                <span class="value">Pakistan, Karchi</span>
                </div>
            </div>
           
                <textslider />
            
        </div>
        <MySkill />
    </section>
</template>
<style lang="scss" scoped>
.home-section{
    margin-bottom: 40px;
    position: relative;
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
    .umair-anwar-arain{
        position: absolute;
        right: 0;
        top: 0;
        img{
            width: 300px;
        }
       .circle{
            position: absolute;
            border-radius: 50%;
            background-color:#181818;
            right: 51px;
            width: 210px;
            top: 36px;
            height: 210px;
            z-index: -1;
            transform: scale(1);
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            animation: heartbeat-middle 5s infinite alternate;
            -webkit-animation: heartbeat-middle 5s infinite alternate;
            animation: heartbeat 5s ease-in-out infinite;
        }
    }
    @keyframes heartbeat {
    0% {
        transform: scale(1);
    }
    14% {
        transform: scale(1.3);
    }
    28% {
        transform: scale(1);
    }
    42% {
        transform: scale(1.3);
    }
    70% {
        transform: scale(1);
    }
    }

    @keyframes heartbeat-bg {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.2);
        }
    }
    .contact-info {
        margin-top: 50px;
        display: flex;
        align-items: flex-start;
        gap: 30px;
        overflow: hidden;
        .info-item {
        display: flex;
        margin-bottom: 10px;

        }

        .label {
        color: #606060;
        width: 100px;
        text-align: left;
        font-size: 14px;

        }
        .colon{
            width: 30px;
        }
        .value {
        color: #dddd;
        font-size: 14px;
        }
    }
}
@media screen and (max-width: 991px) {
    .contact-info{
        flex-direction: column;
        gap:unset !important;
    }
    
}
</style>
<style lang="scss">

</style>