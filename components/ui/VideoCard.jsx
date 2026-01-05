// src/components/ui/VideoCard.jsx
'use client'

import { motion } from 'framer-motion'
import { PlayCircle, Eye, ThumbsUp, Calendar, Clock, Share2 } from 'lucide-react'
import { useState } from 'react'

const VideoCard = ({ video, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  const formatNumber = (num) => {
    if (num.includes('K')) return num
    const number = parseInt(num.replace(/[^0-9]/g, ''))
    if (number >= 1000000) return `${(number / 1000000).toFixed(1)}M`
    if (number >= 1000) return `${(number / 1000).toFixed(1)}K`
    return number.toString()
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative bg-primary-dark rounded-2xl overflow-hidden border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
    >
      {/* Thumbnail Container */}
      <div className="relative h-48 sm:h-56 overflow-hidden">
        {/* Thumbnail */}
        <div className="relative w-full h-full">
          <img
            src={video.thumbnail}
            alt={video.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
        </div>
        
        {/* Duration Badge */}
        <div className="absolute bottom-3 right-3 bg-primary-dark/90 text-xs px-2 py-1 rounded">
          {video.duration}
        </div>
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-secondary/80 transition-colors duration-300"
          >
            <PlayCircle className="w-10 h-10 text-white" />
          </motion.div>
        </div>
        
        {/* Hover Action Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isHovered ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
          className="absolute top-3 left-3 right-3 flex justify-between"
        >
          <button className="px-3 py-1 bg-secondary/90 text-white text-xs rounded-full hover:bg-secondary transition-colors duration-300">
            Islamic
          </button>
          <button className="w-8 h-8 bg-primary-dark/80 rounded-full flex items-center justify-center hover:bg-secondary/20 transition-colors duration-300">
            <Share2 className="w-4 h-4 text-white" />
          </button>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-6">
        {/* Title */}
        <h3 className="font-semibold text-white line-clamp-2 group-hover:text-secondary transition-colors duration-300 mb-3">
          {video.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {video.description}
        </p>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{formatNumber(video.views)}</span>
            </div>
            <div className="flex items-center space-x-1">
              <ThumbsUp className="w-4 h-4" />
              <span>{formatNumber(video.likes)}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Calendar className="w-4 h-4" />
            <span>{video.date}</span>
          </div>
        </div>

        {/* Watch Button */}
        <motion.a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 10 }}
          animate={isHovered ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          className="mt-4 w-full bg-secondary/10 text-secondary hover:bg-secondary hover:text-white py-2 rounded-lg text-center text-sm font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
        >
          <PlayCircle className="w-4 h-4" />
          Watch on YouTube
        </motion.a>
      </div>

      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.article>
  )
}

export default VideoCard