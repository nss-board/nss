import { PhoneAuth } from "../../models/PhoneAuth";

export default async function verifyCode(req, res) {
  try {
    const { id, email, code } = req.body;

    const user = await PhoneAuth.findOne({
      where: { id, email },
    });

    if (!user) {
      return res.status(404).json({ message: "인증 정보 없음" });
    }

    // 인증번호 불일치
    if (code != user.code) {
      return res.status(400).json({ message: "인증번호 불일치" });
    }

    // 인증 성공 → verified 업데이트
    await user.update({ verified: true });

    return res.status(200).json({ message: "인증 성공", verified: true });
  } catch (err) {
    return res.status(500).json({ message: "서버 오류", error: err });
  }
}
