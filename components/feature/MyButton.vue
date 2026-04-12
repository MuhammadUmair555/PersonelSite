
<template>
    <div class="gradient-border" :style="{ margin: buttonMargin }">
        <button :type="buttonType" class="view-all">{{ buttonText }}</button>
    </div>
</template>
<script setup>
const props = defineProps({
  buttonText: {
    type: String,
    required: true
  },
  buttonType: {
    type: String,
    default: 'button' 
  },
  buttonMargin: {
    type: String,
    default: '25px auto 0'  // Default margin, but can be passed from parent
  }
})
</script>

<style lang="scss" scoped>
  .view-all{
        position: relative;
        border-radius: 12px;
        overflow: hidden;
        padding: 16px 25px;
        min-width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #fdfdfd;
        font-size: 16px;
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
        animation: spin 8s linear infinite;

    }

    .dark-mode .view-all{
        background-color: #0ead69;
        color: #ffffff;
        transition-duration: 0.5s;
        &:hover{
            background-image: none ;
        transform: scale(1.1);
            
        }
    }
    .dark-mode .gradient-border::before {
        content: "";
        background-image: conic-gradient(from 324deg, #0ead69 50%, #202020 60%, #0ead69, #0ead69);

    }
</style>