import * as Yup from "yup";
export const BillingFormSchema = Yup.object().shape({
  firstName: Yup.string(),
  lastName: Yup.string(),
  address: Yup.string().required("This field is required"),
  country: Yup.string().required("This field is required"),
  state: Yup.string().required("This field is required"),
  city: Yup.string().required("This field is required"),
  postCode: Yup.string().required("This field is required"),
  phoneNumber: Yup.string().required("This field is required"),
});
export const ShippingFormSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  address: Yup.string().required("This field is required"),
  country: Yup.string().required("This field is required"),
  state: Yup.string().required("This field is required"),
  city: Yup.string().required("This field is required"),
  postCode: Yup.string().required("This field is required"),
  phoneNumber: Yup.string().required("This field is required"),
});
