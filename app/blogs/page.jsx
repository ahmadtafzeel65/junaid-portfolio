// src/app/blogs/page.jsx
'use client'

import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { BLOGS } from '@/lib/constants'
import { Search, Filter, Calendar, Tag, User, Clock, BookOpen } from 'lucide-react'
import Link from 'next/link'

const categories = ['All', 'Education', 'Student Life', 'Spirituality', 'Technology', 'Finance', 'Character']

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')
  const containerRef = useRef(null)

  const filteredBlogs = BLOGS.filter(blog => {
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         blog.content.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredBlog = filteredBlogs.length > 0 ? filteredBlogs[0] : null

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
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-secondary" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Islamic <span className="text-secondary">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Insights, guidance, and reflections for the modern Muslim youth
            </p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore articles on faith, student life, technology, and personal development 
              from an Islamic perspective
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative mb-8"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search blog posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-primary-light border border-secondary/20 rounded-xl pl-12 pr-4 py-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                />
              </div>
            </motion.div>

            {/* Categories */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <Filter className="w-5 h-5 text-secondary" />
                <h3 className="text-xl font-bold text-white">Browse by Category</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-secondary to-secondary/80 text-white shadow-lg'
                        : 'bg-primary-light/50 text-gray-400 hover:text-white hover:bg-primary-light/80 border border-secondary/10'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
            >
              <div className="bg-primary-light/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-secondary/10">
                <div className="text-3xl font-bold text-secondary mb-2">{BLOGS.length}</div>
                <div className="text-gray-400 text-sm">Total Articles</div>
              </div>
              <div className="bg-primary-light/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-secondary/10">
                <div className="text-3xl font-bold text-secondary mb-2">{categories.length - 1}</div>
                <div className="text-gray-400 text-sm">Categories</div>
              </div>
              <div className="bg-primary-light/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-secondary/10">
                <div className="text-3xl font-bold text-secondary mb-2">10K+</div>
                <div className="text-gray-400 text-sm">Monthly Readers</div>
              </div>
              <div className="bg-primary-light/30 backdrop-blur-sm rounded-2xl p-6 text-center border border-secondary/10">
                <div className="text-3xl font-bold text-secondary mb-2">4.8</div>
                <div className="text-gray-400 text-sm">Avg. Rating</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Blog */}
      {featuredBlog && (
        <section className="py-12 bg-primary-light/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-8 bg-gradient-to-b from-secondary to-accent rounded" />
                <h2 className="text-2xl font-bold text-white">Featured Article</h2>
              </div>
              
              <div className="bg-gradient-to-r from-primary-dark via-primary-dark to-primary-light/10 rounded-3xl overflow-hidden border border-secondary/10">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img
                      src={featuredBlog.image}
                      alt={featuredBlog.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-secondary/90 text-white text-sm rounded-full">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="px-3 py-1 bg-secondary/20 text-secondary text-sm rounded-full">
                        {featuredBlog.category}
                      </span>
                      <span className="text-gray-500 text-sm">{featuredBlog.readTime}</span>
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                      {featuredBlog.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {featuredBlog.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-secondary/20 rounded-full flex items-center justify-center">
                          <User className="w-5 h-5 text-secondary" />
                        </div>
                        <div>
                          <div className="text-sm text-white">{featuredBlog.author}</div>
                          <div className="text-xs text-gray-500">{featuredBlog.date}</div>
                        </div>
                      </div>
                      <Link
                        href={`/blogs/${featuredBlog.id}`}
                        className="text-secondary hover:text-secondary-light font-semibold flex items-center gap-2 group"
                      >
                        Read Full Article
                        <svg 
                          className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      <section className="py-16 bg-primary-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Latest <span className="text-secondary">Articles</span>
              </h2>
              <p className="text-gray-400">
                {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} found
                {selectedCategory !== 'All' && ` in "${selectedCategory}"`}
              </p>
            </div>
          </div>

          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {filteredBlogs.map((blog, index) => (
                <motion.article
                  key={blog.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group bg-primary-light/10 rounded-2xl overflow-hidden border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-secondary/90 text-white text-sm rounded-full">
                        {blog.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {blog.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blog.readTime}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors duration-300">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-gray-400 mb-6 line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Read More */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <User className="w-4 h-4 text-gray-500" />
                        <span className="text-sm text-gray-400">{blog.author}</span>
                      </div>
                      <Link
                        href={`/blogs/${blog.id}`}
                        className="text-secondary hover:text-secondary-light font-semibold text-sm flex items-center gap-1 group/link"
                      >
                        Read
                        <svg 
                          className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 bg-primary-light/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">No articles found</h3>
              <p className="text-gray-400 mb-8">
                Try adjusting your search or filter to find what you're looking for
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('All')
                  setSearchQuery('')
                }}
                className="px-6 py-2 bg-secondary text-white rounded-full font-semibold hover:bg-secondary/80 transition-colors duration-300"
              >
                Clear all filters
              </button>
            </motion.div>
          )}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-r from-secondary/10 to-accent/10 rounded-3xl p-12 text-center border border-secondary/20">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Never Miss an Article
                </h3>
                <p className="text-gray-300 mb-8">
                  Subscribe to receive new blog posts directly in your inbox
                </p>
                <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 bg-primary-dark border border-secondary/20 rounded-xl px-6 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-secondary to-secondary/80 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-glow transition-all duration-300"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-gray-500 text-sm mt-4">
                  No spam ever. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage