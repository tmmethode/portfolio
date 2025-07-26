import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FiServer, FiCode, FiDatabase, FiCloud, FiShield, FiCpu,
  FiGitBranch, FiMonitor, FiZap, FiTrendingUp, FiLayers, FiSettings,
  FiUser, FiGlobe, FiAward
} from 'react-icons/fi';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Systems Administration',
      subtitle: 'Infrastructure & User Management',
      icon: FiServer,
      color: 'primary',
      description: 'Expertise in Linux/Unix, Windows Server, and user management systems',
      skills: [
        { name: 'Linux/Unix Systems', level: 85, experience: '3+ years' },
        { name: 'Windows Server', level: 80, experience: '2+ years' },
        { name: 'User Management', level: 90, experience: '3+ years' },
        { name: 'System Troubleshooting', level: 88, experience: '3+ years' },
        { name: 'System Backups', level: 85, experience: '2+ years' },
        { name: 'Network Configuration', level: 80, experience: '2+ years' },
        { name: 'Security Hardening', level: 75, experience: '2+ years' },
      ]
    },
    {
      title: 'DevOps & Cloud',
      subtitle: 'Infrastructure & Automation',
      icon: FiCloud,
      color: 'orange',
      description: 'Cloud platforms, virtualization, automation, and infrastructure management',
      skills: [
        { name: 'AWS', level: 75, experience: '2+ years' },
        { name: 'Google Cloud Platform', level: 70, experience: '2+ years' },
        { name: 'Huawei Cloud', level: 80, experience: '3+ years' },
        { name: 'Oracle Cloud', level: 65, experience: '1+ years' },
        { name: 'Virtualization Technologies', level: 75, experience: '2+ years' },
        { name: 'Git', level: 85, experience: '3+ years' },
        { name: 'CI/CD Pipelines', level: 70, experience: '2+ years' },
      ]
    },

    {
      title: 'Programming & Development',
      subtitle: 'Full-Stack Development',
      icon: FiCode,
      color: 'green',
      description: 'Modern software development with focus on scalable applications',
      skills: [
        { name: 'Python', level: 85, experience: '3+ years' },
        { name: 'PHP', level: 75, experience: '2+ years' },
        { name: 'Java', level: 70, experience: '2+ years' },
        { name: 'Node.js', level: 80, experience: '2+ years' },
        { name: 'JavaScript', level: 85, experience: '3+ years' },
      ]
    },
    {
      title: 'Frontend & Database',
      subtitle: 'Web Development & Data',
      icon: FiTrendingUp,
      color: 'purple',
      description: 'Frontend development and database management',
      skills: [
        { name: 'React.js', level: 80, experience: '2+ years' },
        { name: 'Tailwind CSS', level: 85, experience: '2+ years' },
        { name: 'HTML/CSS', level: 90, experience: '3+ years' },
        { name: 'MongoDB', level: 75, experience: '2+ years' },
        { name: 'MySQL', level: 80, experience: '2+ years' },
      ]
    },
    {
      title: 'Networking',
      subtitle: 'Network Infrastructure & Management',
      icon: FiServer,
      color: 'blue',
      description: 'Network administration, routing, and infrastructure management',
      skills: [
        { name: 'Network Administration', level: 85, experience: '3+ years' },
        { name: 'Routing & Switching', level: 80, experience: '2+ years' },
        { name: 'VPN Technologies', level: 75, experience: '2+ years' },
        { name: 'Network Monitoring', level: 80, experience: '2+ years' },
        { name: 'Network Troubleshooting', level: 85, experience: '3+ years' },
      ]
    },
    {
      title: 'Cybersecurity',
      subtitle: 'Security & Defense',
      icon: FiShield,
      color: 'red',
      description: 'Security protocols, threat detection, and cyber defense',
      skills: [
        { name: 'Firewall Configuration', level: 80, experience: '2+ years' },
        { name: 'Intrusion Detection', level: 70, experience: '2+ years' },
        { name: 'Security Auditing', level: 75, experience: '2+ years' },
        { name: 'Vulnerability Assessment', level: 70, experience: '2+ years' },
        { name: 'Penetration Testing', level: 65, experience: '1+ years' },
      ]
    },
    {
      title: 'CRM & ERP Systems',
      subtitle: 'Business Applications & Management',
      icon: FiDatabase,
      color: 'indigo',
      description: 'Customer relationship management and enterprise resource planning systems',
      skills: [
        { name: 'Salesforce CRM', level: 85, experience: '1+ years' },
        { name: 'Data Cleaning', level: 80, experience: '2+ years' },
        { name: 'Dashboard Creation', level: 75, experience: '2+ years' },
        { name: 'Workflow Automation', level: 70, experience: '2+ years' },
        { name: 'User Training', level: 80, experience: '1+ years' },
      ]
    }
  ];

  const toolsAndTechnologies = [
    // Cloud Platforms
    { name: 'AWS', icon: FiCloud, category: 'Cloud Platforms' },
    { name: 'Google Cloud Platform', icon: FiCloud, category: 'Cloud Platforms' },
    { name: 'Huawei Cloud', icon: FiCloud, category: 'Cloud Platforms' },
    { name: 'Oracle Cloud', icon: FiCloud, category: 'Cloud Platforms' },
    { name: 'Azure', icon: FiCloud, category: 'Cloud Platforms' },
    { name: 'GCP', icon: FiCloud, category: 'Cloud Platforms' },
    { name: 'OpenStack', icon: FiCloud, category: 'Cloud Platforms' },
    
    // Containerization & Orchestration
    { name: 'Docker', icon: FiLayers, category: 'Containerization' },
    { name: 'Kubernetes', icon: FiSettings, category: 'Containerization' },
    
    // Infrastructure as Code
    { name: 'Terraform', icon: FiCloud, category: 'Infrastructure as Code' },
    
    // CI/CD Tools
    { name: 'Jenkins', icon: FiZap, category: 'CI/CD Tools' },
    { name: 'GitLab CI', icon: FiZap, category: 'CI/CD Tools' },
    { name: 'GitHub Actions', icon: FiZap, category: 'CI/CD Tools' },
    { name: 'CI/CD Pipelines', icon: FiZap, category: 'CI/CD Tools' },
    
    // Monitoring & Observability
    { name: 'Prometheus', icon: FiMonitor, category: 'Monitoring' },
    { name: 'Grafana', icon: FiMonitor, category: 'Monitoring' },
    { name: 'ELK Stack', icon: FiDatabase, category: 'Monitoring' },
    
    // Configuration Management
    { name: 'Ansible', icon: FiServer, category: 'Configuration Management' },
    { name: 'Puppet', icon: FiServer, category: 'Configuration Management' },
    { name: 'Chef', icon: FiServer, category: 'Configuration Management' },
    
    // Serverless & Streaming
    { name: 'AWS Lambda', icon: FiCpu, category: 'Serverless & Streaming' },
    { name: 'Apache Kafka', icon: FiTrendingUp, category: 'Serverless & Streaming' },
    
    // Big Data Technologies
    { name: 'Hadoop', icon: FiTrendingUp, category: 'Big Data' },
    { name: 'HBase', icon: FiDatabase, category: 'Big Data' },
    { name: 'Apache Spark', icon: FiTrendingUp, category: 'Big Data' },
    { name: 'Hive', icon: FiDatabase, category: 'Big Data' },
    { name: 'Pig', icon: FiCode, category: 'Big Data' },
    { name: 'Sqoop', icon: FiDatabase, category: 'Big Data' },
    { name: 'Flume', icon: FiTrendingUp, category: 'Big Data' },
    { name: 'Zookeeper', icon: FiSettings, category: 'Big Data' },
    { name: 'YARN', icon: FiSettings, category: 'Big Data' },
    { name: 'MapReduce', icon: FiCode, category: 'Big Data' },
    { name: 'Impala', icon: FiDatabase, category: 'Big Data' },
    { name: 'Kafka', icon: FiTrendingUp, category: 'Big Data' },
    { name: 'Flink', icon: FiTrendingUp, category: 'Big Data' },
    { name: 'Huawei FusionInsight', icon: FiTrendingUp, category: 'Big Data' },
    { name: 'Huawei Cloud EI', icon: FiTrendingUp, category: 'Big Data' },
    { name: 'Huawei Atlas', icon: FiTrendingUp, category: 'Big Data' },
    { name: 'Huawei GaussDB', icon: FiDatabase, category: 'Big Data' },
    { name: 'Huawei ModelArts', icon: FiTrendingUp, category: 'Big Data' },
    { name: 'Huawei DataArts', icon: FiTrendingUp, category: 'Big Data' },
    { name: 'Huawei CloudStream', icon: FiTrendingUp, category: 'Big Data' },
    
    // Databases
    { name: 'MongoDB', icon: FiDatabase, category: 'Databases' },
    { name: 'MySQL', icon: FiDatabase, category: 'Databases' },
    { name: 'Microsoft SQL Server', icon: FiDatabase, category: 'Databases' },
    { name: 'PostgreSQL', icon: FiDatabase, category: 'Databases' },
    { name: 'Oracle Database', icon: FiDatabase, category: 'Databases' },
    { name: 'SQLite', icon: FiDatabase, category: 'Databases' },
    { name: 'Firestore', icon: FiDatabase, category: 'Databases' },
    { name: 'Redis', icon: FiDatabase, category: 'Databases' },
    
    // Web Servers
    { name: 'Nginx', icon: FiShield, category: 'Web Servers' },
    { name: 'Apache', icon: FiShield, category: 'Web Servers' },
    
    // Virtualization
    { name: 'Proxmox', icon: FiServer, category: 'Virtualization' },
    { name: 'VMware', icon: FiServer, category: 'Virtualization' },
    { name: 'VirtualBox', icon: FiServer, category: 'Virtualization' },
    
    // Version Control
    { name: 'Git', icon: FiGitBranch, category: 'Version Control' },
    
    // Scripting & Automation
    { name: 'Bash', icon: FiServer, category: 'Scripting & Automation' },
    { name: 'Python', icon: FiCode, category: 'Scripting & Automation' },
    { name: 'PowerShell', icon: FiServer, category: 'Scripting & Automation' },
    
    // Platforms
    { name: 'WordPress', icon: FiGlobe, category: 'Platforms' },
    { name: 'Firebase', icon: FiDatabase, category: 'Platforms' },
    
    // Networking & Security
    { name: 'Cisco IOS', icon: FiShield, category: 'Networking' },
    { name: 'Wireshark', icon: FiShield, category: 'Networking' },
    { name: 'Nmap', icon: FiShield, category: 'Networking' },
    { name: 'Metasploit', icon: FiShield, category: 'Security' },
    { name: 'Snort', icon: FiShield, category: 'Security' },
    { name: 'Nessus', icon: FiShield, category: 'Security' },
    { name: 'OpenVAS', icon: FiShield, category: 'Security' },
    { name: 'Burp Suite', icon: FiShield, category: 'Security' },
    { name: 'Kali Linux', icon: FiShield, category: 'Security' },
    { name: 'pfSense', icon: FiShield, category: 'Networking' },
    { name: 'OpenVPN', icon: FiShield, category: 'Networking' },
    { name: 'IPSec', icon: FiShield, category: 'Networking' },
    { name: 'SSL/TLS', icon: FiShield, category: 'Security' },
    { name: 'PKI', icon: FiShield, category: 'Security' },
    
    // CRM & ERP Systems
    { name: 'Salesforce', icon: FiDatabase, category: 'CRM' },
    { name: 'HubSpot CRM', icon: FiDatabase, category: 'CRM' },
    { name: 'Microsoft Dynamics', icon: FiDatabase, category: 'ERP' },
    { name: 'SAP ERP', icon: FiDatabase, category: 'ERP' },
    { name: 'Oracle ERP', icon: FiDatabase, category: 'ERP' },
    { name: 'NetSuite', icon: FiDatabase, category: 'ERP' },
    { name: 'Zoho CRM', icon: FiDatabase, category: 'CRM' },
    { name: 'Pipedrive', icon: FiDatabase, category: 'CRM' },
    { name: 'Data Loader', icon: FiDatabase, category: 'CRM' },
    { name: 'Apex', icon: FiCode, category: 'CRM' },
    { name: 'SOQL', icon: FiDatabase, category: 'CRM' },
    { name: 'SOSL', icon: FiDatabase, category: 'CRM' },
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

  const getColorClasses = (color) => {
    const colors = {
      primary: 'bg-primary-500',
      blue: 'bg-blue-500',
      green: 'bg-green-500',
      purple: 'bg-purple-500',
      orange: 'bg-orange-500',
      red: 'bg-red-500',
      indigo: 'bg-indigo-500',
    };
    return colors[color] || colors.primary;
  };

  return (
    <section id="skills" className="section-padding bg-secondary-50 dark:bg-gray-800 overflow-hidden">
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
              Cloud & <span className="gradient-text">Systems</span>
            </h2>
            <p className="text-lg text-secondary-600 dark:text-gray-300 max-w-2xl mx-auto">
              My expertise spans across cloud infrastructure, systems administration, cybersecurity, 
              and software development. Here's an overview of my technical capabilities.
            </p>
          </motion.div>

          {/* Skill Categories */}
          <motion.div variants={itemVariants} className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-secondary-100 dark:border-gray-700"
              >
                {/* Category Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <div className={`p-4 rounded-xl ${getColorClasses(category.color)} bg-opacity-10 flex-shrink-0`}>
                    <category.icon className={`text-2xl ${getColorClasses(category.color)}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-1">{category.title}</h3>
                    <p className="text-lg font-medium text-primary-600 dark:text-primary-400 mb-2">{category.subtitle}</p>
                    <p className="text-secondary-600 dark:text-gray-300 text-sm leading-relaxed">{category.description}</p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <div>
                          <h4 className="text-secondary-900 dark:text-white font-semibold group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                            {skill.name}
                          </h4>
                          <p className="text-xs text-secondary-500 dark:text-gray-400 mt-1">{skill.experience}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm font-medium text-secondary-700 dark:text-gray-300">{skill.level}%</span>
                          <div className="w-16 h-2 bg-secondary-200 dark:bg-gray-600 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                              transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.05) }}
                              className={`h-full rounded-full ${getColorClasses(category.color)}`}
                            />
                          </div>
                        </div>
                      </div>
                      
                      {/* Detailed Progress Bar */}
                      <div className="w-full bg-secondary-100 dark:bg-gray-600 rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ duration: 1.5, delay: (index * 0.1) + (skillIndex * 0.05) }}
                          className={`h-full rounded-full ${getColorClasses(category.color)} shadow-sm`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tools and Technologies */}
          <motion.div variants={itemVariants} className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-secondary-100 dark:border-gray-700">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-secondary-900 dark:text-white mb-2">
                Tools & Technologies
              </h3>
              <p className="text-secondary-600 dark:text-gray-300 max-w-2xl mx-auto">
                Comprehensive toolkit organized by technology domains
              </p>
            </div>
            
            {/* Technology Categories */}
            <div className="space-y-8">
              {/* Cloud & Infrastructure */}
              <div>
                <h4 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                  <FiCloud className="mr-2 text-primary-600" />
                  Cloud & Infrastructure
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {toolsAndTechnologies.filter(tool => 
                    ['AWS', 'Google Cloud Platform', 'Huawei Cloud', 'Oracle Cloud', 'Azure', 'OpenStack', 'Docker', 'Kubernetes', 'Proxmox', 'VMware', 'VirtualBox'].includes(tool.name)
                  ).map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="group text-center p-3 rounded-lg bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 hover:from-blue-100 hover:to-white dark:hover:from-blue-900/30 dark:hover:to-gray-800 transition-all duration-300 border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-500 shadow-sm hover:shadow-md"
                    >
                      <tool.icon className="text-2xl text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <h5 className="font-medium text-secondary-900 dark:text-white text-xs group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {tool.name}
                      </h5>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* DevOps & Automation */}
              <div>
                <h4 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                  <FiZap className="mr-2 text-primary-600" />
                  DevOps & Automation
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {toolsAndTechnologies.filter(tool => 
                    ['CI/CD Pipelines', 'Git', 'Bash', 'Python', 'PowerShell', 'GitHub Actions'].includes(tool.name)
                  ).map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="group text-center p-3 rounded-lg bg-gradient-to-br from-green-50 to-white dark:from-green-900/20 dark:to-gray-800 hover:from-green-100 hover:to-white dark:hover:from-green-900/30 dark:hover:to-gray-800 transition-all duration-300 border border-green-200 dark:border-green-700 hover:border-green-300 dark:hover:border-green-500 shadow-sm hover:shadow-md"
                    >
                      <tool.icon className="text-2xl text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <h5 className="font-medium text-secondary-900 dark:text-white text-xs group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">
                        {tool.name}
                      </h5>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Big Data & Analytics */}
              <div>
                <h4 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                  <FiTrendingUp className="mr-2 text-primary-600" />
                  Big Data & Analytics
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {toolsAndTechnologies.filter(tool => 
                    ['Hadoop', 'HBase', 'Apache Spark', 'Hive', 'Sqoop', 'Flume', 'Zookeeper', 'YARN', 'MapReduce', 'Kafka', 'Flink', 'Huawei FusionInsight', 'Huawei Cloud EI', 'Huawei Atlas', 'Huawei GaussDB', 'Huawei ModelArts', 'Huawei DataArts', 'Huawei CloudStream'].includes(tool.name)
                  ).map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="group text-center p-3 rounded-lg bg-gradient-to-br from-purple-50 to-white dark:from-purple-900/20 dark:to-gray-800 hover:from-purple-100 hover:to-white dark:hover:from-purple-900/30 dark:hover:to-gray-800 transition-all duration-300 border border-purple-200 dark:border-purple-700 hover:border-purple-300 dark:hover:border-purple-500 shadow-sm hover:shadow-md"
                    >
                      <tool.icon className="text-2xl text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <h5 className="font-medium text-secondary-900 dark:text-white text-xs group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors duration-300">
                        {tool.name}
                      </h5>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Databases & Web Technologies */}
              <div>
                <h4 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                  <FiDatabase className="mr-2 text-primary-600" />
                  Databases & Web Technologies
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {toolsAndTechnologies.filter(tool => 
                    ['Databases', 'Web Servers', 'Platforms'].includes(tool.category)
                  ).map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="group text-center p-3 rounded-lg bg-gradient-to-br from-orange-50 to-white dark:from-orange-900/20 dark:to-gray-800 hover:from-orange-100 hover:to-white dark:hover:from-orange-900/30 dark:hover:to-gray-800 transition-all duration-300 border border-orange-200 dark:border-orange-700 hover:border-orange-300 dark:hover:border-orange-500 shadow-sm hover:shadow-md"
                    >
                      <tool.icon className="text-2xl text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <h5 className="font-medium text-secondary-900 dark:text-white text-xs group-hover:text-orange-700 dark:group-hover:text-orange-400 transition-colors duration-300">
                        {tool.name}
                      </h5>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Networking */}
              <div>
                <h4 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                  <FiServer className="mr-2 text-primary-600" />
                  Networking
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {toolsAndTechnologies.filter(tool => 
                    ['Networking'].includes(tool.category)
                  ).map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="group text-center p-3 rounded-lg bg-gradient-to-br from-blue-50 to-white dark:from-blue-900/20 dark:to-gray-800 hover:from-blue-100 hover:to-white dark:hover:from-blue-900/30 dark:hover:to-gray-800 transition-all duration-300 border border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-500 shadow-sm hover:shadow-md"
                    >
                      <tool.icon className="text-2xl text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <h5 className="font-medium text-secondary-900 dark:text-white text-xs group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {tool.name}
                      </h5>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Cybersecurity */}
              <div>
                <h4 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                  <FiShield className="mr-2 text-primary-600" />
                  Cybersecurity
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {toolsAndTechnologies.filter(tool => 
                    ['Security'].includes(tool.category)
                  ).map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="group text-center p-3 rounded-lg bg-gradient-to-br from-red-50 to-white dark:from-red-900/20 dark:to-gray-800 hover:from-red-100 hover:to-white dark:hover:from-red-900/30 dark:hover:to-gray-800 transition-all duration-300 border border-red-200 dark:border-red-700 hover:border-red-300 dark:hover:border-red-500 shadow-sm hover:shadow-md"
                    >
                      <tool.icon className="text-2xl text-red-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <h5 className="font-medium text-secondary-900 dark:text-white text-xs group-hover:text-red-700 dark:group-hover:text-red-400 transition-colors duration-300">
                        {tool.name}
                      </h5>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CRM & ERP Systems */}
              <div>
                <h4 className="text-xl font-semibold text-secondary-900 dark:text-white mb-4 flex items-center">
                  <FiDatabase className="mr-2 text-primary-600" />
                  CRM & ERP Systems
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                  {toolsAndTechnologies.filter(tool => 
                    ['CRM', 'ERP'].includes(tool.category)
                  ).map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="group text-center p-3 rounded-lg bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-900/20 dark:to-gray-800 hover:from-indigo-100 hover:to-white dark:hover:from-indigo-900/30 dark:hover:to-gray-800 transition-all duration-300 border border-indigo-200 dark:border-indigo-700 hover:border-indigo-300 dark:hover:border-indigo-500 shadow-sm hover:shadow-md"
                    >
                      <tool.icon className="text-2xl text-indigo-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                      <h5 className="font-medium text-secondary-900 dark:text-white text-xs group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors duration-300">
                        {tool.name}
                      </h5>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Skills */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg border border-secondary-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <FiUser className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 dark:text-white">Soft Skills</h4>
              </div>
              <div className="space-y-4">
                {['Leadership', 'Problem Solving', 'Communication', 'Team Collaboration', 'Project Management', 'Mentoring'].map((skill) => (
                  <div key={skill} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-green-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-secondary-700 dark:text-gray-300 font-medium group-hover:text-green-700 dark:group-hover:text-green-400 transition-colors duration-300">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>

                        <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg border border-secondary-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <FiAward className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 dark:text-white">Certifications</h4>
              </div>
              <div className="space-y-4">
                {['Microsoft Office Specialist (MOS)', 'Cisco Cybersecurity Essentials', 'Huawei ICT Competition Finalist'].map((cert) => (
                  <div key={cert} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-blue-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-secondary-700 dark:text-gray-300 text-sm font-medium group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors duration-300">{cert}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 md:p-8 shadow-lg border border-secondary-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <FiGlobe className="text-purple-600 dark:text-purple-400 text-xl" />
                </div>
                <h4 className="text-xl font-bold text-secondary-900 dark:text-white">Languages</h4>
              </div>
              <div className="space-y-4">
                {['English (Advanced)', 'Kinyarwanda (Native)'].map((lang) => (
                  <div key={lang} className="flex items-center space-x-3 group">
                    <div className="w-3 h-3 bg-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-secondary-700 dark:text-gray-300 text-sm font-medium group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors duration-300">{lang}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 