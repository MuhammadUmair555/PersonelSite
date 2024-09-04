<script setup>
import SkillSlider from '../feature/SkillSlider.vue'
</script>
<template>
    <div class="skill-wrapper">
        <p class="main-heading">My <span>Skills</span></p>
        
        <div class="work-experience">
                <div class="service">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill="#0ead69" viewBox="0 0 512 512"><path d="M508.434 17.784c-29.932-29.932-221.952 135.598-320.098 231.702l88.383 88.383c96.105-98.144 261.647-290.153 231.715-320.085zM166.239 274.614c-9.594 12.837-23.847 32.658-33.329 49.239l69.454 69.454c16.579-9.484 36.396-23.739 49.231-33.337l-85.356-85.356zM106.101 344.264c-14.395 1.825-28.317 8.255-39.372 19.31C28.196 402.108 48.364 431.764 0 497.783c0 0 127.405-3.055 162.643-38.294 11.055-11.055 17.485-24.976 19.31-39.371l-75.852-75.854z"/></svg>
                    </span>
                     <p class="education-name">Design</p>
                    <!-- <p class="education-from">Officefield, Gulshan e Iqbal, Karachi  <span>( 2022 - Present )</span></p> -->
                </div>
                <div class="service">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="#0ead69" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 8-4 3.6923L7 16m10-8 4 3.6923L17 16M14 4l-4 16"/></svg>
                    </span>
                     <p class="education-name">Development</p>
                </div>
                
           </div>
        <SkillSlider />

           <p class="skill-info">
            Expertise in developing UIs for web and mobile apps using modern tech like React, Next.js, and libraries. My skills include frontend development with HTML, CSS, JavaScript, and creative design in Figma and Adobe XD. I'm also experienced in Git and development tools.
        </p>
    </div>
</template>
<style lang="scss" scoped>
.skill-wrapper{
    margin-top: 40px;
}
.skill-info{
    margin-top: 30px;
}
.work-experience{
    margin-top: 30px;
    display: flex;
    gap: 25px;
}
.service {
    position: relative;
    border-radius: 10px;
    padding: 15px 25px;
    min-width: 190px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    overflow: hidden;
    background-color: #181818 ;
    svg{
        width: 30px;
    }
    

    &:hover {
        // background-color: #0e0e0e;
        background-image: linear-gradient(90deg, #181818 21%, #0e5d3b9c 54%, #181818 90%);
       

    }
}

.dark-mode .service {
    background-color: #e0e0e0;
    &:hover {
        // background-color: #0e0e0e;
        background-image: linear-gradient(90deg, #e0e0e0 21%, #0e5d3b9c 54%, #e0e0e0 90%);
       

    }
}

.education-name{
    color: #fdfdfd;
    font-size: 18px;
    font-weight: 500;
}
.dark-mode .education-name{
    color: #181818;
}
.education-from{
    span{
        color: #606060;
    }
}

@media screen and (max-width: 575px) {
    .work-experience{
        gap: 15px;
    }
    .service{
        min-width: unset;
        padding: 10px 25px;
        svg{
        width: 25px;
    }
    .education-name{
        font-size: 14px;
    }
    }
}
</style>