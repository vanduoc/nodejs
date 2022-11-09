const express = require('express');
const meController = require('../app/controllers/MeController');
const router = express.Router();

router.get('/store/courses', meController.storedCourses);
router.get('/trash/courses', meController.trashCourses);

module.exports = router;
