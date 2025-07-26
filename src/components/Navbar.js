import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiCode, FiServer, FiDatabase, FiCpu } from 'react-icons/fi';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/95 backdrop-blur-md shadow-lg dark:shadow-gray-900/50'
          : 'bg-transparent dark:bg-transparent'
      }`}
    >
      <div className="container-max">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-1 sm:space-x-2"
          >
            <div className="flex space-x-0.5 sm:space-x-1">
              <FiCode className="text-primary-600 text-base sm:text-lg md:text-xl" />
              <FiServer className="text-blue-600 text-base sm:text-lg md:text-xl" />
              <FiDatabase className="text-green-600 text-base sm:text-lg md:text-xl" />
              <FiCpu className="text-purple-600 text-base sm:text-lg md:text-xl" />
            </div>
            <span className="font-samsung font-bold text-base sm:text-lg md:text-xl tracking-wide sm:tracking-wider gradient-text dark:text-white">
              TMMETHODE
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="text-secondary-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </motion.button>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-1 sm:space-x-2">
            <ThemeToggle />
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 p-2 rounded-lg hover:bg-secondary-100 dark:hover:bg-gray-700/50 bg-transparent dark:bg-transparent"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border-t border-secondary-200 dark:border-gray-600 max-h-[70vh] overflow-y-auto w-full shadow-lg dark:shadow-gray-900/50"
          >
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ x: 10 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-secondary-700 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 font-medium py-3 px-3 rounded-lg hover:bg-secondary-50 dark:hover:bg-gray-700/50"
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar; 