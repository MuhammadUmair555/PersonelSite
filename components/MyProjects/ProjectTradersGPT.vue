<template>
  <section class="project-section">
    <div class="project-header">
      <h1 class="main-heading">TRADERSGPT APP</h1>
      <p class="subtitle">AI-Powered Market Insights</p>
    </div>
    
    <div class="project-content">
      <div class="image-showcase">
        <img src="/assets/Images/project/Tradergpt.jpg" alt="TradersGPT App" class="main-img">
      </div>
      
      <div class="details">
        <div class="section">
          <h2 class="section-title">Overview</h2>
          <p>Developed TradersGPT – an AI-powered trading insights app using React Native.</p>
        </div>
        
        <div class="section">
          <h2 class="section-title">Technical Implementation</h2>
          <ul>
            <li>Designed and developed UI screens using reusable components and consistent layout structure in React Native.</li>
            <li>Built and managed component libraries for scalable and maintainable mobile app development.</li>
          </ul>
        </div>
        
        <div class="section">
          <h2 class="section-title">Technologies Used</h2>
          <div class="skills-list">
            <span class="skill-tag">React Native</span>
            <span class="skill-tag">Component Architecture</span>
            <span class="skill-tag">UI Design</span>
            <span class="skill-tag">API Integration</span>
            <span class="skill-tag">AI Feature Integration</span>
          </div>
        </div>

        <div class="section" v-if="liveLink && liveLink !== '#'">
          <a :href="liveLink" target="_blank" class="live-btn">View Live App</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const liveLink = 'https://tradersgpt.io/';
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
