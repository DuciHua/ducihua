import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

import '../style.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

// ========== Hero iPhone rotating ==========
const frameImages = import.meta.glob(
  '/src/assets/img/apple-project/apple-hero-rotate-360/iphone-*.png',
  { eager: true, import: 'default' }
)

const frames = Object.entries(frameImages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, value]) => value)

const totalFrames = frames.length
const frame = { current: 1 }

document.getElementById('hero-iphone').src = frames[0]

gsap.to(frame, {
  current: totalFrames,
  snap: 'current',
  ease: 'none',
  scrollTrigger: {
    trigger: '#scroll-zone',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
  onUpdate: () => {
    const img = document.getElementById('hero-iphone')
    const index = Math.min(totalFrames - 1, frame.current - 1)
    img.src = frames[index]
  },
})

// ========== Hero text stretching ==========
gsap.set('#hero-animated-text', { opacity: 0 })
gsap.to('#hero-animated-text', {
  scrollTrigger: {
    trigger: '#hero-animated-text',
    start: 'top 10%',
    end: '+=7000',
    scrub: true,
  },
  letterSpacing: '-0.5rem',
  opacity: 1,
  ease: 'power2.out',
})

// ========== The brief text animating ==========
const split = new SplitText('#brief-animated-text', { type: 'chars', charsClass: 'char' })

gsap.set(split.chars, { opacity: 0.02 })

gsap.to(split.chars, {
  opacity: 1,
  ease: 'power2.inOut',
  stagger: 0.025,
  scrollTrigger: {
    trigger: '#brief-animated-text',
    start: 'top 70%',
    end: 'top top',
    scrub: true,
  },
})

