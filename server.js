require('dotenv').config();
const app = require('./src/app');
const sequelize = require('./src/config/db');
const port = process.env.PORT || 3000;

sequelize
.sync()
.then(()=>{
    console.log('Database Connected');

    app.listen( port, ()=>{
        console.log(`Server is running on port ${port}`);
    });
})
.catch(console.error);