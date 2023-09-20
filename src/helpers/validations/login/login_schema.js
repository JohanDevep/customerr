import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    .max(50, 'Email is too long - should be 50 chars maximum.')
    .required("Please enter the email"),
  password: Yup.string()
  .matches(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]*$/,
    "Password should contain at least 1 upper case letter, 1 lower case letter, and 1 number."
  )
    .required("Please enter the password").min(8, 'Password is too short - should be 8 chars minimum.')
    .max(16, 'Password is too long - should be 16 chars maximum.'),
});

export default LoginSchema;
