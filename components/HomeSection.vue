<script setup>
// import AnimatedDesignation from './AnimatedDesignation.vue'
// import MyButton from './feature/MyButton.vue';
import { ref, onMounted, onBeforeUnmount } from 'vue'

// ── Refs ─────────────────────────────────────────────────────────────────────
const imgWrapRef  = ref(null)
const canvasRef   = ref(null)

// ── 3D rotation state ────────────────────────────────────────────────────────
let rotX = 0, rotY = 0, glowOp = 0
let targetRotX = 0, targetRotY = 0, targetGlowOp = 0

// ── Cursor influence on particles (normalised -1…+1) ─────────────────────────
let cursorNX = 0, cursorNY = 0

let rafId = null
let reducedMotion = false

const LERP    = 0.06
const MAX_ROT = 25

// ── Tiny deterministic noise helper (no deps) ─────────────────────────────────
// Returns a smooth pseudo-random value in -1…+1 given time + seed
function smoothNoise(t, seed) {
  const s = Math.sin(t * 0.0013 + seed * 127.1) * 43758.5453
  return (s - Math.floor(s)) * 2 - 1
}

// ── Particle palette ──────────────────────────────────────────────────────────
// white ↔ green (theme: #0ead69), with soft alpha variation
const PALETTE = [
  [255, 255, 255],   // pure white
  [200, 255, 225],   // white-green tint
  [14,  173, 105],   // theme green
  [120, 220, 170],   // mid green-white
  [230, 255, 245],   // near-white cool
]

// ── Particle class ────────────────────────────────────────────────────────────
class Particle {
  constructor(cw, ch, emitX, emitY, imgRadius) {
    this.cw = cw
    this.ch = ch
    this.emitX = emitX       // image centre X in viewport (canvas) coords
    this.emitY = emitY       // image centre Y in viewport (canvas) coords
    this.imgRadius = imgRadius
    this.reset(true)
  }

  reset(initial = false) {
    // Emit from a ring around the image centre
    const angle = Math.random() * Math.PI * 2
    const dist  = this.imgRadius * (0.15 + Math.random() * 0.95)
    this.x = this.emitX + Math.cos(angle) * dist
    this.y = this.emitY + Math.sin(angle) * dist

    // Depth layer: 0 = far (small, dim), 1 = close (large, bright)
    this.depth = Math.random()

    // Travel direction — radially outward + random drift, slow enough to roam gracefully
    const outAngle = angle + (Math.random() - 0.5) * 1.4
    const speed    = 0.25 + Math.random() * 0.55 + this.depth * 0.35
    this.vx = Math.cos(outAngle) * speed
    this.vy = Math.sin(outAngle) * speed

    // Organic noise seeds — unique per particle for varied wave motion
    this.seedX = Math.random() * 100
    this.seedY = Math.random() * 100

    // Size based on depth
    this.baseSize = 0.6 + this.depth * 2.2
    this.size     = this.baseSize

    // Color from palette, weighted toward white for subtlety
    const ci = Math.random() < 0.55 ? 0 : Math.floor(Math.random() * PALETTE.length)
    this.rgb = PALETTE[ci]

    // Life: 0 = just born, 1 = dead
    this.life    = initial ? Math.random() : 0
    this.lifeInc = 0.0012 + Math.random() * 0.003  // slower aging = more travel distance

    // Trail: 30% chance for a subtle elongated particle
    this.hasTrail = Math.random() < 0.3
    this.trail    = []
    this.trailLen = this.hasTrail ? Math.floor(4 + Math.random() * 6) : 0

    // Twinkle — occasional brightness pulse
    this.twinkle      = Math.random() < 0.2
    this.twinklePhase = Math.random() * Math.PI * 2
  }

  // Alpha envelope: fade in → hold → fade out (smooth life curve)
  alpha() {
    const t = this.life
    if (t < 0.15) return t / 0.15
    if (t > 0.75) return 1 - (t - 0.75) / 0.25
    return 1
  }

