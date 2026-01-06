// src/app/about/page.jsx
'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { 
  BookOpen, 
  Target, 
  Heart, 
  Users, 
  Award, 
  Globe,
  Calendar,
  GraduationCap,
  Video,
  Star
} from 'lucide-react'
import Image from 'next/image'

const AboutPage = () => {
  const containerRef = useRef(null)

  const timeline = [
    {
      year: '2020',
      title: 'Started YouTube Channel',
      description: 'Began creating Islamic content for youth at age 9',
      icon: Video
    },
    {
      year: '2021',
      title: 'First Viral Video',
      description: 'Reached 1 million views on Ramadan guide video',
      icon: Star
    },
    {
      year: '2022',
      title: 'Enrolled at Madina University',
      description: 'Started formal Islamic studies alongside content creation',
      icon: GraduationCap
    },
    {
      year: '2023',
      title: '100K Subscribers Milestone',
      description: 'Built a community of 100,000+ dedicated viewers',
      icon: Users
    },
    {
      year: '2024',
      title: 'International Recognition',
      description: 'Featured in Islamic youth conferences worldwide',
      icon: Globe
    }
  ]

  const values = [
    {
      icon: BookOpen,
      title: 'Authenticity',
      description: 'Strict adherence to Quran and Sunnah in all content'
    },
    {
      icon: Heart,
      title: 'Compassion',
      description: 'Understanding the challenges of modern Muslim youth'
    },
    {
      icon: Target,
      title: 'Clarity',
      description: 'Simplifying complex Islamic concepts for easy understanding'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a supportive network of young Muslims'
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
              About <span className="text-secondary">Junaid Hussain</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Young Islamic Scholar, Content Creator, and Student of Knowledge
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm">
                Madina University Student
              </span>
              <span className="px-4 py-2 bg-accent/20 text-accent rounded-full text-sm">
                Islamic Content Creator
              </span>
              <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm">
                Youth Mentor
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-3xl overflow-hidden">
                <Image
                  src="/junaid4.webp"
                  alt="Junaid Hussain"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-white">
                My <span className="text-secondary">Story</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Assalamu Alaikum! I'm Junaid Hussain, a 12-year-old student at Madina University 
                with a passion for spreading authentic Islamic knowledge to the youth.
              </p>
              <p className="text-gray-400">
                Born and raised in a Muslim family, I developed a deep love for the Quran and 
                Sunnah from a young age. At 9 years old, I started my YouTube channel to share 
                Islamic teachings in a way that resonates with young people today.
              </p>
              <p className="text-gray-400">
                Currently studying at Madina University, I combine traditional Islamic education 
                with modern content creation techniques to make Islamic knowledge accessible, 
                engaging, and relevant for the digital generation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-primary-light/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Mission & <span className="text-secondary">Vision</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Guiding the next generation with authentic Islamic knowledge
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-dark rounded-2xl p-8 border border-secondary/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">My Mission</h3>
              <p className="text-gray-400">
                To provide authentic, engaging, and accessible Islamic education to Muslim youth 
                worldwide through digital platforms, helping them strengthen their faith and 
                navigate modern challenges with Islamic principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-primary-dark rounded-2xl p-8 border border-secondary/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">My Vision</h3>
              <p className="text-gray-400">
                To build a global community of confident, knowledgeable young Muslims who are 
                proud of their faith, equipped with authentic Islamic knowledge, and capable of 
                being positive contributors to society.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              My <span className="text-secondary">Journey</span>
            </h2>
            <p className="text-gray-400">From starting a YouTube channel to becoming a voice for Muslim youth</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-secondary to-accent" />

            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-secondary rounded-full border-4 border-primary-dark z-10" />

                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                  <div className="bg-primary-light/30 backdrop-blur-sm rounded-2xl p-6 border border-secondary/10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <span className="text-secondary font-bold">{item.year}</span>
                    </div>
                    <h3 className="font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-primary-light/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Core <span className="text-secondary">Values</span>
            </h2>
            <p className="text-gray-400">The principles that guide my work and content</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-primary-dark rounded-2xl p-6 border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-secondary to-secondary/80 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              Join Our Growing Community
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Become part of thousands of young Muslims learning and growing together in faith
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://www.youtube.com/@JunaidHussainMadina"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-secondary to-secondary/80 text-white px-8 py-4 rounded-full font-semibold hover:shadow-glow transition-all duration-300"
              >
                Subscribe on YouTube
              </a>
              <a
                href="/contact"
                className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage