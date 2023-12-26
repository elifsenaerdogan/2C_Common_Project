export function generateMaskedNumberRegex(value: string, type: string) {
  let maskedValue = '';
  if(!value) return maskedValue;
  if (type === 'phone') {
    const replacedVal = value
      .replace(/\D/g, '')
      .match(/(\d{0,4})(\d{0,3})(\d{0,2})(\d{0,2})/);
    if (replacedVal) {
      maskedValue = !replacedVal[2]
        ? replacedVal[1]
        : '' +
          replacedVal[1] +
          ' ' +
          replacedVal[2] +
          (replacedVal[3] ? ' ' + replacedVal[3] : '') +
          (replacedVal[4] ? ' ' + replacedVal[4] : '');
    }
  } else if (type === 'card') {
    maskedValue = value
      .replace(/\D/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  }
  return maskedValue;
}
