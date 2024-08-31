<template>
    
    <div class="Container">
        <Navbar />

        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
        <FooterSection />
    </div>
</template>
<script setup>
</script>
<style lang="scss" scoped>
.Container{
    max-width: 1000px;
    margin: 145px auto 0;
    padding: 25px;
    overflow: hidden;
}
@media screen and (max-width: 575px) {
    .Container{
        padding: 15px;
        margin: 110px auto 0;
    }
}
</style>