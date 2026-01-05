// src/components/sections/Stats.jsx
'use client'

import { motion } from 'framer-motion'
import { Youtube, Eye, Instagram, Facebook } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const stats = [
    {
      icon: Youtube,
      value: 100000,
      suffix: '+',
      label: 'YouTube Subscribers',
      color: 'text-red-500',
    },
    {
      icon: Eye,
      value: 5000000,
      suffix: '+',
      label: 'Total Views',
      color: 'text-secondary',
    },
    {
      icon: Instagram,
      value: 50000,
      suffix: '+',
      label: 'Instagram Followers',
      color: 'text-pink-500',
    },
    {
      icon: Facebook,
      value: 30000,
      suffix: '+',
      label: 'Facebook Followers',
      color: 'text-blue-500',
    },
  ]

  return (
    <section ref={ref} className="py-20 bg-primary-light/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-white">Community</span>
            <span className="text-secondary"> Impact</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join thousands of Muslims worldwide who benefit from authentic Islamic content
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-primary-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-secondary/10 hover:border-secondary/30 transition-all duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-light to-primary-dark mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-white mb-2">
                  {isInView ? (
                    <AnimatedCounter
                      from={0}
                      to={stat.value}
                      duration={2}
                      delay={index * 0.2}
                    />
                  ) : (
                    '0'
                  )}
                  <span className="text-secondary">{stat.suffix}</span>
                </div>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>

              {/* Animated background effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-secondary/0 via-secondary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 italic">
            "And whoever brings a good deed will have ten times the like thereof" [Quran 6:160]
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats