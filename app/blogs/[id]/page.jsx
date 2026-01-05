// src/app/blogs/[id]/page.jsx
'use client'

import { motion } from 'framer-motion'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BLOGS } from '@/lib/constants'
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  User, 
  Tag, 
  Share2, 
  Bookmark,
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle
} from 'lucide-react'
import Link from 'next/link'

const BlogPostPage = () => {
  const params = useParams()
  const router = useRouter()
  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const blogId = parseInt(params.id)
    const foundBlog = BLOGS.find(b => b.id === blogId)
    
    if (foundBlog) {
      setBlog(foundBlog)
      // Find related blogs (same category, excluding current)
      const related = BLOGS
        .filter(b => b.category === foundBlog.category && b.id !== blogId)
        .slice(0, 3)
      setRelatedBlogs(related)
    } else {
      // Redirect to blog list if not found
      router.push('/blogs')
    }
    
    setIsLoading(false)
  }, [params.id, router])

  const shareBlog = (platform) => {
    const url = window.location.href
    const title = blog?.title || ''
    const text = blog?.excerpt || ''

    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank')
        break
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank')
        break
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank')
        break
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary"></div>
      </div>
    )
  }

  if (!blog) return null

  return (
    <div className="pt-8 pb-20">
      {/* Back Button */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blogs
        </Link>
      </div>

      {/* Blog Header */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Category */}
            <div className="mb-6">
              <span className="px-4 py-2 bg-secondary/20 text-secondary rounded-full text-sm font-semibold">
                {blog.category}
              </span>
            </div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl font-bold text-white mb-6"
            >
              {blog.title}
            </motion.h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-8">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{blog.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{blog.readTime}</span>
              </div>
            </div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative h-64 sm:h-96 rounded-3xl overflow-hidden mb-12"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Excerpt */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mb-12"
                >
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {blog.excerpt}
                  </p>
                </motion.div>

                {/* Content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="prose prose-lg prose-invert max-w-none"
                >
                  {/* This would be the actual blog content */}
                  <div className="space-y-6 text-gray-300 leading-relaxed">
                    <p>
                      As a young Muslim student at Madina University, I've learned that seeking knowledge 
                      is not just an obligation but a beautiful journey that brings us closer to Allah. 
                      The Prophet Muhammad ﷺ said: "Seeking knowledge is obligatory upon every Muslim." 
                      This includes both religious and worldly knowledge that benefits humanity.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">The Importance of Islamic Education</h2>
                    <p>
                      In today's digital age, authentic Islamic knowledge is more accessible than ever. 
                      However, this also means we must be careful about our sources. As young Muslims, 
                      we should prioritize learning from qualified scholars and authentic sources.
                    </p>
                    
                    <blockquote className="border-l-4 border-secondary pl-6 py-3 my-6 italic text-gray-300">
                      "Whoever takes a path in search of knowledge, Allah will make easy for him a path to Paradise."
                      <br />
                      <span className="text-sm text-gray-400">- Sahih Muslim</span>
                    </blockquote>
                    
                    <p>
                      Balancing traditional Islamic studies with modern education can be challenging, 
                      but it's essential for our growth as Muslims in the 21st century. We should see 
                      both as complementary rather than contradictory.
                    </p>
                    
                    <h2 className="text-2xl font-bold text-white mt-8 mb-4">Practical Tips for Students</h2>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Start your day with Quran recitation and reflection</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Set specific times for both religious and academic studies</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Join or create study circles with like-minded peers</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span>Utilize online resources from authentic Islamic platforms</span>
                      </li>
                    </ul>
                    
                    <p className="mt-8">
                      Remember, the journey of seeking knowledge is lifelong. Whether you're studying 
                      at Madina University like me or learning through other means, consistency and 
                      sincerity are key. May Allah make our pursuit of knowledge easy and beneficial.
                    </p>
                  </div>
                </motion.div>

                {/* Tags */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-12 pt-8 border-t border-secondary/10"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Tag className="w-5 h-5 text-secondary" />
                    <span className="font-semibold text-white">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {['Islamic Education', 'Student Life', 'Knowledge', 'Youth', 'Madina'].map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-primary-light/30 text-gray-400 rounded-full text-sm hover:bg-secondary/20 hover:text-white transition-colors duration-300 cursor-pointer"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                {/* Share Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400">Share this article:</span>
                    <div className="flex gap-3">
                      <button
                        onClick={() => shareBlog('facebook')}
                        className="w-10 h-10 rounded-full bg-blue-600/20 hover:bg-blue-600/40 flex items-center justify-center text-blue-400 hover:text-white transition-all duration-300"
                      >
                        <Facebook className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => shareBlog('twitter')}
                        className="w-10 h-10 rounded-full bg-blue-400/20 hover:bg-blue-400/40 flex items-center justify-center text-blue-300 hover:text-white transition-all duration-300"
                      >
                        <Twitter className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => shareBlog('linkedin')}
                        className="w-10 h-10 rounded-full bg-blue-700/20 hover:bg-blue-700/40 flex items-center justify-center text-blue-500 hover:text-white transition-all duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => navigator.clipboard.writeText(window.location.href)}
                        className="w-10 h-10 rounded-full bg-secondary/20 hover:bg-secondary/40 flex items-center justify-center text-secondary hover:text-white transition-all duration-300"
                      >
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                {/* Author Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-primary-light/30 backdrop-blur-sm rounded-2xl p-6 border border-secondary/10 mb-8"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent mb-4 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">JH</span>
                    </div>
                    <h3 className="font-bold text-white mb-2">{blog.author}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Islamic Content Creator & Student at Madina University
                    </p>
                    <button className="w-full py-2 bg-secondary/20 text-secondary rounded-lg hover:bg-secondary/30 transition-colors duration-300 text-sm font-semibold">
                      View Profile
                    </button>
                  </div>
                </motion.div>

                {/* Related Articles */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-primary-light/30 backdrop-blur-sm rounded-2xl p-6 border border-secondary/10"
                >
                  <h3 className="font-bold text-white mb-6">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedBlogs.length > 0 ? (
                      relatedBlogs.map((relatedBlog) => (
                        <Link
                          key={relatedBlog.id}
                          href={`/blogs/${relatedBlog.id}`}
                          className="block group"
                        >
                          <div className="flex items-start gap-3">
                            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                              <img
                                src={relatedBlog.image}
                                alt={relatedBlog.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                              />
                            </div>
                            <div>
                              <h4 className="text-sm font-semibold text-white group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                                {relatedBlog.title}
                              </h4>
                              <p className="text-xs text-gray-500 mt-1">{relatedBlog.date}</p>
                            </div>
                          </div>
                        </Link>
                      ))
                    ) : (
                      <p className="text-gray-400 text-sm">No related articles found</p>
                    )}
                  </div>
                </motion.div>

                {/* Newsletter Signup */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-8 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-2xl p-6 border border-secondary/20"
                >
                  <h3 className="font-bold text-white mb-4">Get Updates</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Subscribe to get notified about new blog posts
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full bg-primary-dark border border-secondary/20 rounded-lg px-4 py-2 text-white text-sm mb-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
                  />
                  <button className="w-full py-2 bg-secondary text-white rounded-lg hover:bg-secondary/80 transition-colors duration-300 text-sm font-semibold">
                    Subscribe
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <MessageCircle className="w-6 h-6 text-secondary" />
                <h2 className="text-2xl font-bold text-white">Comments (24)</h2>
              </div>

              {/* Comment Form */}
              <div className="bg-primary-light/30 backdrop-blur-sm rounded-2xl p-6 border border-secondary/10 mb-8">
                <textarea
                  placeholder="Share your thoughts..."
                  className="w-full bg-primary-dark border border-secondary/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent min-h-[120px] mb-4"
                />
                <div className="flex justify-end">
                  <button className="px-6 py-2 bg-gradient-to-r from-secondary to-secondary/80 text-white rounded-lg hover:shadow-glow transition-all duration-300 font-semibold">
                    Post Comment
                  </button>
                </div>
              </div>

              {/* Comments List */}
              <div className="space-y-6">
                {/* Example Comment */}
                <div className="bg-primary-light/10 rounded-2xl p-6 border border-secondary/10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <span className="text-secondary font-bold">A</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">Ahmed R.</h4>
                        <p className="text-gray-500 text-sm">2 days ago</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300">
                    MashAllah, this is exactly what young Muslims need today. As a university student myself, 
                    I struggle with balancing studies and Ibadah. These tips are practical and implementable.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPostPage