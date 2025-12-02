import express from "express";
import { login } from "../controllers/user/login.js";
import { verifyUser } from "../controllers/user/verifyUser.js";
import { signup } from "../controllers/user/signup.js";

const router = express.Router();

router.post("/login", login);
router.get("/verify", verifyUser);

router.post("/signup", signup);

export default router;
