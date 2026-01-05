// src/components/ui/AnimatedCounter.jsx
'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'

const AnimatedCounter = ({ 
  from = 0, 
  to, 
  duration = 2, 
  delay = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
  className = '',
  onComplete
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hasAnimated, setHasAnimated] = useState(false)
  
  // Spring animation for smooth counting
  const spring = useSpring(from, {
    stiffness: 100,
    damping: 30,
    mass: 1
  })
  
  // Transform the spring value to an integer
  const displayValue = useTransform(spring, (latest) => {
    return latest.toFixed(decimals)
  })

  useEffect(() => {
    if (isInView && !hasAnimated) {
      const timer = setTimeout(() => {
        spring.set(to)
        setHasAnimated(true)
        if (onComplete) onComplete()
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [isInView, hasAnimated, spring, to, delay, onComplete])

  // Format number with commas
  const formatNumber = (num) => {
    const parts = num.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  }

  return (
    <div ref={ref} className={`inline-flex items-center ${className}`}>
      {prefix && <span className="mr-1">{prefix}</span>}
      <motion.span
        className="font-bold tabular-nums"
      >
        {displayValue}
      </motion.span>
      {suffix && <span className="ml-1">{suffix}</span>}
    </div>
  )
}

// Enhanced version with more features
const EnhancedCounter = ({ 
  value, 
  duration = 2,
  delay = 0,
  prefix = '',
  suffix = '',
  className = '',
  showPlus = false,
  animateOnView = true,
  easing = [0.32, 0.72, 0, 1] // Custom easing function
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasCompleted, setHasCompleted] = useState(false)

  useEffect(() => {
    if ((animateOnView && isInView) || !animateOnView) {
      if (!isAnimating && !hasCompleted) {
        setIsAnimating(true)
        
        const startTime = Date.now()
        const endValue = typeof value === 'string' ? parseInt(value.replace(/[^0-9]/g, '')) : value
        
        const animate = () => {
          const elapsed = Date.now() - startTime
          const progress = Math.min(elapsed / (duration * 1000), 1)
          
          // Custom easing function
          const eased = easing[0] + 
                       easing[1] * Math.pow(progress, 2) + 
                       easing[2] * Math.pow(progress, 3) + 
                       easing[3] * Math.pow(progress, 4)
          
          const currentCount = Math.floor(eased * endValue)
          setCount(currentCount)
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          } else {
            setCount(endValue)
            setIsAnimating(false)
            setHasCompleted(true)
          }
        }
        
        // Start animation after delay
        setTimeout(() => {
          requestAnimationFrame(animate)
        }, delay * 1000)
      }
    }
  }, [isInView, isAnimating, hasCompleted, value, duration, delay, animateOnView, easing])

  // Format the number
  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toLocaleString()
  }

  return (
    <div ref={ref} className={`inline-flex items-center ${className}`}>
      {prefix && <span className="mr-1">{prefix}</span>}
      <span className="font-bold tabular-nums">
        {formatNumber(count)}
      </span>
      {showPlus && count >= value && <span className="ml-1">+</span>}
      {suffix && <span className="ml-1">{suffix}</span>}
    </div>
  )
}

// Counter with progress bar
const CounterWithProgress = ({ 
  value, 
  label, 
  duration = 2,
  max = 100,
  color = 'secondary',
  showPercentage = true
}) => {
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime = null
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const elapsed = timestamp - startTime
        const progress = Math.min(elapsed / (duration * 1000), 1)
        
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3)
        
        setProgress(eased * value)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration])

  const colors = {
    secondary: 'from-secondary to-secondary-light',
    accent: 'from-accent to-accent-light',
    red: 'from-red-500 to-red-600',
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600'
  }

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">{label}</span>
        {showPercentage && (
          <span className="text-sm font-semibold text-white">
            {Math.round((progress / max) * 100)}%
          </span>
        )}
      </div>
      <div className="relative">
        <div className="h-2 bg-primary-light/30 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${colors[color]} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: `${(progress / max) * 100}%` }}
            transition={{ duration: duration, ease: "easeOut" }}
          />
        </div>
        <div className="flex justify-between mt-1">
          <span className="text-xs text-gray-500">0</span>
          <span className="text-xs text-gray-500">{max.toLocaleString()}</span>
        </div>
      </div>
    </div>
  )
}

