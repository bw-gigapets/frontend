import axiosWithAuth from "../utils/axiosWithAuth"

export const ADD_CHILD_START = "ADD_CHILD_START"
export const ADD_CHILD_SUCCESS = "ADD_CHILD_SUCCESS"
export const ADD_CHILD_FAILURE = "ADD_CHILD_FAILURE"
export const DELETE_CHILD_START = "DELETE_CHILD_START"
export const DELETE_CHILD_SUCCESS = "DELETE_CHILD_SUCCESS"
export const DELETE_CHILD_FAILURE = "DELETE_CHILD_FAILURE"
export const EDIT_CHILD_START = "EDIT_CHILD_START"
export const EDIT_CHILD_SUCCESS = "EDIT_CHILD_SUCCESS"
export const EDIT_CHILD_FAILURE = "EDIT_CHILD_FAILURE"

export function addChild () {
    return dispatch => { 
        
        dispatch({type: ADD_CHILD_START})

        axiosWithAuth().get(`/foods`)
            .then(res => {
                console.log(res)
                dispatch({type: ADD_CHILD_SUCCESS, payload: res}) 
            })
            .catch(err => {
                console.log(err)
                dispatch({type: ADD_CHILD_FAILURE, payload: res}) 
            })
    }
}

export function deleteChild () {
    return dispatch => { 
        
        dispatch({type: DELETE_CHILD_START})

        axiosWithAuth().get(`/foods`)
            .then(res => {
                console.log(res)
                dispatch({type: DELETE_CHILD_SUCCESS, payload: res}) 
            })
            .catch(err => {
                console.log(err)
                dispatch({type: DELETE_CHILD_FAILURE, payload: res}) 
            })
    }
}

export function editChild () {
    return dispatch => { 
        
        dispatch({type: EDIT_CHILD_START})

        axiosWithAuth().get(`/foods`)
            .then(res => {
                console.log(res)
                dispatch({type: EDIT_CHILD_SUCCESS, payload: res}) 
            })
            .catch(err => {
                console.log(err)
                dispatch({type: EDIT_CHILD_FAILURE, payload: res}) 
            })
    }
}