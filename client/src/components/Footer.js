import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiMail, FiHeart, FiCode, FiServer, FiDatabase, FiCpu } from 'react-icons/fi';
import { FaXTwitter, FaFacebook, FaDiscord } from 'react-icons/fa6';
import { useData } from '../context/DataContext';

const Footer = () => {
  const { profile, footerLinks, loading } = useData();
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  // Use profile data for social links and about
  const name = profile?.name;
  const about = profile?.about;
  const email = profile?.email;
  const socialLinks = [
    profile?.socialLinks?.github && { icon: FiGithub, href: profile.socialLinks.github, label: 'GitHub' },
    profile?.socialLinks?.linkedin && { icon: FiLinkedin, href: profile.socialLinks.linkedin, label: 'LinkedIn' },
    profile?.socialLinks?.twitter && { icon: FaXTwitter, href: profile.socialLinks.twitter, label: 'X (Twitter)' },
    profile?.socialLinks?.facebook && { icon: FaFacebook, href: profile.socialLinks.facebook, label: 'Facebook' },
    profile?.socialLinks?.discord && { icon: FaDiscord, href: profile.socialLinks.discord, label: 'Discord' },
    email && { icon: FiMail, href: `mailto:${email}`, label: 'Email' },
  ].filter(Boolean);

  // Use footer links from database, fallback to default if loading
  const footerLinksData = loading ? {
    'Quick Links': [
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Experience', href: '#experience' },
      { name: 'Education', href: '#education' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    'Services': [
      { name: 'Cloud Infrastructure', href: null, external: false },
      { name: 'Systems Administration', href: null, external: false },
      { name: 'Cybersecurity', href: null, external: false },
      { name: 'Software Development', href: null, external: false },
      { name: 'Virtualization', href: null, external: false },
      { name: 'DevOps Practices', href: null, external: false },
    ],
    'Resources': [
      { name: 'Blog', href: null, external: false },
      { name: 'Documentation', href: null, external: false },
      { name: 'Tutorials', href: null, external: false },
      { name: 'Open Source', href: null, external: false },
    ]
  } : footerLinks.reduce((acc, section) => {
    acc[section.title] = section.links.map(link => ({
      name: link.name,
      href: link.href,
      external: link.isExternal
    }));
    return acc;
  }, {});

  const scrollToSection = (href) => {
    // Handle links that don't have corresponding sections
    if (href === null || href === '#') {
      // Show a toast notification instead of alert
      const notification = document.createElement('div');
      notification.className = 'fixed top-4 right-4 bg-primary-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform transition-all duration-300 translate-x-full';
      notification.textContent = 'This feature is coming soon!';
      document.body.appendChild(notification);
      
      // Animate in
      setTimeout(() => {
        notification.classList.remove('translate-x-full');
      }, 100);
      
      // Remove after 3 seconds
      setTimeout(() => {
        notification.classList.add('translate-x-full');
        setTimeout(() => {
          document.body.removeChild(notification);
        }, 300);
      }, 3000);
      return;
    }
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary-900 dark:bg-gray-900 text-white overflow-hidden">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-6 sm:py-8 lg:py-12">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Brand Section */}
            <div className="col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  <FiCode className="text-primary-600 text-lg sm:text-xl" />
                  <FiServer className="text-blue-600 text-lg sm:text-xl" />
                  <FiDatabase className="text-green-600 text-lg sm:text-xl" />
                  <FiCpu className="text-purple-600 text-lg sm:text-xl" />
                </div>
                <span className="font-samsung font-bold text-lg sm:text-xl tracking-wider">TMMETHODE</span>
              </div>
              <p className="text-secondary-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {about}
              </p>
              
              {/* Social Links */}
              <div className="grid grid-cols-3 sm:flex sm:space-x-3 sm:space-x-4 gap-2 sm:gap-0">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-secondary-800 text-secondary-300 rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinksData).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-white">{category}</h3>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.name}>
                      <motion.button
                        whileHover={{ x: 5 }}
                        onClick={() => scrollToSection(link.href)}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-300 text-xs sm:text-sm"
                      >
                        {link.name}
                      </motion.button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-secondary-800 py-4 sm:py-6 lg:py-8">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-secondary-300 mb-4 sm:mb-6 max-w-md mx-auto text-sm sm:text-base">
              Subscribe to my newsletter for the latest insights on cloud infrastructure, 
              systems administration, cybersecurity, and technology trends.
            </p>
            <div className="grid grid-cols-1 sm:flex sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-secondary-800 border border-secondary-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-secondary-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-secondary-800 py-3 sm:py-4 lg:py-6">
          <div className="grid grid-cols-1 md:flex md:flex-row md:justify-between items-center gap-4 md:gap-0">
            <div className="flex items-center space-x-2 text-secondary-300 text-xs sm:text-sm">
              <span>© {currentYear} TMMETHODE. All rights reserved.</span>
            </div>
            
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm text-secondary-300">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/privacy-policy')}
                className="hover:text-primary-400 transition-colors duration-300"
              >
                Privacy Policy
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/terms-of-service')}
                className="hover:text-primary-400 transition-colors duration-300"
              >
                Terms of Service
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => navigate('/cookie-policy')}
                className="hover:text-primary-400 transition-colors duration-300"
              >
                Cookie Policy
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 p-3 bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </footer>
  );
};

export default Footer; 