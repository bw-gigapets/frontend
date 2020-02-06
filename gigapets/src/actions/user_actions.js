import { axiosWithAuth } from "../utils/axiosWithAuth"
export const USER_LOGIN_START = "USER_LOGIN_START"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILURE = "USER_LOGIN_FAILURE"
export const USER_REGISTER_START = "USER_REGISTER_START"
export const USER_REGISTER_SUCCESS = "USER_REGISTER_SUCCESS"
export const USER_REGISTER_FAILURE = "USER_REGISTER_FAILURE"

export const userLogin = (userCredentials) => dispatch => { 
        
        dispatch({type: USER_LOGIN_START})

        axiosWithAuth()
        .post('/auth/login', userCredentials)
        .then(res => {
          localStorage.setItem('token', JSON.stringify(res.data.payload))
          dispatch({type: USER_LOGIN_SUCCESS, payload: res})
        })
        .catch(err => {
            console.log("Login Error", err.response)
            dispatch({type: USER_LOGIN_FAILURE, payload: err})
        })
      }



export const userRegister = () => dispatch => { 
        
        dispatch({type: USER_REGISTER_START})

        axiosWithAuth().get(`/auth/register`)
            .then(res => {
                console.log(res)
                dispatch({type: USER_REGISTER_SUCCESS, payload: res}) // check to see what res returns
            })
            .catch(err => {
                console.log(err)
                dispatch({type: USER_REGISTER_FAILURE, payload: err}) // check res
            })
    }
