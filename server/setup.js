const mongoose = require('mongoose');
require('dotenv').config();

// Import models
const Profile = require('./models/Profile');
const Skill = require('./models/Skill');
const Experience = require('./models/Experience');
const Education = require('./models/Education');
const Project = require('./models/Project');
const User = require('./models/User');
const Certification = require('./models/Certification');
const Navigation = require('./models/Navigation');
const FooterLinks = require('./models/FooterLinks');

// Frontend data to push to database
const frontendData = {
  profile: {
    name: 'Methode TWIZEYIMANA',
    title: 'Cloud Engineer & Systems Administrator',
    subtitle: 'Building secure and scalable solutions',
    email: 'info@tmmethode.com',
    phone: '+250 788 934 674',
    location: 'Kigali, Rwanda',
    about: 'IT professional with experience in cloud infrastructure, systems administration, and cybersecurity. Working with multi-cloud environments (AWS, Google Cloud Platform, Azure, Huawei Cloud), virtualization technologies, and cybersecurity. Developing skills in software development with Python, automation, and DevOps practices.',
    summary: 'I\'m an IT professional with experience in cloud infrastructure, systems administration, and cybersecurity. My journey includes working with multi-cloud environments, virtualization technologies, and developing skills in software development with Python, automation, and DevOps practices.',
    avatar: '',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/tmmethode',
      github: 'https://github.com/tmmethode/',
      twitter: 'https://x.com/tmmethode250',
      facebook: 'https://web.facebook.com/tmmethode',
      discord: 'https://discord.com/users/1146515605730639974'
    },
    whatIDo: 'I work with cloud infrastructure and virtualization technologies across multiple platforms (AWS, Google Cloud Platform, Azure, Huawei Cloud). I manage systems administration tasks, implement cybersecurity measures, and develop automation scripts using Python. I also support DevOps practices and maintain system security protocols.',
    myApproach: 'I believe in building secure, scalable, and efficient cloud solutions. Every system I work with is designed with cybersecurity best practices, automation, and performance optimization in mind. I focus on practical implementation and continuous learning in cloud and systems technologies.',
    keyStrengths: [
      'Cloud Infrastructure',
      'Systems Administration',
      'Cybersecurity',
      'Virtualization',
      'Python Development',
      'DevOps Practices',
      'Network Security',
      'Automation'
    ],
    experience: '3+ Years',
    certifications: 'Microsoft Office, Cisco, Huawei',
    availability: 'Available',
    resume: '',
    website: 'https://tmmethode.com'
  },
  skills: [
    // Systems Administration
    { name: 'Linux/Unix Systems', category: 'Systems Administration', proficiency: 85, icon: 'linux', color: 'primary', description: 'Expertise in Linux/Unix system administration', order: 1 },
    { name: 'Windows Server', category: 'Systems Administration', proficiency: 80, icon: 'windows', color: 'primary', description: 'Windows server administration and management', order: 2 },
    { name: 'User Management', category: 'Systems Administration', proficiency: 90, icon: 'users', color: 'primary', description: 'User account and access management', order: 3 },
    { name: 'System Troubleshooting', category: 'Systems Administration', proficiency: 88, icon: 'settings', color: 'primary', description: 'System diagnostics and problem resolution', order: 4 },
    { name: 'System Backups', category: 'Systems Administration', proficiency: 85, icon: 'database', color: 'primary', description: 'Backup and recovery procedures', order: 5 },
    { name: 'Network Configuration', category: 'Systems Administration', proficiency: 80, icon: 'server', color: 'primary', description: 'Network setup and configuration', order: 6 },
    { name: 'Security Hardening', category: 'Systems Administration', proficiency: 75, icon: 'shield', color: 'primary', description: 'System security implementation', order: 7 },
    
    // DevOps & Cloud
    { name: 'AWS', category: 'DevOps & Cloud', proficiency: 75, icon: 'aws', color: 'orange', description: 'Amazon Web Services cloud platform', order: 8 },
    { name: 'Google Cloud Platform', category: 'DevOps & Cloud', proficiency: 70, icon: 'gcp', color: 'orange', description: 'Google Cloud Platform services', order: 9 },
    { name: 'Huawei Cloud', category: 'DevOps & Cloud', proficiency: 80, icon: 'huawei', color: 'orange', description: 'Huawei Cloud services and solutions', order: 10 },
    { name: 'Oracle Cloud', category: 'DevOps & Cloud', proficiency: 65, icon: 'oracle', color: 'orange', description: 'Oracle Cloud infrastructure', order: 11 },
    { name: 'Virtualization Technologies', category: 'DevOps & Cloud', proficiency: 75, icon: 'server', color: 'orange', description: 'Virtual machine and container management', order: 12 },
    { name: 'Git', category: 'DevOps & Cloud', proficiency: 85, icon: 'git', color: 'orange', description: 'Version control and collaboration', order: 13 },
    { name: 'CI/CD Pipelines', category: 'DevOps & Cloud', proficiency: 70, icon: 'zap', color: 'orange', description: 'Continuous integration and deployment', order: 14 },
    
    // Programming & Development
    { name: 'Python', category: 'Programming & Development', proficiency: 85, icon: 'python', color: 'green', description: 'Python development and automation', order: 15 },
    { name: 'PHP', category: 'Programming & Development', proficiency: 75, icon: 'php', color: 'green', description: 'PHP web development', order: 16 },
    { name: 'Java', category: 'Programming & Development', proficiency: 70, icon: 'java', color: 'green', description: 'Java application development', order: 17 },
    { name: 'Node.js', category: 'Programming & Development', proficiency: 80, icon: 'nodejs', color: 'green', description: 'Node.js backend development', order: 18 },
    { name: 'JavaScript', category: 'Programming & Development', proficiency: 85, icon: 'javascript', color: 'green', description: 'JavaScript full-stack development', order: 19 },
    
    // Frontend & Database
    { name: 'React.js', category: 'Frontend & Database', proficiency: 80, icon: 'react', color: 'purple', description: 'React frontend development', order: 20 },
    { name: 'Tailwind CSS', category: 'Frontend & Database', proficiency: 85, icon: 'tailwind', color: 'purple', description: 'Tailwind CSS styling framework', order: 21 },
    { name: 'HTML/CSS', category: 'Frontend & Database', proficiency: 90, icon: 'html5', color: 'purple', description: 'Web markup and styling', order: 22 },
    { name: 'MongoDB', category: 'Frontend & Database', proficiency: 75, icon: 'mongodb', color: 'purple', description: 'MongoDB NoSQL database', order: 23 },
    { name: 'MySQL', category: 'Frontend & Database', proficiency: 80, icon: 'mysql', color: 'purple', description: 'MySQL relational database', order: 24 },
    
    // Networking
    { name: 'Network Administration', category: 'Networking', proficiency: 85, icon: 'server', color: 'blue', description: 'Network infrastructure administration', order: 25 },
    { name: 'Routing & Switching', category: 'Networking', proficiency: 80, icon: 'server', color: 'blue', description: 'Network routing and switching', order: 26 },
    { name: 'VPN Technologies', category: 'Networking', proficiency: 75, icon: 'shield', color: 'blue', description: 'Virtual private network setup', order: 27 },
    { name: 'Network Monitoring', category: 'Networking', proficiency: 80, icon: 'monitor', color: 'blue', description: 'Network performance monitoring', order: 28 },
    { name: 'Network Troubleshooting', category: 'Networking', proficiency: 85, icon: 'settings', color: 'blue', description: 'Network problem resolution', order: 29 },
    
    // Cybersecurity
    { name: 'Firewall Configuration', category: 'Cybersecurity', proficiency: 80, icon: 'shield', color: 'red', description: 'Firewall setup and management', order: 30 },
    { name: 'Intrusion Detection', category: 'Cybersecurity', proficiency: 70, icon: 'shield', color: 'red', description: 'Security monitoring and detection', order: 31 },
    { name: 'Security Auditing', category: 'Cybersecurity', proficiency: 75, icon: 'shield', color: 'red', description: 'Security assessment and auditing', order: 32 },
    { name: 'Vulnerability Assessment', category: 'Cybersecurity', proficiency: 70, icon: 'shield', color: 'red', description: 'Security vulnerability analysis', order: 33 },
    { name: 'Penetration Testing', category: 'Cybersecurity', proficiency: 65, icon: 'shield', color: 'red', description: 'Security penetration testing', order: 34 },
    
    // CRM & ERP Systems
    { name: 'Salesforce CRM', category: 'CRM & ERP Systems', proficiency: 85, icon: 'database', color: 'indigo', description: 'Salesforce customer relationship management', order: 35 },
    { name: 'Data Cleaning', category: 'CRM & ERP Systems', proficiency: 80, icon: 'database', color: 'indigo', description: 'Data cleaning and preparation', order: 36 },
    { name: 'Dashboard Creation', category: 'CRM & ERP Systems', proficiency: 75, icon: 'trending-up', color: 'indigo', description: 'Business intelligence dashboards', order: 37 },
    { name: 'Workflow Automation', category: 'CRM & ERP Systems', proficiency: 70, icon: 'zap', color: 'indigo', description: 'Business process automation', order: 38 },
    { name: 'User Training', category: 'CRM & ERP Systems', proficiency: 80, icon: 'users', color: 'indigo', description: 'End-user training and support', order: 39 }
  ],
  experience: [
    {
      title: 'Junior Systems Associate',
      company: 'EarthEnable Rwanda Ltd',
      location: 'Kigali, Rwanda',
      startDate: '2025-04-01',
      endDate: null,
      isCurrent: true,
      description: 'Administer and maintain Salesforce environment, perform data cleaning, and provide district-level systems support.',
      responsibilities: [
        'Administer and maintain Salesforce environment including reports and dashboards',
        'Travel to districts across Rwanda for on-site data cleaning and employee training',
        'Lead detection and correction of data entry errors ensuring compliance',
        'Support internal IT tools such as Formyoula, Kpay, and WordPress',
        'Assist with systems integrations and basic Salesforce automation',
        'Maintain system backups and uphold confidentiality protocols'
      ],
      achievements: [
        'Successfully managed Salesforce environment for multiple districts',
        'Improved data accuracy through systematic cleaning processes',
        'Enhanced user training programs across Rwanda',
        'Implemented efficient data entry error detection systems'
      ],
      technologies: ['Salesforce', 'Formyoula', 'Kpay', 'WordPress', 'Data Cleaning'],
      employmentType: 'Full-time'
    },
    {
      title: 'Systems Intern',
      company: 'EarthEnable Rwanda Ltd',
      location: 'Kigali, Rwanda',
      startDate: '2024-07-01',
      endDate: '2025-04-01',
      isCurrent: false,
      description: 'Managed user accounts, resolved data errors, and created Salesforce reports to enhance efficiency.',
      responsibilities: [
        'Managed user accounts and resolved data errors across the organization',
        'Created Salesforce reports to enhance operational efficiency',
        'Conducted data cleaning and user training across Rwanda',
        'Performed system troubleshooting and maintenance tasks',
        'Supported on-site operations and field work'
      ],
      achievements: [
        'Streamlined user account management processes',
        'Created comprehensive Salesforce reporting system',
        'Improved data quality through systematic cleaning',
        'Enhanced user training effectiveness'
      ],
      technologies: ['Salesforce', 'Data Cleaning', 'User Training', 'System Troubleshooting'],
      employmentType: 'Internship'
    },
    {
      title: 'Student Developer / Research Assistant',
      company: 'University of Rwanda Projects',
      location: 'Kigali, Rwanda',
      startDate: '2022-01-01',
      endDate: null,
      isCurrent: true,
      description: 'Develop dashboards and automated reports using Python, participate in data science workshops and hackathons.',
      responsibilities: [
        'Developed dashboards and automated reports using Python and large datasets',
        'Participated in bootcamp with National Institute of Statistics of Rwanda (NISR)',
        'Participated in systems-related workshops and internal hackathons',
        'Supported cloud labs and simulations in partnership with Huawei ICT Academy',
        'Focused on data science and AI applications'
      ],
      achievements: [
        'Developed automated reporting systems for large datasets',
        'Participated in NISR bootcamp for statistical analysis',
        'Contributed to successful hackathon projects',
        'Supported cloud computing initiatives with Huawei ICT Academy'
      ],
      technologies: ['Python', 'Data Analysis', 'Cloud Computing', 'AI/ML', 'Huawei ICT'],
      employmentType: 'Part-time'
    }
  ],
  education: [
    {
      degree: 'Bachelor of Science in Information Systems',
      institution: 'University of Rwanda',
      location: 'Kigali, Rwanda',
      startDate: '2021-09-01',
      endDate: '2025-06-30',
      isCurrent: false,
      description: 'School of ICT, College of Science and Technology. Focus on information systems and technology management.',
      gpa: 3.8,
      achievements: [
        'Dean\'s List for academic excellence',
        'Final year project: Cloud-based inventory management system',
        'Member of Computer Science Society'
      ],
      courses: [
        'Information Systems',
        'Database Management',
        'System Analysis',
        'Web Development',
        'Network Security'
      ],
      educationType: 'Bachelor'
    },
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of the People',
      location: 'Pasadena, CA, USA',
      startDate: '2023-09-01',
      endDate: null,
      isCurrent: true,
      description: 'Focus on software development and web programming. Participating in peer learning, academic discussions, and international tech competitions.',
      gpa: 3.9,
      achievements: [
        'Peer learning participation',
        'Academic discussions',
        'International tech competitions'
      ],
      courses: [
        'Software Development',
        'Web Programming',
        'Computer Science',
        'Data Structures',
        'Algorithms'
      ],
      educationType: 'Bachelor'
    }
  ],
  projects: [
    {
      title: 'Portfolio Website',
      description: 'Personal web presence showcasing skills and experience, built with React.js and Tailwind CSS.',
      category: 'Software Development',
      image: '🌐',
      technologies: ['React.js', 'Tailwind CSS', 'JavaScript', 'HTML/CSS', 'Git'],
      features: [
        'Responsive design',
        'Dark/Light theme',
        'Modern UI/UX',
        'Mobile optimized'
      ],
      liveUrl: 'http://tmmethode.com',
      githubUrl: '#',
      demoUrl: '',
      startDate: '2023-09-01',
      endDate: null,
      isCurrent: true,
      status: 'Completed',
      difficulty: 'Intermediate'
    },
    {
      title: 'Salesforce Enhancements',
      description: 'Built formula fields, roll-up summaries, and basic Apex triggers to improve data visibility and automation.',
      category: 'System Administration',
      image: '☁️',
      technologies: ['Salesforce', 'Apex', 'Formula Fields', 'Data Loader', 'Automation'],
      features: [
        'Custom formula fields',
        'Roll-up summaries',
        'Basic Apex triggers',
        'Data visibility improvements'
      ],
      liveUrl: '#',
      githubUrl: '#',
      demoUrl: '',
      startDate: '2024-07-01',
      endDate: '2025-04-01',
      isCurrent: false,
      status: 'Completed',
      difficulty: 'Intermediate'
    },
    {
      title: 'Python Dashboard (NISR Bootcamp)',
      description: 'Visualized large statistical data for national-level insight during National Institute of Statistics of Rwanda bootcamp.',
      category: 'Data Science',
      image: '📊',
      technologies: ['Python', 'Data Analysis', 'Visualization', 'Statistics', 'Pandas'],
      features: [
        'Large dataset processing',
        'Statistical analysis',
        'Data visualization',
        'National-level insights'
      ],
      liveUrl: '#',
      githubUrl: '#',
      demoUrl: '',
      startDate: '2022-01-01',
      endDate: null,
      isCurrent: true,
      status: 'Completed',
      difficulty: 'Advanced'
    },
    {
      title: 'Formyoula Automation',
      description: 'Created mobile forms to automate field staff submissions and reporting for improved operational efficiency.',
      category: 'Software Development',
      image: '📱',
      technologies: ['Formyoula', 'Mobile Forms', 'Automation', 'Reporting', 'Field Staff'],
      features: [
        'Mobile form creation',
        'Field staff automation',
        'Automated reporting',
        'Operational efficiency'
      ],
      liveUrl: '#',
      githubUrl: '#',
      demoUrl: '',
      startDate: '2024-07-01',
      endDate: '2025-04-01',
      isCurrent: false,
      status: 'Completed',
      difficulty: 'Intermediate'
    },
    {
      title: 'Data Cleaning & Training',
      description: 'Performed comprehensive data cleaning and user training across districts in Rwanda for Salesforce environment.',
      category: 'System Administration',
      image: '🧹',
      technologies: ['Data Cleaning', 'User Training', 'Salesforce', 'District Support', 'Compliance'],
      features: [
        'District-level data cleaning',
        'Employee training programs',
        'Data quality standards',
        'Compliance protocols'
      ],
      liveUrl: '#',
      githubUrl: '#',
      demoUrl: '',
      startDate: '2024-07-01',
      endDate: '2025-04-01',
      isCurrent: false,
      status: 'Completed',
      difficulty: 'Intermediate'
    },
    {
      title: 'Cloud Labs & Simulations',
      description: 'Supported cloud labs and simulations in partnership with Huawei ICT Academy for educational purposes.',
      category: 'DevOps',
      image: '☁️',
      technologies: ['Cloud Computing', 'Huawei ICT', 'Simulations', 'Education', 'AI/ML'],
      features: [
        'Cloud lab support',
        'Educational simulations',
        'Huawei ICT partnership',
        'AI/ML applications'
      ],
      liveUrl: '#',
      githubUrl: '#',
      demoUrl: '',
      startDate: '2022-01-01',
      endDate: null,
      isCurrent: true,
      status: 'Completed',
      difficulty: 'Advanced'
    }
  ],
  certifications: [
    {
      name: 'Microsoft Office Specialist (MOS)',
      issuer: 'Microsoft',
      date: '2023',
      credentialId: 'MOS-EXCEL-WORD',
      description: 'Excel & Word proficiency certification',
      icon: '📊',
      order: 1
    },
    {
      name: 'Cisco Cybersecurity Essentials',
      issuer: 'Cisco',
      date: '2023',
      credentialId: 'CISCO-CYBERSEC',
      description: 'Cybersecurity fundamentals and best practices',
      icon: '🔒',
      order: 2
    },
    {
      name: 'Huawei ICT Competition (Cloud Track)',
      issuer: 'Huawei',
      date: '2023',
      credentialId: 'HUAWEI-ICT-FINALIST',
      description: 'Finalist - Cloud computing, big data, and AI topics',
      icon: '☁️',
      order: 3
    }
  ],
  navigation: [
    {
      label: 'Home',
      href: '#home',
      order: 1,
      isActive: true,
      isExternal: false,
      icon: 'home'
    },
    {
      label: 'About',
      href: '#about',
      order: 2,
      isActive: true,
      isExternal: false,
      icon: 'user'
    },
    {
      label: 'Skills',
      href: '#skills',
      order: 3,
      isActive: true,
      isExternal: false,
      icon: 'code'
    },
    {
      label: 'Experience',
      href: '#experience',
      order: 4,
      isActive: true,
      isExternal: false,
      icon: 'briefcase'
    },
    {
      label: 'Education',
      href: '#education',
      order: 5,
      isActive: true,
      isExternal: false,
      icon: 'graduation-cap'
    },
    {
      label: 'Projects',
      href: '#projects',
      order: 6,
      isActive: true,
      isExternal: false,
      icon: 'folder'
    },
    {
      label: 'Contact',
      href: '#contact',
      order: 7,
      isActive: true,
      isExternal: false,
      icon: 'mail'
    }
  ],
  footerLinks: [
    {
      title: 'Quick Links',
      order: 1,
      isActive: true,
      links: [
        { name: 'Home', href: '#home', isExternal: false },
        { name: 'About', href: '#about', isExternal: false },
        { name: 'Skills', href: '#skills', isExternal: false },
        { name: 'Experience', href: '#experience', isExternal: false },
        { name: 'Education', href: '#education', isExternal: false },
        { name: 'Projects', href: '#projects', isExternal: false },
        { name: 'Contact', href: '#contact', isExternal: false }
      ]
    },
    {
      title: 'Services',
      order: 2,
      isActive: true,
      links: [
        { name: 'Cloud Infrastructure', href: '#', isExternal: false },
        { name: 'System Administration', href: '#', isExternal: false },
        { name: 'Data Analysis', href: '#', isExternal: false },
        { name: 'Salesforce Development', href: '#', isExternal: false },
        { name: 'Web Development', href: '#', isExternal: false },
        { name: 'Cybersecurity', href: '#', isExternal: false }
      ]
    },
    {
      title: 'Resources',
      order: 3,
      isActive: true,
      links: [
        { name: 'Blog', href: '#', isExternal: false },
        { name: 'Documentation', href: '#', isExternal: false },
        { name: 'Tutorials', href: '#', isExternal: false },
        { name: 'Case Studies', href: '#', isExternal: false }
      ]
    }
  ]
};

// Connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Clear existing data
const clearData = async () => {
  try {
    console.log('🗑️  Clearing existing data...');
    await Profile.deleteMany({});
    await Skill.deleteMany({});
    await Experience.deleteMany({});
    await Education.deleteMany({});
    await Project.deleteMany({});
    await Certification.deleteMany({});
    await Navigation.deleteMany({});
    await FooterLinks.deleteMany({});
    console.log('✅ Data cleared successfully');
  } catch (error) {
    console.error('❌ Error clearing data:', error);
  }
};

// Insert profile data
const insertProfile = async () => {
  try {
    console.log('👤 Inserting profile data...');
    const profile = new Profile(frontendData.profile);
    await profile.save();
    console.log('✅ Profile data inserted successfully');
    return profile;
  } catch (error) {
    console.error('❌ Error inserting profile:', error);
  }
};

// Insert skills data
const insertSkills = async () => {
  try {
    console.log('🛠️  Inserting skills data...');
    const skills = await Skill.insertMany(frontendData.skills);
    console.log(`✅ ${skills.length} skills inserted successfully`);
    return skills;
  } catch (error) {
    console.error('❌ Error inserting skills:', error);
  }
};

// Insert experience data
const insertExperience = async () => {
  try {
    console.log('💼 Inserting experience data...');
    const experience = await Experience.insertMany(frontendData.experience);
    console.log(`✅ ${experience.length} experience entries inserted successfully`);
    return experience;
  } catch (error) {
    console.error('❌ Error inserting experience:', error);
  }
};

