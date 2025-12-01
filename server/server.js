const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./config/swagger');
const path = require('path');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const skillsRoutes = require('./routes/skills');
const experienceRoutes = require('./routes/experience');
const educationRoutes = require('./routes/education');
const projectsRoutes = require('./routes/projects');
const contactRoutes = require('./routes/contact');
const navigationRoutes = require('./routes/navigation');
const footerLinksRoutes = require('./routes/footerLinks');

const errorHandler = require('./middleware/errorHandler');

const app = express();

const corsOptions = {
  origin: process.env.NODE_ENV === 'production'
    ? ['https://tmmethode.com', 'https://www.tmmethode.com', 'https://portfolio-1027061627518.us-central1.run.app', 'http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5000', 'http://127.0.0.1:5000']
    : ['http://localhost:3000', 'http://127.0.0.1:3000', 'http://localhost:5000', 'http://127.0.0.1:5000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX) || 100,
  message: {
    error: 'Too many requests from this IP, please try again later.'
  }
});
app.use('/api/', limiter);

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('/api/health', (req, res) => {
  // Check DB status: 0 = disconnected, 1 = connected, 2 = connecting
  const dbStatus = mongoose.connection.readyState;
  res.status(200).json({
    success: true,
    message: 'TMMETHODE Portfolio API is running',
    dbStatus: dbStatus === 1 ? 'Connected' : 'Connecting/Disconnected',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

// Instant health check for Cloud Run startup probe
app.get('/_instant_health', (req, res) => {
  res.status(200).send('OK');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: 'TMMETHODE Portfolio API Documentation',
  customfavIcon: '/favicon.ico',
  swaggerOptions: {
    persistAuthorization: true,
    displayRequestDuration: true,
    filter: true,
    deepLinking: true
  }
}));

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/experience', experienceRoutes);
app.use('/api/education', educationRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/navigation', navigationRoutes);
app.use('/api/footer-links', footerLinksRoutes);

app.use(errorHandler);

app.use('*', (req, res) => {
  if (process.env.NODE_ENV === 'production' && !req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  } else {
    res.status(404).json({
      success: false,
      message: 'Route not found'
    });
  }
});

// MongoDB connection with profiling and retry logic
const connectDB = async (retries = 5, delay = 5000) => {
  let lastError;
  for (let attempt = 1; attempt <= retries; attempt++) {
    const t0 = Date.now();
    try {
      // Removed bufferCommands: false to allow Mongoose to buffer requests until connection is ready
      const conn = await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000 // Fail fast if DB is unreachable
      });
      console.log(`MongoDB Connected (${conn.connection.host}) in ${Date.now() - t0} ms`);
      return;
    } catch (err) {
      lastError = err;
      console.error(`MongoDB connection attempt ${attempt} failed (${Date.now() - t0} ms): ${err.message}`);
      if (attempt < retries) await new Promise(res => setTimeout(res, delay));
    }
  }
  // We log the error but don't crash the server here, so the app stays alive for logs
  console.error('Final MongoDB connection failed:', lastError);
};

const PORT = process.env.PORT || 8080;

const startServer = async () => {
  const bootStart = Date.now();
  
  // 1. Trigger DB connection in BACKGROUND (Do NOT await this)
  // This allows the server to listen on the port immediately.
  // Mongoose will queue any DB requests until the connection is ready.
  connectDB().catch(err => console.error('Background DB connect failed:', err));

  try {
    console.log('🔍 Starting server boot...');
    
    // 2. Start listening IMMEDIATELY
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT} (total boot: ${Date.now() - bootStart} ms)`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV}`);
      console.log(`🔗 Health check: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error('❌ Server failed to start:', error);
    process.exit(1);
  }
};

startServer();

module.exports = app;
  
