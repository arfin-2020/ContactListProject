import axiosInstance from '../../../helpers/axiosInterceptor';
import { CLEAR_AUTH_STATE, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from '../../actionType';


export const clearAuthState = () => (dispatch) =>{
    dispatch({
        type: CLEAR_AUTH_STATE,
    })
}

export default ({
    email,
    password,
    userName: username,
    firstName: first_name,
    lastName: last_name,
}) =>(dispatch)=>{
    dispatch({
        type: REGISTER_LOADING,
    });
    axiosInstance.post('api/auth/register',{
        email,
        password,
        username,
        first_name,
        last_name,
    })
    .then((res) =>{
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,
        });
    })
    .catch((err)=>{
        // {console.log(error333333,err)}
        dispatch({
            type: REGISTER_FAIL,   
            payload: err.response 
            ? err.response.data 
            : {error: 'Something happend here, try again'}
        });
    })
}