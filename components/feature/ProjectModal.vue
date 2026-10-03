<template>
  <Transition name="modal-fade">
    <div v-if="isVisible" class="pm-overlay" @click.self="close">
      <div class="pm-container">

        <!-- Close Button -->
        <button class="pm-close" @click="close" aria-label="Close modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div class="pm-body">

          <!-- Left: Image Slider -->
          <div class="pm-slider">
            <Splide
              v-if="project.images && project.images.length"
              :options="splideOptions"
              ref="splideRef"
            >
              <SplideSlide v-for="(img, i) in project.images" :key="i">
                <div class="pm-slide">
                  <img :src="img" :alt="`${project.title} screenshot ${i + 1}`" />
                </div>
              </SplideSlide>
            </Splide>

            <!-- Technologies overlay at bottom-left of slider -->
            <div class="pm-slider-tags" v-if="project.skills && project.skills.length">
              <span v-for="skill in project.skills" :key="skill" class="pm-tag-slider">{{ skill }}</span>
            </div>
          </div>

          <!-- Right: Details -->
          <div class="pm-details">
            <!-- Header -->
              <div class="pm-footer">
                <div class="gradient-border">
              <a
                v-if="project.liveLink && project.liveLink !== '#'"
                :href="project.liveLink"
                target="_blank"
                rel="noopener noreferrer"
                class="pm-live-btn"
              >
                <span>View Live Project</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
              </div>
            </div>
            <div class="pm-header">
              <h2 class="pm-title">{{ project.title }}</h2>
              <p class="pm-subtitle">{{ project.subtitle }}</p>
            </div>

            <!-- Overview -->
            <div class="pm-section">
              <h3 class="pm-section-heading">
                <span class="pm-accent-bar"></span>Overview
              </h3>
              <p class="pm-text">{{ project.info }}</p>
            </div>

            <!-- Key Features -->
            <div class="pm-section" v-if="project.keyFeatures && project.keyFeatures.length">
              <h3 class="pm-section-heading">
                <span class="pm-accent-bar"></span>Key Features
              </h3>
              <ul class="pm-bullets">
                <li v-for="(feature, i) in project.keyFeatures" :key="i">
                  <span class="pm-bullet-dot"></span>
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Technical Implementation -->
            <div class="pm-section" v-if="project.description && project.description.length">
              <h3 class="pm-section-heading">
                <span class="pm-accent-bar"></span>Technical Implementation
              </h3>
              <ul class="pm-bullets">
                <li v-for="(point, i) in project.description" :key="i">
                  <span class="pm-bullet-dot"></span>
                  <span>{{ point }}</span>
                </li>
              </ul>
            </div>

            <!-- Technologies (Mobile only) -->
            <div class="pm-section pm-mobile-only" v-if="project.skills && project.skills.length">
              <h3 class="pm-section-heading">
                <span class="pm-accent-bar"></span>Technologies
              </h3>
              <div class="pm-tags">
                <span v-for="skill in project.skills" :key="skill" class="pm-tag">{{ skill }}</span>
              </div>
            </div>



            <!-- Footer -->
           
          </div>

        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, watch } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const props = defineProps({
  isVisible: Boolean,
  project: {
    type: Object,
    default: () => ({})
  }
});

const emit = defineEmits(['close']);
const splideRef = ref(null);

const close = () => emit('close');

const splideOptions = {
  type: 'loop',
  rewind: true,
  autoplay: true,
  interval: 3500,
  arrows: true,
  pagination: true,
  speed: 800,
  pauseOnHover: true,
};

// Lock body scroll when modal opens
watch(() => props.isVisible, (val) => {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = val ? 'hidden' : '';
  }
});
</script>

<style lang="scss" scoped>

