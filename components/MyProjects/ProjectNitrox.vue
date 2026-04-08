<template>
  <section class="project-section">
    <div class="project-header">
      <h1 class="main-heading">NITROX - GAMING COMMUNITY</h1>
      <p class="subtitle">Modern Glassmorphism UI Design</p>
    </div>
    
    <div class="project-content">
      <div class="image-showcase">
        <img src="/assets/Images/project/project-POST.jpg" alt="Nitrox App" class="main-img">
      </div>
      
      <div class="details">
        <div class="section">
          <h2 class="section-title">Overview</h2>
          <p>Built a visually modern web application using glassmorphism UI design.</p>
        </div>
        
        <div class="section">
          <h2 class="section-title">Key Contributions</h2>
          <ul>
            <li>Developed reusable widget-based components and maintained consistent UI architecture across the application.</li>
            <li>Implementing modern glassmorphism design and structured layouts.</li>
          </ul>
        </div>
        
        <div class="section">
          <h2 class="section-title">Technologies</h2>
          <div class="skills-list">
            <span class="skill-tag">Vue.js</span>
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag">Tailwind</span>
            <span class="skill-tag">Vuetify</span>
            <span class="skill-tag">Responsive Design</span>
            <span class="skill-tag">Component Architecture</span>
          </div>
        </div>

        <div class="section">
          <a href="https://nitrox-app.traderverse.io/" target="_blank" class="live-btn">View Live Project</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Nitrox Project Component
</script>

<style lang="scss" scoped>
.project-section {
  padding: 80px 0;
  max-width: 1000px;
  margin: 0 auto;
}
.project-header {
  text-align: center;
  margin-bottom: 50px;
  .subtitle {
    color: #0ead69;
    font-size: 1.2rem;
    font-weight: 500;
  }
}
.project-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
}
.main-img {
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.3);
}
.section {
  margin-bottom: 30px;
}
.section-title {
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 15px;
  border-left: 4px solid #0ead69;
  padding-left: 15px;
}
p, li {
  color: #bcbcbc;
  line-height: 1.6;
}
ul {
  padding-left: 20px;
}
.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.skill-tag {
  background: rgba(14, 173, 105, 0.1);
  color: #0ead69;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.9rem;
  border: 1px solid rgba(14, 173, 105, 0.2);
}
.live-btn {
  display: inline-block;
  background: #0ead69;
  color: #fff;
  padding: 12px 25px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  &:hover {
    background: #0c8a54;
    transform: translateY(-3px);
  }
}
</style>
