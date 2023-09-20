// export const configuration = {
//   baseUrl: "https://dev-agriapi.odysseyanalytics.net",
// };

//export const BASE_URL = 'http://10.10.9.32:8000/api/v1'
export const BASE_URL = 'https://dev-api.soinskarisma.com/api/v1'

export const END_POINTS = {
  REGISTER_USER: `${BASE_URL}/register`,
  LOGIN: `${BASE_URL}/login`,
  FORGOT_PASSWORD: `${BASE_URL}/forgot_password`,
  VERIFY_OTP: `${BASE_URL}/forgot_password/otp_verify`,
  CHANGEPASSWORD: `${BASE_URL}/change_password`,
  RESET_PASSWORD: `${BASE_URL}/forgot_password/otp_verify/update_password`,
  PROFILE_UPDATE: `${BASE_URL}/users/`,
  FETCH_EMPLOYEES_DETAILS: `${BASE_URL}/users/`,
  FETCH_SALONS_LIST: `${BASE_URL}/salons`,
  FETCH_COUNTRIES: `${BASE_URL}/get-countries`,
  FETCH_STATES: `${BASE_URL}/get-states`,
  FETCH_CITIES: `${BASE_URL}/get-cities`,
  REMOVE_MEDIA_FILE:`${BASE_URL}/users/customerMediaFiles`,
}