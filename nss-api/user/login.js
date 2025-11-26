import { sequelize, connectDB } from "../config/mysql.js";
import JWT from "jsonwebtoken";
import pkg from "passport";
import passport from "../user/strategy.js";
import { Strategy as LocalStrategy } from "passport-local";

export default function login(req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    try {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      if (!user) {
        return res.status(401).json({ message: info.message });
      }
      const payload = { user_id: user._id };
      const secretKey = process.env.JWT_SECRET_KEY;
      const expiresIn = process.env.JWT_ACCESS_TOKEN_EXPIRES;
      const token = JWT.sign(payload, secretKey);

      res.cookie("access_token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
        maxAge: process.env.JWT_ACCESS_TOKEN_EXPIRES,
      });

      res.status(200).json({ message: "로그인 완료" });
    } catch (error) {
      console.log(error);
    }
  })(req, res, next);
}
