import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

import '../style.css'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'
gsap.registerPlugin(ScrollTrigger, SplitText)

// ========== Claim ==========
document.querySelectorAll('.claim-wrapper').forEach((wrapper) => {
  const images = wrapper.querySelector('.claim-images')

  // Pin wrapper
  ScrollTrigger.create({
    trigger: wrapper,
    start: 'top top',
    end: () => '+=' + images.scrollHeight,
    pin: true,
    scrub: true,
  })

  // Scroll image list inside
  gsap.to(images, {
    y: () => -(images.scrollHeight - wrapper.offsetHeight),
    ease: 'none',
    scrollTrigger: {
      trigger: wrapper,
      start: 'top top',
      end: () => '+=' + images.scrollHeight,
      scrub: true,
    },
  })
})

// ========== Conclusion ==========
const img = document.getElementById('conclusion-hero-img')

gsap.to(img, {
  scale: 0.7,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '#conclusion-pin',
    start: 'top top',
    end: '+=100%',
    scrub: 0.5,
    pin: true,
    anticipatePin: 1,
  },
})

// ========== Section heading animated ==========
gsap.utils.toArray('.section-heading-animated').forEach((el) => {
  gsap.fromTo(
    el,
    {
      scale: 2.5,
      opacity: 0,
      transformOrigin: 'center center',
    },
    {
      scale: 1,
      opacity: 1,
      letterSpacing: '0em',
      duration: 1.5,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        end: 'end 40%',
        scrub: true,
      },
    }
  )
})

// gsap.from('.section-heading-animated-2', {
//   y: 40, // từ dưới lên
//   opacity: 0,
//   duration: 0.8,
//   ease: 'power3.out',
//   delay: 0.5,
// })

gsap.utils.toArray(".section-heading-animated-2").forEach((el) => {
  gsap.to(el, {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    ease: "power2.out",
    duration: 0.5,
    scrollTrigger: {
      trigger: el,
      start: "top 99%",
      toggleActions: "play none none none",
    },
  });
});


gsap.utils.toArray(".section-heading-animated-hero").forEach((el) => {
  gsap.to(el, {
    clipPath: "inset(0% 0 0 0)",
    opacity: 1,
    ease: "power2.out",
    duration: 1,
    delay: 0.5,
    scrollTrigger: {
      trigger: el,
      start: "top 99%",
      toggleActions: "play none none none",
    },
  });
});

// ========== Fade in slide up animation ==========
gsap.utils.toArray('.fade-vertical-section').forEach((el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0,
      y: 100,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: 'sine3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 95%',
        end: '+=500',
        toggleActions: 'play none none none',
        scrub: true,
      },
    }
  )
})