// src/components/ui/BlogCard.jsx
'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const BlogCard = ({ blog }) => {
  return (
    <motion.article
      whileHover={{ y: -10 }}
      className="group bg-primary-dark rounded-2xl overflow-hidden border border-secondary/10 hover:border-secondary/30 transition-all duration-300"
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
          <div className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {blog.author}
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
        <Link
          href={`/blogs/${blog.id}`}
          className="inline-flex items-center gap-2 text-secondary hover:text-secondary-light font-semibold group/link"
        >
          Read Article
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>

      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/5 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </motion.article>
  )
}

export default BlogCard