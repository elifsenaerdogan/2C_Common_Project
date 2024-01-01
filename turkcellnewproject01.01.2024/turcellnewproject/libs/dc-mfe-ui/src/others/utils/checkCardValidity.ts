// Luhn algorithm
export function checkCardValidity(cardNumber: string | undefined): boolean {
  if (!cardNumber) return false;
  if (/[^0-9-\s]+/.test(cardNumber)) return false;

  let nCheck = 0;
  let nDigit = 0;
  let bEven = false;
  cardNumber = cardNumber.replace(/\D/g, '');

  for (let n = cardNumber.length - 1; n >= 0; n--) {
    const cDigit = cardNumber.charAt(n);
    nDigit = parseInt(cDigit, 10);

    if (bEven) {
      if ((nDigit *= 2) > 9) nDigit -= 9;
    }

    nCheck += nDigit;
    bEven = !bEven;
  }

  return nCheck % 10 === 0;
}
