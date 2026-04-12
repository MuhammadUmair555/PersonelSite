<template>
  <section id="experience" class="experience section">
    <div class="container">
      <div class="experience__wrapper">
        <div class="experience__work">
          <p data-aos="fade-up" class="main-heading ">My <span>Experience</span></p>
          
          <div class="timeline">
            <timeline-item 
              v-for="(job, index) in workExperience" 
              :key="index" 
              :data="job"
              type="work"
            />
          </div>
        </div>
        
        <div class="experience__education">
          <p data-aos="fade-up" class="main-heading ">My <span>Education</span></p>
          
          <div class="timeline">
            <timeline-item 
              v-for="(edu, index) in education" 
              :key="index" 
              :data="edu"
              type="education"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TimelineItem from '@/components/feature/TimelineItem.vue'

export default {
  name: 'ExperienceSection',
  components: {
    TimelineItem
  },
  data() {
    return {
      workExperience: [
        {
          title: 'Senior Software Engineer (Frontend)',
          company: 'OfficeField',
          location: 'Karachi',
          duration: '2022 - Present',
          description: 'Building scalable web apps and high-performance dashboards, focused on real-time data visualization and seamless frontend experiences.'
        },
        {
          title: 'Software Engineer',
          company: 'BCI New Media',
          location: 'Karachi',
          duration: '2018 - 2021',
          description: 'Built layouts for different screen sizes and UI improvements and bug fixing in existing projects.'
        }
      ],
      education: [
        {
          title: 'Bachelor in Computer Science',
          institution: 'Federal Urdu University',
          location: 'Karachi',
          duration: '2015 - 2019',
          description: 'Studied computer science with focus on software development and web technologies.'
        },
        {
          title: 'Diploma in Web Development',
          institution: 'State Professional Institute',
          location: 'Karachi',
          duration: '2014 - 2015',
          description: 'Specialized training in modern web development technologies and practices.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.experience {
  &__wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
  }
  
  .timeline {
    position: relative;
    padding-left: 30px;
    
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 1px;
      background-color: var(--primary-color);
    }
  }
}

@media screen and (max-width: 992px) {
  .experience {
    &__wrapper {
      grid-template-columns: 1fr;
      gap: 80px;
    }
  }
}
</style>
