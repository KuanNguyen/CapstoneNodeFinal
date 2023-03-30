const express = require('express');
const theaterControllerRoute = express.Router();
const {getInfoTheater,getInfoTheaterCluster,getInfoShowTimeMovie,getInfoShowTimeMovieOfCodeFilm} = require('../controllers/TheaterController');
const {verifyToken} = require('../middlewares/jwtoken')



theaterControllerRoute.get("/LayThongTinHeThongRap/:ma_he_thong_rap",verifyToken,getInfoTheater);
theaterControllerRoute.get("/LayThongTinCumRapTheoHeThongRap/:ma_he_thong_rap",verifyToken,getInfoTheaterCluster);
theaterControllerRoute.get("/LayThongTinLichChieuHeThongRap/:ma_he_thong_rap",verifyToken,getInfoShowTimeMovie);
theaterControllerRoute.get("/LayThongTinLichChieuPhim/:ma_phim",verifyToken,getInfoShowTimeMovieOfCodeFilm);




module.exports = theaterControllerRoute;
