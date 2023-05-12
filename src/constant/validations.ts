import * as Yup from "yup";

export const phoneNumberValidations = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
    .required("Phone number is required"),
});

export const validateOtp = Yup.object().shape({
  otp: Yup.string()
    .min(4, "Invalid otp")
    .max(6, "Invalid otp")
    .required("Otp is required"),
});
