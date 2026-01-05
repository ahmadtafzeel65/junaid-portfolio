// src/components/ui/Card.jsx
'use client'

import { motion } from 'framer-motion'
import { forwardRef } from 'react'

const Card = forwardRef(({ 
  children, 
  className = '',
  variant = 'default',
  hoverable = true,
  onClick,
  ...props 
}, ref) => {
  const baseClasses = 'rounded-2xl transition-all duration-300'
  
  const variants = {
    default: 'bg-primary-light/30 backdrop-blur-sm border border-secondary/10 hover:border-secondary/30',
    elevated: 'bg-primary-dark border border-secondary/10 shadow-xl hover:shadow-2xl',
    transparent: 'bg-transparent border border-secondary/10',
    gradient: 'bg-gradient-to-br from-primary-light/20 to-primary-dark/20 border border-secondary/10'
  }

  const hoverClasses = hoverable ? 'hover:-translate-y-2' : ''

  return (
    <motion.div
      ref={ref}
      whileHover={hoverable ? { y: -8 } : {}}
      whileTap={onClick ? { scale: 0.98 } : {}}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${hoverClasses} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  )
})

Card.displayName = 'Card'

export default Card