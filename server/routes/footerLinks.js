const express = require('express');
const router = express.Router();
const {
  getFooterLinks,
  getFooterLinksById,
  createFooterLinks,
  updateFooterLinks,
  deleteFooterLinks
} = require('../controllers/footerLinksController');
const { adminAuth } = require('../middleware/auth');

/**
 * @swagger
 * components:
 *   schemas:
 *     FooterLinks:
 *       type: object
 *       required:
 *         - title
 *         - links
 *       properties:
 *         title:
 *           type: string
 *           description: Footer section title
 *         links:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Link name
 *               href:
 *                 type: string
 *                 description: Link URL
 *               isExternal:
 *                 type: boolean
 *                 description: Whether the link is external
 *         order:
 *           type: number
 *           description: Display order
 *         isActive:
 *           type: boolean
 *           description: Whether the section is active
 */

/**
 * @swagger
 * /api/footer-links:
 *   get:
 *     summary: Get all footer links
 *     tags: [Footer Links]
 *     responses:
 *       200:
 *         description: List of footer link sections
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FooterLinks'
 */
router.get('/', getFooterLinks);

/**
 * @swagger
 * /api/footer-links/{id}:
 *   get:
 *     summary: Get footer links section by ID
 *     tags: [Footer Links]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Footer links section
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FooterLinks'
 *       404:
 *         description: Footer links section not found
 */
router.get('/:id', getFooterLinksById);

/**
 * @swagger
 * /api/footer-links:
 *   post:
 *     summary: Create footer links section
 *     tags: [Footer Links]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FooterLinks'
 *     responses:
 *       201:
 *         description: Footer links section created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FooterLinks'
 */
router.post('/', adminAuth, createFooterLinks);

/**
 * @swagger
 * /api/footer-links/{id}:
 *   put:
 *     summary: Update footer links section
 *     tags: [Footer Links]
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
 *             $ref: '#/components/schemas/FooterLinks'
 *     responses:
 *       200:
 *         description: Footer links section updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FooterLinks'
 *       404:
 *         description: Footer links section not found
 */
router.put('/:id', adminAuth, updateFooterLinks);

/**
 * @swagger
 * /api/footer-links/{id}:
 *   delete:
 *     summary: Delete footer links section
 *     tags: [Footer Links]
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
 *         description: Footer links section deleted
 *       404:
 *         description: Footer links section not found
 */
router.delete('/:id', adminAuth, deleteFooterLinks);

module.exports = router; 