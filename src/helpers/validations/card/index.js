import * as Yup from "yup";

const InitialeState = {
  number: "",
  name: "",
  cvv: "",
  month: "",
  year: "",
};
const CardValidationSchema = Yup.object().shape({
  number: Yup.string()
    .min(16, "Min allowed limit 16")
    .max(16, "Max allowed limit 16")
    .required("error"),
  name: Yup.string().required("error"),
  cvc: Yup.string()
    .min(3, "Min allowed limit 3")
    .max(4, "Max allowed limit 4")
    .required("error"),
  month: Yup.string().required("error"),
  year: Yup.string().required("error"),
});
export { CardValidationSchema, InitialeState };