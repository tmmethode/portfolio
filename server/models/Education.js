const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: [true, 'Degree is required'],
    trim: true
  },
  institution: {
    type: String,
    required: [true, 'Institution name is required'],
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date
  },
  isCurrent: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    trim: true
  },
  gpa: {
    type: Number,
    min: 0,
    max: 4.0
  },
  achievements: [{
    type: String,
    trim: true
  }],
  courses: [{
    type: String,
    trim: true
  }],
  institutionLogo: {
    type: String,
    trim: true
  },
  institutionWebsite: {
    type: String,
    trim: true
  },
  educationType: {
    type: String,
    enum: ['Bachelor', 'Master', 'PhD', 'Diploma', 'Certificate', 'High School'],
    default: 'Bachelor'
  },
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
educationSchema.index({ isActive: 1, order: 1 });
educationSchema.index({ startDate: -1 });

module.exports = mongoose.model('Education', educationSchema); 