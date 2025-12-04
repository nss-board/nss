import express from "express";
import { login } from "../controllers/user/login.js";
import { verifyUser } from "../controllers/user/verifyUser.js";
import sendCode from "../controllers/user/sendCode.js";

const router = express.Router();

router.post("/login", login);
router.get("/verify", verifyUser);
router.post("/sendCode", sendCode);

export default router;
