<template>
    
    <div :class="{ 'dark-mode': isDarkMode }" class="Container">
       
        <Navbar />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <FooterSection />
    </div>
</template>

<style lang="scss" scoped>
.Container{
    max-width: 1200px;
    padding: 25px;
    margin: 0 auto;
    padding-top: 180px;
    overflow: hidden;
}
@media screen and (max-width: 575px) {
    .Container{
        padding: 15px;
        margin: 0 auto;
        padding-top: 110px;
    }
}
</style>
<script setup>
import { ref } from 'vue';
import { useDarkMode } from '../components/feature/useDarkMode';
// const { isDarkMode } = useDarkMode();
const isDarkMode = ref(false);
</script>