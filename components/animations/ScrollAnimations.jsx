// src/components/animations/ScrollAnimations.jsx
'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ScrollAnimations = () => {
  useEffect(() => {
    // Animate sections on scroll
    const sections = gsap.utils.toArray('.animate-section')

    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
      })
    })

    // Parallax effects
    gsap.utils.toArray('.parallax').forEach((layer) => {
      const speed = layer.dataset.speed || 1
      gsap.to(layer, {
        y: (1 - speed) * 100,
        ease: 'none',
        scrollTrigger: {
          trigger: layer.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    })

    // Stagger animations
    gsap.utils.toArray('.stagger-item').forEach((container) => {
      const items = container.querySelectorAll('.stagger-child')
      gsap.from(items, {
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return null
}

export default ScrollAnimations