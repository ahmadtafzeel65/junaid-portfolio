// src/components/layout/LayoutWrapper.jsx
'use client'

import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import FloatingElements from '@/components/animations/FloatingElements'
import ScrollAnimations from '@/components/animations/ScrollAnimations'

const LayoutWrapper = ({ children }) => {
  const pathname = usePathname()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <FloatingElements />
      <ScrollAnimations />
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  )
}

export default LayoutWrapper