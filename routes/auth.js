import express from "express";
import {
  logout,
  Login,
  Register,
  forgotPassword,
  refreshAccessToken,
  resetPassword,
} from "../controllers/auth";

const router = express.Router();

router.post("/login", Login);
router.post("/register", Register);
router.get("/logout", logout);
router.get("/forgotpassword", forgotPassword);
router.put("/resetpassword", resetPassword);
router.post("/refreshtoken", refreshAccessToken);

export default router;
