<script setup>
  import { ref } from 'vue';
  
</script>

<template>
    <section class="contact-section">
        <p class="main-heading">Contact <span>Me</span></p>
        <p>I’m always open to new projects and collaborations.<span class="br-mobile"> If you have something in mind or just want to connect, feel free to reach out. </span></p>
        <div class="contact-wrapper ">
            <div class="my-image">
                <img src="../assets/Images/umair-anwar-logo.jpeg" alt="">

            <div class="work-experience">
                <div class="service">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#0ead69" stroke-width=".0002" viewBox="0 0 24 24"><path fill="#0ead69" fill-rule="evenodd" d="M2.8 4c-.9355 0-1.7532.4692-2.2557 1.168C.2007 5.6456 0 6.235 0 6.8666v10.2666C0 18.682 1.2196 20 2.8 20h8.4c.5523 0 1-.4477 1-1s-.4477-1-1-1H2.8c-.4079 0-.8-.3534-.8-.8667V7.9477l5.7795 6.3619c1.1904 1.3103 3.2506 1.3103 4.441 0L18 7.9476v5.1857c0 .5523.4477 1 1 1s1-.4477 1-1V6.8667c0-.6317-.2007-1.221-.5443-1.6988C18.9532 4.4692 18.1355 4 17.2 4H2.8Zm6.4598 8.9647L2.9327 6h14.1346l-6.3271 6.9647c-.3968.4368-1.0836.4368-1.4804 0Zm13.5296 3.6492c.339-.4359.2605-1.0642-.1755-1.4033-.4359-.339-1.0642-.2605-1.4033.1755l-3.9838 5.122-1.5327-1.4779c-.3975-.3834-1.0306-.3719-1.4139.0257-.3834.3975-.3719 1.0306.0257 1.4139l2.3333 2.25a1 1 0 0 0 1.4835-.1059l4.6667-6Z" clip-rule="evenodd"/></svg> 
                    </span>
                     <p class="education-name">eng.umairanwar@gmail.com</p>
                    <!-- <p class="education-from">Officefield, Gulshan e Iqbal, Karachi  <span>( 2022 - Present )</span></p> -->
                </div>
                <div class="service">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><path fill="#0ead69" fill-rule="evenodd" d="M23.993 0C10.7623 0 0 10.7653 0 23.9998c0 5.2487 1.6927 10.1162 4.57 14.0671l-2.9904 8.9169 9.2248-2.9483C14.5986 46.547 19.1264 48 24.007 48 37.2377 48 48 37.2343 48 24.0002 48 10.7657 37.2377.0004 24.007.0004h-.014V0ZM17.293 12.1908c-.4654-1.1145-.8181-1.1567-1.5231-1.1854-.24-.014-.5076-.0279-.8042-.0279-.9171 0-1.8761.268-2.4546.8605-.705.7196-2.4542 2.3984-2.4542 5.8412 0 3.4428 2.5108 6.7726 2.8491 7.2384.3527.4651 4.895 7.6327 11.9474 10.5539 5.515 2.2856 7.1516 2.0738 8.4068 1.8058 1.8336-.395 4.1329-1.75 4.7113-3.3863.5784-1.637.5784-3.0338.4089-3.33-.1692-.2963-.635-.4652-1.34-.8184-.705-.3528-4.133-2.046-4.7818-2.2717-.635-.2397-1.2412-.155-1.7205.5224-.6772.9454-1.34 1.905-1.8762 2.4832-.4232.4516-1.1147.5081-1.6927.268-.7758-.3242-2.9478-1.0867-5.6281-3.4711-2.0736-1.848-3.484-4.1476-3.8929-4.839-.4092-.7051-.0422-1.1149.2818-1.4955.3528-.4377.6911-.7479 1.0438-1.1572.3527-.409.5502-.6208.7759-1.1006.24-.4655.0705-.9454-.0987-1.2982s-1.5796-3.7956-2.158-5.192Z"/></svg>
                    </span>
                     <p class="education-name">+92 312 3840 405
                    </p>
                </div>
                
           </div>
             </div>
            <div class="contacts" >
               
            </div>
            
        </div>
    </section>
</template>
  

<style lang="scss" scoped>
.contact-section{
    margin: 100px 0;
    p {
        .br-mobile{
            display: block ;
        }
    }
}
.contact-wrapper{
    display: flex;
    align-items: flex-start;
    gap: 15px;
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
            transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
            transition: transform 0.5s ease-in-out;
            will-change: transform;
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
            color: #fdfdfd;
            font-size: 18px;
            font-weight: 500;
            background-color: #181818;
            svg{
                width: 30px;
            }
         
            &:hover:after {
                background-color: #0e0e0e;
                background-image: linear-gradient(90deg, #181818 21%, #0e5d3b9c 54%, #181818 90%);
            

            }
        }

    }
    .contacts{
        width: 63%;
       
    }
    
}
@media screen and (max-width: 575px) {
    .contact-wrapper{
        flex-direction: column-reverse;
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