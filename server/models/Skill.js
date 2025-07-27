const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Skill name is required'],
    trim: true
  },
  category: {
    type: String,
    required: [true, 'Skill category is required'],
    enum: ['Systems Administration', 'DevOps & Cloud', 'Programming & Development', 'Frontend & Database', 'Networking', 'Cybersecurity', 'CRM & ERP Systems'],
    trim: true
  },
  proficiency: {
    type: Number,
    required: [true, 'Proficiency level is required'],
    min: 0,
    max: 100,
    default: 50
  },
  icon: {
    type: String,
    trim: true
  },
  color: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
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
skillSchema.index({ category: 1, isActive: 1 });
skillSchema.index({ order: 1 });

module.exports = mongoose.model('Skill', skillSchema); 