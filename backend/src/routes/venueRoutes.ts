import express from 'express';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Venue:
 *       type: object
 *       required:
 *         - name
 *         - address
 *         - city
 *         - state
 *         - country
 *         - zipCode
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated ID of the venue
 *         name:
 *           type: string
 *           description: Venue name
 *         address:
 *           type: string
 *           description: Street address
 *         city:
 *           type: string
 *           description: City
 *         state:
 *           type: string
 *           description: State/Province
 *         country:
 *           type: string
 *           description: Country
 *         zipCode:
 *           type: string
 *           description: Postal/ZIP code
 *         capacity:
 *           type: integer
 *           description: Venue capacity
 *         website:
 *           type: string
 *           description: Venue website URL
 *         techSpecs:
 *           type: string
 *           description: Technical specifications
 *         notes:
 *           type: string
 *           description: Additional notes
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Creation timestamp
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Last update timestamp
 */

/**
 * @swagger
 * /api/venues:
 *   get:
 *     summary: Get all venues
 *     tags: [Venues]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of venues
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Venue'
 */
router.get('/', protect, (req, res) => {
  res.json({ message: 'Get all venues' });
});

/**
 * @swagger
 * /api/venues/{id}:
 *   get:
 *     summary: Get venue by ID
 *     tags: [Venues]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Venue ID
 *     responses:
 *       200:
 *         description: Venue details
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Venue'
 *       404:
 *         description: Venue not found
 */
router.get('/:id', protect, (req, res) => {
  res.json({ message: `Get venue with ID ${req.params.id}` });
});

/**
 * @swagger
 * /api/venues:
 *   post:
 *     summary: Create a new venue
 *     tags: [Venues]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venue'
 *     responses:
 *       201:
 *         description: Venue created successfully
 *       400:
 *         description: Invalid input data
 */
router.post('/', protect, (req, res) => {
  res.status(201).json({ message: 'Create a new venue', data: req.body });
});

/**
 * @swagger
 * /api/venues/{id}:
 *   put:
 *     summary: Update a venue
 *     tags: [Venues]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Venue ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Venue'
 *     responses:
 *       200:
 *         description: Venue updated successfully
 *       404:
 *         description: Venue not found
 */
router.put('/:id', protect, (req, res) => {
  res.json({ message: `Update venue with ID ${req.params.id}`, data: req.body });
});

/**
 * @swagger
 * /api/venues/{id}:
 *   delete:
 *     summary: Delete a venue
 *     tags: [Venues]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Venue ID
 *     responses:
 *       200:
 *         description: Venue deleted successfully
 *       404:
 *         description: Venue not found
 */
router.delete('/:id', protect, (req, res) => {
  res.json({ message: `Delete venue with ID ${req.params.id}` });
});

export default router;
