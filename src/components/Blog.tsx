import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const posts = [
    {
      title: 'Automating ML Model Development: OperationalML Approach',
      excerpt: 'A deep dive into the attention mechanism that revolutionized NLP and beyond',
      date: '2024-10-15',
      category: 'IEEE',
      readTime: '8 min read'
    },
    {
      title: 'Transformer-based Language Identification',
      excerpt: 'Essential strategies for deploying and monitoring machine learning models in production',
      date: '2024-10-08',
      category: 'IEEE',
      readTime: '6 min read'
    },
    {
      title: 'Food Image Classification',
      excerpt: 'How AI is transforming medical imaging and diagnostic accuracy',
      date: '2024-09-28',
      category: "ICICSCS'23",
      readTime: '10 min read'
    }
  ];

  return (
    <section id="blog" className="min-h-screen py-20 bg-gray-900 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Research & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Insights</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-cyan-400/30 rounded-lg transform group-hover:rotate-45 transition-transform duration-300" />
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/30">
                    {post.category}
                  </span>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar size={16} />
                    {new Date(post.date).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </div>

                  <button className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all duration-300">
                    Read More
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
