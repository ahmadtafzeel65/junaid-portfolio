// src/app/page.jsx
'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from '@/components/sections/Hero'
import AboutPreview from '@/components/sections/AboutPreview'
import VideoSection from '@/components/sections/VideoSection'
import Stats from '@/components/sections/Stats'
import BlogPreview from '@/components/sections/BlogPreview'
import Gallery from '@/components/sections/Gallery'
import ContactForm from '@/components/sections/ContactForm'
import ScrollAnimations from '@/components/animations/ScrollAnimations'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Header animations
      gsap.from('.hero-title', {
        duration: 1,
        y: 100,
        opacity: 0,
        ease: 'power4.out'
      })

      gsap.from('.hero-subtitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        delay: 0.3,
        ease: 'power4.out'
      })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <ScrollAnimations />
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hero Section */}
        <Hero />

        {/* About Preview */}
        <AboutPreview />

        {/* Most Viewed Videos */}
        <VideoSection 
          title="Most Viewed Videos"
          type="mostViewed"
        />

        {/* Latest Videos */}
        <VideoSection 
          title="Latest Uploads"
          type="latest"
        />

        {/* Social Media Stats */}
        <Stats />

        {/* Latest Blog Posts */}
        <BlogPreview />

        {/* Gallery */}
        <Gallery />

        {/* Contact Form */}
        <ContactForm />
      </motion.div>
    </>
  )
}