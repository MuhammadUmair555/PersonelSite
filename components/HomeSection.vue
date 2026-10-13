<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

// ── Refs ──────────────────────────────────────────────────────────────────────
const imgWrapRef = ref(null)
const canvasRef  = ref(null)

// ── 3D rotation state (unchanged) ────────────────────────────────────────────
let rotX = 0, rotY = 0, glowOp = 0
let targetRotX = 0, targetRotY = 0, targetGlowOp = 0
let rafId = null
let reducedMotion = false
const LERP    = 0.06
const MAX_ROT = 25
function lerp(a, b, t) { return a + (b - a) * t }

// ── Cursor state ──────────────────────────────────────────────────────────────
let mouseX = -9999   // real px position for repulsion
let mouseY = -9999
let cursorNX = 0     // normalised -1…+1 for 3D rotation
let cursorNY = 0

function onGlobalMouseMove(e) {
  if (reducedMotion) return
  mouseX = e.clientX
  mouseY = e.clientY
  cursorNX   = (e.clientX / window.innerWidth)  * 2 - 1
  cursorNY   = (e.clientY / window.innerHeight) * 2 - 1
  targetRotY =  cursorNX * MAX_ROT
  targetRotX = -cursorNY * MAX_ROT
  targetGlowOp = 0.55
}

// ── AI / dev glyph vocabulary ─────────────────────────────────────────────────
const GLYPHS = [
  '{ }', '</>', '=>', '[ ]', '//', '/**/', 'Tailwind', '&&', '||',
  'AI', 'LLM', 'API', 'Design', 'ML', 'Figma',
  'const', 'async', 'await', 'fn()', 'class',
  'useState', 'useEffect', 'ref()', 'computed',
  'Vue', 'React', 'TS', '.tsx', 'UI/UX',
  'git', 'npm', 'UI','Vuex',
  '0', '1', '01', '10', 'id', 'Animation',
  '+', '×', '◇', '▸', '»', '›', '_',
  '⬡', '⬢', '◉', 'className',  // neural-network node shapes
]

// ── Colour palette: deep-space teal / indigo / sky / violet ──────────────────
const COLORS = [
  [20,  184, 166],   // teal-500
  [99,  102, 241],   // indigo-500
  [56,  189, 248],   // sky-400
  [167, 139, 250],   // violet-400
  [34,  211, 238],   // cyan-400
  [129, 140, 248],   // indigo-400
  [94,  234, 212],   // teal-300
  [224, 231, 255],   // indigo-100 (near-white)
]

// ── Particle ──────────────────────────────────────────────────────────────────
class Glyph {
  constructor(cw, ch) {
    this.cw = cw
    this.ch = ch
    this.respawn()
  }

  respawn() {
    // Random position across the full viewport
    this.x  = Math.random() * this.cw
    this.y  = Math.random() * this.ch

    // Depth 0 = far (tiny, slow, dim)  1 = close (larger, faster, bright)
    this.depth = Math.random()

    // Slow independent drift
    const angle = Math.random() * Math.PI * 2
    const spd   = 0.08 + this.depth * 0.22
    this.vx = Math.cos(angle) * spd
    this.vy = Math.sin(angle) * spd

    // Font size: 8 px (far) → 15 px (close)
    this.fontSize = 8 + this.depth * 7

    // Pick a glyph
    this.text = GLYPHS[Math.floor(Math.random() * GLYPHS.length)]

    // Pick a colour
    const ci = Math.floor(Math.random() * COLORS.length)
    this.rgb = COLORS[ci]

    // Base opacity: far = dimmer
    this.baseAlpha = 0.08 + this.depth * 0.32

    // Blink cursor block (10 % chance)
    this.isCursor  = Math.random() < 0.10
    this.blinkPhase = Math.random() * Math.PI * 2

    // Noise seeds for gentle wave drift
    this.sx = Math.random() * 999
    this.sy = Math.random() * 999

    // Used to distribute initial positions over time so canvas fills gradually
    this.age = Math.random() * 6000   // pre-age so they're scattered at start
  }

