import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiMapPin, FiMail, FiPhone, FiCalendar, FiAward } from 'react-icons/fi';
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
  const name = profile?.name;
  const location = profile?.location;
  const email = profile?.email;
  const phone = profile?.phone;
  const summary = profile?.summary;
  const whatIDo = profile?.whatIDo;
  const myApproach = profile?.myApproach;
  const keyStrengths = profile?.keyStrengths || [];
  const experience = profile?.experience;
  const certifications = profile?.certifications;

  const personalInfo = [
    { icon: FiUser, label: 'Name', value: name },
    { icon: FiMapPin, label: 'Location', value: location },
    { icon: FiMail, label: 'Email', value: email },
    { icon: FiPhone, label: 'Phone', value: phone },
    { icon: FiCalendar, label: 'Experience', value: experience },
    { icon: FiAward, label: 'Certifications', value: certifications },
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
          {/* Left Column - Image and Personal Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Profile Image Placeholder */}
            <div className="relative">
                                    <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-100 to-blue-100 dark:from-gray-800 dark:to-gray-700 rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">👨‍💻</div>
                                            <p className="text-secondary-600 dark:text-gray-300 font-medium">{name}</p>
                          <p className="text-sm text-secondary-500 dark:text-gray-400">IT Professional</p>
                </div>
              </div>

            </div>

            {/* Personal Information */}
            <div className="bg-secondary-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 dark:text-white mb-3 sm:mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                    <info.icon className="text-primary-600" size={18} />
                    <div>
                      <p className="text-xs sm:text-sm text-secondary-500 dark:text-gray-400">{info.label}</p>
                      <p className="text-xs sm:text-sm font-medium text-secondary-900 dark:text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-secondary-600 dark:text-gray-300 leading-relaxed mb-6">
                {summary}
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-primary-900 dark:text-primary-200 mb-3">What I Do</h3>
                <p className="text-sm sm:text-base text-primary-800 dark:text-primary-300 leading-relaxed">
                  {whatIDo}
                </p>
              </div>

              <div className="bg-secondary-50 dark:bg-gray-800 rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 dark:text-white mb-3">My Approach</h3>
                <p className="text-sm sm:text-base text-secondary-800 dark:text-gray-300 leading-relaxed">
                  {myApproach}
                </p>
              </div>
            </div>

            {/* Key Strengths */}
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-secondary-900 dark:text-white mb-4">Key Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                {keyStrengths.map((strength, index) => (
                  <motion.div
                    key={strength}
                    variants={itemVariants}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-xs sm:text-sm text-secondary-700 dark:text-gray-300">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Download CV Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Download Full CV
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 