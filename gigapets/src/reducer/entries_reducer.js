import axiosWithAuth from "../utils/axiosWithAuth"

export const CREATE_FOOD_START = "FETCH_FOOD_START"
export const CREATE_FOOD_SUCCESS = "FETCH_FOOD_SUCCESS"
export const CREATE_FOOD_FAILURE = "FETCH_FOOD_ERROR"

export function createFood () {
    return dispatch => { 
        
        dispatch({type: CREATE_FOOD_START})

        axiosWithAuth().get(`/foods`)
            .then(res => {
                console.log(res)
                dispatch({type: CREATE_FOOD_SUCCESS, payload: res}) 
            })
            .catch(err => {
                console.log(err)
                dispatch({type: CREATE_FOOD_FAILURE, payload: res}) 
            })
    }
}