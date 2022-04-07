import * as yup from "yup";

// login validation
export const loginValidation = yup.object().shape({
  email: yup
    .string()
    .required("Lütfen e-posta adresi giriniz!")
    .email("Geçersiz e-posta adresi!"),
  password: yup
    .string()
    .min(4, "Şifre minimum 4 karakter olmalıdır!")
    .required("Lütfen şifre giriniz!"),
});

// register validation
export const registerValidation = yup.object().shape({
  username: yup.string().required("Lütfen kullanıcı adı giriniz!"),
  email: yup
    .string()
    .required("Lütfen e-posta adresi giriniz!")
    .email("Geçersiz e-posta adresi!"),
  password: yup
    .string()
    .min(4, "Şifre minimum 4 karakter olmalıdır!")
    .required("Lütfen şifre giriniz!"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Şifre tekrarı onaylaması başarısız!!"),
});

// contact validation
export const contactValidation = yup.object().shape({
  name: yup.string().required("Lütfen isminizi giriniz!"),
  email: yup
    .string()
    .required("Lütfen e-posta adresi giriniz!")
    .email("Geçersiz e-posta adresi!"),

  subject: yup.string().required("Lütfen başlık giriniz!"),
  message: yup.string().required("Lütfen mesaj giriniz!"),
});
