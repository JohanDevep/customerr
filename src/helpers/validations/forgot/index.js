import * as Yup from "yup";

const ForgotSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Email should be characters and numbers only"
    )
    .max(50, 'Email is too long - should be 50 chars maximum.')
    .required("Please enter the email"),
});

export default ForgotSchema;