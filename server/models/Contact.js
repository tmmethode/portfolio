const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true
  },
  subject: {
    type: String,
    required: [true, 'Subject is required'],
    trim: true
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  website: {
    type: String,
    trim: true
  },
  budget: {
    type: String,
    enum: ['Under $1k', '$1k - $5k', '$5k - $10k', '$10k - $25k', '$25k+', 'Not specified'],
    default: 'Not specified'
  },
  timeline: {
    type: String,
    enum: ['Immediate', '1-2 weeks', '1-3 months', '3-6 months', '6+ months', 'Not specified'],
    default: 'Not specified'
  },
  status: {
    type: String,
    enum: ['New', 'Read', 'Replied', 'Closed'],
    default: 'New'
  },
  ipAddress: {
    type: String,
    trim: true
  },
  userAgent: {
    type: String,
    trim: true
  },
  isSpam: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index for better query performance
contactSchema.index({ status: 1, createdAt: -1 });
contactSchema.index({ email: 1 });
contactSchema.index({ isSpam: 1 });

module.exports = mongoose.model('Contact', contactSchema); 