  update(time, curNX, curNY) {
    this.life += this.lifeInc
    if (this.life >= 1) {
      this.reset()
      return
    }

    // Organic wave displacement from noise
    const waveX = smoothNoise(time + this.seedX, this.seedX) * 0.18
    const waveY = smoothNoise(time + this.seedY, this.seedY) * 0.18

    // Cursor subtly bends the flow (very gentle pull)
    const cx = curNX * 0.08
    const cy = curNY * 0.08

    if (this.hasTrail) {
      this.trail.push({ x: this.x, y: this.y })
      if (this.trail.length > this.trailLen) this.trail.shift()
    }

    this.x += this.vx + waveX + cx
    this.y += this.vy + waveY + cy

    // Twinkle size pulse
    if (this.twinkle) {
      this.twinklePhase += 0.08
      this.size = this.baseSize * (0.8 + Math.sin(this.twinklePhase) * 0.35)
    }
  }

  draw(ctx, time) {
    const a = this.alpha()
    if (a <= 0.01) return

    const [r, g, b] = this.rgb

    // Draw trail first (behind particle)
    if (this.hasTrail && this.trail.length > 1) {
      for (let i = 1; i < this.trail.length; i++) {
        const ta  = (i / this.trail.length) * a * 0.35
        const tr  = this.trail[i - 1]
        const tc  = this.trail[i]
        ctx.beginPath()
        ctx.strokeStyle = `rgba(${r},${g},${b},${ta})`
        ctx.lineWidth   = this.size * (i / this.trail.length) * 0.7
        ctx.moveTo(tr.x, tr.y)
        ctx.lineTo(tc.x, tc.y)
        ctx.stroke()
      }
    }

    // Outer soft glow (only for closer particles)
    if (this.depth > 0.4) {
      const glowR = this.size * 3.5
      const grad  = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowR)
      grad.addColorStop(0, `rgba(${r},${g},${b},${a * 0.25 * this.depth})`)
      grad.addColorStop(1, `rgba(${r},${g},${b},0)`)
      ctx.beginPath()
      ctx.fillStyle = grad
      ctx.arc(this.x, this.y, glowR, 0, Math.PI * 2)
      ctx.fill()
    }

    // Core particle dot
    ctx.beginPath()
    ctx.fillStyle = `rgba(${r},${g},${b},${a * (0.7 + this.depth * 0.3)})`
    ctx.arc(this.x, this.y, Math.max(0.3, this.size), 0, Math.PI * 2)
    ctx.fill()
  }
}

// ── Particle system state ─────────────────────────────────────────────────────
let particles  = []
let canvasTime = 0

const PARTICLE_COUNT    = 65
const PARTICLE_COUNT_SM = 32

// emitX/emitY = image centre in viewport (fixed canvas) coordinates
function initParticles(cw, ch, emitX, emitY, imgRadius) {
  const count = cw < 700 ? PARTICLE_COUNT_SM : PARTICLE_COUNT
  particles = Array.from({ length: count }, () =>
    new Particle(cw, ch, emitX, emitY, imgRadius)
  )
}

// Recalculate emit origin from the image's current screen rect
function getEmitOrigin() {
  const wrap = imgWrapRef.value
  if (!wrap) return null
  const r = wrap.getBoundingClientRect()
  return {
    x:      r.left + r.width  / 2,
    y:      r.top  + r.height / 2,
    radius: Math.min(r.width, r.height) * 0.48,
  }
}

function resizeCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width  = window.innerWidth
  canvas.height = window.innerHeight
  const o = getEmitOrigin()
  if (o) initParticles(canvas.width, canvas.height, o.x, o.y, o.radius)
}

// ── Lerp ─────────────────────────────────────────────────────────────────────
function lerp(a, b, t) { return a + (b - a) * t }

// ── Global mouse handler ──────────────────────────────────────────────────────
function onGlobalMouseMove(e) {
  if (reducedMotion) return
  const nx = (e.clientX / window.innerWidth)  * 2 - 1
  const ny = (e.clientY / window.innerHeight) * 2 - 1
  targetRotY  =  nx * MAX_ROT
  targetRotX  = -ny * MAX_ROT
  targetGlowOp = 0.55
  cursorNX = nx
  cursorNY = ny
}

