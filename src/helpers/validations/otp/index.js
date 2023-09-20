import * as Yup from "yup";

const OtpSchema = Yup.object().shape({
  otp1: Yup.string().required("Email is required"),
  otp2: Yup.string().required("Password is required"),
  otp3: Yup.string().required("Password is required"),
  otp4: Yup.string().required("Password is required"),
});

export default OtpSchema;
