import * as Yup from "yup";

export const phoneNumberValidations = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format")
    .required("Phone number is required"),
});
