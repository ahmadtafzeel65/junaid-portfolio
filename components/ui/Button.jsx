// src/components/ui/Button.jsx
'use client'

import { motion } from 'framer-motion'

const Button = ({ 
  children, 
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseClasses = 'font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'bg-gradient-to-r from-secondary to-secondary/80 text-white hover:shadow-glow hover:scale-105',
    secondary: 'border-2 border-secondary text-secondary hover:bg-secondary hover:text-white hover:scale-105',
    ghost: 'text-gray-400 hover:text-white hover:bg-primary-light/20',
  }

  const sizes = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3',
    large: 'px-8 py-4 text-lg',
  }

  const widthClass = fullWidth ? 'w-full' : ''

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}

export default Button