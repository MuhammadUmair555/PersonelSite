<script setup>
import MySkill from '../components/feature/MySkill.vue'
// const isDarkMode = ref(localStorage.getItem('darkMode') === 'true');
const isDarkMode = ref(false);
</script>

<template>
    <section class="about-section" :class="{ 'dark-mode': isDarkMode }">
        <MySkill />

        <!-- <div data-aos="fade-up" class="gradient-border">
            <div class="about-wrapper">
                <div data-aos="fade-right" class="work-experience">
                    <p class="main-heading">Work <span>Experience</span></p>
                    <div class="education">
                        <div class="small-circle"></div>
                        <div>
                            <p class="education-name">Senior Software Engineer (Frontend)</p>
                            <p class="education-from">Officefield, Karachi  <span>( 2022 - Present )</span></p>
                        </div>
                    </div>
                    <div class="education">
                        <div class="small-circle"></div>
                        <div>
                            <p class="education-name">Software Engineer</p>
                            <p class="education-from">BCI New Media, Karachi<span> ( 2019 - 2021 )</span></p>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-left" class="my-education">
                <p class="main-heading">My <span>Education</span></p>
                <div class="education">
                        <div class="small-circle"></div>
                        <div>
                            <p class="education-name">Bachelor in Computer Science</p>
                            <p class="education-from">Federal Urdu University, Karachi <span>( 2015 - 2019 )</span></p>
                        </div>
                    </div>
                    <div class="education">
                        <div class="small-circle"></div>
                        <div>
                            <p class="education-name">Diploma in Web Development</p>
                            <p class="education-from">Infra Professional<span> ( 2018 - 2018 )</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        
    </section>
  
</template>
<style lang="scss" scoped>
.about-section{
    margin: 100px 0;
}

// .gradient-border{
//     margin-top: 30px;
//     position: relative;
//     z-index: 9;
//     padding: 1px;
//     overflow: hidden;
//     border-radius: 15px;

// }
// @keyframes spin {
//       100% {
//         transform: rotate(360deg);
//       }
//     }
// .gradient-border::before {
//     content: "";
//     position: absolute;
//     top: -100px;
//     left: -190px;
//     right: -190px;
//     width: 1057px;
//     height: 1050px;
//     bottom: -100px;
//     margin: auto;
//     z-index: -1;
//     border-radius: 15px;
//     background-image: conic-gradient(from 324deg, #181818 50%, #0ead69 60%, #181818, #181818);
//     animation: spin-2adedd72 8s linear infinite;

// }
// .dark-mode .gradient-border::before {
//     content: "";
//     background-image: conic-gradient(from 324deg, #efefef 50%, #0ead69 60%, #efefef, #efefef);
// }
// .about-wrapper{
//     display: flex;
//     gap: 10px;
//     align-items: flex-start;
//     justify-content: space-around;
//     background-color: #181818;
//     border-radius: 15px;
//     padding: 40px 25px;
// }
// .dark-mode .about-wrapper{
//     background-color: #e9e9e9;
// }
// .education{
//     position: relative;
//     display: flex;
//     gap: 20px;
//     margin-top: 30px;
// }

// .education-name{
//     color: #fdfdfd;
//     font-size: 20px;
//     font-weight: 500;
// }
// .dark-mode .education-name{
//     color: #181818;
// }
// .education-from{
//     span{
//         color: #606060;
//     }
// }
// .education:before {
//     border-left: 1px solid #606060;
//     bottom: 0;
//     content: "";
//     left: 4px;
//     position: absolute;
//     top: 0;
//     // z-index: 1;
// }

// .small-circle {
//     background-color: #0ead69;
//     border-radius: 100%;
//     height: 10px;
//     z-index: 1;
//     width: 10px;
//     min-width: 10px;
// }

// @media screen and (max-width: 900px) {
//     .about-wrapper{
//         gap: 40px;
//         flex-direction: column;
//         padding: 40px 20px;
//     }
//     .education:before {
//         content: "";
//         top: 10px;
//         left: 5px;
    
//     }
//     .small-circle {

//         margin-top: 7px;
//     }
  
// }
// @media screen and (max-width: 575px) {
//     .about-wrapper{
//         gap: 20px;
//     }
//     .work-experience,
//     .my-education{
//         .main-heading{
//             font-size: 32px;
//             margin: 0 0 20px;
//         }
//     }
//     .education{
//         gap: 15px;
//         margin-top: 15px;
//     }
//     .education-name{
//         font-size: 16px;
//     }
//     .education-from{
//         font-size: 14px; 
//         line-height: 24px;
//         span{
//             display: block;
//         }
//     }
// }
</style>