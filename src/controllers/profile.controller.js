const { analyzeProfile } = require('../services/analysis.service');
const { getGithubProfile } = require('../services/github.service');
const profileModel = require('../models/profile.model');

async function analyzeAndStoreProfile(req, res) {
    try {
        const { username } = req.body;

        const existing = await profileModel.findOne({
            where: {username}
        });

        if(existing){
            return res.json(existing);
        }

        const githubUser = await getGithubProfile(username);
        
        const analyzedData = analyzeProfile(githubUser);

        const profile = await profileModel.create(analyzedData);

        return res.status(201).json(profile);

    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

async function getAllProfiles(req,res) {
    try {
        const profiles = await profileModel.findAll();

        return res.status(200).json(profiles);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

async function getSingleProfile(req,res) {
    try {
        const profile = await profileModel.findOne({
            where: {
                username: req.params.username
            }
        });

        if(!profile){
            return res.status(404).json({
                message: 'Profile not found'
            })
        }

        return res.status(200).json(profile);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
}

module.exports = { analyzeAndStoreProfile, getAllProfiles, getSingleProfile }