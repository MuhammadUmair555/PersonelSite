<template >
   
      <div id="home">
        <HomeSection />
      </div>
      <div id="projects">
        <ProjectsSection />
      </div>
      <div id="aboutSection">
        <AboutSection />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <!-- <div>
        <Testimonials />
      </div> -->
      <!-- <div id="blog">
        <BlogSection />
      </div> -->
      <div id="contact">
        <ContactSection />
      </div>
  </template>
  
  <script setup>
  import HomeSection from '../components/HomeSection.vue'
  import AboutSection from '../components/AboutSection.vue'
  import ProjectsSection from '../components/ProjectsSection.vue'
  import Experience from '../components/feature/Experience.vue'
  import Testimonials from '../components/Testimonials.vue'
  import BlogSection from '../components/BlogSection.vue'
  import ContactSection from '../components/ContactSection.vue'

  </script>
  