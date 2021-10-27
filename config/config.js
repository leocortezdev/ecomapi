const dotenv = require("dotenv");

dotenv.config();

const CONFIG = {
    PORT: process.env.PORT,
    MONGODB: process.env.MONGODB
}

module.exports = CONFIG;
