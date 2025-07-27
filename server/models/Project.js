const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Project category is required'],
    enum: ['Cloud Infrastructure', 'DevOps', 'Software Development', 'System Administration', 'Cybersecurity', 'Data Analysis', 'Data Science'],
    trim: true
  },
  image: {
    type: String,
    trim: true
  },
  technologies: [{
    type: String,
    trim: true
  }],
  features: [{
    type: String,
    trim: true
  }],
  liveUrl: {
    type: String,
    trim: true
  },
  githubUrl: {
    type: String,
    trim: true
  },
  demoUrl: {
    type: String,
    trim: true
  },
  startDate: {
    type: Date
  },
  endDate: {
    type: Date
  },
  isCurrent: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['Completed', 'In Progress', 'Planning', 'On Hold'],
    default: 'Completed'
  },
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
    default: 'Intermediate'
  },
  highlights: [{
    type: String,
    trim: true
  }],
  challenges: [{
    type: String,
    trim: true
  }],
  solutions: [{
    type: String,
    trim: true
  }],
  isActive: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Index for better query performance
projectSchema.index({ category: 1, isActive: 1 });
projectSchema.index({ order: 1 });
projectSchema.index({ status: 1 });

module.exports = mongoose.model('Project', projectSchema); 