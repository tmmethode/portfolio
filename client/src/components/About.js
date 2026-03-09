import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMapPin, FiMail, FiPhone, FiCalendar, FiAward, FiCheckCircle } from 'react-icons/fi';
import { useData } from '../context/DataContext';

const About = () => {
  const { profile, loading } = useData();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Show loading state
  if (loading) {
    return (
      <section id="about" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-secondary-600 dark:text-gray-300">Loading about data...</p>
          </div>
        </div>
      </section>
    );
  }

  // Use profile data from database only
  const location = profile?.location;
  const email = profile?.email;
  const phone = profile?.phone;
  const summary = profile?.summary;
  const whatIDo = profile?.whatIDo;
  const myApproach = profile?.myApproach;
  const keyStrengths = profile?.keyStrengths || [];
  const experience = profile?.experience;
  const certifications = profile?.certifications;
  const focusAreas = [whatIDo, myApproach].filter(Boolean);

  const highlights = [
    { icon: FiMapPin, label: 'Location', value: location },
    { icon: FiCalendar, label: 'Experience', value: experience },
    { icon: FiAward, label: 'Certifications', value: certifications },
    { icon: FiMail, label: 'Email', value: email },
    { icon: FiPhone, label: 'Phone', value: phone },
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
    <section id="about" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-max">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Summary and Highlights */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="bg-gradient-to-br from-primary-600 to-blue-600 rounded-2xl p-6 sm:p-8 text-white shadow-xl">
              <p className="text-sm uppercase tracking-[0.2em] text-primary-100 mb-3">Profile Overview</p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                About <span className="text-white/80">Me</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-primary-50 leading-relaxed">
                {summary}
              </p>
            </div>

            <div className="bg-secondary-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                Quick Highlights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.filter((item) => item.value).map((info) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    className="flex items-start space-x-3 rounded-xl bg-white dark:bg-gray-900 p-4 shadow-sm"
                  >
                    <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30">
                      <info.icon className="text-primary-600 dark:text-primary-400" size={18} />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-secondary-500 dark:text-gray-400">{info.label}</p>
                      <p className="text-sm sm:text-base font-medium text-secondary-900 dark:text-white break-words">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {keyStrengths.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-6 shadow-sm border border-secondary-100 dark:border-gray-700">
                <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 dark:text-white mb-4">
                  Core Strengths
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {keyStrengths.map((strength) => (
                    <motion.div
                      key={strength}
                      variants={itemVariants}
                      className="flex items-center space-x-3"
                    >
                      <FiCheckCircle className="text-primary-600 dark:text-primary-400 flex-shrink-0" size={16} />
                      <span className="text-sm sm:text-base text-secondary-700 dark:text-gray-300">{strength}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column - Focus Areas */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              {focusAreas.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-5 sm:p-6 ${
                    index === 0
                      ? 'bg-primary-50 dark:bg-primary-900/20'
                      : 'bg-secondary-50 dark:bg-gray-800'
                  }`}
                >
                  <h3 className={`text-lg sm:text-xl font-semibold mb-3 ${
                    index === 0
                      ? 'text-primary-900 dark:text-primary-200'
                      : 'text-secondary-900 dark:text-white'
                  }`}>
                    {index === 0 ? 'What I Do' : 'How I Work'}
                  </h3>
                  <p className={`text-sm sm:text-base leading-relaxed ${
                    index === 0
                      ? 'text-primary-800 dark:text-primary-300'
                      : 'text-secondary-800 dark:text-gray-300'
                  }`}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-5 sm:p-6 shadow-sm border border-secondary-100 dark:border-gray-700">
              <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                What You Can Expect
              </h3>
              <p className="text-sm sm:text-base text-secondary-700 dark:text-gray-300 leading-relaxed">
                I focus on reliable delivery, clean communication, and practical solutions that improve operations. That includes secure infrastructure, automation where it removes repetitive work, and documentation that makes systems easier to support.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 
