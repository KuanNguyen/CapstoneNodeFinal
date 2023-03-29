const express = require('express');
const rootRoute = express.Router();
const authRoute = require('./authRoute');
const userControllerRoute = require('./userControllerRoute');
const MovieControllerRoute = require('./movieControllerRoute');
//const managerMovieTheaterRoute = require('./managerMovieTheaterRoute');
//const managerBookingTicketRoute = require('./managerBookingTicketRoute');

rootRoute.use("/QuanLyNguoiDung", authRoute);
rootRoute.use("/QuanLyNguoiDung", userControllerRoute);
rootRoute.use("/QuanLyPhim", MovieControllerRoute);
//rootRoute.use("/managerMovieTheaterRoute", managerMovieTheaterRoute);
//rootRoute.use("/managerBookingTicketRoute", managerBookingTicketRoute);


module.exports = rootRoute;