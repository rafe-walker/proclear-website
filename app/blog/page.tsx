'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { getAllPosts } from './posts';

const categories = ['All', 'Property Preservation', 'Industry Tips', 'Company News'];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const posts = getAllPosts();

  const filtered = activeCategory === 'All'
    ? posts
    : posts.filter((p) => p.category === activeCategory);

  const categoryColor = (cat: string) => {
    switch (cat) {
      case 'Property Preservation': return 'bg-blue-100 text-blue-700';
      case 'Industry Tips': return 'bg-green-100 text-green-700';
      case 'Company News': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="pt-28 pb-20 min-h-screen bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-brand-navy mb-4">Blog</h1>
          <p className="text-lg text-brand-gray-500 max-w-2xl mx-auto">
            Insights, guides, and updates for property managers, REO professionals, and landlords across Arizona.
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-brand-navy text-white'
                  : 'bg-white text-brand-gray-600 hover:bg-brand-gray-100 border border-brand-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Posts grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden border border-brand-gray-200 hover:shadow-lg transition-all hover:border-brand-blue/30">
                  <div className="h-48 bg-gradient-to-br from-brand-navy to-brand-navy-light flex items-center justify-center">
                    <span className="text-4xl">
                      {post.category === 'Property Preservation' ? '🏠' : post.category === 'Industry Tips' ? '💡' : '📰'}
                    </span>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-brand-gray-500">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                    <h2 className="text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-brand-gray-500 leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue group-hover:gap-2.5 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
