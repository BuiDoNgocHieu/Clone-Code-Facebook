const express = require('express');

const AuthAPI = require('../API/auth.api')

const routers = express.Router();

routers.use('/auth', AuthAPI)

module.exports = routers