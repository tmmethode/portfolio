const mongoose = require('mongoose');

const navigationSchema = new mongoose.Schema({
  label: {
    type: String,
    required: [true, 'Navigation label is required'],
    trim: true
  },
  href: {
    type: String,
    required: [true, 'Navigation href is required'],
    trim: true
  },
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isExternal: {
    type: Boolean,
    default: false
  },
  icon: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

// Index for better query performance
navigationSchema.index({ order: 1, isActive: 1 });

module.exports = mongoose.model('Navigation', navigationSchema); 