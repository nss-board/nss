function signup(req, res) {
  const form_data = req.body;

  verifyData(form_data); // <-- body 값 검증 단계 필요
  checkDup(form_data.email);

  
}

function verifyData(form_data) {}
function checkDup(email) {}

export { signup };
