import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

import '../style.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

// ========== Hero chart ==========
window.addEventListener('DOMContentLoaded', () => {
  const svg = document.getElementById('hero-chart')
  if (!svg) return

  const heroPolys = gsap.utils.toArray('.hero-chart-polygon')
  const heroLines = gsap.utils.toArray('.hero-chart-line')
  const heroShapes = gsap.utils.toArray('.hero-chart-shape')
  const heroDots = gsap.utils.toArray('.hero-chart-dots')
  const heroTag = gsap.utils.toArray('.hero-chart-tag')

  const vb = svg.viewBox.baseVal
  const cx = vb.x + vb.width / 2
  const cy = vb.y + vb.height / 2
  const center = `${cx} ${cy}`

  // Original attributions
  gsap.set(heroPolys, { scale: 0.6, opacity: 0.5 })
  gsap.set(heroLines, { opacity: 0 })
  gsap.set(heroShapes, { scale: 0.9, opacity: 0.1 })
  gsap.set(heroDots, { opacity: 0 })
  gsap.set(heroTag, { scale: 0.5, opacity: 0 })

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.3 })

  tl.to(
    heroDots,
    {
      opacity: 1,
      duration: 1,
    },
    0
  )

  tl.to(
    heroPolys,
    {
      scale: 1,
      opacity: 1,
      duration: 1.5,
    },
    0
  )

  tl.to(
    heroLines,
    {
      opacity: 1,
      duration: 1,
      stagger: 0.08,
    },
    0
  )

  tl.to(
    heroShapes,
    {
      scale: 1,
      opacity: 1,
      duration: 1.5,

      stagger: { each: 0.2, from: 'start' },
    },
    '>-0.9'
  )

  tl.to(
    heroTag,
    {
      scale: 1,
      opacity: 1,
      duration: 0.3,
      stagger: { each: 0.4, from: 'start' },
    },
    '<+0.2'
  )
})

// ========== Empathize chart ==========
window.addEventListener('DOMContentLoaded', () => {
  const svg = document.getElementById('empathize-chart')
  if (!svg) return

  const empathizeEllipse = gsap.utils.toArray('.empathize-chart-ellipse')
  const empathizeLines = gsap.utils.toArray('.empathize-chart-lines')
  const empathizeText = gsap.utils.toArray('.empathize-chart-text')
  const empathizeBubble = gsap.utils.toArray('.empathize-chart-bubble')

  // Original attributions
  gsap.set(empathizeEllipse, { opacity: 0 })
  gsap.set(empathizeLines, { opacity: 0 })
  gsap.set(empathizeText, { opacity: 0 })
  gsap.set(empathizeBubble, { opacity: 0 })

  const tl = gsap.timeline({
    defaults: { ease: 'power3.out' },
    scrollTrigger: {
      trigger: '#empathize-chart',
      start: 'top 75%',
      toggleActions: 'play none none none',
    },
  })

  tl.to(empathizeEllipse, { opacity: 1, duration: 2, stagger: { each: 0.2 } })
    .to(empathizeLines, { scale: 1, opacity: 1, duration: 2 }, '<+0.2')
    .to(empathizeText, { opacity: 1, duration: 2, stagger: { each: 0.2 } }, '<+0.2')
    .to(empathizeBubble, { opacity: 1, duration: 2.5, stagger: { each: 0.2 } }, '<+0.2')
})
