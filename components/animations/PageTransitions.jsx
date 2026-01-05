// src/components/animations/PageTransitions.jsx
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const PageTransitions = ({ children }) => {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    // Simulate loading for demonstration
    handleStart()
    const timer = setTimeout(handleComplete, 500)
    
    return () => clearTimeout(timer)
  }, [pathname])

  const variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    enter: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 }
  }

  return (
    <>
      {/* Loading Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-primary-dark/80 backdrop-blur-sm z-50 flex items-center justify-center"
          >
            <div className="text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="w-16 h-16 border-4 border-secondary/30 border-t-secondary rounded-full mx-auto mb-4"
              />
              <p className="text-secondary">Loading...</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Page Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 20,
            duration: 0.3
          }}
          className="relative"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default PageTransitions