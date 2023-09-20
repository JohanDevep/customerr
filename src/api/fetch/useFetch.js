import { UseClient } from "../agent";
export async function UseFetch(endPoint = null, payload = null, params = null) {
  const client = await UseClient();
  return client[endPoint](params, payload)
    .then((response) => {
      return response?.data;
    })
    .catch((error) => {
      return error?.response?.data;
    });
}
