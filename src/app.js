const express = require('express');
const app = express();
const profileRoutes = require('./routes/profile.routes');

app.use(express.json());
app.use('/api', profileRoutes);


module.exports = app