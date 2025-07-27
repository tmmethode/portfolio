import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown, FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import { FaXTwitter, FaFacebook, FaDiscord } from 'react-icons/fa6';
import { useData } from '../context/DataContext';

const Hero = () => {
  const { profile, loading } = useData();
  
  console.log('Hero component - profile:', profile);
  console.log('Hero component - loading:', loading);
  
  const scrollToAbout = () => {
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
  };

  // Show loading state
  if (loading) {
    return (
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-secondary-600 dark:text-gray-300">Loading profile data...</p>
        </div>
      </section>
    );
  }

  // Use profile data from database only
  const name = profile?.name;
  const title = profile?.title;
  const about = profile?.about;
  const socialLinks = profile?.socialLinks || {};

  return (
                <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden w-full">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container-max text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Main Heading */}
          {name && (
            <div className="space-y-3 sm:space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary-900 dark:text-white leading-tight"
              >
                Hi, I'm{' '}
                <span className="gradient-text">{name}</span>
              </motion.h1>
              
              {title && (
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-secondary-700 dark:text-gray-200 leading-tight"
                >
                  {title}
                </motion.h2>
              )}
            </div>
          )}

          {/* Description */}
          {about && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xs sm:text-sm md:text-base lg:text-lg text-secondary-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              {about}
            </motion.p>
          )}

          {/* Role Tags */}
          {profile?.keyStrengths && profile.keyStrengths.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-2 sm:gap-3"
            >
              {profile.keyStrengths.map((role, index) => (
                <motion.span
                  key={role}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                  className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-secondary-700 dark:text-gray-200 border border-secondary-200 dark:border-gray-600 shadow-sm"
                >
                  {role}
                </motion.span>
              ))}
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToAbout}
              className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto"
            >
              Learn More
              <FiArrowDown className="animate-bounce-slow" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 border-2 border-primary-600 dark:border-primary-400 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 w-full sm:w-auto"
            >
              <FiDownload />
              Download CV
            </motion.button>
          </motion.div>

          {/* Social Links */}
          {(() => {
            const availableSocialLinks = [
              { icon: FiGithub, href: socialLinks.github, label: 'GitHub' },
              { icon: FiLinkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
              { icon: FaXTwitter, href: socialLinks.twitter, label: 'X (Twitter)' },
              { icon: FaFacebook, href: socialLinks.facebook, label: 'Facebook' },
              { icon: FaDiscord, href: socialLinks.discord, label: 'Discord' },
              { icon: FiMail, href: profile?.email ? `mailto:${profile.email}` : null, label: 'Email' },
            ].filter(social => social.href && social.href.trim() !== '');

            return availableSocialLinks.length > 0 ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="flex justify-center space-x-3 sm:space-x-4 md:space-x-6 pt-6 sm:pt-8"
              >
                {availableSocialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={social.href}
                    className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full text-secondary-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 shadow-sm hover:shadow-md"
                    aria-label={social.label}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            ) : null;
          })()}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-secondary-400 dark:border-gray-500 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-secondary-400 dark:bg-gray-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 