  update(t) {
    this.age++

    // Sine-wave wobble layered on top of base velocity
    const wx = Math.sin(t * 0.0007 + this.sx) * 0.12
    const wy = Math.cos(t * 0.0009 + this.sy) * 0.12

    // Mouse repulsion — push away when cursor is within 120 px
    let rx = 0, ry = 0
    const dx = this.x - mouseX
    const dy = this.y - mouseY
    const dist = Math.sqrt(dx * dx + dy * dy)
    if (dist < 120 && dist > 0.1) {
      const force = (120 - dist) / 120 * 0.8
      rx = (dx / dist) * force
      ry = (dy / dist) * force
    }

    this.x += this.vx + wx + rx
    this.y += this.vy + wy + ry

    // Wrap around edges so the canvas stays populated
    if (this.x < -30)        this.x = this.cw + 30
    if (this.x > this.cw + 30) this.x = -30
    if (this.y < -20)        this.y = this.ch + 20
    if (this.y > this.ch + 20) this.y = -20
  }

  draw(ctx, t) {
    const [r, g, b] = this.rgb

    // Cursor proximity brightens the glyph
    const dx   = this.x - mouseX
    const dy   = this.y - mouseY
    const dist = Math.sqrt(dx * dx + dy * dy)
    const brightBoost = dist < 120 ? (120 - dist) / 120 * 0.45 : 0
    let alpha = Math.min(1, this.baseAlpha + brightBoost)

    // Blink for cursor-block glyphs
    if (this.isCursor) {
      const blink = (Math.sin(t * 0.05 + this.blinkPhase) + 1) / 2
      alpha *= blink
      this.text = blink > 0.5 ? '▮' : '▯'
    }

    if (alpha < 0.01) return

    ctx.save()
    ctx.globalAlpha = alpha
    ctx.fillStyle   = `rgb(${r},${g},${b})`
    ctx.font        = `${this.fontSize}px 'JetBrains Mono', 'Fira Code', monospace`
    ctx.fillText(this.text, this.x, this.y)
    ctx.restore()
  }
}

// ── Connection lines ──────────────────────────────────────────────────────────
const LINE_DIST      = 110   // max px between two glyphs to draw a line
const LINE_DIST_SQ   = LINE_DIST * LINE_DIST
const CURSOR_DIST    = 140   // connect cursor to nearby glyphs

