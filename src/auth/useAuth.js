import { useContext } from "react";
import AuthContext from "./provider/AuthProvider";

const useAuth = () => {
  let response = useContext(AuthContext);
  return response;
};

export default useAuth;