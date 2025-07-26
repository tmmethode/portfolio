import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import { FaXTwitter, FaFacebook, FaDiscord } from 'react-icons/fa6';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      alert('Thank you for your message! I will get back to you soon.');
    }, 2000);
  };

  const contactInfo = [
    {
      icon: FiMail,
      title: 'Email',
      value: 'info@tmmethode.com',
      link: 'mailto:info@tmmethode.com'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      value: '+250 788 934 674',
      link: 'tel:+250788934674'
    },
    {
      icon: FiMapPin,
      title: 'Location',
      value: 'Kigali, Rwanda',
      link: '#'
    }
  ];

  const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/tmmethode/', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/tmmethode', label: 'LinkedIn' },
    { icon: FaXTwitter, href: 'https://x.com/tmmethode250', label: 'X (Twitter)' },
    { icon: FaFacebook, href: 'https://web.facebook.com/tmmethode', label: 'Facebook' },
    { icon: FaDiscord, href: 'https://discord.com/users/1146515605730639974', label: 'Discord' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="bg-secondary-50 dark:bg-gray-800 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary-700 dark:text-gray-300 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 bg-white dark:bg-gray-700 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary-700 dark:text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-secondary-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 bg-white dark:bg-gray-700 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-secondary-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 bg-white dark:bg-gray-700 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-gray-400"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-secondary-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-secondary-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-300 resize-none bg-white dark:bg-gray-700 text-secondary-900 dark:text-white placeholder-secondary-500 dark:placeholder-gray-400"
                    placeholder="Tell me about your project or question..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FiSend size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      whileHover={{ x: 5 }}
                      className="flex items-center space-x-4 p-4 bg-secondary-50 dark:bg-gray-800 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors duration-300"
                    >
                                              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                          <info.icon className="text-primary-600 dark:text-primary-400" size={20} />
                        </div>
                        <div>
                          <p className="font-medium text-secondary-900 dark:text-white">{info.title}</p>
                          <p className="text-secondary-600 dark:text-gray-300">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-secondary-900 dark:text-white mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <h4 className="font-semibold text-green-900 dark:text-green-200">Available for Opportunities</h4>
                </div>
                <p className="text-green-800 dark:text-green-300 text-sm">
                  I'm currently open to new opportunities in DevOps, System Administration, 
                  Software Development, and Data Science roles.
                </p>
              </div>

              {/* Quick Response */}
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6">
                <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Quick Response</h4>
                <p className="text-blue-800 dark:text-blue-300 text-sm">
                  I typically respond to messages within 24 hours. 
                  For urgent matters, feel free to call or connect on LinkedIn.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl p-8">
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-secondary-600 dark:text-gray-300 max-w-2xl mx-auto">
                Whether you need help with cloud infrastructure, software development, 
                data analysis, or system administration, I'm here to help bring your ideas to life.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 