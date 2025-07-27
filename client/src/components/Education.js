import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';
import { useData } from '../context/DataContext';

const Education = () => {
  const { education, loading, error } = useData();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Transform education data from database
  const educationArray = Array.isArray(education) ? education : [];
  const educationData = educationArray.map(edu => ({
    degree: edu.degree,
    school: edu.institution,
    location: edu.location,
    period: edu.isCurrent 
      ? `${new Date(edu.startDate).getFullYear()} - Present`
      : `${new Date(edu.startDate).getFullYear()} - ${new Date(edu.endDate).getFullYear()}`,
    status: edu.isCurrent ? 'studying' : 'completed',
    description: edu.description,
    courses: edu.courses || [],
    type: edu.educationType || 'undergraduate'
  }));

  const certifications = [
    {
      name: 'Microsoft Office Specialist (MOS)',
      issuer: 'Microsoft',
      date: '2023',
      credentialId: 'MOS-EXCEL-WORD',
      description: 'Excel & Word proficiency certification',
      icon: '📊'
    },
    {
      name: 'Cisco Cybersecurity Essentials',
      issuer: 'Cisco',
      date: '2023',
      credentialId: 'CISCO-CYBERSEC',
      description: 'Cybersecurity fundamentals and best practices',
      icon: '🔒'
    },
    {
      name: 'Huawei ICT Competition (Cloud Track)',
      issuer: 'Huawei',
      date: '2023',
      credentialId: 'HUAWEI-ICT-FINALIST',
      description: 'Finalist - Cloud computing, big data, and AI topics',
      icon: '☁️'
    }
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

  // Show loading state
  if (loading) {
    return (
      <section id="education" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="text-secondary-600 dark:text-gray-300 mt-4">Loading education...</p>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section id="education" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400">Error loading education: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="education" className="section-padding bg-white dark:bg-gray-900">
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
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-secondary-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic journey and professional certifications that have shaped my expertise 
              in technology and IT management.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            {educationData.map((edu, index) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                className="relative"
              >
                <div className={`bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 shadow-lg border-l-4 ${
                  edu.type === 'graduate' ? 'border-primary-500' : 'border-blue-500'
                }`}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 space-y-3 sm:space-y-0">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
                        <FiAward className={`text-xl sm:text-2xl ${
                          edu.type === 'graduate' ? 'text-primary-600' : 'text-blue-600'
                        }`} />
                        <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-secondary-900 dark:text-white">{edu.degree}</h3>
                      </div>
                      <p className="text-base sm:text-lg font-medium text-primary-600 dark:text-primary-400">{edu.school}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                        edu.type === 'graduate' 
                          ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-100' 
                          : 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-100'
                      }`}>
                        {edu.type === 'graduate' ? 'Graduate' : 'Undergraduate'}
                      </span>
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                        edu.status === 'studying' 
                          ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-100 animate-pulse' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      }`}>
                        {edu.status === 'studying' ? 'Currently Studying' : 'Completed'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-secondary-500 dark:text-gray-300">
                        <FiMapPin size={12} className="sm:w-3.5 sm:h-3.5" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-xs sm:text-sm text-secondary-500 dark:text-gray-300">
                        <FiCalendar size={12} className="sm:w-3.5 sm:h-3.5" />
                        <span>{edu.period}</span>
                        {edu.status === 'studying' && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-100">
                            Active
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 dark:text-white mb-2 text-sm sm:text-base">Key Courses:</h4>
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        {edu.courses.map((course) => (
                          <span key={course} className="skill-badge text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-secondary-700 dark:text-gray-200 mb-4 leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <motion.div variants={itemVariants} className="bg-secondary-50 dark:bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8">
            <h3 className="text-xl sm:text-2xl font-semibold text-secondary-900 dark:text-white mb-4 sm:mb-6 text-center">
              Professional Certifications
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-lg p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-2 sm:space-x-3 mb-3 sm:mb-4">
                    <span className="text-xl sm:text-2xl">{cert.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-secondary-900 dark:text-white text-sm sm:text-base">{cert.name}</h4>
                      <p className="text-xs sm:text-sm text-primary-600 dark:text-primary-400">{cert.issuer}</p>
                    </div>
                  </div>
                  
                                                        <div className="space-y-2 mb-3 sm:mb-4">
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-secondary-500 dark:text-gray-300">Issued:</span>
                      <span className="text-secondary-700 dark:text-gray-200">{cert.date}</span>
                    </div>
                    <div className="flex justify-between text-xs sm:text-sm">
                      <span className="text-secondary-500 dark:text-gray-300">Credential ID:</span>
                      <span className="text-secondary-700 dark:text-gray-200 font-mono text-xs">{cert.credentialId}</span>
                    </div>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-secondary-600 dark:text-gray-200">{cert.description}</p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 sm:mt-4 w-full px-3 sm:px-4 py-2 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-100 rounded-lg text-xs sm:text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-900/60 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <FiExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                    <span>Verify Credential</span>
                  </motion.button>
                </motion.div>
              ))}
            </div>
          </motion.div>




        </motion.div>
      </div>
    </section>
  );
};

export default Education; 