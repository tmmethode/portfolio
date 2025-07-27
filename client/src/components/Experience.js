import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi';
import { useData } from '../context/DataContext';

const Experience = () => {
  const { experience, loading, error } = useData();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Transform experience data from database
  const experienceArray = Array.isArray(experience) ? experience : [];
  const experiences = experienceArray.map(exp => ({
    title: exp.title,
    company: exp.company,
    location: exp.location,
    period: exp.isCurrent 
      ? `${new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - Present`
      : `${new Date(exp.startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} - ${new Date(exp.endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}`,
    description: exp.description,
    achievements: exp.achievements || [],
    technologies: exp.technologies || [],
    type: exp.isCurrent ? 'current' : 'past'
  }));



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
      <section id="experience" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="text-secondary-600 dark:text-gray-300 mt-4">Loading experience...</p>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section id="experience" className="section-padding bg-white dark:bg-gray-900">
        <div className="container-max">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400">Error loading experience: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
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
              Professional <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-secondary-600 dark:text-gray-300 max-w-2xl mx-auto">
              My journey through systems administration, Salesforce management, and software development with field experience in district-level support.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants} className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.title}`}
                variants={itemVariants}
                className={`relative ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                } flex flex-col lg:flex-row gap-8 items-center`}
              >
                {/* Timeline Line */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-secondary-200 dark:bg-gray-600"></div>
                
                {/* Content */}
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border-l-4 ${
                    exp.type === 'current' ? 'border-primary-500' : 'border-secondary-300 dark:border-gray-600'
                  }`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-secondary-900 dark:text-white">{exp.title}</h3>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</p>
                      </div>
                      {exp.type === 'current' && (
                        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-200 text-sm font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-4 text-sm text-secondary-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <FiCalendar size={14} />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <FiMapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-secondary-700 dark:text-gray-300 mb-4">{exp.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm text-secondary-700 dark:text-gray-300">
                            <FiAward className="text-primary-600 mt-1 flex-shrink-0" size={12} />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="skill-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 