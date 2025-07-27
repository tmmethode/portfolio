import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiServer, FiCode, FiDatabase, FiTrendingUp } from 'react-icons/fi';
import { useData } from '../context/DataContext';

const Projects = () => {
  const { projects, loading, error } = useData();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState('all');

  // Transform projects data from database
  const projectsArray = Array.isArray(projects) ? projects : [];
  const projectsData = projectsArray.map(project => {
    // Map database categories to filter IDs
    const categoryMap = {
      'Software Development': 'software-dev',
      'System Administration': 'system-admin',
      'Data Science': 'data-science',
      'DevOps': 'devops',
      'Cloud Infrastructure': 'devops',
      'Cybersecurity': 'system-admin',
      'Data Analysis': 'data-science'
    };
    
    return {
      title: project.title,
      description: project.description,
      category: categoryMap[project.category] || 'software-dev',
      image: project.image || '🌐',
      technologies: project.technologies || [],
      github: project.githubUrl || '#',
      live: project.liveUrl || '#',
      features: project.features || []
    };
  });

  const filters = [
    { id: 'all', label: 'All Projects', icon: FiCode },
    { id: 'devops', label: 'DevOps', icon: FiServer },
    { id: 'software-dev', label: 'Software Dev', icon: FiCode },
    { id: 'data-science', label: 'Data Science', icon: FiTrendingUp },
    { id: 'system-admin', label: 'System Admin', icon: FiDatabase },
  ];

  const filteredProjects = projectsData.filter(project => 
    activeFilter === 'all' || project.category === activeFilter
  );

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

  const getCategoryColor = (category) => {
    const colors = {
      devops: 'primary',
      'software-dev': 'blue',
      'data-science': 'purple',
      'system-admin': 'green',
    };
    return colors[category] || 'primary';
  };

  // Show loading state
  if (loading) {
    return (
      <section id="projects" className="section-padding bg-secondary-50 dark:bg-gray-800">
        <div className="container-max">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
            <p className="text-secondary-600 dark:text-gray-300 mt-4">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section id="projects" className="section-padding bg-secondary-50 dark:bg-gray-800">
        <div className="container-max">
          <div className="text-center">
            <p className="text-red-600 dark:text-red-400">Error loading projects: {error}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="section-padding bg-secondary-50 dark:bg-gray-800">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-2xl mx-auto">
              A showcase of my work across different domains, from Salesforce administration to data analysis and software development.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-700 text-secondary-700 dark:text-gray-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 border border-secondary-200 dark:border-gray-600'
                }`}
              >
                <filter.icon size={16} />
                <span>{filter.label}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover"
              >
                {/* Project Header */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{project.image}</div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-${getCategoryColor(project.category)}-100 dark:bg-${getCategoryColor(project.category)}-900/40 text-${getCategoryColor(project.category)}-800 dark:text-${getCategoryColor(project.category)}-100`}>
                      {project.category.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-secondary-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-secondary-700 dark:text-gray-200 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="font-semibold text-secondary-900 dark:text-white mb-2 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs text-secondary-600 dark:text-gray-300 flex items-center space-x-2">
                          <div className="w-1 h-1 bg-primary-600 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="skill-badge text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.github}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-secondary-100 dark:bg-gray-600 text-secondary-700 dark:text-gray-200 rounded-lg font-medium hover:bg-secondary-200 dark:hover:bg-gray-500 transition-colors duration-300"
                    >
                      <FiGithub size={16} />
                      <span>Code</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-primary-600 dark:bg-primary-500 text-white rounded-lg font-medium hover:bg-primary-700 dark:hover:bg-primary-600 transition-colors duration-300"
                    >
                      <FiExternalLink size={16} />
                      <span>Live</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-secondary-900 dark:text-white mb-4">
                Interested in Working Together?
              </h3>
              <p className="text-secondary-600 dark:text-gray-200 mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities and exciting projects. 
                Whether it's infrastructure automation, software development, or data science, 
                let's explore how we can collaborate.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Let's Connect
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 