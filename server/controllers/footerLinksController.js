const FooterLinks = require('../models/FooterLinks');

// Get all footer links
const getFooterLinks = async (req, res) => {
  try {
    const footerLinks = await FooterLinks.find({ isActive: true }).sort({ order: 1 });
    res.json(footerLinks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching footer links', error: error.message });
  }
};

// Get single footer link section
const getFooterLinksById = async (req, res) => {
  try {
    const footerLinks = await FooterLinks.findById(req.params.id);
    if (!footerLinks) {
      return res.status(404).json({ message: 'Footer links section not found' });
    }
    res.json(footerLinks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching footer links section', error: error.message });
  }
};

// Create footer links section
const createFooterLinks = async (req, res) => {
  try {
    const footerLinks = new FooterLinks(req.body);
    await footerLinks.save();
    res.status(201).json(footerLinks);
  } catch (error) {
    res.status(400).json({ message: 'Error creating footer links section', error: error.message });
  }
};

// Update footer links section
const updateFooterLinks = async (req, res) => {
  try {
    const footerLinks = await FooterLinks.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!footerLinks) {
      return res.status(404).json({ message: 'Footer links section not found' });
    }
    res.json(footerLinks);
  } catch (error) {
    res.status(400).json({ message: 'Error updating footer links section', error: error.message });
  }
};

// Delete footer links section
const deleteFooterLinks = async (req, res) => {
  try {
    const footerLinks = await FooterLinks.findByIdAndDelete(req.params.id);
    if (!footerLinks) {
      return res.status(404).json({ message: 'Footer links section not found' });
    }
    res.json({ message: 'Footer links section deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting footer links section', error: error.message });
  }
};

module.exports = {
  getFooterLinks,
  getFooterLinksById,
  createFooterLinks,
  updateFooterLinks,
  deleteFooterLinks
}; 