/* ─── Overlay ─────────────────────────────────────────────── */
.pm-overlay {
  position: fixed;
  inset: 0;
  background: var(--overlay-bg);
  backdrop-filter: blur(10px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

/* ─── Container ───────────────────────────────────────────── */
.pm-container {
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 85vh;
  max-height: 680px;
  // background: var(--modal-bg);
  border: 1px solid #4e4e4e;
  border-radius: 20px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 767px) {
    height: auto;
    max-height: 92vh;
    border-radius: 16px;
  }
}

/* ─── Close Button ────────────────────────────────────────── */
.pm-close {
  position: absolute;
  top: 14px;
  right: 14px;
  z-index: 100;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: var(--primary-color);
  backdrop-filter: blur(6px);
  color: var(--close-btn-text);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: var(--primary-color);
    color: var(--close-btn-bg);
    transform: rotate(90deg);
  }
}
 .gradient-border{
    position: relative;
    z-index: 9;
    padding: 2px;
    overflow: hidden;
    // margin: 25px auto 0;
    border-radius: 12px;
    min-width: 150px;
    display: flex;
    width: fit-content;
    }
    @keyframes spin {
        100% {
            transform: rotate(360deg);
        }
        }
    .gradient-border::before {
        content: "";
        position: absolute;
        top: -100px;
        left: -190px;
        right: -190px;
        width: 230px;
        height: 250px;
        bottom: -100px;
        margin: auto;
        z-index: -1;
        // border-radius: 15px;
        background-image: conic-gradient(from 324deg, #202020 50%, #0ead69 60%, #202020, #202020);
        animation: spin 8s linear infinite;

    }

/* ─── Body (two-column layout) ────────────────────────────── */
.pm-body {
  display: flex;
  flex: 1;
  overflow: hidden;

  @media (max-width: 767px) {
    flex-direction: column;
    overflow-y: auto;
    overflow-x: hidden;

    /* Scrollbar */
    scrollbar-width: thin;
    scrollbar-color: rgba(14, 173, 105, 0.4) transparent;
    &::-webkit-scrollbar { width: 5px; }
    &::-webkit-scrollbar-thumb { background: rgba(14, 173, 105, 0.4); border-radius: 99px; }
    &::-webkit-scrollbar-track { background: transparent; }
  }
}

/* ─── Slider Column ───────────────────────────────────────── */
.pm-slider {
  flex: 0 0 70%;
  background: var(--slider-bg);
  position: relative;
  overflow: hidden;

  @media (max-width: 767px) {
    flex: none;
    width: 100%;
    height: 260px;
  }

  /* Make Splide fill the column */
  // :deep(.splide) {
  //   height: 100%;
  // }
  // :deep(.splide__track) {
  //   height: 100%;
  // }
  // :deep(.splide__list) {
  //   height: 100%;
  // }

  /* Slide */
  .pm-slide {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--slider-bg);

    img {
      width: 100%;
      // height: 100%;
      // object-fit: cover; 
      display: block;
      min-height: 320px;
      // max-height: 320px;
    }
  }

  /* Pagination dots */
  :deep(.splide__pagination) {
    bottom: 10px;
    z-index: 50;
    gap: 6px;
    li { line-height: 0; }
  }
  :deep(.splide__pagination__page) {
    width: 8px;
    height: 8px;
    background: rgba(255, 255, 255, 0.45);
    border: none;
    border-radius: 99px;
    opacity: 1;
    transition: width 0.3s ease, background 0.2s ease;
    margin: 0;

    &.is-active {
      width: 24px;
      background: var(--primary-color);
    }

    :global(.dark-mode) & {
      background: rgba(0, 0, 0, 0.15);
      &.is-active { background: var(--primary-color); }
    }
  }

  /* Technology tags overlay at bottom-left */
  .pm-slider-tags {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    z-index: 1;
    // height: 100px;
    align-items: end;
    display: flex;
    // background: linear-gradient(to bottom, transparent 0%, var(--slider-bg) 100%);
    flex-wrap: wrap;
    gap: 6px;
    pointer-events: none;

    @media (max-width: 767px) {
      display: none;
    }
  }

  .pm-tag-slider {
    font-size: 11px;
    font-weight: 600;
    color: #202020;
    background: var(--primary-color);
    backdrop-filter: blur(8px);
    padding: 3px 11px;
    white-space: nowrap;
    pointer-events: auto;
    transition: background 0.2s ease;

    :global(.dark-mode) & {
      
      background: var(--primary-color);
      opacity: 0.9;
    }
  }




}

