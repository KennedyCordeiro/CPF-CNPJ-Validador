const validateTaxNumber = (taxNumber) => {
  const cleanedTaxNumber = taxNumber.replace(/\D/g, '');

  if (cleanedTaxNumber.length === 11) {
    return validateCPF(cleanedTaxNumber);
  } else if (cleanedTaxNumber.length === 14) {
    return validateCNPJ(cleanedTaxNumber);
  } else {
    return false;
  }
};

const validateCPF = (cpf) => {
  cpf = cpf.replace(/\D/g, '');

  if (cpf.length !== 11) {
    return false;
  }

  if (/^(\d)\1+$/.test(cpf)) {
    return false;
  }

  let sum = 0;
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf.charAt(i)) * (10 - i);
  }
  let remainder = 11 - (sum % 11);
  let verificationDigit1 = remainder > 9 ? 0 : remainder;

  sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf.charAt(i)) * (11 - i);
  }
  remainder = 11 - (sum % 11);
  let verificationDigit2 = remainder > 9 ? 0 : remainder;

  return (
    verificationDigit1 === parseInt(cpf.charAt(9)) &&
    verificationDigit2 === parseInt(cpf.charAt(10))
  );
};

const validateCNPJ = (cnpj) => {
  cnpj = cnpj.replace(/\D/g, '');

  if (cnpj.length !== 14) {
    return false;
  }

  if (/^(\d)\1+$/.test(cnpj)) {
    return false;
  }

  let size = cnpj.length - 2;
  let numbers = cnpj.substring(0, size);
  let digits = cnpj.substring(size);
  let sum = 0;
  let position = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * position--;
    if (position < 2) {
      position = 9;
    }
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) {
    return false;
  }

  size = size + 1;
  numbers = cnpj.substring(0, size);
  sum = 0;
  position = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * position--;
    if (position < 2) {
      position = 9;
    }
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(1))) {
    return false;
  }

  return true;
};

export default validateTaxNumber;