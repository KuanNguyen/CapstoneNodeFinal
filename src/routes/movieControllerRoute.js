const express = require('express');
const MovieControllerRoute = express.Router();
const {getBanner,getMovie,getMovieByName,getMovieByDate,addMovie,updateMovie,getPhanTrangMovie,deleteMovie,getMovieByID} = require('../controllers/movieController');
const {verifyToken} = require('../middlewares/jwtoken')

// Manager Film 
 MovieControllerRoute.get("/LayDanhSachBanner",getBanner);
 MovieControllerRoute.get("/LayDanhSachPhim",verifyToken,getMovie);
 MovieControllerRoute.get("/LayDanhSachPhimTheoTen",verifyToken,getMovieByName);
 MovieControllerRoute.get("/LayDanhSachPhimPhanTrang",getPhanTrangMovie);
 MovieControllerRoute.get("/LayDanhSachPhimTheoNgay",verifyToken,getMovieByDate);
 MovieControllerRoute.post("/ThemPhimUploadHinh",verifyToken,addMovie);
 MovieControllerRoute.put("/CapNhatPhim/:ma_phim",verifyToken,updateMovie);
 MovieControllerRoute.delete("/XoaPhim/:ma_phim",verifyToken,deleteMovie);
 MovieControllerRoute.get("/LayThongTinPhim/:ma_phim",verifyToken,getMovieByID);



module.exports = MovieControllerRoute;
