const express = require('express');
const { adminAuth } = require('../middleware/auth');
const Experience = require('../models/Experience');

const router = express.Router();

// @desc    Get all experiences
// @route   GET /api/experience
// @access  Public
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find({ isActive: true }).sort({ order: 1, startDate: -1 });
    
    res.status(200).json({
      success: true,
      count: experiences.length,
      data: experiences
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Create experience
// @route   POST /api/experience
// @access  Private
router.post('/', adminAuth, async (req, res) => {
  try {
    const experience = await Experience.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Experience created successfully',
      data: experience
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Update experience
// @route   PUT /api/experience/:id
// @access  Private
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Experience updated successfully',
      data: experience
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Delete experience
// @route   DELETE /api/experience/:id
// @access  Private
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.params.id);

    if (!experience) {
      return res.status(404).json({
        success: false,
        message: 'Experience not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Experience deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router; 