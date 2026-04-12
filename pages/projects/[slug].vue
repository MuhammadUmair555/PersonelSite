<template>
    <div>
      <!-- Dynamic component loading based on slug -->
      <component :is="currentComponent" :project="project" />
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { projects } from '~/data/projects.js';  // Import the project data
  
  // Get the current route's slug
  const route = useRoute();
  
  // Find project data
  const project = projects.find(p => p.slug === route.params.slug);

// Import project components
import ProjectAnalyticsDashboard from '~/components/MyProjects/ProjectAnalyticsDashboard.vue';
import ProjectTradersGPT from '~/components/MyProjects/ProjectTradersGPT.vue';
import ProjectNitrox from '~/components/MyProjects/ProjectNitrox.vue';
import ProjectWebDevelopment from '~/components/MyProjects/ProjectWebDevelopment.vue';
import ProjectUIUXDesign from '~/components/MyProjects/ProjectUIUXDesign.vue';
import ProjectPOS from '~/components/MyProjects/ProjectPOS.vue';
import ProjectEasyConsult from '~/components/MyProjects/ProjectEasyConsult.vue';
import ProjectEliteConsult from '~/components/MyProjects/ProjectEliteConsult.vue';


// Map slugs to components
const componentMap = {
  'Powerfull-Analytics-Dashboard': ProjectAnalyticsDashboard,
  'TRADERSGPT-APP': ProjectTradersGPT,
  'nitrox-gaming-community': ProjectNitrox,
  'web-development': ProjectWebDevelopment,
  'ui-ux-design': ProjectUIUXDesign,
  'easy-sale-system-pos': ProjectPOS,
  'easy-consult-ai': ProjectEasyConsult,
  'elite-consult': ProjectEliteConsult

};

// Select the right component based on the slug
const currentComponent = componentMap[route.params.slug] || ProjectWebDevelopment;
  </script>