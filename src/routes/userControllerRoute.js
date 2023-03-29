const express = require('express');
const userControllerRoute = express.Router();
const {getInfoUser,getNameUser,getNameUserDividePage,getListRolesUser,addUser,updateUser,deleteUser ,getUserDevidePage, getListUser} = require('../controllers/userController');
const {verifyToken} = require('../middlewares/jwtoken')

// userControllerRoute
userControllerRoute.get("/LayDanhSachLoaiNguoiDung",verifyToken,getListRolesUser);
userControllerRoute.get("/LayDanhSachNguoiDung",verifyToken,getListUser);
userControllerRoute.get("/LayDanhSachNguoiDungPhanTrang",verifyToken,getUserDevidePage);
userControllerRoute.get("/LayThongTinTaiKhoan",verifyToken,getInfoUser);
userControllerRoute.get("/TimKiemNguoiDung",verifyToken,getNameUser);
userControllerRoute.get("/TimKiemNguoiDungPhanTrang",verifyToken,getNameUserDividePage);
userControllerRoute.post("/ThemNguoiDung",verifyToken,addUser);
userControllerRoute.put("/CapNhatThongTinNguoidung/:id",verifyToken,updateUser);
userControllerRoute.delete("/XoaNguoiDung/:id",verifyToken,deleteUser);


module.exports = userControllerRoute;