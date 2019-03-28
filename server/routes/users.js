const express = require('express');
const Router =  express.Router();
const UserContoller = require('../controllers/users')
const User = require("../models/users")

Router.post("/auth", UserContoller.auth)

Router.post("/register", UserContoller.register )

module.exports = Router