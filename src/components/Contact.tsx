import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
  e.preventDefault();

  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    await emailjs.send(
      'service_qsybb4l',
      'template_a5pvspy',
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      },
      'n6d6UITxiOaGmdzyr'
    );

    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);

  } catch (error) {
    alert("Message failed to send. Try again!");
  } finally {
    setIsSubmitting(false);
  }
};


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:harinikannan001@gmail.com' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/Harini-001' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/harini-k-358aa8246/' }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl" />
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get in <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Let's discuss how we can work together on innovative AI/ML projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <link.icon className="text-white" size={24} />
                  </div>
                  <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border ${
                    errors.name ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors duration-300`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border ${
                    errors.email ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors duration-300`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border ${
                    errors.subject ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors duration-300`}
                />
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={5}
                  className={`w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border ${
                    errors.message ? 'border-red-500' : 'border-gray-700'
                  } rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors duration-300 resize-none`}
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {submitted ? (
                  'Message Sent!'
                ) : isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
