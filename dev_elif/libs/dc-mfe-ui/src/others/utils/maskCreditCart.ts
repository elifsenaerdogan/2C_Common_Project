interface PropTypes {
  number: number;
  unmaskedStart?: number;
  unmaskedEnd?: number;
}

export const CustomMaskNumbers = ({
  number,
  unmaskedStart = 0,
  unmaskedEnd = 0,
}: PropTypes) => {
  if (!number) return '';
  let maskedValue = '';
  const input = number.toString();
  const maskedPart = input
    .slice(unmaskedStart, -unmaskedEnd)
    .replace(/\d/g, '*');
  const masked = `${input.slice(0, unmaskedStart)}${maskedPart}${input.slice(
    -unmaskedEnd
  )}`;
  maskedValue = masked;
  return maskedValue;
};