// Insert education data
const insertEducation = async () => {
  try {
    console.log('🎓 Inserting education data...');
    const education = await Education.insertMany(frontendData.education);
    console.log(`✅ ${education.length} education entries inserted successfully`);
    return education;
  } catch (error) {
    console.error('❌ Error inserting education:', error);
  }
};

// Insert projects data
const insertProjects = async () => {
  try {
    console.log('🚀 Inserting projects data...');
    const projects = await Project.insertMany(frontendData.projects);
    console.log(`✅ ${projects.length} projects inserted successfully`);
    return projects;
  } catch (error) {
    console.error('❌ Error inserting projects:', error);
  }
};

// Insert certifications data
const insertCertifications = async () => {
  try {
    console.log('🏆 Inserting certifications data...');
    const certifications = await Certification.insertMany(frontendData.certifications);
    console.log(`✅ ${certifications.length} certifications inserted successfully`);
    return certifications;
  } catch (error) {
    console.error('❌ Error inserting certifications:', error);
  }
};

// Insert navigation data
const insertNavigation = async () => {
  try {
    console.log('🧭 Inserting navigation data...');
    const navigation = await Navigation.insertMany(frontendData.navigation);
    console.log(`✅ ${navigation.length} navigation items inserted successfully`);
    return navigation;
  } catch (error) {
    console.error('❌ Error inserting navigation:', error);
  }
};

