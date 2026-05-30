const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller');
const { route } = require('../app');

router.post('/profiles', profileController.analyzeAndStoreProfile);

router.get('/profiles', profileController.getAllProfiles);

router.get('/profiles/:username', profileController.getSingleProfile);

module.exports = router;