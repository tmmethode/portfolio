# TMMETHODE Portfolio Backend API

A robust Express.js backend API for the TMMETHODE portfolio website, featuring MongoDB database integration, JWT authentication, and comprehensive CRUD operations for CV data management.

## 🚀 Features

- **🔐 JWT Authentication** - Secure user authentication and authorization
- **📊 MongoDB Integration** - NoSQL database with Mongoose ODM
- **🛡️ Security** - Helmet, CORS, rate limiting, and input validation
- **📝 CRUD Operations** - Full Create, Read, Update, Delete for all CV sections
- **👤 Admin Panel** - Protected routes for content management
- **📧 Contact Management** - Contact form submissions with spam detection
- **🔍 Search & Filter** - Advanced querying and filtering capabilities
- **📈 Pagination** - Efficient data pagination for large datasets

## 🛠️ Technologies

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Token authentication
- **bcryptjs** - Password hashing
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing
- **Morgan** - HTTP request logger
- **Rate Limiting** - API request throttling

## 📋 Prerequisites

- Node.js (version 16 or higher)
- MongoDB Atlas account (or local MongoDB)
- npm or yarn

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# MongoDB Configuration
MONGODB_URI=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/tmmethode_portfolio?retryWrites=true&w=majority

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here_make_it_long_and_secure
JWT_EXPIRE=30d

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX=100

# CORS Configuration
FRONTEND_URL=http://localhost:3000

# Admin Credentials (for initial setup - change in production)
ADMIN_EMAIL=admin@tmmethode.com
ADMIN_PASSWORD=secure_admin_password_123
```

### 3. Setup Database

```bash
# Initialize database with sample data
node setup.js
```

### 4. Start Development Server

```bash
npm run dev
```

The API will be available at `http://localhost:5000`

## 📁 Project Structure

```
backend/
├── models/              # MongoDB schemas
│   ├── User.js         # User authentication
│   ├── Profile.js      # Personal information
│   ├── Skill.js        # Technical skills
│   ├── Experience.js   # Work experience
│   ├── Education.js    # Educational background
│   ├── Project.js      # Portfolio projects
│   └── Contact.js      # Contact submissions
├── controllers/         # Business logic
│   ├── authController.js
│   └── profileController.js
├── routes/             # API endpoints
│   ├── auth.js
│   ├── profile.js
│   ├── skills.js
│   ├── experience.js
│   ├── education.js
│   ├── projects.js
│   └── contact.js
├── middleware/          # Custom middleware
│   ├── auth.js         # JWT authentication
│   └── errorHandler.js # Error handling
├── server.js           # Main application file
├── setup.js            # Database initialization
└── package.json
```

## 🔗 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user (Protected)
- `PUT /api/auth/profile` - Update user profile (Protected)
- `PUT /api/auth/password` - Change password (Protected)

### Profile
- `GET /api/profile` - Get profile (Public)
- `POST /api/profile` - Create profile (Admin)
- `PUT /api/profile/:id` - Update profile (Admin)
- `DELETE /api/profile/:id` - Delete profile (Admin)

### Skills
- `GET /api/skills` - Get all skills (Public)
- `GET /api/skills/category/:category` - Get skills by category (Public)
- `POST /api/skills` - Create skill (Admin)
- `PUT /api/skills/:id` - Update skill (Admin)
- `DELETE /api/skills/:id` - Delete skill (Admin)

### Experience
- `GET /api/experience` - Get all experience (Public)
- `POST /api/experience` - Create experience (Admin)
- `PUT /api/experience/:id` - Update experience (Admin)
- `DELETE /api/experience/:id` - Delete experience (Admin)

### Education
- `GET /api/education` - Get all education (Public)
- `POST /api/education` - Create education (Admin)
- `PUT /api/education/:id` - Update education (Admin)
- `DELETE /api/education/:id` - Delete education (Admin)

### Projects
- `GET /api/projects` - Get all projects (Public)
- `GET /api/projects/:id` - Get project by ID (Public)
- `POST /api/projects` - Create project (Admin)
- `PUT /api/projects/:id` - Update project (Admin)
- `DELETE /api/projects/:id` - Delete project (Admin)

### Contact
- `POST /api/contact` - Submit contact form (Public)
- `GET /api/contact` - Get all submissions (Admin)
- `GET /api/contact/:id` - Get submission by ID (Admin)
- `PUT /api/contact/:id` - Update submission status (Admin)
- `DELETE /api/contact/:id` - Delete submission (Admin)

### Health Check
- `GET /api/health` - API health status

## 🔐 Authentication

### JWT Token Format
```
Authorization: Bearer <token>
```

### Admin Access
Admin credentials are stored in the database and can be configured via environment variables:
- `ADMIN_EMAIL`: Admin email address
- `ADMIN_PASSWORD`: Admin password (change in production)

## 📊 Database Models

### User
- Authentication and authorization
- Role-based access control
- Password hashing with bcrypt

### Profile
- Personal information
- Social media links
- Contact details
- Professional summary

### Skill
- Technical skills categorization
- Proficiency levels (0-100)
- Icons and colors for UI

### Experience
- Work history timeline
- Company information
- Responsibilities and achievements
- Technologies used

### Education
- Academic background
- Certifications and training
- GPA and achievements
- Course details

### Project
- Portfolio projects
- Technologies and features
- Live and demo links
- Project status and difficulty

### Contact
- Contact form submissions
- Spam detection
- Status tracking
- IP and user agent logging

## 🛡️ Security Features

- **JWT Authentication** - Secure token-based authentication
- **Password Hashing** - bcrypt for secure password storage
- **Rate Limiting** - Prevent API abuse
- **CORS Protection** - Cross-origin request handling
- **Helmet Security** - HTTP headers security
- **Input Validation** - Mongoose schema validation
- **Error Handling** - Comprehensive error management

## 🚀 Deployment

### Environment Variables
Ensure all required environment variables are set in production:

```env
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_secure_jwt_secret
FRONTEND_URL=https://your-frontend-domain.com
```

### Production Commands
```bash
# Install dependencies
npm install --production

# Start production server
npm start

# Or use PM2 for process management
pm2 start server.js --name "tmmethode-portfolio-api"
```

## 📝 API Response Format

### Success Response
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "data": { ... },
  "count": 10
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "stack": "Error stack trace (development only)"
}
```

## 🔧 Development

### Scripts
```bash
npm run dev      # Start development server with nodemon
npm start        # Start production server
npm test         # Run tests (to be implemented)
```

### Database Setup
```bash
# Initialize with sample data
node setup.js

# Or run setup programmatically
const { setupDatabase } = require('./setup');
setupDatabase();
```

## 📞 Support

For API support or questions:
- **Email**: info@tmmethode.com
- **GitHub**: [@tmmethode](https://github.com/tmmethode)
- **LinkedIn**: [TMMETHODE](https://www.linkedin.com/in/tmmethode)

## 📄 License

This project is licensed under the ISC License.

---

**TMMETHODE** - Cloud Engineer & Systems Administrator  
*Building secure and scalable solutions for the future* ☁️🚀 