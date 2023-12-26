import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { PaymentErrorMessages } from '../../lib/molecules/shared/payment/types/payment-enums';
import { checkCardValidity } from '../utils/checkCardValidity';

export const paymentSchema = yup.object().shape({
  cardHolder: yup.string().required(PaymentErrorMessages.CardHolder),
  cardNumber: yup
    .string()
    .min(19, PaymentErrorMessages.CardNumber_Length)
    .test('test-number', PaymentErrorMessages.CardNumber_Length, (value) =>
      checkCardValidity(value)
    )
    .required(PaymentErrorMessages.CardNumber),
  expiryMonth: yup
    .string()
    .matches(/^[0-9]{2}$/, PaymentErrorMessages.ExpiryMonth)
    .required(PaymentErrorMessages.ExpiryMonth),
  expiryYear: yup
    .string()
    .matches(/^[0-9]{4}$/, PaymentErrorMessages.ExpiryYear)
    .required(PaymentErrorMessages.ExpiryYear),
  ccv: yup
    .string()
    .matches(/^[0-9]{3,4}$/, PaymentErrorMessages.CCV_Length)
    .required(PaymentErrorMessages.CCV_Req),
  agreement: yup
    .bool()
    .oneOf([true], PaymentErrorMessages.Aggrement)
    .required(PaymentErrorMessages.Aggrement),
  terms: yup.bool().notRequired(),
});

export const paymentResolver = yupResolver(paymentSchema);
