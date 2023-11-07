// payment enums
export enum PaymentFormElements {
    CardHolder = 'cardHolder',
    CardNumber = 'cardNumber',
    ExpiryMonth = 'expiryMonth',
    ExpiryYear = 'expiryYear',
    CCV = 'ccv',
    Terms = 'terms',
    Agreement = 'agreement'
}

export enum PaymentLabels {
    CardHolder = 'Kart Üzerindeki Ad Soyad',
    CardNumber = 'Kart Numarası',
    ExpiryMonth = 'Ay',
    ExpiryYear = 'Yıl',
    CCV = 'CCV'
}

export enum PaymentErrorMessages {
    CardHolder = 'Bu alan boş bırakılamaz',
    CardNumber = 'Kart numarası zorunludur',
    CardNumber_Length = 'Lütfen geçerli bir kart numarası giriniz',
    ExpiryMonth = 'Bu alan boş bırakılamaz',
    ExpiryYear = 'Bu alan boş bırakılamaz',
    CCV_Req = 'Bu alan boş bırakılamaz',
    CCV_Length = 'Lütfen geçerli bir CVV giriniz',
    Aggrement = 'Sözleşmeyi onaylamanız gerekmektedir'
}

export enum PaymentInputStatus {
    Default = 'info',
    Error = 'error',
    Success = 'success'
}

export enum PaymentInputTypes {
    Fullname = 'fullname',
    CardNumber = 'cardNumber',
    CCV = 'ccv'
}

export enum PaymentPopoverMessages {
    Title = 'Güvenlik Kodu',
    Content = 'Kredi kartınızın arka yüzünde bulunan 3 haneli rakam'
}

export enum PaymentMasterPassRegisterTexts {
    FirstText = "Kart bilgilerimi",
    SaveTermsText = "Kaydetme şartları",
    ApproveText = "'nı okudum, onaylıyorum.",
    SaveToHide = "altyapısında saklamak istiyorum."
}

export enum PaymentCardExtraInfoTexts {
    Title = "Güvenli alışveriş",
    Text = 'Kredi kartı bilgileriniz güvenli olarak Masterpass altyapısında saklanmaktadır.'
}

export enum PaymentAgreementTexts {
    Agreement = "Mesafeli satış sözleşmesini",
    Text = "okudum, onaylıyorum."
}