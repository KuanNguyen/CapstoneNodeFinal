//tạo ra các API trong các đối tượng Route

//GET POST PUT DELETE
const express = require('express');
const authRoute = express.Router();
const {signUp, signIn } = require('../controllers/authController');


// SignUp 
authRoute.post("/signUp",signUp);
authRoute.post("/signIn",signIn)

module.exports = authRoute;
