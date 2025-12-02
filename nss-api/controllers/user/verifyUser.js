import { verify } from "./jwt-util.js";

export function verifyUser(req, res) {
  console.log("test", req.cookies);
  var decoded = verify(req.cookies.access_token);

  console.log(decoded.ok, decoded.id);
  return res.status(200).json({
    ok: decoded.ok,
    id: decoded.id,
  });
}

export function verifyUser1(req, res) {
  console.log("test", req.cookies);
  var decoded = verify(req.cookies.access_token);

  console.log(decoded.ok, decoded.id);
  return {
    ok: decoded.ok,
    id: decoded.id,
  };
}
