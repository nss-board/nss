import { signup } from "./user/signup.js";
import { login } from "./user/login.js";
import { cookieParser } from "cookie-parser";
import { cors } from "cors";

import express from "express";
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "*",
    credential: "true",
  })
);

app.listen(8080, () => {
  console.log("http://localhost:8080 에서 서버 실행중");
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
app.post("user/login", async (req, res) => {
  login(req, res);
});
app.post("user/signup", async (req, res) => {
  signup(req, res);
});
