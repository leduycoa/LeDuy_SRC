const express = require('express');
const router = express.Router();

const coursecontroller = require('../app/controllers/courseController');

//
router.get('/create', coursecontroller.create);
router.post('/create', coursecontroller.store);
router.get('/:id/edit', coursecontroller.edit);
router.post('/handle-form-actions', coursecontroller.handleFormActions);
router.put('/:id', coursecontroller.update);
router.patch('/:id/restore', coursecontroller.restore);
router.delete('/:id', coursecontroller.destroy);
router.delete('/:id/force', coursecontroller.forcedestroy);
router.get('/:slug', coursecontroller.show);

module.exports = router;
