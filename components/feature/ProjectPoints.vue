<template>
     <div  class="feature-section " >
                <ul>
                    <li data-aos="flip-left">
                        <img src="~/public/assets/Images/project/market.png" alt="Market Pulse" title="Market Pulse" width="50" >
                        Market Pulse</li>
                    <li data-aos="flip-left">
                        <img src="~/public/assets/Images/project/overview.png" alt="Market Overview" title="Market Overview" width="50" >
                        Market Overview</li>
                    <li data-aos="flip-left">
                        <img src="~/public/assets/Images/project/news.png" alt="Market News" title="Market News" width="50" >
                        Market News</li>
                    <li data-aos="flip-left">
                        <img src="~/public/assets/Images/project/analysis.png" alt="Top Analysis" title="Top Analysis" width="50" >
                        Top Analysis</li>
                    <li data-aos="flip-left">
                        <img src="~/public/assets/Images/project/insider.png" alt="Top Insider Trading" title="Top Insider Trading" width="50" >
                        Top Insider Trading</li>

                </ul>
            </div>
</template>
<style lang="scss" scoped>
 .feature-section{
        ul{
            padding: 30px 0 0;
            margin: 10px 0 0;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 20px;
            width: 100%;
        }
        li{
            list-style-type: none;
            display: flex;
            align-items: center;
            flex-direction: column;
            gap: 10px;
            color:#bcbcbc;
            font-size: 15px;
            font-weight: 600;
            background-color: #181818;
            padding: 25px 15px;
            border-radius: 15px;
            // transform: perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1);
            /* Ensuring smooth transitions */
            // transition: transform 0.5s ease-in-out;
            // will-change: transform;
            img{
                background-color: #0ead69;
                height: 35px;
                width: 40px;
                border-radius: 10px;
                padding: 10px;
                margin-top: -35px;
                object-fit: contain;
            // transform: scale(1);
            // -webkit-transform: scale(1);
            // -moz-transform: scale(1);
            // -ms-transform: scale(1);
            // -o-transform: scale(1);
            // animation: heartbeat-middle 5s infinite alternate;
            // -webkit-animation: heartbeat-middle 5s infinite alternate;
            // animation: heartbeat 5s ease-in-out infinite;
            }
            
            &:hover {
                /* Transform on hover */
                transform: perspective(1000px) rotateX(15deg) rotateY(15deg) scale3d(1.1, 1.1, 1.1);
            }
        }
    }
  
    @keyframes heartbeat {
    0% {
        transform: scale(1);
    }
    14% {
        transform: scale(1.2);
    }
    28% {
        transform: scale(1);
    }
    42% {
        transform: scale(1.2);
    }
    70% {
        transform: scale(1);
    }
    }
    .dark-mode{
    .feature-section li{
        background-color: #00000014;
        color: #181818;
    }
}


@media screen and (max-width: 991px) {
  
        .feature-section{
            ul{
                grid-template-columns: repeat(3, 1fr);
            }
        
        }
    
}
@media screen and (max-width: 767px) {
  
        .feature-section{
            ul{
                grid-template-columns: repeat(2, 1fr);
            }
        
        }
    
}
@media screen and (max-width: 575px) {
 

        .feature-section{
          
            li{
                gap: 15px;
                font-size: 13px;
                padding: 15px 15px;
                border-radius: 10px;
                img{
                    width: 26px;
                    overflow: hidden;
                    height: 26px;
                    object-fit: contain;
                }
            }   
        }
    }


</style>