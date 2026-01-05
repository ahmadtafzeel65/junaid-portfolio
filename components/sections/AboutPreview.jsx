// src/components/sections/AboutPreview.jsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Target, Heart, BookOpen, Users, Award, Clock, Sparkles } from 'lucide-react'
import Link from 'next/link'

const AboutPreview = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const features = [
    {
      icon: GraduationCap,
      title: 'Student at Madina University',
      description: 'Pursuing Islamic Studies while creating educational content',
      color: 'text-blue-400'
    },
    {
      icon: Target,
      title: 'Clear Mission',
      description: 'Making authentic Islamic knowledge accessible to youth globally',
      color: 'text-green-400'
    },
    {
      icon: Heart,
      title: 'Passionate Creator',
      description: 'Dedicated to spreading the teachings of Quran and Sunnah',
      color: 'text-pink-400'
    },
    {
      icon: BookOpen,
      title: 'Content Focus',
      description: 'Quranic studies, Prophetic traditions, and modern applications',
      color: 'text-yellow-400'
    }
  ]

  const stats = [
    { value: '12', label: 'Years Old', icon: Users },
    { value: '3+', label: 'Years Experience', icon: Clock },
    { value: '200+', label: 'Videos Created', icon: Award },
    { value: '100K+', label: 'Students Reached', icon: Sparkles }
  ]

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-primary-dark to-primary-light/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-secondary to-accent rounded" />
            <span className="text-secondary font-semibold">About The Creator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Meet <span className="text-secondary">Junaid Hussain</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A passionate young Islamic scholar and content creator dedicated to making authentic Islamic 
            knowledge accessible and engaging for the digital generation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white">
                Spreading Light from <span className="text-accent">المدينة المنورة</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">
                As a 12-year-old student at the prestigious Madina University, I combine traditional 
                Islamic scholarship with modern content creation to reach young Muslims worldwide.
              </p>
              <p className="text-gray-300 leading-relaxed">
                My journey began with a simple desire to share the beautiful teachings of Islam in a way 
                that resonates with today's youth. Through YouTube, social media, and educational content, 
                I aim to build bridges between classical Islamic knowledge and modern understanding.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-primary-light/20 rounded-xl p-4 text-center border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-secondary" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 10 }}
                className="group bg-primary-light/20 backdrop-blur-sm rounded-2xl p-6 border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-2 group-hover:text-secondary transition-colors duration-300">
                      {feature.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-secondary/10 via-secondary/5 to-accent/10 rounded-3xl p-8 lg:p-12 border border-secondary/20 mb-12"
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/4 text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary to-accent mb-4">
                <span className="text-2xl font-arabic text-white">م</span>
              </div>
              <h4 className="text-xl font-bold text-white">My Mission</h4>
            </div>
            <div className="lg:w-3/4">
              <blockquote className="text-lg text-gray-300 italic border-l-4 border-secondary pl-6 py-2">
                "To empower the next generation of Muslims with authentic Islamic knowledge, 
                helping them navigate modern challenges while staying true to Quran and Sunnah, 
                all through engaging, youth-friendly digital content."
              </blockquote>
              <div className="flex items-center gap-4 mt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center">
                  <span className="text-white font-bold">J</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Junaid Hussain</div>
                  <div className="text-sm text-gray-400">Islamic Content Creator</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-secondary to-secondary/80 text-white rounded-full font-semibold hover:shadow-glow transition-all duration-300"
          >
            <span>Discover My Full Journey</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutPreview