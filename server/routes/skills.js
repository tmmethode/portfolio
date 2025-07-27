const express = require('express');
const { adminAuth } = require('../middleware/auth');
const {
  getSkills,
  getSkillsByCategory,
  createSkill,
  updateSkill,
  deleteSkill
} = require('../controllers/skillsController');

const router = express.Router();

/**
 * @swagger
 * /api/skills/category/{category}:
 *   get:
 *     summary: Get skills by category
 *     tags: [Skills]
 *     parameters:
 *       - in: path
 *         name: category
 *         required: true
 *         schema:
 *           type: string
 *           enum: [Systems Administration, DevOps & Cloud, Programming & Development, Frontend & Database, Networking, Cybersecurity, CRM & ERP Systems]
 *         description: Skill category
 *     responses:
 *       200:
 *         description: Skills retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Success'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Skill'
 */
router.get('/category/:category', getSkillsByCategory);

/**
 * @swagger
 * /api/skills:
 *   get:
 *     summary: Get all skills
 *     tags: [Skills]
 *     responses:
 *       200:
 *         description: Skills retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Success'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       type: array
 *                       items:
 *                         $ref: '#/components/schemas/Skill'
 */
router.get('/', getSkills);

/**
 * @swagger
 * /api/skills:
 *   post:
 *     summary: Create new skill (Admin only)
 *     tags: [Skills]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Skill'
 *     responses:
 *       201:
 *         description: Skill created successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Success'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/Skill'
 *       400:
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post('/', adminAuth, createSkill);

/**
 * @swagger
 * /api/skills/{id}:
 *   put:
 *     summary: Update skill (Admin only)
 *     tags: [Skills]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Skill ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Skill'
 *     responses:
 *       200:
 *         description: Skill updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               allOf:
 *                 - $ref: '#/components/schemas/Success'
 *                 - type: object
 *                   properties:
 *                     data:
 *                       $ref: '#/components/schemas/Skill'
 *       404:
 *         description: Skill not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put('/:id', adminAuth, updateSkill);

/**
 * @swagger
 * /api/skills/{id}:
 *   delete:
 *     summary: Delete skill (Admin only)
 *     tags: [Skills]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Skill ID
 *     responses:
 *       200:
 *         description: Skill deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Success'
 *       404:
 *         description: Skill not found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete('/:id', adminAuth, deleteSkill);

module.exports = router; 