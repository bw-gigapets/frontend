import {
    USER_LOGIN_START,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILURE,
    USER_REGISTER_START,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAILURE,
} from "../actions/user_actions";

const initialState = {
    user: [ ],
    isLoading: false,
    error: null
}

export function userReducer (state = initialState, action) {
switch(action.type) {
    
    case USER_LOGIN_START:

        return{
            ...state,
            isLoading: true,
            error: null
        }
    case USER_LOGIN_SUCCESS:

        return{
            ...state,
            user: action.payload,
            isLoading: false,
            error: null
        }

    case USER_LOGIN_FAILURE:

        return{
            ...state,
            isLoading: false,
            error: action.payload
        }

        case USER_REGISTER_START:

        return{
            ...state,
            isLoading: true,
            error: null
        }
    case USER_REGISTER_SUCCESS:

        return{
            ...state,
            user: action.payload,
            isLoading: false,
            error: null
        }

    case USER_REGISTER_FAILURE:

        return{
            ...state,
            isLoading: false,
            error: action.payload
        }
        default : 
        return state
    }
   
}