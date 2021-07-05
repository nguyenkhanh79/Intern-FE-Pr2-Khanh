import {
    GET_PRODUCTS_REQUEST,
    GET_PRODUCTS_SUCCESS,
    GET_PRODUCTS_FAIL,
    CREATE_PRODUCT_REQUEST,
    CREATE_PRODUCT_SUCCESS,
    CREATE_PRODUCT_FAIL,
} from "../actions/productsAction";

const initialState = {
    data: [],
    isFetching: false,
    isCreating: false,
    isDeleting: false,
    fetchError: null,
    createError: null,
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_PRODUCTS_REQUEST:
            return { ...state, isFetching: true, fetchError: null };

        case GET_PRODUCTS_SUCCESS:
            return { ...state, data: action.payload, isFetching: false, fetchError: null };

        case GET_PRODUCTS_FAIL:
            return { ...state, fetchError: action.payload, isFetching: false };

        case CREATE_PRODUCT_REQUEST:
            return {...state, isCreating: true, createError: null}
        
        case CREATE_PRODUCT_SUCCESS:
            return {...state, isCreating: false}

        case CREATE_PRODUCT_FAIL:
            return {...state, isCreating: false, createError: action.payload}
            
        default:
            return state;
    }
};

export default productsReducer;
