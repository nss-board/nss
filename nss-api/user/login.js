import { sequelize, connectDB } from "./config/mysql.js";

const passport = require("passport");

export default function login(req, res) {
  passport.authenticate("local", { session: false }, (err, user, info) => {
    try {
      if (err) {
        return next(err.message);
      }
      if (!user) {
        return res.status(401).json({ message: info.message });
      }
      const payload = { user_id: user._id };
      const secretKey = process.env.JWT_SECRET_KEY;
      const expiresIn = process.env.JWT_ACCESS_TOKEN_EXPIRES;
      const token = generateToken(payload, secretKey, expiresIn);

      req.user = user;
      req.token = token;

      res.cookie("access_token", token, {
        httpOnly: true,
        secure: false,
        sameSite: "Strict",
        maxAge: process.env.JWT_ACCESS_TOKEN_EXPIRES,
      });

      // res.status, message로 알잘딱 보내면 됨  //응
      res.status(200).json({ message: "로그인 완료" });
    } catch (error) {
      console.log(error);
    }
  })(req, res);
}

const local = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },

  async (email, password, done) => {
    try {
      const user = await db.findOne(email);
      if (!user) {
        return done(null, false, {
          message: "Incorrect email or password",
        });
      }
      const result = await bycrypt.compare(password, user.password);
      if (!result) {
        return done(null, false, {
          message: "incorrect email or password",
        });
      }
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
);
