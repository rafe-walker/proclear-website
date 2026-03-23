'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import { getAllPosts } from '@/app/blog/posts';

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  const categoryColor = (cat: string) => {
    switch (cat) {
      case 'Property Preservation': return 'bg-blue-100 text-blue-700';
      case 'Industry Tips': return 'bg-green-100 text-green-700';
      case 'Company News': return 'bg-orange-100 text-orange-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-brand-offwhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-3">From the Blog</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-navy mb-4">
            Industry Insights & Updates
          </h2>
          <p className="text-lg text-brand-gray-500 max-w-2xl mx-auto">
            Tips, guides, and news for property managers, REO professionals, and landlords.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="bg-white rounded-2xl overflow-hidden border border-brand-gray-200 hover:shadow-lg transition-all hover:border-brand-blue/30">
                  {/* Image placeholder */}
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
                    <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-brand-gray-500 leading-relaxed line-clamp-2">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-blue font-semibold hover:gap-3 transition-all"
          >
            Read All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
