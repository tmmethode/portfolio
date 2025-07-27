const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'TMMETHODE Portfolio API',
      version: '1.0.0',
      description: 'Backend API for TMMETHODE Portfolio - Cloud Engineer & Systems Administrator',
      contact: {
        name: 'TMMETHODE',
        email: 'info@tmmethode.com',
        url: 'https://tmmethode.com'
      },
      license: {
        name: 'ISC',
        url: 'https://opensource.org/licenses/ISC'
      }
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server'
      },
      {
        url: 'https://api.tmmethode.com',
        description: 'Production server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      },
      schemas: {
        Profile: {
          type: 'object',
          properties: {
            name: { type: 'string', example: 'TMMETHODE' },
            title: { type: 'string', example: 'Cloud Engineer & Systems Administrator' },
            subtitle: { type: 'string', example: 'Building secure and scalable solutions' },
            email: { type: 'string', format: 'email', example: 'info@tmmethode.com' },
            phone: { type: 'string', example: '+250 788 123 456' },
            location: { type: 'string', example: 'Kigali, Rwanda' },
            about: { type: 'string' },
            summary: { type: 'string' },
            avatar: { type: 'string' },
            socialLinks: {
              type: 'object',
              properties: {
                linkedin: { type: 'string' },
                github: { type: 'string' },
                twitter: { type: 'string' },
                facebook: { type: 'string' },
                discord: { type: 'string' }
              }
            },
            availability: { type: 'string', enum: ['Available', 'Not Available', 'Part-time'] },
            resume: { type: 'string' },
            website: { type: 'string' }
          }
        },
        Skill: {
          type: 'object',
          properties: {
            name: { type: 'string', example: 'AWS' },
            category: { 
              type: 'string', 
              enum: ['Systems Administration', 'DevOps & Cloud', 'Programming & Development', 'Frontend & Database', 'Networking', 'Cybersecurity', 'CRM & ERP Systems'],
              example: 'DevOps & Cloud'
            },
            proficiency: { type: 'number', minimum: 0, maximum: 100, example: 90 },
            icon: { type: 'string', example: 'aws' },
            color: { type: 'string', example: 'orange' },
            description: { type: 'string' },
            isActive: { type: 'boolean', default: true },
            order: { type: 'number', default: 0 }
          }
        },
        Experience: {
          type: 'object',
          properties: {
            title: { type: 'string', example: 'Senior Cloud Engineer' },
            company: { type: 'string', example: 'Tech Solutions Ltd' },
            location: { type: 'string', example: 'Kigali, Rwanda' },
            startDate: { type: 'string', format: 'date', example: '2022-01-01' },
            endDate: { type: 'string', format: 'date' },
            isCurrent: { type: 'boolean', default: false },
            description: { type: 'string' },
            responsibilities: { type: 'array', items: { type: 'string' } },
            achievements: { type: 'array', items: { type: 'string' } },
            technologies: { type: 'array', items: { type: 'string' } },
            employmentType: { 
              type: 'string', 
              enum: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'],
              default: 'Full-time'
            }
          }
        },
        Education: {
          type: 'object',
          properties: {
            degree: { type: 'string', example: 'Bachelor of Science in Computer Science' },
            institution: { type: 'string', example: 'University of Rwanda' },
            location: { type: 'string', example: 'Kigali, Rwanda' },
            startDate: { type: 'string', format: 'date', example: '2016-09-01' },
            endDate: { type: 'string', format: 'date' },
            isCurrent: { type: 'boolean', default: false },
            description: { type: 'string' },
            gpa: { type: 'number', minimum: 0, maximum: 4.0 },
            achievements: { type: 'array', items: { type: 'string' } },
            courses: { type: 'array', items: { type: 'string' } },
            educationType: { 
              type: 'string', 
              enum: ['Bachelor', 'Master', 'PhD', 'Diploma', 'Certificate', 'High School'],
              default: 'Bachelor'
            }
          }
        },
        Project: {
          type: 'object',
          properties: {
            title: { type: 'string', example: 'Cloud Infrastructure Automation' },
            description: { type: 'string' },
            category: { 
              type: 'string', 
              enum: ['Cloud Infrastructure', 'DevOps', 'Software Development', 'System Administration', 'Cybersecurity', 'Data Analysis'],
              example: 'Cloud Infrastructure'
            },
            image: { type: 'string' },
            technologies: { type: 'array', items: { type: 'string' } },
            features: { type: 'array', items: { type: 'string' } },
            liveUrl: { type: 'string' },
            githubUrl: { type: 'string' },
            demoUrl: { type: 'string' },
            startDate: { type: 'string', format: 'date' },
            endDate: { type: 'string', format: 'date' },
            isCurrent: { type: 'boolean', default: false },
            status: { 
              type: 'string', 
              enum: ['Completed', 'In Progress', 'Planning', 'On Hold'],
              default: 'Completed'
            },
            difficulty: { 
              type: 'string', 
              enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
              default: 'Intermediate'
            }
          }
        },
        Contact: {
          type: 'object',
          properties: {
            name: { type: 'string', example: 'John Doe' },
            email: { type: 'string', format: 'email', example: 'john@example.com' },
            subject: { type: 'string', example: 'Project Inquiry' },
            message: { type: 'string' },
            phone: { type: 'string' },
            company: { type: 'string' },
            website: { type: 'string' },
            budget: { 
              type: 'string', 
              enum: ['Under $1k', '$1k - $5k', '$5k - $10k', '$10k - $25k', '$25k+', 'Not specified'],
              default: 'Not specified'
            },
            timeline: { 
              type: 'string', 
              enum: ['Immediate', '1-2 weeks', '1-3 months', '3-6 months', '6+ months', 'Not specified'],
              default: 'Not specified'
            }
          },
          required: ['name', 'email', 'subject', 'message']
        },
        User: {
          type: 'object',
          properties: {
            name: { type: 'string', example: 'TMMETHODE Admin' },
            email: { type: 'string', format: 'email', example: 'admin@tmmethode.com' },
            role: { type: 'string', enum: ['admin', 'user'], default: 'user' },
            isActive: { type: 'boolean', default: true }
          }
        },
        Error: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: false },
            message: { type: 'string', example: 'Error description' }
          }
        },
        Success: {
          type: 'object',
          properties: {
            success: { type: 'boolean', example: true },
            message: { type: 'string', example: 'Operation completed successfully' },
            data: { type: 'object' },
            count: { type: 'number', example: 10 }
          }
        }
      }
    },
    tags: [
      {
        name: 'Authentication',
        description: 'User authentication and authorization endpoints'
      },
      {
        name: 'Profile',
        description: 'Personal information and profile management'
      },
      {
        name: 'Skills',
        description: 'Technical skills and expertise management'
      },
      {
        name: 'Experience',
        description: 'Work experience and employment history'
      },
      {
        name: 'Education',
        description: 'Educational background and certifications'
      },
      {
        name: 'Projects',
        description: 'Portfolio projects and achievements'
      },
      {
        name: 'Contact',
        description: 'Contact form submissions and management'
      },
      {
        name: 'Health',
        description: 'API health and status endpoints'
      }
    ]
  },
  apis: [
    './routes/*.js',
    './controllers/*.js',
    './server.js'
  ]
};

const specs = swaggerJsdoc(options);

module.exports = specs; 