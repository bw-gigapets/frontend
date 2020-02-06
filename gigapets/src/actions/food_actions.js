import {
    FETCH_FOOD_START,
    FETCH_FOOD_SUCCESS,
    FETCH_FOOD_FAILURE,
    DELETE_FOOD_START,
    DELETE_FOOD_SUCCESS,
    DELETE_FOOD_FAILURE
} from "./reducer"

const initialState = {
    foods: [ ],
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {

    switch(action.type) {
        case FETCH_FOOD_START:

            return{
                ...state,
                isLoading: true,
                error: null
            }
        case FETCH_FOOD_SUCCESS:

            return{
                ...state,
                foods: action.payload,
                isLoading: false,
                error: null
            }

        case FETCH_FOOD_FAILURE:

            return{
                ...state,
                isLoading: false,
                error: action.payload
            }   

        case CREATE_FOOD_START:

            return{
                ...state,
                isLoading: true,
                error: null
            }
        case CREATE_FOOD_SUCCESS:

            return{
                ...state,
                foods: action.payload,
                isLoading: false,
                error: null
            }

        case CREATE_FOOD_FAILURE:

            return{
                ...state,
                isLoading: false,
                error: action.payload
            }   

            case DELETE_FOOD_START:

            return{
                ...state,
                isLoading: true,
                error: null
            }
        case DELETE_FOOD_SUCCESS:

            return{
                ...state,
                foods: action.payload,
                isLoading: false,
                error: null
            }

        case DELETE_FOOD_FAILURE:

            return{
                ...state,
                isLoading: false,
                error: action.payload
            }   

    }
    
}