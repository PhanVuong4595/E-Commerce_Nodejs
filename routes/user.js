import express from "express";
import {
  deleteUser,
  getCurrent,
  getUsers,
  updateUser,
  updateUserByAdmin,
} from "../controllers/user";
const { verifyAccessToken, isAdmin } = require("../middlewares/verifyToken");

const router = express.Router();

router.get("/current", verifyAccessToken, getCurrent);
router.get("/", verifyAccessToken, isAdmin, getUsers);
router.delete("/", verifyAccessToken, isAdmin, deleteUser);
router.put("/current", verifyAccessToken, updateUser);
router.put("/:uid", verifyAccessToken, isAdmin, updateUserByAdmin);

export default router;
