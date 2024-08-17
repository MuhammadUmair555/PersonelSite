<script setup>
import textslider from '../components/feature/textslider.vue'
</script>

<template>
    <section class="about-section" >
        
        <div class="about-wrapper">
            <div class="work-experience">
                <p class="main-heading">Work <span>Experience</span></p>
                <div class="education">
                    <div class="small-circle"></div>
                    <div>
                        <p class="education-name">SOFTWARE ENGINEER (Frontend)</p>
                        <p class="education-from">Officefield, Gulshan e Iqbal, Karachi  <span>( 2022 - Present )</span></p>
                    </div>
                </div>
                <div class="education">
                    <div class="small-circle"></div>
                    <div>
                        <p class="education-name">WEB DEVELOPER</p>
                        <p class="education-from">BCI New Media, Karachi<span>( 2019 - 2021 )</span></p>
                    </div>
                </div>
           </div>
            <div class="my-education">
            <p class="main-heading">My <span>Education</span></p>
            <div class="education">
                    <div class="small-circle"></div>
                    <div>
                        <p class="education-name">Bachelor in Computer Science</p>
                        <p class="education-from">Federal Urdu University, Karchi <span>( 2015 - 2019 )</span></p>
                    </div>
                </div>
                <div class="education">
                    <div class="small-circle"></div>
                    <div>
                        <p class="education-name">Diploma in Web Development</p>
                        <p class="education-from">Infra Professional<span>( 2018 - 2018 )</span></p>
                    </div>
                </div>
            </div>
        </div>
    <textslider />
    <div class="symbol-wrapper">
            <img src="../assets/Images/intro-ft-icon1.png" alt="">
                <img src="../assets/Images/intro-ft-icon2.png" alt="">
                <img src="../assets/Images/intro-ft-icon3.png" alt="">
                <img src="../assets/Images/intro-ft-icon4.png" alt="">
        </div>
    </section>
  
</template>
<style lang="scss" scoped>
.about-section{
    height: 100vh;
   
}
.symbol-wrapper{
    display: flex;
    justify-content: space-around;
    width: 100%;
}
.about-wrapper{
    display: flex;
    gap: 10px;
    align-items: flex-start;
    justify-content: space-around;
    background-color: #181818;
    border-radius: 15px;
    padding: 40px 25px;
}

.education{
    position: relative;
    display: flex;
    gap: 20px;
    margin-top: 30px;
}

.education-name{
    color: #fdfdfd;
    font-size: 20px;
    font-weight: 500;
}
.education-from{
    span{
        color: #606060;
    }
}
.education:before {
    border-left: 1px solid #606060;
    bottom: 0;
    content: "";
    left: 4px;
    position: absolute;
    top: 0;
    // z-index: 1;
}

.small-circle {
    background-color: #0ead69;
    border-radius: 100%;
    height: 10px;
    z-index: 1;
    width: 10px;
}
@media screen and (max-width: 900px) {
    .about-wrapper{
        gap: 40px;
        flex-direction: column;
    }
}
</style>