// src/components/layout/Footer.jsx
'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { 
  Youtube, 
  Instagram, 
  Facebook, 
  Mail, 
  MapPin, 
  Phone, 
  Heart, 
  Send,
  ArrowUp,
  BookOpen,
  Users,
  Globe,
  Clock1,
  Clock
} from 'lucide-react'

const Footer = () => {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const currentYear = new Date().getFullYear()

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (email) {
      // Simulate subscription
      setIsSubscribed(true)
      setEmail('')
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Videos', href: '/#videos' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Gallery', href: '/#gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  const categories = [
    { name: 'Quran Studies', count: 24 },
    { name: 'Prophet Stories', count: 18 },
    { name: 'Youth Guidance', count: 32 },
    { name: 'Islamic Etiquette', count: 15 },
    { name: 'Student Life', count: 21 },
    { name: 'Modern Issues', count: 12 },
  ]

  const socialLinks = [
    { icon: Youtube, href: 'https://youtube.com/@JunaidHussainMadina', label: 'YouTube', color: 'text-red-500' },
    { icon: Instagram, href: 'https://instagram.com/junaidhussainmadina', label: 'Instagram', color: 'text-pink-500' },
    { icon: Facebook, href: 'https://facebook.com/JunaidHussainMadina', label: 'Facebook', color: 'text-blue-500' },
    { icon: Mail, href: 'mailto:contact@junaidhussain.com', label: 'Email', color: 'text-secondary' },
  ]

  return (
    <footer className="relative overflow-hidden bg-primary-dark border-t border-secondary/10">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-light/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <span className="font-arabic text-2xl text-white">ج</span>
                </div>
                <div>
                  <div className="font-heading text-2xl font-bold text-white">
                    Junaid<span className="text-secondary">Hussain</span>
                  </div>
                  <div className="text-sm text-gray-400">Islamic Content Creator</div>
                </div>
              </div>
              
              <p className="text-gray-400 mb-6">
                Spreading authentic Islamic knowledge with a modern, youth-friendly approach from the blessed city of Madinah.
              </p>
              
              {/* Newsletter Subscription */}
              <div className="mb-8">
                <h4 className="font-semibold text-white mb-4">Stay Updated</h4>
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 bg-primary-light border border-secondary/20 rounded-lg px-4 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubscribed}
                    className="px-4 py-2 bg-gradient-to-r from-secondary to-secondary/80 text-white rounded-lg hover:shadow-glow transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubscribed ? 'Subscribed!' : <Send className="w-4 h-4" />}
                  </button>
                </form>
                <p className="text-gray-500 text-xs mt-2">No spam. Unsubscribe anytime.</p>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-10 h-10 rounded-lg bg-primary-light/30 border border-secondary/10 flex items-center justify-center hover:border-secondary/30 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              <h4 className="font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-secondary transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <div className="w-1 h-1 bg-secondary/0 group-hover:bg-secondary rounded-full transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Categories Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <h4 className="font-semibold text-white mb-6">Content Categories</h4>
              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category.name}>
                    <a
                      href="#"
                      className="flex items-center justify-between text-gray-400 hover:text-white transition-colors duration-300 group"
                    >
                      <span className="text-sm">{category.name}</span>
                      <span className="text-xs px-2 py-1 bg-primary-light/30 rounded-full group-hover:bg-secondary/20 transition-colors duration-300">
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="lg:col-span-3"
            >
              <h4 className="font-semibold text-white mb-6">Contact Info</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white text-sm">Location</div>
                    <div className="text-gray-400 text-sm">Madinah, Saudi Arabia</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white text-sm">Email</div>
                    <a 
                      href="mailto:contact@junaidhussain.com" 
                      className="text-gray-400 hover:text-secondary text-sm transition-colors duration-300"
                    >
                      contact@junaidhussain.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="text-white text-sm">Phone</div>
                    <div className="text-gray-400 text-sm">+966 XXX XXX XXX</div>
                  </div>
                </li>
              </ul>

              {/* Working Hours */}
              <div className="mt-8 p-4 bg-primary-light/10 rounded-lg border border-secondary/10">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span className="text-sm font-semibold text-white">Response Time</span>
                </div>
                <p className="text-gray-400 text-xs">
                  Typically responds within 24-48 hours. For urgent inquiries, please mention "URGENT" in your subject.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright */}
            <div className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} Junaid Hussain. All rights reserved.
              <span className="block md:inline md:ml-2">
                Made with <Heart className="w-4 h-4 text-red-500 inline mx-1" /> from{' '}
                <span className="text-accent font-arabic">المدينة المنورة</span>
              </span>
            </div>

            {/* Additional Links */}
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="text-gray-500 hover:text-white transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-white transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/sitemap" className="text-gray-500 hover:text-white transition-colors duration-300">
                Sitemap
              </a>
            </div>

            {/* Back to Top */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center hover:shadow-glow transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </div>

        {/* Islamic Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center py-6 border-t border-secondary/10"
        >
          <p className="text-gray-500 text-sm italic">
            "The best among you are those who learn the Quran and teach it."
            <span className="block text-gray-600 text-xs mt-1">- Prophet Muhammad ﷺ (Bukhari)</span>
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
        >
          <div className="text-center p-4 bg-primary-light/10 rounded-lg border border-secondary/10">
            <BookOpen className="w-6 h-6 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">200+</div>
            <div className="text-gray-400 text-sm">Videos</div>
          </div>
          <div className="text-center p-4 bg-primary-light/10 rounded-lg border border-secondary/10">
            <Users className="w-6 h-6 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">100K+</div>
            <div className="text-gray-400 text-sm">Students</div>
          </div>
          <div className="text-center p-4 bg-primary-light/10 rounded-lg border border-secondary/10">
            <Globe className="w-6 h-6 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">45+</div>
            <div className="text-gray-400 text-sm">Countries</div>
          </div>
          <div className="text-center p-4 bg-primary-light/10 rounded-lg border border-secondary/10">
            <Heart className="w-6 h-6 text-secondary mx-auto mb-2" />
            <div className="text-2xl font-bold text-white">98%</div>
            <div className="text-gray-400 text-sm">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer