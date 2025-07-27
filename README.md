# TMMETHODE Portfolio

A modern, responsive portfolio website for a Cloud Engineer & Systems Administrator, built with React and Express.js.

## 🏗️ Project Structure

```
tmmethode2/
├── client/          # Frontend (React)
│   ├── src/         # React source code
│   ├── public/      # Static assets
│   └── package.json # Frontend dependencies
├── server/          # Backend (Express.js)
│   ├── controllers/ # API controllers
│   ├── models/      # MongoDB models
│   ├── routes/      # API routes
│   ├── middleware/  # Express middleware
│   └── package.json # Backend dependencies
└── package.json     # Root package.json (manages both)
```

## 🚀 Quick Start

### Prerequisites
- Node.js >= 16.0.0
- MongoDB (local or cloud)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd tmmethode2
   ```

2. **Install all dependencies**
   ```bash
   npm run install:all
   ```

3. **Set up environment variables**
   ```bash
   cd server
   cp .env.example .env
   # Edit .env with your MongoDB URI and other settings
   ```

4. **Set up the database**
   ```bash
   npm run setup
   ```

5. **Create admin user (optional)**
   ```bash
   cd server
   npm run create-admin <email> <password>
   # Or use environment variables:
   # ADMIN_EMAIL=your-email@example.com ADMIN_PASSWORD=your-secure-password npm run create-admin
   ```

6. **Start development servers**
   ```bash
   npm run dev
   ```

This will start both the client (React) and server (Express) in development mode.

## 📁 Directory Structure

### Client (Frontend)
- **React 18** with modern hooks
- **Framer Motion** for animations
- **Tailwind CSS** for styling
- **React Router** for navigation
- **React Icons** for icons

### Server (Backend)
- **Express.js** REST API
- **MongoDB** with Mongoose ODM
- **JWT** authentication
- **Swagger** API documentation
- **Rate limiting** and security middleware

## 🛠️ Available Scripts

### Root Level
- `npm run dev` - Start both client and server in development mode
- `npm run dev:client` - Start only the React client
- `npm run dev:server` - Start only the Express server
- `npm run build` - Build the React app for production
- `npm run setup` - Set up the database with sample data

### Client
- `cd client && npm start` - Start React development server
- `cd client && npm run build` - Build for production
- `cd client && npm test` - Run tests

### Server
- `cd server && npm run dev` - Start server with nodemon
- `cd server && npm start` - Start server in production mode
- `cd server && npm run setup` - Set up database with sample data
- `cd server && npm run create-admin` - Create or update admin user

## 🌐 API Endpoints

### Public Endpoints
- `GET /api/health` - Health check
- `GET /api/profile` - Get profile data
- `GET /api/skills` - Get skills list
- `GET /api/experience` - Get experience list
- `GET /api/education` - Get education list
- `GET /api/projects` - Get projects list
- `GET /api/navigation` - Get navigation data
- `GET /api/footer-links` - Get footer links

### Admin Endpoints (Protected)
- `POST /api/auth/login` - Admin login
- `PUT /api/profile` - Update profile
- `POST /api/skills` - Create skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill
- Similar endpoints for experience, education, and projects

## 🔐 Admin Panel

Access the admin panel at `/admin` to manage:
- Profile information
- Skills and expertise
- Work experience
- Education background
- Portfolio projects
- Social media links

**Admin Access:**
- Access the admin panel at `/admin`
- Use credentials stored in the database
- Contact the administrator for access credentials

## 🎨 Features

### Frontend
- ✅ Responsive design (mobile-first)
- ✅ Dark/Light theme toggle
- ✅ Smooth animations with Framer Motion
- ✅ Dynamic content from database
- ✅ Admin panel for content management
- ✅ SEO optimized
- ✅ Performance optimized

### Backend
- ✅ RESTful API design
- ✅ MongoDB integration
- ✅ JWT authentication
- ✅ Rate limiting
- ✅ CORS enabled
- ✅ Error handling
- ✅ API documentation with Swagger
- ✅ Security middleware

## 🗄️ Database Schema

### Profile
- Personal information (name, title, email, location)
- About section
- Key strengths (array)
- Social media links
- Professional summary

### Skills
- Name, category, proficiency level
- Description and icon
- Order for display

### Experience
- Job title, company, location
- Start/end dates
- Description and achievements
- Technologies used

### Education
- Degree, institution, location
- Start/end dates
- GPA and achievements
- Courses taken

### Projects
- Title, description, category
- Technologies and features
- Live/GitHub URLs
- Status and difficulty

## 🚀 Deployment

### Frontend (Client)
```bash
cd client
npm run build
# Deploy the build folder to your hosting service
```

### Backend (Server)
```bash
cd server
npm start
# Deploy to your server or cloud platform
```

## 📝 Environment Variables

Create a `.env` file in the server directory:

```env
NODE_ENV=development
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
CORS_ORIGIN=http://localhost:3000
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**TMMETHODE** - Cloud Engineer & Systems Administrator

---

Built with ❤️ using React, Express.js, and MongoDB 