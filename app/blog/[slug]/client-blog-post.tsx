'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, User } from 'lucide-react';
import Link from 'next/link';
import { getPostBySlug } from '../posts';

export default function ClientBlogPost({ slug }: { slug: string }) {
  const post = getPostBySlug(slug);

  const categoryColor = (cat: string) => {
    switch (cat) {
      case 'Property Preservation': return 'bg-blue-100 text-blue-700';
      case 'Industry Tips': return 'bg-green-100 text-green-700';
      case 'Company News': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <article className="pt-28 pb-20 min-h-screen bg-brand-offwhite">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-gray-500 hover:text-brand-navy transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </motion.div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${categoryColor(post.category)}`}>
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-brand-gray-500">
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
        </motion.header>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-2xl p-8 sm:p-10 border border-brand-gray-200 shadow-sm"
        >
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 bg-brand-navy rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-white mb-2">Need Property Preservation Services?</h3>
          <p className="text-white/60 text-sm mb-6">Get a free quote for your Arizona property today.</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white font-semibold rounded-lg hover:bg-brand-orange-light transition-all"
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </article>
  );
}
