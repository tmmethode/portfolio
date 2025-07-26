import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiMapPin, FiMail, FiPhone, FiCalendar, FiAward } from 'react-icons/fi';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const personalInfo = [
    { icon: FiUser, label: 'Name', value: 'Methode TWIZEYIMANA' },
    { icon: FiMapPin, label: 'Location', value: 'Kigali, Rwanda' },
    { icon: FiMail, label: 'Email', value: 'info@tmmethode.com' },
    { icon: FiPhone, label: 'Phone', value: '+250 788 934 674' },
    { icon: FiCalendar, label: 'Experience', value: '3+ Years' },
    { icon: FiAward, label: 'Certifications', value: 'Microsoft Office, Cisco, Huawei' },
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
                                            <p className="text-secondary-600 dark:text-gray-300 font-medium">Methode TWIZEYIMANA</p>
                          <p className="text-sm text-secondary-500 dark:text-gray-400">IT Professional</p>
                </div>
              </div>

            </div>

            {/* Personal Information */}
            <div className="bg-secondary-50 dark:bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">Personal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    variants={itemVariants}
                    className="flex items-center space-x-3"
                  >
                    <info.icon className="text-primary-600" size={18} />
                    <div>
                      <p className="text-sm text-secondary-500 dark:text-gray-400">{info.label}</p>
                      <p className="font-medium text-secondary-900 dark:text-white">{info.value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-4">
                About <span className="gradient-text">Me</span>
              </h2>
              <p className="text-lg text-secondary-600 dark:text-gray-300 leading-relaxed mb-6">
                I'm an IT professional with experience in cloud infrastructure, systems administration, and cybersecurity. 
                My journey includes working with multi-cloud environments, virtualization technologies, and developing 
                skills in software development with Python, automation, and DevOps practices.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-primary-900 dark:text-primary-200 mb-3">What I Do</h3>
                <p className="text-primary-800 dark:text-primary-300 leading-relaxed">
                  I work with cloud infrastructure and virtualization technologies across multiple platforms (AWS, Google Cloud Platform, Azure, Huawei Cloud). 
                  I manage systems administration tasks, implement cybersecurity measures, and develop automation scripts using Python. 
                  I also support DevOps practices and maintain system security protocols.
                </p>
              </div>

              <div className="bg-secondary-50 dark:bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">My Approach</h3>
                <p className="text-secondary-800 dark:text-gray-300 leading-relaxed">
                  I believe in building secure, scalable, and efficient cloud solutions. Every system I work with 
                  is designed with cybersecurity best practices, automation, and performance optimization in mind. 
                  I focus on practical implementation and continuous learning in cloud and systems technologies.
                </p>
              </div>
            </div>

            {/* Key Strengths */}
            <div>
              <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4">Key Strengths</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Cloud Infrastructure',
                  'Systems Administration',
                  'Cybersecurity',
                  'Virtualization',
                  'Python Development',
                  'DevOps Practices',
                  'Network Security',
                  'Automation'
                ].map((strength, index) => (
                  <motion.div
                    key={strength}
                    variants={itemVariants}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-secondary-700 dark:text-gray-300">{strength}</span>
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