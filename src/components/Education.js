import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiCalendar, FiMapPin, FiExternalLink } from 'react-icons/fi';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: 'Bachelor of Science in Information Systems',
      school: 'University of Rwanda',
      location: 'Kigali, Rwanda',
      period: '2021 - 2025',
      status: 'completed',
      description: 'School of ICT, College of Science and Technology. Focus on information systems and technology management.',
      courses: ['Information Systems', 'Database Management', 'System Analysis', 'Web Development', 'Network Security'],
      type: 'undergraduate'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of the People',
      location: 'Pasadena, CA, USA',
      period: '2023 - Present',
      status: 'studying',
      description: 'Focus on software development and web programming. Participating in peer learning, academic discussions, and international tech competitions.',
      courses: ['Software Development', 'Web Programming', 'Computer Science', 'Data Structures', 'Algorithms'],
      type: 'undergraduate'
    }
  ];

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
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
              Education & <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic journey and professional certifications that have shaped my expertise 
              in technology and IT management.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                variants={itemVariants}
                className="relative"
              >
                <div className={`bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border-l-4 ${
                  edu.type === 'graduate' ? 'border-primary-500' : 'border-blue-500'
                }`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                                             <div className="flex items-center space-x-3 mb-2">
                         <FiAward className={`text-2xl ${
                           edu.type === 'graduate' ? 'text-primary-600' : 'text-blue-600'
                         }`} />
                         <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white">{edu.degree}</h3>
                       </div>
                      <p className="text-lg font-medium text-primary-600 dark:text-primary-400">{edu.school}</p>
                    </div>
                    <div className="flex space-x-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.type === 'graduate' 
                          ? 'bg-primary-100 dark:bg-primary-900/40 text-primary-800 dark:text-primary-100' 
                          : 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-100'
                      }`}>
                        {edu.type === 'graduate' ? 'Graduate' : 'Undergraduate'}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        edu.status === 'studying' 
                          ? 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-100 animate-pulse' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      }`}>
                        {edu.status === 'studying' ? 'Currently Studying' : 'Completed'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-secondary-500 dark:text-gray-300">
                        <FiMapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-secondary-500 dark:text-gray-300">
                        <FiCalendar size={14} />
                        <span>{edu.period}</span>
                        {edu.status === 'studying' && (
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-100">
                            Active
                          </span>
                        )}
                      </div>

                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">Key Courses:</h4>
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span key={course} className="skill-badge text-xs">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-secondary-700 dark:text-gray-200 mb-4 leading-relaxed">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <motion.div variants={itemVariants} className="bg-secondary-50 dark:bg-gray-800 rounded-xl p-8">
            <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-6 text-center">
              Professional Certifications
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">{cert.icon}</span>
                    <div>
                      <h4 className="font-semibold text-secondary-900 dark:text-white">{cert.name}</h4>
                      <p className="text-sm text-primary-600 dark:text-primary-400">{cert.issuer}</p>
                    </div>
                  </div>
                  
                                      <div className="space-y-2 mb-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-secondary-500 dark:text-gray-300">Issued:</span>
                        <span className="text-secondary-700 dark:text-gray-200">{cert.date}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-secondary-500 dark:text-gray-300">Credential ID:</span>
                        <span className="text-secondary-700 dark:text-gray-200 font-mono text-xs">{cert.credentialId}</span>
                      </div>
                    </div>
                  
                  <p className="text-sm text-secondary-600 dark:text-gray-200">{cert.description}</p>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 w-full px-4 py-2 bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-100 rounded-lg text-sm font-medium hover:bg-primary-200 dark:hover:bg-primary-900/60 transition-colors duration-300 flex items-center justify-center space-x-2"
                  >
                    <FiExternalLink size={14} />
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