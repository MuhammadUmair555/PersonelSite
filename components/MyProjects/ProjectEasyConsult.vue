<template>
    <section class="project-section">
      <div class="consult-cover">
        <img class="scrolling-image" src="/assets/Images/project/easyconsult/hero.png" alt="Easy Consult AI" title="Easy Consult AI">
      </div>
      <div class="consult-title">
          <p class="main-heading" style="display: flex; align-items: center; justify-content: center;">
            <img class="consult-logo" src="/assets/Images/icon/live-svgrepo-com.svg" alt="Easy Consult Logo" title="logo" style="width: 40px; margin-right: 15px;">
            EasyConsult.ai
          </p>
          <div class="project-description">
                <p>Empowering Businesses with Intelligent AI Transformation. EasyConsult.ai provides AI-driven solutions to help businesses make smarter decisions and increase efficiency through intelligent automation and strategic consulting.</p>
                <p>
                  From tailored conversational AI to autonomous agents executing multi-step tasks, this platform bridges the gap between complex AI technology and practical business applications.
                </p>
          </div>
      </div>
      
      <ProjectPoints style="margin-bottom: 50px;"/>
      
      <div class="project-screens">
        <div class="screen-content">
          <p class="main-heading">Intelligent Solutions</p>
          <p>
            The platform offers a comprehensive suite of AI services, including AI Readiness Assessments, custom AI Training workshops, and deployment of sophisticated AI Agents.
          </p>
        </div>
        <img class="laptop" src="/assets/Images/project/easyconsult/services.png" alt="Easy Consult Services" title="Easy Consult Services">
      </div>

      <div class="implementation">
        <p class="main-heading" style="font-size: 20px; margin-bottom: 15px;">Core Capabilities:</p>
        <p>
          <strong>AI Automations:</strong> Fully tailored conversational AI designed to match exact business requirements, supporting multiple languages and 24/7 availability.
        </p>
        <p>
          <strong>Workflow Evolution:</strong> Intelligent automation for sales, reporting, and inventory, featuring personalized sales outreach and real-time expense reporting.
        </p>
        <p>
          <strong>AI Agents:</strong> Autonomous AI systems that actively execute multi-step tasks such as market research, vendor analysis, and IT ticket triaging.
        </p>
      </div>

      <div class="implementation">
        <p class="main-heading" style="font-size: 20px; margin-bottom: 15px">Key Features:</p>
        <ul>
          <li><p><strong>AI Readiness Assessment:</strong> Strategic evaluation of AI potential before implementation, identifying gaps and highlighting key integration points.</p></li>
          <li><p><strong>24/7 Availability:</strong> AI agents and chatbots that provide around-the-clock support and task execution.</p></li>
          <li><p><strong>Multi-Language Support:</strong> Tailored conversational AI capable of interacting in various languages to serve global markets.</p></li>
          <li><p><strong>Autonomous Execution:</strong> AI agents that handle complex, multi-step workflows without constant human intervention.</p></li>
        </ul>
      </div>
      
      <ShortDetail />
    </section>
</template>
  
<script setup>
import ProjectPoints from '../feature/ProjectPoints.vue';
import ShortDetail from '../feature/ShortDetail.vue'
</script>

<style lang="scss" scoped>
.consult-cover {
  height: 450px;
  overflow: hidden;
  position: relative;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background: #121212;
  
  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: linear-gradient(0deg, rgba(14,14,14,1) 5%, rgba(14,14,14,0.4) 42%, rgba(14, 14, 14, 0) 100%);
  }

  .scrolling-image {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    animation: scrollImage 25s linear infinite alternate;
  }
}

.consult-title {
  margin-top: -100px;
  position: relative;
  z-index: 2;
  text-align: center;
}

@keyframes scrollImage {
  0% { transform: translateY(0); }
  100% { transform: translateY(-150px); }
}

.project-screens {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #181818;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  gap: 40px;

  .screen-content {
    flex: 1;
  }

  .laptop {
    width: 60%;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
  }
}

.implementation {
  margin-top: 40px;
  background: #181818;
  padding: 30px;
  border-radius: 15px;

  ul {
    list-style: none;
    padding: 0;
    li {
      margin-bottom: 10px;
      display: flex;
      align-items: flex-start;
      &:before {
        content: "•";
        color: #0ead69;
        font-weight: bold;
        margin-right: 10px;
      }
    }
  }
}

@media screen and (max-width: 991px) {
  .project-screens {
    flex-direction: column;
    .laptop {
      width: 100%;
    }
  }
}

@media screen and (max-width: 575px) {
  .consult-cover {
    height: 300px;
  }
  .consult-title {
    margin-top: -50px;
  }
}
</style>
