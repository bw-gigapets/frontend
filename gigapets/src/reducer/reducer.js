import axiosWithAuth from "../utils/axiosWithAuth"

export const FETCH_FOOD_START = "FETCH_FOOD_START"
export const FETCH_FOOD_SUCCESS = "FETCH_FOOD_SUCCESS"
export const FETCH_FOOD_ERROR = "FETCH_FOOD_ERROR"

export function fetchFoods() {
    return dispatch => { // install redux-thunk to use this syntax
        
        dispatch({type: FETCH_FOOD_START})

        axiosWithAuth().get(`/foods`)
            .then(res => {
                console.log(res)
                dispatch({type: FETCH_FOOD_SUCCESS, payload: res}) // check to see what res returns
            })
            .catch(err => {
                console.log(err)
                dispatch({type: FETCH_FOOD_ERROR, payload: res}) // check res
            })
    }
}