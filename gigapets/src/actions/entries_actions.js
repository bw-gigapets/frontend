import {
    CREATE_FOOD_START,
    CREATE_FOOD_SUCCESS,
    CREATE_FOOD_ERROR
} from "./reducer"

const initialState = {
    entry: [ ],
    isLoading: false,
    error: null
}

export function reducer(state = initialState, action) {

    switch(action.type) {
        
        case CREATE_FOOD_START:

            return{
                ...state,
                isLoading: true,
                error: null
            }
        case CREATE_FOOD_SUCCESS:

            return{
                ...state,
                entry: action.payload,
                isLoading: false,
                error: null
            }

        case CREATE_FOOD_ERROR:

            return{
                ...state,
                isLoading: false,
                error: action.payload
            }   

        
    }
}