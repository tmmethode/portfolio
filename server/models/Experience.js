const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Job title is required'],
    trim: true
  },
  company: {
    type: String,
    required: [true, 'Company name is required'],
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
    required: [true, 'Job description is required'],
    trim: true
  },
  responsibilities: [{
    type: String,
    trim: true
  }],
  achievements: [{
    type: String,
    trim: true
  }],
  technologies: [{
    type: String,
    trim: true
  }],
  companyLogo: {
    type: String,
    trim: true
  },
  companyWebsite: {
    type: String,
    trim: true
  },
  employmentType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'],
    default: 'Full-time'
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
experienceSchema.index({ isActive: 1, order: 1 });
experienceSchema.index({ startDate: -1 });

module.exports = mongoose.model('Experience', experienceSchema); 