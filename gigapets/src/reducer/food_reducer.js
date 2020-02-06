import axiosWithAuth from "../utils/axiosWithAuth"

export const FETCH_FOOD_START = "FETCH_FOOD_START"
export const FETCH_FOOD_SUCCESS = "FETCH_FOOD_SUCCESS"
export const FETCH_FOOD_FAILURE = "FETCH_FOOD_FAILURE"
export const DELETE_FOOD_START = "DELETE_FOOD_START"
export const DELETE_FOOD_SUCCESS = "DELETE_FOOD_SUCCESS"
export const DELETE_FOOD_FAILURE = "DELETE_FOOD_FAILURE"

export function fetchFood () {
    return dispatch => { 
        
        dispatch({type: FETCH_FOOD_START})

        axiosWithAuth().get(`/foods`)
            .then(res => {
                console.log(res)
                dispatch({type: FETCH_FOOD_SUCCESS, payload: res}) 
            })
            .catch(err => {
                console.log(err)
                dispatch({type: FETCH_FOOD_ERROR, payload: res}) 
            })
    }
}

export function deleteFood () {
    return dispatch => { 
        
        dispatch({type: DELETE_FOOD_START})

        axiosWithAuth().get(`/foods`)
            .then(res => {
                console.log(res)
                dispatch({type: DELETE_FOOD_SUCCESS, payload: res}) 
            })
            .catch(err => {
                console.log(err)
                dispatch({type: DELETE_FOOD_FAILURE, payload: res}) 
            })
    }
}