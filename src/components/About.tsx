import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Code, Lightbulb, Rocket } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Brain,
      title: 'Deep Learning',
      description: 'Expertise in neural networks and advanced ML architectures'
    },
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and production-ready solutions'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly exploring emerging AI technologies and methodologies'
    },
    {
      icon: Rocket,
      title: 'Impact',
      description: 'Delivering solutions that drive real-world business value'
    }
  ];

  return (
    <section id="about" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-64 h-64 bg-cyan-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-30" />
              <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-700">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  As an AI/ML professional, I specialize in developing intelligent systems that solve complex real-world problems. With a strong foundation in computer science and a passion for cutting-edge technology, I transform data into actionable insights.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My journey in artificial intelligence has equipped me with expertise in deep learning, natural language processing, computer vision, and predictive analytics. I thrive on challenges that push the boundaries of what's possible with machine learning.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 hover:border-cyan-400 transition-all duration-300"
              >
                <feature.icon className="text-cyan-400 mb-3" size={32} />
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
