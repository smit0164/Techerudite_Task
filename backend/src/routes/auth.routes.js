import express from "express";

import {registerCustomer,registerAdmin,verifyEmail,adminLogin, adminProfile, customerProfile} from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
import { authorizeRoles } from "../middleware/role.middleware.js";
const router = express.Router();
router.post("/register/customer",registerCustomer);
router.post("/register/admin",registerAdmin);
router.post("/verify-email",verifyEmail);
router.post("/admin/login",adminLogin);
router.post('/admin/profile',authMiddleware,authorizeRoles("admin"),adminProfile);
router.post("/customer/profile",authMiddleware,authorizeRoles("customer"),customerProfile);
export default router;