// ── Main RAF loop ─────────────────────────────────────────────────────────────
function animate() {
  rafId = requestAnimationFrame(animate)
  canvasTime++

  // ── 3D rotation interpolation ──
  rotX   = lerp(rotX,   targetRotX,   LERP)
  rotY   = lerp(rotY,   targetRotY,   LERP)
  glowOp = lerp(glowOp, targetGlowOp, LERP)

  const el = imgWrapRef.value
  if (el) {
    const img  = el.querySelector('.circle-img')
    const glow = el.querySelector('.img-glow')
    if (img) {
      img.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`
    }
    if (glow) {
      glow.style.opacity = glowOp
      const gx = 50 + (rotY / MAX_ROT) * 28
      const gy = 50 - (rotX / MAX_ROT) * 28
      glow.style.background =
        `radial-gradient(circle at ${gx}% ${gy}%, rgba(14,173,105,0.4) 0%, transparent 65%)`
    }
  }

  // ── Particle canvas draw ──
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Refresh emit origin every frame so scroll/resize is always accurate
  const o = getEmitOrigin()
  if (o) {
    for (const p of particles) {
      p.emitX = o.x
      p.emitY = o.y
      p.imgRadius = o.radius
      p.cw = canvas.width
      p.ch = canvas.height
      p.update(canvasTime, cursorNX, cursorNY)
      p.draw(ctx, canvasTime)
    }
  }
}

// ── Lifecycle ─────────────────────────────────────────────────────────────────
onMounted(() => {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion = mq.matches

  if (!reducedMotion) {
    window.addEventListener('mousemove', onGlobalMouseMove, { passive: true })
    window.addEventListener('resize',    resizeCanvas,      { passive: true })
    resizeCanvas()
    animate()
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', onGlobalMouseMove)
  window.removeEventListener('resize',    resizeCanvas)
  if (rafId) cancelAnimationFrame(rafId)
  particles = []
})
</script>
<template>
    <section class="home-section">
        <!-- Full-viewport particle canvas — fixed overlay, behind all content -->
        <canvas ref="canvasRef" class="particle-canvas" aria-hidden="true"></canvas>
        <div class="Im-Umair">
            <div class="my-name">
                <!-- <div data-aos="fade-down" class="AnimatedDesignation">
                    <AnimatedDesignation  />
                </div> -->
                <span class="hey-there">Hey there! I'm</span>
                <h1>Muhammad <span class="letter-case"> Umair<span style="color: #0ead69;">.</span> </span></h1>
                <p class="my-bio">
                   Senior <span style="color: #0ead69; font-weight: 500;">Software Engineer Frontend</span> with 6+ years of experience architecting responsive, high-performance web and mobile applications using Vue.js, React.js, and React Native. Specializes in scalable component architecture, real-time data visualization, and high-performance UI for fintech and trading platforms. Skilled at integrating REST APIs, optimizing rendering performance, and partnering with backend and AI teams to ship production features. Experienced leveraging AI-assisted development workflows to increase delivery speed while maintaining code quality.
                </p>
            </div>
            
            <div
                class="umair-anwar-arain immediate-zoom-in"
            >
                <div class="circle heartbeat"></div>
                <!-- 3D perspective stage -->
                <div class="img-3d-wrapper" ref="imgWrapRef">
                    <!-- The image itself — never modified, just wrapped -->
                    <img class="circle-img" src="~/public/assets/Images/umair-logo.png" alt="Muhammad Umair – Senior Frontend Engineer" fetchpriority="high">
                    <!-- Cursor-following glow overlay -->
                    <div class="img-glow"></div>
                </div>
                <!-- /3D perspective stage -->
                <div class="social-border">
                <img src="~/public/assets/Images/social.png" alt="">

                </div>
                <div class="social-follwing immediate-zoom-in" style="animation-delay: 1s;">
                <a href="https://www.linkedin.com/in/umair-se/" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill="#181818" viewBox="0 0 512 512"><path d="M116.504 500.219V170.654H6.975v329.564h109.529v.001zM61.751 125.674c38.183 0 61.968-25.328 61.968-56.953-.722-32.328-23.785-56.941-61.252-56.941C24.994 11.781.5 36.394.5 68.722c0 31.625 23.772 56.953 60.53 56.953h.721v-.001zm115.373 374.545s1.437-298.643 0-329.564H286.67v47.794h-.727c14.404-22.49 40.354-55.533 99.44-55.533 72.085 0 126.116 47.103 126.116 148.333V500.22H401.971V323.912c0-44.301-15.848-74.531-55.497-74.531-30.254 0-48.284 20.38-56.202 40.08-2.897 7.012-3.602 16.861-3.602 26.711v184.047H177.124z" style="display:inline;fill-rule:evenodd;clip-rule:evenodd"/></svg>
                </a>
                <!-- <a href="">
                    <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill="#181818" stroke="#181818" viewBox="0 0 512 512"><path d="M283.122 122.174v46.583h83.424l-9.045 74.367h-74.379v268.375h-98.726V243.124h-51.443v-74.367h51.443v-56.302c0-27.82-2.096-41.02 9.725-62.578C205.948 28.32 239.308-.174 297.007.512c57.713.711 82.04 6.263 82.04 6.263l-12.501 79.257s-36.853-9.731-54.942-6.263c-18.065 3.469-28.482 14.597-28.482 42.405z" style="display:inline"/></svg>
                </a> -->
            </div>
            </div>
        </div>
        <div class="currently-work">
            <div class="currently-work-mobile">
                <span style="font-size: 22px;">⚡</span><p class="current-position"> Currently Specializing In UI Development Vue.js | React.js | React Native.</p>
            </div>
            <div class="currently-work-mobile">
                <span style="font-size: 22px;">💻</span><p> Senior Software Engineer (Frontend) at <a href="https://www.linkedin.com/company/office-field/" target="_blank" >Officefield</a></p>
            </div>
        </div>
        
        <div data-aos="fade-up" class="myResume">
            <a href="#contact" style="text-decoration: none;">
                <div class="ContactMe">
                    <span>
                        <svg fill="#0ead69" version="1.1" baseProfile="tiny" id="Layer_1" xmlns:x="&amp;ns_extend;" xmlns:i="&amp;ns_ai;" xmlns:graph="&amp;ns_graphs;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" viewBox="-0.5 0.5 42 42" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M40.5,31.5v-18c0,0-18.2,12.7-19.97,13.359C18.79,26.23,0.5,13.5,0.5,13.5v18c0,2.5,0.53,3,3,3h34 C40.029,34.5,40.5,34.061,40.5,31.5z M40.471,9.971c0-1.821-0.531-2.471-2.971-2.471h-34c-2.51,0-3,0.78-3,2.6l0.03,0.28 c0,0,18.069,12.44,20,13.12C22.57,22.71,40.5,10.1,40.5,10.1L40.471,9.971z"></path> </g></svg>
                  
                   </span>
                     <p>Contact Me</p>
                    
                </div>
            </a>
            <a href="https://drive.google.com/file/d/1CLZ0BgYTkU394pdPG7oNYyh-7dfokZrU/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
                <div class="ContactMe">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#0ead69" viewBox="0 0 56 56"><path d="M15.5547 53.125h24.8906c4.8516 0 7.2656-2.4375 7.2656-7.336V10.2344c0-4.875-2.414-7.3594-7.2656-7.3594H15.5547c-4.8281 0-7.2656 2.4844-7.2656 7.3594V45.789c0 4.8985 2.4375 7.336 7.2656 7.336Zm.1875-3.7735c-2.4141 0-3.6797-1.289-3.6797-3.6328v-35.414c0-2.3203 1.2656-3.6563 3.7031-3.6563h24.4922c2.4375 0 3.6797 1.3125 3.6797 3.6563v35.414c0 2.3438-1.2422 3.6328-3.6562 3.6328Zm3.3984-32.9062h17.7656c.8204 0 1.4532-.6562 1.4532-1.4766 0-.7969-.6328-1.4062-1.4532-1.4062H19.1406c-.8672 0-1.4766.6093-1.4766 1.4062 0 .8204.6094 1.4766 1.4766 1.4766Zm0 8.1797h17.7656c.8204 0 1.4532-.6563 1.4532-1.4766 0-.7969-.6328-1.4062-1.4532-1.4062H19.1406c-.8672 0-1.4766.6093-1.4766 1.4062 0 .8203.6094 1.4766 1.4766 1.4766Zm0 8.1797h8.4141c.8203 0 1.4531-.6329 1.4531-1.4297 0-.8203-.6328-1.4532-1.4531-1.4532h-8.4141c-.8672 0-1.4766.6329-1.4766 1.4532 0 .7968.6094 1.4297 1.4766 1.4297Z"/></svg>
                    </span>
                     <p>My Resume</p>
                </div>
            </a>
                
           </div>
    </section>
</template>
<style lang="scss" scoped>
.home-section{
    margin-bottom: 80px;
    position: relative;
    .Im-Umair{
        position: relative;
        display: flex;
        align-items: center;
    }
    .my-name{
        position: relative;
        width: fit-content;
        max-width: 65%;
        .hey-there{
            font-family: "poppins";
            font-family: "Dancing Script", cursive;
            color: #0ead69;
            font-size: 30px;
            font-weight: 200;
            // display: none;
        }
       h1{
        font-size: 60px;
        font-weight: 600;
        line-height: 1;
        color: #fdfdfd;
        text-transform: uppercase;
        margin: 0;
       }
       .letter-case{
            // font-weight: 200;
            // color: #bcbcbc;
        color: var(--text-primary);

        }
    }
    
    // .AnimatedDesignation{
    //     height: 50px;
    //     overflow: hidden;
    // }
    .my-bio{
        margin-top: 20px;
    }
    .social-follwing{
        z-index: 5;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin-top: -20px;
        padding-right: 7px;
        transition-duration: 0.5s;
        // position: relative;

        &.immediate-zoom-in {
            animation: customZoomIn 1s cubic-bezier(0.19, 1, 0.22, 1) both;
            opacity: 0;
        }

        a{
            text-decoration: none;
            position: relative;
            margin: 1px;
            padding: 10px;
            border-radius: 50px;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition-duration: 0.5s;
            background-color: #0ead69;

            svg{
                width: 100%;
                height: 100%;
                fill: #0e0e0e;

            }

            &:hover {
            background-color: var(--card-bg-dark);
            transition-duration: 0.5s;

                svg{
                    fill: #ffffff;

                }
            }
        }   
    }
    .social-border{
        position: absolute;
        right: -41px;
        top: 30px;
        z-index: -1;
        img{
            width: 328px;
        }
    }
    .umair-anwar-arain{
        position: absolute;
        right: 15px;
        top: 0;
        // z-index: 7;
        &.immediate-zoom-in {
            animation: customZoomIn 1.5s cubic-bezier(0.19, 1, 0.22, 1) forwards;
            opacity: 0; // Start hidden
        }

        // ── 3D stage ──────────────────────────────────────────────────────────
        .img-3d-wrapper {
            position: relative;
            display: inline-block;
            perspective: 700px;
            perspective-origin: 50% 50%;
            transform-style: preserve-3d;
        }

        // Particle canvas — full viewport overlay, fixed so it covers the whole screen
        // Canvas is a sibling of <section> rendered as fixed overlay


        .circle-img{
            width: 300px;
            pointer-events: none;
            display: block;
            position: relative;
            z-index: 2;
            /* GPU-accelerated transform applied by JS */
            will-change: transform;
            transform-origin: center center;
            transform-style: preserve-3d;
            /* Initial state — JS handles dynamic transforms */
            transform: rotateX(0deg) rotateY(0deg) scale(1);
            border-radius: 50%; // keeps it tidy in all orientations
            // Remove outline during focus for accessibility (keyboard)
            outline: none;
        }

        // Cursor-following glow that JS moves
        .img-glow {
            position: absolute;
            inset: 0;
            border-radius: 50%;
            pointer-events: none;
            z-index: 3;
            will-change: opacity, background;
            opacity: 0;
            // background set dynamically by JS
            mix-blend-mode: screen;
        }
        // ── end 3D stage ──────────────────────────────────────────────────────

       .circle{
            position: absolute;
            border-radius: 50%;
            background-color:#181818;
            right: 51px;
            width: 210px;
            top: 36px;
            height: 210px;
            z-index: -1;
            transform: scale(1);
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            animation: heartbeat-middle 5s infinite alternate;
            -webkit-animation: heartbeat-middle 5s infinite alternate;
            animation: heartbeat 5s ease-in-out infinite;
        }
    }
    @keyframes heartbeat {
    0% {
        transform: scale(1);
    }
    14% {
        transform: scale(1.3);
    }
    28% {
        transform: scale(1);
    }
    42% {
        transform: scale(1.3);
    }
    70% {
        transform: scale(1);
    }
    }

    @keyframes heartbeat-bg {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(1.2);
        }
    }
    .currently-work{
        margin-top: 20px;
        .current-position{
        }
        a{
            text-decoration: none;
            color: #0ead69;

        }
        p{
            width:fit-content;
            color: var(--text-primary);
            &:hover a{
                color: #0ead69;
                cursor: pointer;
                transition-duration: 0.5s;

            }
        }
       .currently-work-mobile{
        display: flex; 
        align-items: center; 
        gap: 10px;
       }
    }

    .myResume{
        display: flex;
        align-items: center;
        gap: 25px;
        margin-top: 30px;
    }
    .ContactMe {
        position: relative;
        border-radius: 10px;
        padding: 11px 20px;
        // min-width: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        overflow: hidden;
        background-color: var(--card-bg-dark) ;
        cursor: pointer;
        span{
            height: 30px;
        }
        img{
            width: 30px;
        }
        svg{
            width: 30px;
        }
        p{
            color:  var(--text-primary);
            font-size: 16px;
            font-weight: 500;
        }

        &:hover {
            // background-color: #0e0e0e;
            background-image: linear-gradient(90deg, var(--card-bg) 21%, #0e5d3b9c 54%, var(--card-bg) 90%);
        

        }
    }

    .dark-mode .ContactMe {
        background-color: #efefef;
        &:hover {
            // background-color: #0e0e0e;
            background-image: linear-gradient(90deg, #efefef 21%, #0e5d3b9c 54%, #efefef 90%);
        }
    }
}
    .dark-mode .my-name{
        h1{
            color: #181818;
        }
    }

.dark-mode    .umair-anwar-arain{    
    .circle{
    background-color: #d4d4d4;
}
}



// .dark-mode .social-follwing a svg{
//     fill: #181818;
// }

@media screen and (max-width: 991px) {
  .home-section{
    .Im-Umair{
        position: relative;
        flex-direction: column-reverse;
        gap: 40px;
    }
    
    .my-name{
        max-width: 100%;
    }
    .umair-anwar-arain{
        position: relative;
        right: 0;
        top: -25px;
        height: 355px;
        // width: 300px;
    }
    .social-border{
        // display: none;
    }
     
   
}  
}
@media screen and (max-width: 575px) {
    .home-section{
        .social-border{
            right: -29px;
            top: 22px;
            z-index: -1;
            img{
                width: 240px !important;
            }
        }
        .my-name{
            h1{
                font-size: 35px;
            }
            .hey-there{
                display: block;
                font-size: 20px;
                font-family: "Dancing Script", cursive;
            }
            .letter-case{
                // font-size: 20px;
                // letter-spacing: -1px;
                // display: block;
                // display: none
            }
            .my-bio{
                margin-top: 15px
            }
        }
    
        .umair-anwar-arain{
            height: 210px;
            // background-color: #0ead69;
            .circle-img{
                width: 220px;
            }
            .circle{
                right: 40px;
                width: 150px;
                top: 30px;
                height: 150px;
            }
        }
        .ContactMe {
        
            p{
                font-size: 14px;
            }
         }
    .social-follwing{
        a{
    
            padding: 7px;
            width: 15px;
            height: 15px;
        }
    }
    .currently-work .currently-work-mobile{
        align-items: start; 
        border-top: 1px solid #ffffff1d;
        padding: 15px 0;
       }
    .myResume{
        flex-direction: column-reverse;
        gap: 20px;
        justify-content: start;
        align-items: start;
        a{
            width: 100%;
        }
      
    }
    }
   
    }

@keyframes customZoomIn {
    0% {
        transform: scale(0.6);
        opacity: 0;
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

// ── Reduced-motion fallback ───────────────────────────────────────────────────
// Users who opt out of motion get a completely static image — no 3D at all.
@media (prefers-reduced-motion: reduce) {
    .umair-anwar-arain {
        .img-3d-wrapper {
            cursor: default;
        }
        .circle-img {
            transform: none !important;
            will-change: auto;
        }
        .img-glow {
            display: none;
        }
    }
}

// On touch/mobile devices hide the glow (no cursor to track)
@media (hover: none) {
    .umair-anwar-arain {
        .img-3d-wrapper {
            cursor: default;
        }
        .img-glow { display: none; }
    }
}
</style>
<style lang="scss">
// Full-viewport particle canvas — must be global (not scoped) for fixed positioning
.particle-canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 0;
  will-change: contents;
}

@media (prefers-reduced-motion: reduce) {
  .particle-canvas { display: none; }
}
</style>