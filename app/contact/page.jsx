// src/app/contact/page.jsx
'use client'

import { motion } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle,
  Youtube,
  Instagram,
  Facebook,
  MessageSquare
} from 'lucide-react'
import FormInput from '@/components/ui/FormInput'

const ContactPage = () => {
  const containerRef = useRef(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setIsSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Address',
      info: 'contact@junaidhussain.com',
      link: 'mailto:contact@junaidhussain.com',
      description: 'For general inquiries and collaboration proposals'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      info: '+966 XXX XXX XXX',
      link: 'tel:+966XXXXXXXXX',
      description: 'Available during office hours (GMT+3)'
    },
    {
      icon: MapPin,
      title: 'Location',
      info: 'Madinah, Saudi Arabia',
      link: null,
      description: 'Based in the blessed city of Madinah'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      info: '9:00 AM - 5:00 PM (GMT+3)',
      link: null,
      description: 'Sunday to Thursday'
    }
  ]

  const socialLinks = [
    {
      icon: Youtube,
      name: 'YouTube',
      handle: '@JunaidHussainMadina',
      link: 'https://www.youtube.com/@JunaidHussainMadina',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10'
    },
    {
      icon: Instagram,
      name: 'Instagram',
      handle: '@junaidhussainmadina',
      link: 'https://www.instagram.com/junaidhussainmadina/',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      handle: 'JunaidHussainMadina',
      link: 'https://www.facebook.com/JunaidHussainMadina/',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      icon: MessageSquare,
      name: 'Comments',
      handle: 'YouTube Comments',
      link: 'https://www.youtube.com/@JunaidHussainMadina',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10'
    }
  ]

  const faqs = [
    {
      question: 'How long does it take to get a response?',
      answer: 'I typically respond within 24-48 hours. For urgent matters, please mention "URGENT" in your subject line.'
    },
    {
      question: 'Do you accept collaboration requests?',
      answer: 'Yes! I\'m open to collaborations with other content creators, Islamic organizations, and educational institutions.'
    },
    {
      question: 'Can I request a specific topic for your videos?',
      answer: 'Absolutely! I value suggestions from my viewers. Please use the contact form to share your ideas.'
    },
    {
      question: 'Do you offer personal mentoring?',
      answer: 'Due to time constraints, I can\'t offer personal mentoring, but I address common questions in my Q&A videos.'
    }
  ]

  return (
    <div ref={containerRef} className="pt-8 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark to-primary-light/20 py-20">
        <div className="absolute inset-0 bg-islamic-pattern opacity-5" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="text-secondary">Touch</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              I'd love to hear from you! Whether you have questions, suggestions, or collaboration ideas
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Reach out through any of the channels below, and I'll get back to you as soon as possible
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-primary-light/30 backdrop-blur-sm rounded-2xl p-6 border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-secondary hover:text-secondary-light transition-colors duration-300 block mb-2"
                  >
                    {item.info}
                  </a>
                ) : (
                  <p className="text-secondary mb-2">{item.info}</p>
                )}
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-light/30 backdrop-blur-sm rounded-3xl p-8 border border-secondary/10"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-gradient-to-b from-secondary to-accent rounded" />
                <h2 className="text-2xl font-bold text-white">Send a Message</h2>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for reaching out. I'll respond to your message as soon as possible.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-secondary hover:text-secondary-light font-semibold"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <FormInput
                    label="Your Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />

                  <FormInput
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />

                  <FormInput
                    label="Subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this regarding?"
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full bg-primary-dark border border-secondary/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-secondary to-secondary/80 text-white px-6 py-4 rounded-xl font-semibold hover:shadow-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Social Links & FAQ */}
            <div className="space-y-12">
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-8 bg-gradient-to-b from-secondary to-accent rounded" />
                  <h2 className="text-2xl font-bold text-white">Connect on Social Media</h2>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      whileHover={{ x: 10 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-primary-light/20 border border-secondary/10 hover:border-secondary/30 transition-all duration-300 group"
                    >
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-lg ${social.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <social.icon className={`w-6 h-6 ${social.color}`} />
                        </div>
                        <div>
                          <div className="font-semibold text-white">{social.name}</div>
                          <div className="text-sm text-gray-400">{social.handle}</div>
                        </div>
                      </div>
                      <div className="text-gray-500 group-hover:text-secondary transition-colors duration-300">
                        →
                      </div>
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-8 bg-gradient-to-b from-secondary to-accent rounded" />
                  <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
                </div>
                
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 * index }}
                      className="bg-primary-light/20 rounded-xl p-6 border border-secondary/10"
                    >
                      <h3 className="font-semibold text-white mb-3">{faq.question}</h3>
                      <p className="text-gray-400 text-sm">{faq.answer}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <section className="py-16 bg-primary-light/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Based in <span className="text-secondary">Madinah</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              The blessed city of Prophet Muhammad ﷺ
            </p>
          </motion.div>

          <div className="bg-gradient-to-r from-primary-dark to-primary-light/10 rounded-3xl overflow-hidden border border-secondary/10">
            <div className="h-64 sm:h-96 relative bg-primary-light/30">
              {/* Placeholder for Map - In production, integrate Google Maps or similar */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-10 h-10 text-secondary" />
                  </div>
                  <p className="text-gray-400">Madinah, Saudi Arabia</p>
                  <p className="text-gray-500 text-sm mt-2">The Prophet's Mosque (Al-Masjid an-Nabawi)</p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-white mb-4">About Madinah</h3>
              <p className="text-gray-400">
                Madinah is the second holiest city in Islam and the burial place of Prophet Muhammad ﷺ. 
                It's a city of peace, knowledge, and spirituality. As a student at Madina University, 
                I'm blessed to be studying and creating content from this sacred location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Response */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-3xl p-12 text-center border border-secondary/20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Immediate Assistance?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              For urgent matters, please mention "URGENT" in your subject line. 
              I prioritize urgent messages and aim to respond within a few hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@junaidhussain.com?subject=URGENT"
                className="bg-gradient-to-r from-secondary to-secondary/80 text-white px-8 py-4 rounded-full font-semibold hover:shadow-glow transition-all duration-300"
              >
                Send Urgent Email
              </a>
              <a
                href="https://www.youtube.com/@JunaidHussainMadina"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Watch Latest Videos
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage