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



            <!-- Footer -->
            <div class="pm-footer">
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
  background: rgba(0, 0, 0, 0.82);
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
  max-width: 1080px;
  height: 70vh;
  max-height: 680px;
  background: #141414;
  border: 1px solid rgba(14, 173, 105, 0.18);
  border-radius: 20px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
  overflow: hidden;
  display: flex;
  flex-direction: column;

  :global(.dark-mode) & {
    background: #fafafa;
    border-color: rgba(14, 173, 105, 0.12);
  }

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
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: #0ead69;
    transform: rotate(90deg);
  }

  :global(.dark-mode) & {
    background: rgba(0, 0, 0, 0.15);
    color: #222;
    &:hover {
      background: #0ead69;
      color: #fff;
    }
  }
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
  flex: 0 0 50%;
  background: #0a0a0a;
  position: relative;
  overflow: hidden;

  :global(.dark-mode) & {
    background: #e8e8e8;
  }

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
    background: #0a0a0a;

    :global(.dark-mode) & {
      background: #e8e8e8;
    }

    img {
      width: 100%;
      // height: 100%;
      object-fit: cover; /* fill the frame cleanly */
      display: block;
      min-height: 320px;
      max-height: 320px;
    }
  }

  /* Pagination dots */
  :deep(.splide__pagination) {
    bottom: 0;
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
      background: #0ead69;
    }

    :global(.dark-mode) & {
      background: rgba(0, 0, 0, 0.3);
      &.is-active { background: #0ead69; }
    }
  }

  /* Technology tags overlay at bottom-left */
  .pm-slider-tags {
    position: absolute;
    bottom: 25px;
    left: 14px;
    right: 14px;
    z-index: 60;
    display: flex;
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
    color: #ffffffab;
    background: #141414;
    backdrop-filter: blur(8px);
    padding: 3px 11px;
    white-space: nowrap;
    pointer-events: auto;
    transition: background 0.2s ease;

    :global(.dark-mode) & {
      color: #fff;
      background: rgba(14, 173, 105, 0.75);
      border-color: rgba(14, 173, 105, 0.5);
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
  background: #141414;

  /* Scrollbar */
  scrollbar-width: thin;
  scrollbar-color: rgba(14, 173, 105, 0.35) transparent;
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-thumb { background: rgba(14, 173, 105, 0.35); border-radius: 99px; }
  &::-webkit-scrollbar-track { background: transparent; }

  :global(.dark-mode) & {
    background: #fafafa;
  }

  @media (max-width: 767px) {
    padding: 22px 20px 28px;
    gap: 14px;
  }
}

/* ─── Header ──────────────────────────────────────────────── */
.pm-header {
  padding-right: 30px; // space for close button
}
.pm-title {
  font-size: 22px;
  font-weight: 700;
  color: #0ead69;
  margin: 0 0 4px;
  line-height: 1.25;
}
.pm-subtitle {
  font-size: 13px;
  color: #888;
  margin: 0;
  font-weight: 400;

  :global(.dark-mode) & { color: #666; }
}

/* ─── Section ─────────────────────────────────────────────── */
.pm-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.pm-section-heading {
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #fff;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;

  :global(.dark-mode) & { color: #111; }
}
.pm-accent-bar {
  display: inline-block;
  width: 3px;
  height: 14px;
  background: #0ead69;
  border-radius: 2px;
  flex-shrink: 0;
}
.pm-text {
  font-size: 13px;
  line-height: 1.6;
  color: #999;
  margin: 0;

  :global(.dark-mode) & { color: #555; }
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
    color: #999;

    :global(.dark-mode) & { color: #555; }
  }
}
.pm-bullet-dot {
  flex-shrink: 0;
  margin-top: 6px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #0ead69;
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
  color: #0ead69;
  background: rgba(14, 173, 105, 0.08);
  border: 1px solid rgba(14, 173, 105, 0.2);
  border-radius: 99px;
  padding: 4px 12px;
  white-space: nowrap;

  :global(.dark-mode) & { background: rgba(14, 173, 105, 0.06); }
}

/* ─── Footer / CTA ────────────────────────────────────────── */
.pm-footer {
  margin-top: auto;
  padding-top: 8px;
}
.pm-live-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: #0ead69;
  color: #fff;
  text-decoration: none;
  font-size: 13.5px;
  font-weight: 600;
  padding: 10px 22px;
  border-radius: 10px;
  transition: background 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;

  &:hover {
    background: #0b9a5a;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(14, 173, 105, 0.35);
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
    background: #141414;
    outline-color: #0ead69;
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
}

.splide__arrow:disabled {
    opacity: .2;
    // background-color: #181818;
}
}
</style>