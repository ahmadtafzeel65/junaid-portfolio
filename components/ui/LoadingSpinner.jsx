// src/components/ui/LoadingSpinner.jsx
const LoadingSpinner = ({ size = 'medium', color = 'secondary' }) => {
  const sizes = {
    small: 'w-4 h-4',
    medium: 'w-8 h-8',
    large: 'w-12 h-12'
  }

  const colors = {
    secondary: 'border-secondary border-t-transparent',
    white: 'border-white border-t-transparent',
    accent: 'border-accent border-t-transparent'
  }

  return (
    <div className="flex items-center justify-center">
      <div className={`${sizes[size]} border-2 ${colors[color]} rounded-full animate-spin`} />
    </div>
  )
}

export default LoadingSpinner