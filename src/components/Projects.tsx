import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const projects = [
    {
      title: 'YouTube Data Harvesting \& Warehousing',
      description: 'Built a Streamlit app to collect, store, and analyze YouTube channel data using Google API and SQL databases.',
      tags: ['Streamlit', 'Google API', 'SQL'],
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'DataSpark – Global Electronics Insights',
      description: 'Performed EDA on Global Electronics datasets to improve decisions and business performance.',
      tags: ['EDA', 'Transformers', 'TensorFlow'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Used Car Price Prediction (CarDekho)',
      description: 'Built a machine learning model and web app for CarDekho to predict used car prices from historical data for customers and sales teams.',
      tags: ['Time Series', 'Scikit-learn', 'MLOps'],
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Microsoft Cybersecurity Incident Classification',
      description: 'Built a Microsoft GUIDE-based model to classify cybersecurity incidents (TP/BP/FP), optimizing macro-F1, precision, and recall for SOC decision support.',
      tags: ['Computer Vision', 'YOLO', 'Edge AI'],
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Plant Disease Detection',
      description: 'Built a Streamlit app using a CNN model to detect and classify plant leaf diseases from uploaded images.',
      tags: ['Recommender Systems', 'Deep Learning', 'Python'],
      gradient: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Low-Light Image Enhancement using Deep Learning',
      description: 'DCGAN, Zero-DCE, CycleGAN, MIRNet, PyTorch, TensorFlow, OpenCV, NumPy, Scikit-image, TensorBoard',
      tags: ['Healthcare', 'CNNs', 'TensorFlow'],
      gradient: 'from-pink-500 to-rose-500'
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-gradient-to-b from-gray-800 to-gray-900 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-10 w-72 h-72 bg-cyan-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-40 right-10 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 rounded-xl`} />

              <div className="relative bg-gray-800/80 backdrop-blur-sm p-6 rounded-xl border border-gray-700 group-hover:border-cyan-400 transition-all duration-300 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} mb-4 flex items-center justify-center`}>
                  <div className="w-6 h-6 bg-white rounded" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-gray-700/50 text-cyan-400 rounded-full border border-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300">
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
