<template>
    <div>
      <!-- Dynamic component loading based on slug -->
      <component :is="currentComponent" />
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  import { projects } from '~/data/projects.js';  // Import the project data
  
 
// Import project components
import ProjectAnalyticsDashboard from '~/components/MyProjects/ProjectAnalyticsDashboard.vue';
import ProjectWebDevelopment from '~/components/MyProjects/ProjectWebDevelopment.vue';
import ProjectUIUXDesign from '~/components/MyProjects/ProjectUIUXDesign.vue';

// Get the current route's slug
const route = useRoute();

// Map slugs to components
const componentMap = {
  'Powerfull-Analytics-Dashboard': ProjectAnalyticsDashboard,
  'web-development': ProjectWebDevelopment,
  'ui-ux-design': ProjectUIUXDesign
};

// Select the right component based on the slug
const currentComponent = componentMap[route.params.slug] || null;
  </script>
  