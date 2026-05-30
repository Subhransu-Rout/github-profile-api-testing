require('dotenv').config();
const app = require('./src/app');
const sequelize = require('./src/config/db');
const port = process.env.PORT || 3000;

async function startServer() {
  try {
    await sequelize.sync();

    console.log("Database Connected");

    app.listen(process.env.PORT || 3000, () => {
      console.log(
        `Server is running on port ${process.env.PORT || 3000}`
      );
    });
  } catch (error) {
    console.error("Startup failed:", error);
  }
}

startServer();