// Insert footerLinks data
const insertFooterLinks = async () => {
  try {
    console.log('👣 Inserting footer links data...');
    const footerLinks = await FooterLinks.insertMany(frontendData.footerLinks);
    console.log(`✅ ${footerLinks.length} footer links inserted successfully`);
    return footerLinks;
  } catch (error) {
    console.error('❌ Error inserting footer links:', error);
  }
};

// Create admin user
const createAdminUser = async () => {
  try {
    console.log('👨‍💼 Creating admin user...');
    const adminUser = new User({
      name: 'TMMETHODE Admin',
      email: 'admin@tmmethode.com',
      password: 'admin123456',
      role: 'admin'
    });
    await adminUser.save();
    console.log('✅ Admin user created successfully');
    console.log('📧 Email: admin@tmmethode.com');
    console.log('🔑 Password: admin123456');
    return adminUser;
  } catch (error) {
    if (error.code === 11000) {
      console.log('ℹ️  Admin user already exists');
    } else {
      console.error('❌ Error creating admin user:', error);
    }
  }
};

// Main setup function
const setupDatabase = async () => {
  try {
    console.log('🚀 Starting database setup...');
    
    // Connect to database
    await connectDB();
    
    // Clear existing data
    await clearData();
    
    // Insert data
    await insertProfile();
    await insertSkills();
    await insertExperience();
    await insertEducation();
    await insertProjects();
    await insertCertifications();
    await insertNavigation();
    await insertFooterLinks(); // Added footer links insertion
    await createAdminUser();
    
    console.log('\n🎉 Database setup completed successfully!');
    
    console.log('\n📊 Data Summary:');
    console.log(`   👤 Profile: 1 entry`);
    console.log(`   🛠️  Skills: ${frontendData.skills.length} entries`);
    console.log(`   💼 Experience: ${frontendData.experience.length} entries`);
    console.log(`   🎓 Education: ${frontendData.education.length} entries`);
    console.log(`   🚀 Projects: ${frontendData.projects.length} entries`);
    console.log(`   🏆 Certifications: ${frontendData.certifications.length} entries`);
    console.log(`   🧭 Navigation: ${frontendData.navigation.length} entries`);
    console.log(`   🔗 Footer Links: ${frontendData.footerLinks.length} entries`);
    
    console.log('\n🔗 API Endpoints:');
    console.log('   Health Check: http://localhost:5000/api/health');
    console.log('   Profile: http://localhost:5000/api/profile');
    console.log('   Skills: http://localhost:5000/api/skills');
    console.log('   Experience: http://localhost:5000/api/experience');
    console.log('   Education: http://localhost:5000/api/education');
    console.log('   Projects: http://localhost:5000/api/projects');
    console.log('   Footer Links: http://localhost:5000/api/footer-links'); // Added footer links endpoint
    
    console.log('\n📚 Swagger Documentation:');
    console.log('   http://localhost:5000/api-docs');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Setup failed:', error);
    process.exit(1);
  }
};

// Run setup
setupDatabase(); 