// Stat Counter Card
const StatCounterCard = ({ 
  icon: Icon,
  value,
  label,
  description,
  duration = 2,
  delay = 0,
  color = 'secondary'
}) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const endValue = typeof value === 'string' 
        ? parseInt(value.replace(/[^0-9]/g, '')) 
        : value
      
      setTimeout(() => {
        let startTime = null
        
        const animate = (timestamp) => {
          if (!startTime) startTime = timestamp
          const elapsed = timestamp - startTime
          const progress = Math.min(elapsed / (duration * 1000), 1)
          
          // Ease out back
          const eased = 1 - Math.pow(1 - progress, 3)
          
          setCount(Math.floor(eased * endValue))
          
          if (progress < 1) {
            requestAnimationFrame(animate)
          }
        }
        
        requestAnimationFrame(animate)
      }, delay * 1000)
    }
  }, [isInView, value, duration, delay])

  const colors = {
    secondary: {
      bg: 'bg-secondary/10',
      text: 'text-secondary',
      gradient: 'from-secondary to-secondary-light'
    },
    accent: {
      bg: 'bg-accent/10',
      text: 'text-accent',
      gradient: 'from-accent to-accent-light'
    },
    blue: {
      bg: 'bg-blue-500/10',
      text: 'text-blue-500',
      gradient: 'from-blue-500 to-blue-600'
    },
    pink: {
      bg: 'bg-pink-500/10',
      text: 'text-pink-500',
      gradient: 'from-pink-500 to-pink-600'
    }
  }

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toLocaleString()
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`${colors[color].bg} p-6 rounded-2xl border border-secondary/10 hover:border-secondary/30 transition-all duration-300`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 rounded-xl ${colors[color].bg} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${colors[color].text}`} />
        </div>
        <div className="text-right">
          <div className="text-3xl font-bold text-white">
            {formatNumber(count)}
            {typeof value === 'string' && value.includes('+') && count >= parseInt(value) && '+'}
          </div>
          <div className={`text-sm ${colors[color].text}`}>{label}</div>
        </div>
      </div>
      {description && (
        <p className="text-gray-400 text-sm mt-2">{description}</p>
      )}
      <div className="mt-4">
        <div className="h-1 w-full bg-primary-light/30 rounded-full overflow-hidden">
          <motion.div
            className={`h-full bg-gradient-to-r ${colors[color].gradient} rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: duration, delay: delay }}
          />
        </div>
      </div>
    </motion.div>
  )
}

// Circular Progress Counter
const CircularCounter = ({
  value,
  max = 100,
  label,
  duration = 2,
  size = 120,
  strokeWidth = 8,
  color = 'secondary'
}) => {
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime = null
      
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp
        const elapsed = timestamp - startTime
        const prog = Math.min(elapsed / (duration * 1000), 1)
        
        // Ease out
        const eased = 1 - Math.pow(1 - prog, 3)
        
        setProgress(eased * value)
        
        if (prog < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      requestAnimationFrame(animate)
    }
  }, [isInView, value, duration])

  const radius = (size - strokeWidth) / 2
  const circumference = radius * 2 * Math.PI
  const offset = circumference - (progress / max) * circumference

  const colors = {
    secondary: {
      stroke: '#10B981',
      text: 'text-secondary'
    },
    accent: {
      stroke: '#D4AF37',
      text: 'text-accent'
    },
    blue: {
      stroke: '#3B82F6',
      text: 'text-blue-500'
    },
    pink: {
      stroke: '#EC4899',
      text: 'text-pink-500'
    }
  }

  return (
    <div ref={ref} className="inline-flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="transform -rotate-90">
          {/* Background circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-primary-light/30"
          />
          {/* Progress circle */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={colors[color].stroke}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`text-2xl font-bold ${colors[color].text}`}>
              {Math.round(progress)}
            </div>
            {label && (
              <div className="text-sm text-gray-400 mt-1">{label}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimatedCounter
export { EnhancedCounter, CounterWithProgress, StatCounterCard, CircularCounter }