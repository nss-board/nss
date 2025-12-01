import { verify } from "./jwt-util.js";

export default function verifyUser(req, res) {
  console.log("test", req.cookies);
  var decoded = verify(req.cookies.access_token);

  console.log(decoded.ok, decoded.id);
  return decoded;
}
