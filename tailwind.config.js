// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0A0F0D',
          DEFAULT: '#0F1A15',
          light: '#1A2A22',
        },
        secondary: {
          DEFAULT: '#10B981', // Emerald Green
          light: '#34D399',
          dark: '#059669',
        },
        accent: {
          DEFAULT: '#D4AF37', // Islamic Gold
          light: '#F4E4A6',
          dark: '#B7950B',
        },
      },
      fontFamily: {
        arabic: ['Scheherazade', 'serif'],
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'islamic-pattern': "url('/images/islamic-pattern.png')",
        'hero-pattern': "linear-gradient(rgba(10, 15, 13, 0.9), rgba(10, 15, 13, 0.9)), url('/images/hero-bg.jpg')",
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)' },
          'to': { boxShadow: '0 0 30px rgba(16, 185, 129, 0.8)' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}