// src/components/animations/FloatingElements.jsx
'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const FloatingElements = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  const elements = [
    { content: 'المسجد النبوي', delay: 0, duration: 20, x: '10%', y: '20%' },
    { content: 'المدينة المنورة', delay: 5, duration: 25, x: '85%', y: '30%' },
    { content: 'YouTube', delay: 10, duration: 30, x: '15%', y: '70%' },
    { content: 'Instagram', delay: 15, duration: 22, x: '80%', y: '80%' },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {elements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-secondary/10 font-arabic text-4xl sm:text-6xl"
          style={{ left: element.x, top: element.y }}
          animate={{
            y: [0, -100, 0],
            rotate: [0, 30, 0],
          }}
          transition={{
            duration: element.duration,
            delay: element.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {element.content}
        </motion.div>
      ))}
    </div>
  )
}

export default FloatingElements