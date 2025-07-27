const mongoose = require('mongoose');

const footerLinkSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Footer section title is required'],
    trim: true
  },
  links: [{
    name: {
      type: String,
      required: [true, 'Link name is required'],
      trim: true
    },
    href: {
      type: String,
      required: [true, 'Link href is required'],
      trim: true
    },
    isExternal: {
      type: Boolean,
      default: false
    }
  }],
  order: {
    type: Number,
    default: 0
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Index for better query performance
footerLinkSchema.index({ order: 1, isActive: 1 });

module.exports = mongoose.model('FooterLinks', footerLinkSchema); 