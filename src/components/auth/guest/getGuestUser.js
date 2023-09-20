import { UseFetch } from "../../../api/fetch/useFetch";
import { API_END_POINTS } from "../../../api/config";

export async function getGuestUser() {
  let response = await UseFetch(API_END_POINTS?.GET_GUEST_USER_TOKEN);
  localStorage.setItem("guestToken", response?.token);
}