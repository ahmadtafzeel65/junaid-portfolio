// src/components/sections/VideoSection.jsx
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { VIDEOS } from '@/lib/constants'
import VideoCard from '@/components/ui/VideoCard'

const VideoSection = ({ title, type = 'mostViewed' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const videos = VIDEOS[type]

  return (
    <section ref={ref} className="section-padding bg-primary-light/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">{title}</span>
            <span className="text-secondary"> Videos</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {type === 'mostViewed' 
              ? 'Most popular Islamic content loved by thousands of viewers worldwide'
              : 'Latest uploads on Islamic teachings, Quran studies, and youth guidance'
            }
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.youtube.com/@JunaidHussainMadina"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-secondary to-secondary/80 text-white px-8 py-3 rounded-full font-semibold hover:shadow-glow transition-all duration-300 group"
          >
            <span>View All Videos on YouTube</span>
            <svg 
              className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoSection