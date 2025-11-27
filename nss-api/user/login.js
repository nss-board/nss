import { sequelize, connectDB } from "../config/mysql.js";
import JWT from "jsonwebtoken";
import pkg from "passport";
import passport from "../user/strategy.js";
import { Strategy as LocalStrategy } from "passport-local";

import { sign, refresh, verify, refreshVerify } from "./jwt-util.js";

export function login(req, res, next) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    try {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      if (!user) {
        return res.status(401).json({ message: info.message });
      }

      const accessToken = sign(user);
      const refreshToken = refresh();

      console.log("aToken  " + accessToken);

      res.cookie("access_token", accessToken, {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
        MaxAge: process.env.JWT_ACCESS_TOKEN_EXPIRES,
      });

      res.cookie("refresh_token", refreshToken, {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
        MaxAge: process.env.JWT_REFRESH_TOKEN_EXPIRES,
      });

      res.status(200).json({ message: "로그인 완료" });
    } catch (error) {
      console.log(error);
    }
  })(req, res, next);
}

export function verifyUser(req, res) {
  console.log("test", req.cookies);
  console.log(verify(req.cookies.access_token).ok);
}