function drawConnections(ctx, glyphs, t) {
  const n = glyphs.length
  for (let i = 0; i < n; i++) {
    const a = glyphs[i]

    // Cursor line
    const cdx = a.x - mouseX
    const cdy = a.y - mouseY
    const cdSq = cdx * cdx + cdy * cdy
    if (cdSq < CURSOR_DIST * CURSOR_DIST) {
      const alpha = (1 - Math.sqrt(cdSq) / CURSOR_DIST) * 0.35
      const [r, g, b] = a.rgb
      ctx.beginPath()
      ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`
      ctx.lineWidth   = 0.5
      ctx.moveTo(a.x, a.y)
      ctx.lineTo(mouseX, mouseY)
      ctx.stroke()
    }

    // Glyph–glyph lines (only check forward pairs to avoid double-drawing)
    for (let j = i + 1; j < n; j++) {
      const b   = glyphs[j]
      const ddx = a.x - b.x
      const ddy = a.y - b.y
      const dSq = ddx * ddx + ddy * ddy
      if (dSq < LINE_DIST_SQ) {
        const alpha = (1 - Math.sqrt(dSq) / LINE_DIST) * 0.13
        // Blend colours of the two endpoints
        const [ar, ag, ab] = a.rgb
        ctx.beginPath()
        ctx.strokeStyle = `rgba(${ar},${ag},${ab},${alpha})`
        ctx.lineWidth   = 0.4
        ctx.moveTo(a.x, a.y)
        ctx.lineTo(b.x, b.y)
        ctx.stroke()
      }
    }
  }
}

// ── System state ──────────────────────────────────────────────────────────────
let glyphs    = []
let frameTime = 0

const COUNT    = 80
const COUNT_SM = 40

function initGlyphs(cw, ch) {
  const n = cw < 700 ? COUNT_SM : COUNT
  glyphs = Array.from({ length: n }, () => new Glyph(cw, ch))
}

function resizeCanvas() {
  const canvas = canvasRef.value
  if (!canvas) return
  const dpr = window.devicePixelRatio || 1
  const w   = window.innerWidth
  const h   = window.innerHeight
  canvas.width  = w * dpr
  canvas.height = h * dpr
  canvas.style.width  = w + 'px'
  canvas.style.height = h + 'px'
  const ctx = canvas.getContext('2d')
  ctx.scale(dpr, dpr)
  initGlyphs(w, h)
}

// ── Main RAF loop ─────────────────────────────────────────────────────────────
function animate() {
  rafId = requestAnimationFrame(animate)

  // Skip when tab is hidden — saves battery and GPU
  if (document.hidden) return

  frameTime++

  // 3D rotation lerp (existing, unchanged)
  rotX   = lerp(rotX,   targetRotX,   LERP)
  rotY   = lerp(rotY,   targetRotY,   LERP)
  glowOp = lerp(glowOp, targetGlowOp, LERP)

  const el = imgWrapRef.value
  if (el) {
    const img  = el.querySelector('.circle-img')
    const glow = el.querySelector('.img-glow')
    if (img)  img.style.transform = `rotateX(${rotX}deg) rotateY(${rotY}deg)`
    if (glow) {
      glow.style.opacity = glowOp
      const gx = 50 + (rotY / MAX_ROT) * 28
      const gy = 50 - (rotX / MAX_ROT) * 28
      glow.style.background =
        `radial-gradient(circle at ${gx}% ${gy}%, rgba(14,173,105,0.4) 0%, transparent 65%)`
    }
  }

  // Canvas
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  const w   = parseInt(canvas.style.width)
  const h   = parseInt(canvas.style.height)

  ctx.clearRect(0, 0, w, h)

  // Update + draw glyphs
  for (const g of glyphs) {
    g.cw = w
    g.ch = h
    g.update(frameTime)
  }

  // Neural-net connection lines (drawn before glyphs so glyphs sit on top)
  drawConnections(ctx, glyphs, frameTime)

  for (const g of glyphs) {
    g.draw(ctx, frameTime)
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
  glyphs = []
})
</script>
<template>
    <section class="home-section">
        <!-- Full-viewport particle canvas — fixed overlay, behind all content -->
        <canvas ref="canvasRef" class="particle-canvas" aria-hidden="true"></canvas>
        <div  class="Im-Umair">
            <div class="my-name">
                <!-- <div data-aos="fade-down" class="AnimatedDesignation">
                    <AnimatedDesignation  />
                </div> -->
                <span class="hey-there">Hey there! I'm</span>
                <h1>Muhammad <span class="letter-case"> Umair<span style="color: #0ead69;">.</span> </span></h1>
                <p class="my-bio"><span style="color: var(--text-primary);">Software Engineer Frontend</span> with 6+ years of experience delivering end-to-end web and mobile solutions, from interpreting UI/UX designs and architecting the frontend to building, optimizing, and deploying production applications. Expertise in JavaScript, Vue.js, React.js, and React Native, with a focus on responsive interfaces, reusable components, API integration, data-driven dashboards, and performance. Translates business requirements into intuitive, scalable, and maintainable products while collaborating with cross-functional teams. Leverages AI-assisted development to accelerate delivery without compromising code quality.
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
        <div data-aos="fade-up" class="currently-work">
            <!-- <div class="currently-work-mobile">
                <span style="font-size: 22px;">⚡</span><p class="current-position"> Currently Specializing In UI Development Vue.js | React.js | React Native.</p>
            </div> -->
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
            <a href="https://drive.google.com/file/d/1ZTbrWAKtymUZ2zPl3hA6tHNdwdXFb2Zl/view?usp=drive_link" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
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