var express = require('express');
var router = express.Router();

var db = require('../queries');

/**
 * @swagger
 * definitions:
 *   Redis Keys:
 *     properties:
 *       name:
 *         type: string
 *       breed:
 *         type: string
 *       age:
 *         type: integer
 *       sex:
 *         type: string
 */

/**
 * @swagger
 * /api/key:
 *   get:
 *     tags:
 *       - Redis Keys
 *     description: Returns all key
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: An array of key
 *         schema:
 *           $ref: '#/definitions/Key'
 */
router.get('/api/key', db.checkifKeyExist);

/**
 * @swagger
 * /api/checkKey:
 *   get:
 *     tags:
 *       - Redis Keys
 *     description: Returns a single key
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Key id
 *         in: path
 
 *         type: integer
 *     responses:
 *       200:
 *         description: A single key
 *         schema:
 *           $ref: '#/definitions/Key'
 */
router.get('/api/key', db.checkifKeyExist);

/**
 * @swagger
 * /api/puppies:
 *   post:
 *     tags:
 *       - Redis Keys
 *     description: Creates a new key
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: key
 *         description: Key object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Key'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/api/key', db.checkifKeyExist);

/**
 * @swagger
 * /api/key/{id}:
 *   put:
 *     tags:
 *       - Redis Keys
 *     description: Updates a single key
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: Key's id
 *         in: path
 *         required: true
 *         type: integer
 *       - name: puppy
 *         description: Key object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Keys'
 *     responses:
 *       200:
 *         description: Successfully updated
 */
router.put('/api/key/:id', db.checkifKeyExist);

/**
 * @swagger
 * /api/key/{id}:
 *   delete:
 *     tags:
 *       - Redis Keys
 *     description: Deletes a single key
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: id
 *         description: key id
 *         in: path
 *         required: true
 *         type: integer
 *     responses:
 *       200:
 *         description: Successfully deleted
 */
router.delete('/api/key/:id', db.checkifKeyExist);


module.exports = router;
