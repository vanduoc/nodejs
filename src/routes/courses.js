const express = require('express');
const courseController = require('../app/controllers/CourseController');
const router = express.Router();

router.get('/create', courseController.create);
router.post('/store', courseController.store);
router.get('/:id/edit', courseController.edit);
router.post('/handle-action-form', courseController.handleActionForm);
router.put('/:id', courseController.update);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id/force', courseController.forceDestroy);
router.delete('/:id', courseController.destroy);
router.get('/:slug', courseController.show);
router.get('/', courseController.index);

module.exports = router;