/* ─── Details Column ──────────────────────────────────────── */
.pm-details {
  flex: 1;
  padding: 28px 28px 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: var(--modal-bg);

  /* Scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(113, 113, 113, 0.622) transparent;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb { background: rgba(113, 113, 113, 0.622); border-radius: 99px; }
  &::-webkit-scrollbar-track { background: transparent; }

  :global(.dark-mode) & {
    background: var(--modal-bg);
  }

  @media (max-width: 767px) {
    padding: 22px 20px 28px;
    gap: 14px;
  }
}

/* ─── Header ──────────────────────────────────────────────── */
.pm-header {
  // padding-right: 30px; 
}
.pm-title {
  font-size: 25px;
  font-weight: 600;
  color: var(--primary-color);
  margin: 0 0 4px;
  line-height: 1.25;
  text-transform: uppercase;
}
.pm-subtitle {
  font-size: 13px;
  color: var(--text-secondary);
  margin: 0;
  font-weight: 400;
}

/* ─── Section ─────────────────────────────────────────────── */
.pm-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pm-mobile-only {
  display: none;
  @media (max-width: 767px) {
    display: flex;
  }
}
.pm-section-heading {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--text-primary);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
}
.pm-accent-bar {
  display: inline-block;
  width: 3px;
  height: 14px;
  background: var(--primary-color);
  border-radius: 2px;
  flex-shrink: 0;
}
.pm-text {
  font-size: 13px;
  line-height: 1.6;
  color: var(--text-secondary);
  margin: 0;
}

/* ─── Bullets ─────────────────────────────────────────────── */
.pm-bullets {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;

  li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    font-size: 13px;
    line-height: 1.5;
    color: var(--text-secondary);
  }
}
.pm-bullet-dot {
  flex-shrink: 0;
  margin-top: 6px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary-color);
}

/* ─── Skill Tags ──────────────────────────────────────────── */
.pm-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}
.pm-tag {
  font-size: 11.5px;
  font-weight: 500;
  color: var(--primary-color);
  background: rgba(14, 173, 105, 0.08);
  border: 1px solid rgba(14, 173, 105, 0.2);
  border-radius: 99px;
  padding: 4px 12px;
  white-space: nowrap;
}

/* ─── Footer / CTA ────────────────────────────────────────── */
.pm-footer {
  // margin-top: auto;
  padding-bottom: 8px;
}
.pm-live-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: #202020;
  color: #fff;
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 500;
  padding: 10px 22px;
  border-radius: 10px;
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;

  &:hover {
    background-image: linear-gradient(90deg, #181818 21%, rgba(14, 93, 59, 0.6117647059) 54%, #181818 90%);
  }
}

/* ─── Transition ──────────────────────────────────────────── */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;

  .pm-container {
    transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  }
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;

  .pm-container {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
}

.pm-container{
  .splide{
    padding: 0 !important;
  }
}
</style>
<style lang="scss">
.pm-slider{
.splide__arrow svg{
    fill: #fff !important;
    width: 1em !important;
}


.splide__arrow {
    align-items: center;
    background: var(--card-bg);
    outline-color: var(--primary-color);
    outline-width: 2px;
    outline-style: solid;
    border: 0;
    border-radius: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    padding: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 3.5em;
    height: 3.5em;
    z-index: 1;

    :global(.dark-mode) & {
      background: var(--primary-color);
      outline-color: var(--primary-color);
    }
}

.splide__arrow:disabled {
    opacity: .2;
    // background-color: #181818;
}
}
</style>