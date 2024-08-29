<script setup>
import AnimatedDesignation from './AnimatedDesignation.vue'


</script>
<template>
    <section class="home-section">
        <div class="Im-Umair">
            <div class="my-name">
                <div class="AnimatedDesignation">
                    <AnimatedDesignation  />
                </div>
                <span class="hey-there">Hey there! I'm</span>
                <h1 >Umair <span class="letter-case"> Anwar Arain </span></h1>
                <p class="my-bio">
                    I'm a <span style="color: #0ead69; font-weight: 500;">Software Engineer </span> specializing in modern UI development. Proficient in modern frameworks and technologies, I bring extensive experience in creative design and efficient code implementation to deliver exceptional user interfaces.
                </p>
            </div>
            
            <div class="umair-anwar-arain">
                <div class="circle heartbeat"></div>
                <img src="../assets/Images/umair-logo.png" alt="">
                <div class="social-border">
                <img src="../assets/Images/social.png" alt="">

                </div>
            </div>
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
           <div class="social-follwing">
                <a href="https://www.linkedin.com/in/umair-anwar-arain/" target="_blank">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill="#181818" viewBox="0 0 512 512"><path d="M116.504 500.219V170.654H6.975v329.564h109.529v.001zM61.751 125.674c38.183 0 61.968-25.328 61.968-56.953-.722-32.328-23.785-56.941-61.252-56.941C24.994 11.781.5 36.394.5 68.722c0 31.625 23.772 56.953 60.53 56.953h.721v-.001zm115.373 374.545s1.437-298.643 0-329.564H286.67v47.794h-.727c14.404-22.49 40.354-55.533 99.44-55.533 72.085 0 126.116 47.103 126.116 148.333V500.22H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531-30.254 0-48.284 20.38-56.202 40.08-2.897 7.012-3.602 16.861-3.602 26.711v184.047H177.124z" style="display:inline;fill-rule:evenodd;clip-rule:evenodd"/></svg>
                </a>
                <a href=""><svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill="#181818" stroke="#181818" viewBox="0 0 512 512"><path d="M283.122 122.174v46.583h83.424l-9.045 74.367h-74.379v268.375h-98.726V243.124h-51.443v-74.367h51.443v-56.302c0-27.82-2.096-41.02 9.725-62.578C205.948 28.32 239.308-.174 297.007.512c57.713.711 82.04 6.263 82.04 6.263l-12.501 79.257s-36.853-9.731-54.942-6.263c-18.065 3.469-28.482 14.597-28.482 42.405z" style="display:inline"/></svg></a>
            </div>
            
        </div>
    </section>
</template>
<style lang="scss" scoped>
.home-section{
    margin-bottom: 80px;
    position: relative;
    .Im-Umair{
        position: relative;
        display: flex;
        align-items: center;
    }
    .my-name{
        position: relative;
        width: fit-content;
        max-width: 65%;
        .hey-there{
            font-family: "Caveat";
            color: #0ead69;
            font-size: 20px;
            font-weight: 200;
            display: none;
        }
       h1{
        font-size: 55px;
        font-weight: 600;
        line-height: 1;
        color: #fdfdfd;
        text-transform: uppercase;
        margin: 0;
       }
       .letter-case{
            font-weight: 200;
            color: #bcbcbc;
        }
    }
    .AnimatedDesignation{
        height: 50px;
        overflow: hidden;
    }
    .my-bio{
        margin-top: 20px;
    }
    .social-follwing{
        width: 100%;
        z-index: 5;
        text-align: center;
        padding-top: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding-right: 30px;
        transition-duration: 0.5s;
        // position: relative;

        a{
            text-decoration: none;
            position: relative;
            background-color: #d4d4d4;
            margin: 1px;
            padding: 10px;
            border-radius: 50px;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition-duration: 0.5s;
            
            &:hover {
            background-color: #0ead69;
            transition-duration: 0.5s;

            }
        }
     
       
      
        
    }
    .social-border{
        position: absolute;
        right: -41px;
        top: 30px;
        z-index: -1;
        img{
            width: 328px !important;
        }
    }
    .umair-anwar-arain{
        position: absolute;
        right: 15px;
        top: 0;
        // z-index: 7;
        img{
            width: 300px;
            pointer-events: none;
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
        align-items: center;
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
  .home-section{
    .Im-Umair{
        position: relative;
        flex-direction: column-reverse;
    }
    
    .my-name{
        max-width: 100%;
    }
    .umair-anwar-arain{
        position: relative;
        right: 0;
        top: -25px;
        height: 355px;
        // width: 300px;
    }
    .social-border{
        display: none;
    }
     .contact-info {
        flex-direction: column;
        gap:unset !important;
        align-items: flex-start;
    
  }
   
}  
}
@media screen and (max-width: 575px) {
    .home-section{
        .social-border{
            display: none;
        }
        .my-name{
            h1{
                font-size: 35px;
            }
            .hey-there{
                display: block;
                font-size: 15px;
                font-family: "Sriracha", cursive;
            }
            .letter-case{
                font-size: 20px;
                // letter-spacing: -1px;
                // display: block;
                // display: none
            }
            .my-bio{
                margin-top: 15px
            }
        }
        .AnimatedDesignation{
            height: 25px;
            display: none;
        }
        .umair-anwar-arain{
            height: 210px;
            // background-color: #0ead69;
            img{
                width: 220px;
            }
            .circle{
                right: 40px;
                width: 150px;
                top: 30px;
                height: 150px;
            }
        }
      
    }
    }

</style>
<style lang="scss">

</style>