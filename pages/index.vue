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

  const siteUrl = 'https://engumair.vercel.app'
  const ogImage = `${siteUrl}/assets/og-image.png`

  useSeoMeta({
    title: 'Muhammad Umair – Senior Frontend Engineer | Vue.js, React.js',
    description: 'Senior Frontend Engineer with 6+ years building high-performance web and mobile apps. Specializing in Vue.js, React.js, Nuxt.js, and React Native. Based in Karachi.',
    // Open Graph
    ogTitle: 'Muhammad Umair – Senior Frontend Engineer',
    ogDescription: 'Senior Frontend Engineer with 6+ years building high-performance web and mobile apps. Specializing in Vue.js, React.js, Nuxt.js, and React Native.',
    ogUrl: siteUrl,
    ogType: 'website',
    ogImage,
    ogImageWidth: '1200',
    ogImageHeight: '630',
    // Twitter / X
    twitterCard: 'summary_large_image',
    twitterTitle: 'Muhammad Umair – Senior Frontend Engineer',
    twitterDescription: 'Senior Frontend Engineer with 6+ years building high-performance web and mobile apps. Vue.js, React.js, Nuxt.js, React Native.',
    twitterImage: ogImage,
  })

  useHead({
    link: [{ rel: 'canonical', href: siteUrl }],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Muhammad Umair',
          jobTitle: 'Senior Frontend Engineer',
          url: siteUrl,
          sameAs: ['https://www.linkedin.com/in/umair-se/'],
          knowsAbout: ['Vue.js', 'React.js', 'Nuxt.js', 'React Native', 'Frontend Development', 'JavaScript'],
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Karachi',
            addressCountry: 'PK',
          },
        }),
      },
    ],
  })
  </script>
  