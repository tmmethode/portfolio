const express = require('express');
const { adminAuth } = require('../middleware/auth');
const Contact = require('../models/Contact');

const router = express.Router();

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Submit contact form
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Contact'
 *     responses:
 *       201:
 *         description: Contact form submitted successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Success'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/Contact'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', async (req, res) => {
  try {
    const contactData = {
      ...req.body,
      ipAddress: req.ip,
      userAgent: req.get('User-Agent')
    };

    const contact = await Contact.create(contactData);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully! We will get back to you soon.',
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Get contact by ID (admin only)
// @route   GET /api/contact/:id
// @access  Private
router.get('/:id', adminAuth, async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    
    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      success: true,
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Get all contact submissions (admin only)
// @route   GET /api/contact
// @access  Private
router.get('/', adminAuth, async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    let query = {};
    
    if (status) {
      query.status = status;
    }
    
    const skip = (page - 1) * limit;
    
    const contacts = await Contact.find(query)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));
    
    const total = await Contact.countDocuments(query);
    
    res.status(200).json({
      success: true,
      count: contacts.length,
      total,
      pages: Math.ceil(total / limit),
      currentPage: parseInt(page),
      data: contacts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Update contact status (admin only)
// @route   PUT /api/contact/:id
// @access  Private
router.put('/:id', adminAuth, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Contact status updated successfully',
      data: contact
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

// @desc    Delete contact submission (admin only)
// @route   DELETE /api/contact/:id
// @access  Private
router.delete('/:id', adminAuth, async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: 'Contact submission not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Contact submission deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});

module.exports = router; 