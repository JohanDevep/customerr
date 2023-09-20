import { toast } from 'react-toastify';
import { logout } from '../actions';
import { MESSAGES } from './constant';
/**
 * @method apiErrors
 * @description handle api error 
 */
export const apiErrors = (res,dispatch) => {
    const response = res ? res.response : undefined;
    if (response && response.data && response.status === 401) {
        if (response && response.data && response.data.error) {
             localStorage.clear()
             sessionStorage.clear();
           window.location.assign('/')
         } else {
            toast.error(response.data.message);
         }
        
    }else if (response && response.data && response.data.error) {
        toast.error(response.data.error.message);
    } else if (response && response.data && response.data.message) {
        toast.error(response.data.message);
    } else if (response && response.data && response.status === 422) {
        toast.error(response.data && response.data.message ? response.data.message : MESSAGES.API_ERRORS)
    } else {
        toast.error(MESSAGES.API_ERRORS);
    }
}