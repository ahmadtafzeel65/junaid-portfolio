// src/app/layout.jsx
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import LayoutWrapper from '@/components/layout/LayoutWrapper'

// Next.js 14 font loading - simplified version
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

// For Arabic font, we'll use a different approach
// Since Scheherazade might not be available in Google Fonts API
// We'll use @font-face in globals.css instead

export const metadata = {
  title: 'Junaid Hussain - Young Islamic Content Creator from Madina',
  description: 'Official portfolio of Junaid Hussain, a young Islamic content creator and student at Madina University',
  keywords: 'Islamic content, young Muslim, Madina, Quran, Sunnah, youth inspiration',
}

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      dir="ltr" 
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Add Arabic font link */}
        <link
          href="https://fonts.googleapis.com/css2?family=Scheherazade+New:wght@400;700&display=swap"
          rel="stylesheet"
        />
        {/* Add preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-primary-dark text-white font-sans">
        <div className="fixed inset-0 bg-islamic-pattern opacity-5 pointer-events-none -z-10" />
        <LayoutWrapper>
          <Navbar />
          <main className="min-h-screen pt-16">
            {children}
          </main>
          <Footer />
        </LayoutWrapper>
      </body>
    </html>
  )
}