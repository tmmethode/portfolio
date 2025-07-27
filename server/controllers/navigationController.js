const Navigation = require('../models/Navigation');

// Get all navigation items
const getNavigation = async (req, res) => {
  try {
    const navigation = await Navigation.find({ isActive: true }).sort({ order: 1 });
    res.json(navigation);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching navigation', error: error.message });
  }
};

// Get single navigation item
const getNavigationById = async (req, res) => {
  try {
    const navigation = await Navigation.findById(req.params.id);
    if (!navigation) {
      return res.status(404).json({ message: 'Navigation item not found' });
    }
    res.json(navigation);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching navigation item', error: error.message });
  }
};

// Create navigation item
const createNavigation = async (req, res) => {
  try {
    const navigation = new Navigation(req.body);
    await navigation.save();
    res.status(201).json(navigation);
  } catch (error) {
    res.status(400).json({ message: 'Error creating navigation item', error: error.message });
  }
};

// Update navigation item
const updateNavigation = async (req, res) => {
  try {
    const navigation = await Navigation.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!navigation) {
      return res.status(404).json({ message: 'Navigation item not found' });
    }
    res.json(navigation);
  } catch (error) {
    res.status(400).json({ message: 'Error updating navigation item', error: error.message });
  }
};

// Delete navigation item
const deleteNavigation = async (req, res) => {
  try {
    const navigation = await Navigation.findByIdAndDelete(req.params.id);
    if (!navigation) {
      return res.status(404).json({ message: 'Navigation item not found' });
    }
    res.json({ message: 'Navigation item deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting navigation item', error: error.message });
  }
};

module.exports = {
  getNavigation,
  getNavigationById,
  createNavigation,
  updateNavigation,
  deleteNavigation
}; 