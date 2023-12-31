"use strict";
const express = require('express');
const dotenv = require('dotenv');
dotenv.config({
    path: './config/config.env'
});
const app = express();
const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;
app.listen(PORT, console.log(`Server running on port: ${PORT} (${NODE_ENV})`));
