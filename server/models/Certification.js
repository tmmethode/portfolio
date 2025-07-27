const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Certification name is required'],
    trim: true
  },
  issuer: {
    type: String,
    required: [true, 'Issuer is required'],
    trim: true
  },
  date: {
    type: String,
    required: [true, 'Date is required'],
    trim: true
  },
  credentialId: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  icon: {
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
certificationSchema.index({ name: 1 });

module.exports = mongoose.model('Certification', certificationSchema); 