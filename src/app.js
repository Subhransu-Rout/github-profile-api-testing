const express = require('express');
const app = express();
const profileRoutes = require('./routes/profile.routes');
const defaultRoute = require('./routes/default.route');

app.use(express.json());
app.use('/api', profileRoutes);
app.use(defaultRoute);


module.exports = app