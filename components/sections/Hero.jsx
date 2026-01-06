// src/components/sections/Hero.jsx
'use client'

import { motion } from 'framer-motion'
import { PlayCircle, Users, Calendar, Star, Youtube, InstagramIcon, Instagram, Facebook } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-hero-pattern bg-cover bg-center">
      {/* Animated Islamic Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {isClient && (
          <>
            <motion.div
              animate={{ y: [0, -100, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 left-10 text-accent/20 text-6xl"
            >
              <Youtube className='h-16 w-16'/>
            </motion.div>
            <motion.div
              animate={{ x: [0, 100, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-20 right-10 text-secondary/20 text-8xl"
            >
            <Instagram className='w-16 h-16'/>
            </motion.div>
          </>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 1, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title text-4xl sm:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="text-white">Junaid</span>
            <span className="text-secondary"> Hussain</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 1, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-subtitle text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
          >
            Young Islamic Content Creator from <span className="text-accent font-arabic">المدينة المنورة</span>
          </motion.p>
            
           
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mb-12"
          >
            {[
              { icon: Users, label: 'YouTube Subscribers', value: '100K+' },
              { icon: PlayCircle, label: 'Total Views', value: '5M+' },
              { icon: Calendar, label: 'Videos Uploaded', value: '200+' },
              { icon: Star, label: 'Content Rating', value: '4.9/5' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-primary-light/50 backdrop-blur-sm rounded-xl p-4 min-w-[140px] border border-secondary/10"
              >
                <stat.icon className="w-8 h-8 text-secondary mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://www.youtube.com/@JunaidHussainMadina"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-secondary to-secondary/80 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-3"
            >
              <PlayCircle className="w-6 h-6" />
              Watch Videos
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            <a
              href="https://www.youtube.com/@JunaidHussainMadina?sub_confirmation=1"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden border-2 border-secondary text-secondary px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
            >
              <Users className="w-6 h-6" />
              Subscribe Channel
              <div className="absolute inset-0 bg-secondary/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-12 text-gray-400 text-sm"
          >
            Trusted by thousands of viewers worldwide • Authentic Islamic content • Youth-friendly approach
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero