import express from "express";

import {registerCustomer,registerAdmin,verifyEmail,adminLogin, adminProfile, customerProfile,customerLogin, logoutUser} from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
const router = express.Router();
router.post("/register/customer",registerCustomer);
router.post("/register/admin",registerAdmin);
router.post("/verify-email",verifyEmail);
router.post("/admin/login",adminLogin);
router.post("/customer/login",customerLogin);
router.get('/admin/profile',authMiddleware,authorizeRoles("admin"),adminProfile);
router.get("/customer/profile",authMiddleware,authorizeRoles("customer"),customerProfile);
router.post("/logout",logoutUser);
export default router;