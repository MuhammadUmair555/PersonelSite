<style lang="scss" scoped>
  .view-all{
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        padding: 20px 25px;
        min-width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fdfdfd;
        font-size: 18px;
        font-weight: 500;
        background-color: #0e0e0e;
        border: none;
        z-index: 2;
        cursor: pointer;
        background-color: #202020;
     
        &:hover{
            background-image: linear-gradient(90deg, #181818 21%, #0e5d3b9c 54%, #181818 90%);
            
        }
    }
    .gradient-border{
    margin: 25px auto 0;
    position: relative;
    z-index: 9;
    padding: 1px;
    overflow: hidden;
    margin: 25px auto 0;
    border-radius: 12px;
    min-width: 150px;
    display: flex;
    width: fit-content;
    }
    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
        }
    .gradient-border::before {
        content: "";
        position: absolute;
        top: -100px;
        left: -190px;
        right: -190px;
        width: 230px;
        height: 250px;
        bottom: -100px;
        margin: auto;
        z-index: -1;
        // border-radius: 15px;
        background-image: conic-gradient(from 324deg, #202020 50%, #0ead69 60%, #202020, #202020);
        animation: spin-2adedd72 8s linear infinite;

    }
</style>