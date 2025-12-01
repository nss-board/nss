// jwt-util.js

import promisify from "util";
import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET_KEY;
const expiresIn = process.env.JWT_ACCESS_TOKEN_EXPIRES;

export const sign = (user) => {
  const payload = {
    id: user.username,
  };

  return jwt.sign(payload, secret, {
    algorithm: "HS256",
    expiresIn: expiresIn,
  });
};

export const verify = (token) => {
  // access token 검증
  let decoded = null;
  try {
    decoded = jwt.verify(token, secret);
    console.log(decoded);
    return {
      ok: true,
      id: decoded.id,
    };
  } catch (err) {
    return {
      ok: false,
      message: err.message,
    };
  }
};

export const refresh = () => {
  // refresh token 발급
  return jwt.sign({}, secret, {
    // refresh token은 payload 없이 발급
    algorithm: "HS256",
    expiresIn: expiresIn,
  });
};

export const refreshVerify = async (token, userId) => {
  // refresh token 검증
  /* redis 모듈은 기본적으로 promise를 반환하지 않으므로,
       promisify를 이용하여 promise를 반환하게 해줍니다.*/
  const getAsync = promisify(redisClient.get).bind(redisClient);

  try {
    const data = await getAsync(userId); // refresh token 가져오기
    if (token === data) {
      try {
        jwt.verify(token, secret);
        return true;
      } catch (err) {
        return false;
      }
    } else {
      return false;
    }
  } catch (err) {
    return false;
  }
};
