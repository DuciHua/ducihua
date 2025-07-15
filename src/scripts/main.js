import Alpine from 'alpinejs'
window.Alpine = Alpine
Alpine.start()

import '../style.css';

import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { CustomEase } from 'gsap/CustomEase'
gsap.registerPlugin(ScrollTrigger, CustomEase)


CustomEase.create("cubic", "0.83, 0, 0.17, 1");
      let isAnimating = false;

      function initializeCards() {
        const cards = document.querySelectorAll(".card");
        gsap.to(cards, {
          y: (i) => -15 + 15 * i + "%",
          z: (i) => 15 * i,
          duration: 1,
          ease: "cubic",
          stagger: -0.1
        });
      }

      function splitTextIntoSpans(selector) {
        document.querySelectorAll(selector).forEach((el) => {
          const chars = el.innerText.split("").map(c => `<span>${c === " " ? "&nbsp;&nbsp;" : c}</span>`).join("");
          el.innerHTML = chars;
        });
      }

      function triggerCardSwap() {
        if (isAnimating) return;
        isAnimating = true;

        const slider = document.querySelector(".slider");
        const cards = Array.from(slider.querySelectorAll(".card"));
        const lastCard = cards.pop();
        const nextCard = cards[cards.length - 1];

        gsap.to(lastCard.querySelectorAll("h1 span"), {
          y: 200,
          duration: 0.75,
          ease: "cubic",
        });

        gsap.to(lastCard, {
          y: "+=150%",
          duration: 0.75,
          ease: "cubic",
          onComplete: () => {
            slider.prepend(lastCard);
            initializeCards();
            gsap.set(lastCard.querySelectorAll("h1 span"), { y: -200 });
            setTimeout(() => { isAnimating = false; }, 1000);
          },
        });

        gsap.to(nextCard.querySelectorAll("h1 span"), {
          y: 0,
          duration: 1,
          ease: "cubic",
          stagger: 0.05
        });
      }

      document.addEventListener("DOMContentLoaded", () => {
        splitTextIntoSpans(".copy h1");
        initializeCards();
        gsap.set("h1 span", { y: -200 });
        gsap.set(".slider .card:last-child h1 span", { y: 0 });

        document.querySelector(".slider").addEventListener("wheel", (e) => {
          if (e.deltaY > 0) {
            e.preventDefault();
            triggerCardSwap();
          }
        }, { passive: false });
      });
