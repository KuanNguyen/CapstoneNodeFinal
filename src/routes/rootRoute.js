const express = require('express');
const rootRoute = express.Router();
const authRoute = require('./authRoute');
const userControllerRoute = require('./userControllerRoute');
const MovieControllerRoute = require('./movieControllerRoute');
const theaterControllerRoute = require('./theaterControllerRoute');
const ticketControllerRoute = require('./ticketControllerRoute');

rootRoute.use("/QuanLyNguoiDung", authRoute);
rootRoute.use("/QuanLyNguoiDung", userControllerRoute);
rootRoute.use("/QuanLyPhim", MovieControllerRoute);
rootRoute.use("/QuanLyRap", theaterControllerRoute);
rootRoute.use("/QuanLyDatVe", ticketControllerRoute);


module.exports = rootRoute;