const express = require('express');
const router = express.Router();
const {
  getNavigation,
  getNavigationById,
  createNavigation,
  updateNavigation,
  deleteNavigation
} = require('../controllers/navigationController');
const { adminAuth } = require('../middleware/auth');

/**
 * @swagger
 * components:
 *   schemas:
 *     Navigation:
 *       type: object
 *       required:
 *         - label
 *         - href
 *       properties:
 *         label:
 *           type: string
 *           description: Navigation label
 *         href:
 *           type: string
 *           description: Navigation link
 *         order:
 *           type: number
 *           description: Display order
 *         isActive:
 *           type: boolean
 *           description: Whether the navigation item is active
 *         isExternal:
 *           type: boolean
 *           description: Whether the link is external
 *         icon:
 *           type: string
 *           description: Icon name
 */

/**
 * @swagger
 * /api/navigation:
 *   get:
 *     summary: Get all navigation items
 *     tags: [Navigation]
 *     responses:
 *       200:
 *         description: List of navigation items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Navigation'
 */
router.get('/', getNavigation);

/**
 * @swagger
 * /api/navigation/{id}:
 *   get:
 *     summary: Get navigation item by ID
 *     tags: [Navigation]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Navigation item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Navigation'
 *       404:
 *         description: Navigation item not found
 */
router.get('/:id', getNavigationById);

/**
 * @swagger
 * /api/navigation:
 *   post:
 *     summary: Create navigation item
 *     tags: [Navigation]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Navigation'
 *     responses:
 *       201:
 *         description: Navigation item created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Navigation'
 */
router.post('/', adminAuth, createNavigation);

/**
 * @swagger
 * /api/navigation/{id}:
 *   put:
 *     summary: Update navigation item
 *     tags: [Navigation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Navigation'
 *     responses:
 *       200:
 *         description: Navigation item updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Navigation'
 *       404:
 *         description: Navigation item not found
 */
router.put('/:id', adminAuth, updateNavigation);

/**
 * @swagger
 * /api/navigation/{id}:
 *   delete:
 *     summary: Delete navigation item
 *     tags: [Navigation]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Navigation item deleted
 *       404:
 *         description: Navigation item not found
 */
router.delete('/:id', adminAuth, deleteNavigation);

module.exports = router; 