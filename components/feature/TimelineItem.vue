<template>
  <div class="timeline-item">
    <div class="timeline-item__marker"></div>
    <div class="timeline-item__content">
      <h4 class="timeline-item__title">{{ data.title }}</h4>
      <div class="timeline-item__info">
        <span class="company">
          <i :class="type === 'work' ? 'fas fa-building' : 'fas fa-university'"></i>
          {{ data.company || data.institution }}
        </span>
        <span class="location">
          <i class="fas fa-map-marker-alt"></i>
          {{ data.location }}
        </span>
        <span class="duration">
          <i class="fas fa-calendar-alt"></i>
          {{ data.duration }}
        </span>
      </div>
      <p class="timeline-item__description">
        {{ data.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimelineItem',
  props: {
    data: {
      type: Object,
      required: true
    },
    type: {
      type: String,
      default: 'work'
    }
  }
}
</script>

<style lang="scss" scoped>
.timeline-item {
  position: relative;
  margin-bottom: 40px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &__marker {
    position: absolute;
    left: -39px;
    top: 0;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: 3px solid var(--bg-color);
    z-index: 1;
  }
  
  &__content {
    background-color: var(--card-bg);
    border-radius: 10px;
    padding: 20px;
    position: relative;
    
    &::before {
      content: '';
      position: absolute;
      left: -10px;
      top: 15px;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      border-right: 10px solid var(--card-bg);
    }
  }
  
  &__title {
    font-size: 18px;
    font-weight: 600;
    color: var(--text-primary);
    margin: 0 0 10px 0;
  }
  
  &__info {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 15px;
    gap: 15px;
    
    span {
      display: flex;
      align-items: center;
      font-size: 14px;
      color: var(--text-secondary);
      
      i {
        margin-right: 5px;
        font-size: 12px;
        color: var(--primary-color);
      }
    }
  }
  
  &__description {
    font-size: 14px;
    color: var(--text-secondary);
    line-height: 1.6;
  }
}
</style>
