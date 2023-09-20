import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required")
  .matches(/^[A-Za-z\s]+$/,
  "Please enter a valid full name with only letters and spaces.")
  .max(26, 'Name is too long - should be 26 chars maximum.'),
  lastName: Yup.string().required("This field is required")
  .matches(/^[A-Za-z\s]+$/,
  "Please enter a valid full name with only letters and spaces.")
  .max(26, 'Last name is too long - should be 26 chars maximum.'),
  email: Yup.string()
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Email should contain characters and numbers only"
    )
    .max(50, 'Email is too long - should be 50 chars maximum.')
    .required("This field is required"),
    phone: Yup.string()
    .matches(
      /^\d{10}$/,
      "Phone number must be exactly 10 digits long and should contain only numbers."
    ),
    // .required("This field is required."),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]*$/,
      "Password should contain at least 1 upper case letter, 1 lower case letter, and 1 number."
    )
    .required("This field is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .max(16, "Password is too long - should be 16 chars maximum."),
  confirm_password: Yup.string()
    .required("This field is required")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .when("password", {
      is: (val) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf(
        [Yup.ref("password")],
        "Both password must be same"
      ),
    }),
  // terms_policy: Yup.bool().oneOf(
  //     [true],
  //     "You need to accept the terms and conditions"
  // ),
});

export default SignUpSchema;
