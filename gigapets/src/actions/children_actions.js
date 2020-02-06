import {
    ADD_CHILD_START,
    ADD_CHILD_SUCCESS,
    ADD_CHILD_FAILURE,
    DELETE_CHILD_START,
    DELETE_CHILD_SUCCESS,
    DELETE_CHILD_FAILURE,
    EDIT_CHILD_START,
    EDIT_CHILD_SUCCESS,
    EDIT_CHILD_FAILURE
} from "./reducer"

const initialState = {
    child: [],
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {

    switch(action.type) {
        case ADD_CHILD_START:

            return{
                ...state,
                isLoading: true,
                error: null
            }
        case ADD_CHILD_SUCCESS:

            return{
                ...state,
                child: action.payload,
                isLoading: false,
                error: null
            }

        case ADD_CHILD_FAILURE:

            return{
                ...state,
                isLoading: false,
                error: action.payload
            }   

        case DELETE_CHILD_START:

            return{
                ...state,
                isLoading: true,
                error: null
            }
        case DELETE_CHILD_SUCCESS:

            return{
                ...state,
                child: action.payload,
                isLoading: false,
                error: null
            }

        case DELETE_CHILD_FAILURE:

            return{
                ...state,
                isLoading: false,
                error: action.payload
            }   

            case EDIT_CHILD_START:

            return{
                ...state,
                isLoading: true,
                error: null
            }
        case EDIT_CHILD_SUCCESS:

            return{
                ...state,
                child: action.payload,
                isLoading: false,
                error: null
            }

        case EDIT_CHILD_FAILURE:

            return{
                ...state,
                isLoading: false,
                error: action.payload
            }   
    }
}