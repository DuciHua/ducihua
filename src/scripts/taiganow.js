import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

import '../style.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

// ========== Heading Slide Up Text ==========
gsap.from('h1 span span', {
  yPercent: 100,
  duration: 2.5,
  ease: 'power4.out',
})

// ========== Item Reveal ==========
gsap.to('.reveal-item .mask', {
  xPercent: 100,
  duration: 2.2,
  ease: 'power4.inOut',
  stagger: 0.2,
  scrollTrigger: {
    trigger: '.grid',
    start: 'top 70%', // chạm vào giữa viewport mới chạy
  },
  onComplete: (self) => self.targets().forEach((el) => el.remove()),
})
