import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },

    async (email, password, done) => {
      try {
        //const user = await db.findOne(email);

        const hashed = await bcrypt.hash("1234", 10);
        const user = { username: "123", password: hashed };

        if (!user) {
          return done(null, false, {
            message: "Incorrect email or password",
          });
        }
        const result = await bcrypt.compare(password, hashed /*user.password*/);
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
  )
);
export default passport;
