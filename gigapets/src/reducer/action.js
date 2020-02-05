import {
    FETCH_FOOD_START,
    FETCH_FOOD_SUCCESS,
    FETCH_FOOD_ERROR
} from "./reducer"

const initialState = {
    foods: [{food_name: "banana", }],
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {

    switch(action.type) {
        // stores foods to state
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

        case FETCH_FOOD_ERROR:

            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        // start another case to create a food
        // case CREATE_FOOD_START:

    }
    
}