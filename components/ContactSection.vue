<script setup>
  import { ref } from 'vue';
  import ContactForm from '../components/feature/ContactForm.vue'
</script>

<template>
    <section class="contact-section">
        <p data-aos="fade-up" class="main-heading">Contact <span>Me</span></p>
        <p data-aos="fade-up">I’m always open to new projects and collaborations.<span class="br-mobile"> If you have something in mind or just want to connect, feel free to reach out. </span></p>
        <div class="contact-wrapper ">
            <div class="my-image">
                <img data-aos="fade-right" src="~/public/assets/Images/umair-anwar-logo.jpeg" alt="">

                <div data-aos="fade-up" class="work-experience">     
                    <div class="service">
                        <a href="mailto:eng.umairanwar@gmail.com">
                        
                            <svg fill="#0ead69" version="1.1" baseProfile="tiny" id="Layer_1" xmlns:x="&amp;ns_extend;" xmlns:i="&amp;ns_ai;" xmlns:graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" viewBox="-0.5 0.5 42 42" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M40.5,31.5v-18c0,0-18.2,12.7-19.97,13.359C18.79,26.23,0.5,13.5,0.5,13.5v18c0,2.5,0.53,3,3,3h34 C40.029,34.5,40.5,34.061,40.5,31.5z M40.471,9.971c0-1.821-0.531-2.471-2.971-2.471h-34c-2.51,0-3,0.78-3,2.6l0.03,0.28 c0,0,18.069,12.44,20,13.12C22.57,22.71,40.5,10.1,40.5,10.1L40.471,9.971z"></path> </g></svg>
                    
                    eng.umairanwar@gmail.com
                        </a>
                        <!-- <p class="education-from">Officefield, Gulshan e Iqbal, Karachi  <span>( 2022 - Present )</span></p> -->
                    </div>
                    <div class="service">
                        <a href="https://wa.me/923123840405?text=Hello,%20I%20want%20to%20know%20more%20about%20your%20services">
                    
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#0ead69" fill-rule="evenodd" d="M23.993 0C10.7623 0 0 10.7653 0 23.9998c0 5.2487 1.6927 10.1162 4.57 14.0671l-2.9904 8.9169 9.2248-2.9483C14.5986 46.547 19.1264 48 24.007 48 37.2377 48 48 37.2343 48 24.0002 48 10.7657 37.2377.0004 24.007.0004h-.014V0ZM17.293 12.1908c-.4654-1.1145-.8181-1.1567-1.5231-1.1854-.24-.014-.5076-.0279-.8042-.0279-.9171 0-1.8761.268-2.4546.8605-.705.7196-2.4542 2.3984-2.4542 5.8412 0 3.4428 2.5108 6.7726 2.8491 7.2384.3527.4651 4.895 7.6327 11.9474 10.5539 5.515 2.2856 7.1516 2.0738 8.4068 1.8058 1.8336-.395 4.1329-1.75 4.7113-3.3863.5784-1.637.5784-3.0338.4089-3.33-.1692-.2963-.635-.4652-1.34-.8184-.705-.3528-4.133-2.046-4.7818-2.2717-.635-.2397-1.2412-.155-1.7205.5224-.6772.9454-1.34 1.905-1.8762 2.4832-.4232.4516-1.1147.5081-1.6927.268-.7758-.3242-2.9478-1.0867-5.6281-3.4711-2.0736-1.848-3.484-4.1476-3.8929-4.839-.4092-.7051-.0422-1.1149.2818-1.4955.3528-.4377.6911-.7479 1.0438-1.1572.3527-.409.5502-.6208.7759-1.1006.24-.4655.0705-.9454-.0987-1.2982s-1.5796-3.7956-2.158-5.192Z"/></svg>
                        
                        +92 312 3840 405
                        </a>
                        
                    </div>
                </div>
                <div  class="contact-info">
                    <div data-aos="fade-up" data-aos-delay="400" class="info-row">
                        <div class="info-item">
                        <span class="label">Language</span>
                        <span class="colon">:</span>
                        <span class="value">English, Urdu</span>
                        </div>
                        <div class="info-item">
                        <span class="label">Residence:</span>
                        <span class="colon">:</span>
                        <span class="value">Pakistan, Karchi</span>
                        </div>
                    </div>
                </div>
             </div>
            <div data-aos="fade-up" data-aos-delay="300" class="contacts" >
               <ContactForm />
            </div>
            
        </div>
    </section>
</template>
  

<style lang="scss" scoped>
.contact-section{
    margin: 100px 0 200px 0;
    p {
        .br-mobile{
            display: block ;
        }
    }
}
.contact-wrapper{
    display: flex;
    align-items: flex-start;
    gap: 25px;
    margin-top: 25px;
    .qoutes{
    width: 50px;
    
    }
    .my-image{
        width: 35%;
        min-width: 35%;        
        
        
        img{
            width: 100%;
            border-radius: 15px;
            // transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
            // transition: transform 0.5s ease-in-out;
            // will-change: transform;
            &:hover {
                transform: perspective(1000px) rotateX(15deg) rotateY(15deg) scale3d(1.1, 1.1, 1.1);
            }
        }
        .work-experience{
            margin-top: 20px;
            display: flex;
            gap: 20px;
            flex-direction: column;
        }
        .service a{
            position: relative;
            text-decoration: none;
            border-radius: 10px;
            padding: 15px 25px;
            min-width: 190px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
            overflow: hidden;
            color: #fdfdfd;
            font-size: 16px;
            font-weight: 500;
            background-color: #181818;
            svg{
                width: 30px;
                min-width: 30px;
            }
         
            &:hover{
                background-image: linear-gradient(90deg, #181818 21%, #0e5d3b9c 54%, #181818 90%);
            }
        }

    }
    .contacts{
        width: 65%; /* Slightly adjusted width */
        box-sizing: border-box; /* Include padding and border in the width */
        max-width: calc(100% - 35% - 15px);
       
    }
    
}

.contact-info {
    margin-top: 30px;
    display: flex;
    align-items: start;
    gap: 30px;
    .info-item {
    display: flex;
    margin-bottom: 5px;

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
.dark-mode .contact-info{
    .value {
        color: #181818;
}
}
.dark-mode .service a{
    background-color: #00000014 !important;
    color: #181818 !important;
    &:hover{
        background-image: unset !important;
        color: #0e5d3b9c;
    }
}
@media screen and (max-width: 767px) {
      .contact-wrapper{
        flex-direction: column;
        gap: 30px;
        .contacts{
            width: 100%;
            max-width: 100%;
        }
        .my-image{
            width: 100%;
            img{
                display: none;
            }
        }
       
    }
}
@media screen and (max-width: 575px) {
    .contact-wrapper{
        .contacts{
            width: 100%;
        }
        .my-image{
            width: 100%;
        }
       
    }
    .contact-section{
    // margin: 100px 0;
    p {
        .br-mobile{
            display: inline ;
        }
    }
}
}
</style>