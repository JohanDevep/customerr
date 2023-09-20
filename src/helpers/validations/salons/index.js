import * as Yup from "yup";

const InitialeState = {
  email: "",
  name: "",
  firstName: "",
  lastName: "",
  phone: "",
  mobilePhone: "",
  otherEmail: "",
  noOfSalons: "",
  describeSalon: "",
  noOfChairs: "",
  noOfEmployees: "",
  servicesProvide: "",
  location: "",
  approxMonthlyRevenue: "",
};
const SalonRegisterationSchema = Yup.object().shape({
  name: Yup.string().required("This field is required"),
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  phone: Yup.string().required("This field is required"),
  mobilePhone: Yup.string().required("This field is required"),
  email: Yup.string()
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Email should contain characters and numbers only"
    )
    .required("This field is required"),
  otherEmail: Yup.string()
    .matches(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      "Email should contain characters and numbers only"
    )
    .required("This field is required"),
  describeSalon: Yup.string().required("This field is required"),
  noOfSalons: Yup.number().required("This field is required"),
  noOfChairs: Yup.number().required("This field is required"),
  noOfEmployees: Yup.number().required("This field is required"),
  servicesProvide: Yup.string().required("This field is required"),
  location: Yup.string().required("This field is required"),
  approxMonthlyRevenue: Yup.string().required("This field is required"),
});
export { SalonRegisterationSchema, InitialeState };
