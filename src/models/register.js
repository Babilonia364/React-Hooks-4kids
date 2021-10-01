function validateCpf(cpf) {
  if (cpf.length !== 11) {
    return { validate: false, text: "CPF deve conter 11 dígitos" }
  } else {
    return { validate: true, text: "" }
  }
};

function validatePassword(password) {
  if (password.length < 4 || password.length > 72) {
    return { validate: false, text: "Campo deve conter entre 4 a 72 dígitos" }
  } else {
    return { validate: true, text: "" }
  }
};

export { validateCpf, validatePassword };