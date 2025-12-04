import crypto, { verify } from "crypto";
import CryptoJS from "crypto-js";

export default function sendCode(req, res) {
  const form_data = req.body;

  verifyData(form_data); // <-- body 값 검증 단계 필요
  checkDup(form_data.email);
  sendSMS(form_data.phoneNumber);
}

function verifyData(form_data) {}
function checkDup(email) {}

async function sendSMS(phoneNumber) {
  const code = String(Math.floor(Math.random() * 900000) + 100000);
  const expire = new Date(Date.now() + 5 * 60 * 1000);
  // const phone = "01056328583";
  // DB에 전화번호 인증 로그 저장
  await PhoneAuth.create({
    phoneNumber,
    code,
    expire,
    isVerified: 0,
  });

  //----- 네이버 SMS 발송
  const serviceId = process.env.NAVER_CLOUD_PLATFORM_SERVICE_ID;
  const accessKey = process.env.NAVER_CLOUD_PLATFORM_ACCESS;
  const secretKey = process.env.NAVER_CLOUD_PLATFORM_SECRET;
  const sender = process.env.SENS_SENDER;

  const timestamp = Date.now().toString();
  const url = `/sms/v2/services/${serviceId}/messages`;

  console.log(serviceId, accessKey, secretKey, sender);

  let space = " "; // one space
  let newLine = "\n"; // new line
  let method = "GET"; // method

  let hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
  hmac.update(method);
  hmac.update(space);
  hmac.update(url);
  hmac.update(newLine);
  hmac.update(timestamp);
  hmac.update(newLine);
  hmac.update(accessKey);

  let hash = hmac.finalize();

  let sign = hash.toString(CryptoJS.enc.Base64);

  console.log("RAW SIGN STRING:");
  console.log(`POST ${url}\n${timestamp}\n${accessKey}`);

  const result = await fetch(`https://sens.apigw.ntruss.com${url}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-ncp-iam-access-key": accessKey,
      "x-ncp-apigw-timestamp": String(new Date().getTime()),
      "x-ncp-apigw-signature-v2": CryptoJS.enc.Base64.stringify(
        CryptoJS.HmacSHA256(
          "POST /sms/v2/services/" +
            serviceId +
            "/messages\n" +
            String(new Date().getTime()) +
            "\n" +
            accessKey,
          secretKey
        )
      ),
    },
    body: JSON.stringify({
      type: "SMS",
      contentType: "COMM",

      from: sender,

      content: `[본인인증] 인증번호 ${code} 를 입력해주세요.`,
      messages: [
        {
          to: phoneNumber,
        },
      ],
    }),
  });

  console.log(result);

  res.json({ message: "sent" });
}
