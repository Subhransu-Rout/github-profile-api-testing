const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Profile = sequelize.define('Profile', {
    username: {
        type: DataTypes.STRING,
        unique: true
    },
    name: DataTypes.STRING,
    followers: DataTypes.INTEGER,
    following: DataTypes.INTEGER,
    publicRepos: DataTypes.INTEGER,
    profileLevel: DataTypes.STRING,
    accountAgeYears: DataTypes.FLOAT
});

module.exports = Profile