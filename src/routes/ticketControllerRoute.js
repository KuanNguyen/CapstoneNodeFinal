const express = require('express');
const ticketControllerRoute = express.Router();
const {getInfoTicketRoom,addShowTimeMovie,addBookingTicketMovie} = require('../controllers/ticketController');
const {verifyToken} = require('../middlewares/jwtoken')



ticketControllerRoute.post("/DatVe",verifyToken,addBookingTicketMovie); 
ticketControllerRoute.get("/LayDanhSachPhongVe/:ma_lich_chieu",verifyToken,getInfoTicketRoom);
ticketControllerRoute.post("/TaoLichChieu",verifyToken,addShowTimeMovie);




module.exports = ticketControllerRoute;
