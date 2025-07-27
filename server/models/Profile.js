const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  subtitle: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    required: [true, 'Location is required'],
    trim: true
  },
  about: {
    type: String,
    required: [true, 'About section is required'],
    trim: true
  },
  summary: {
    type: String,
    required: [true, 'Professional summary is required'],
    trim: true
  },
  avatar: {
    type: String,
    trim: true
  },
  socialLinks: {
    linkedin: {
      type: String,
      trim: true
    },
    github: {
      type: String,
      trim: true
    },
    twitter: {
      type: String,
      trim: true
    },
    facebook: {
      type: String,
      trim: true
    },
    discord: {
      type: String,
      trim: true
    }
  },
  availability: {
    type: String,
    enum: ['Available', 'Not Available', 'Part-time'],
    default: 'Available'
  },
  resume: {
    type: String,
    trim: true
  },
  website: {
    type: String,
    trim: true
  },
  whatIDo: {
    type: String,
    trim: true
  },
  myApproach: {
    type: String,
    trim: true
  },
  keyStrengths: {
    type: [String],
    default: []
  },
  experience: {
    type: String,
    trim: true
  },
  certifications: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Index for better query performance
profileSchema.index({ email: 1 });

module.exports = mongoose.model('Profile', profileSchema); 