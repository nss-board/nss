import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import passport from "./controllers/user/strategy.js";

import userRouter from "./router/user.js";
import postRouter from "./router/post.js";

//--------------------
import { User } from "./models/User.js";
//---------------

const app = express();
app.use(cookieParser());
app.use(passport.initialize());

app.use(express.json());

app.use(
  cors({
    origin: "http://192.168.0.20:5173",
    credentials: true,
  })
);

app.listen(8080, () => {
  console.log("http://localhost:8080 에서 서버 실행중");
});

app.use("/post", postRouter);
app.use("/user", userRouter);

//-------------test------------//

app.post("/test", async (req, res) => {
  const form = req.body;
  try {
    const result = await User.create(form);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
});

// ------------------------------- 회원가입 ---------------------------------------
/*
 회원가입 기능이잖음
 
그러면 ? body를 파싱해야함 (JSON)
body 안에는
{
    username            <-- 사용자 본명
    email               <-- 이메일 (로그인할땐 아이디 역할). 중복 확인 필요
    password            <-- 비밀번호 
    number              <-- 휴대폰 번호 
     ㄴ SMS 인증 필요    <-- 회원가입 버튼을 누르기 전에 SMS 인증을 먼저.
     user/signup
}

    회원가입 페이지를 분할
    1. 이름, 이메일, 비번 <-- 중복 확인은 회원가입 버튼을 눌렀을 때 서버 측에서 처리.
    2. SMS 인증 <-- DB쪽에 인증 여부를 넣어서 인증을 안 했을 경우엔 로그인 해도 SMS 인증 페이지로 이동.
*/

// async function sendSMS(phone) {

//   const serviceId =
//   const timestamp =
//   const accessKey =
//   const signature =

//   const res = await fetch(`https://sens.apigw.ntruss.com/sms/v2/services/${serviceId}/messages`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "x-ncp-apigw-timestamp": timestamp,
//       "x-ncp-iam-access-key": accessKey,
//       "x-ncp-apigw-signature-v2": signature,
//     },
//     body: {
//       type: "SMS",
//       contentType: "COMM",
//       countryCode: "82",
//       from: "01052866223",
//       subject: "[NSS]",
//       content: `인증번호는 ${verifyNumber} 입니다.`,
//       messages: [
//         {
//           to: `${phone}`,
//           // subject: "개별 메세지 제목",
//           // content: "개별 메세지 내용",
//         },
//       ],
//     },
//   });

//   const data = await res.json();
//   console.log(data);
// }

// app.get("/user/signup/sms", (res, req) => {
//   var clientNumber = res.body.clientNumber;
//   sendSMS(clientNumber);

// });
