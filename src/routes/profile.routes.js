const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profile.controller');
const { route } = require('../app');

router.get('/',(req, res)=>{
    res.status(200).json({
        message: "API is live"
    })
})

router.post('/profiles', profileController.analyzeAndStoreProfile);

router.get('/profiles', profileController.getAllProfiles);

router.get('/profiles/:username', profileController.getSingleProfile);

module.exports = router;