import {
    SIGNIN_REQUEST,
    SIGNIN_SUCCESS,
    SIGNIN_FAIL,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAIL,
    SIGNOUT_REQUEST,
} from "./../actions/authAction";

const initialState = {
    currentUser: null,
    error: null,
    isLoading: false,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNIN_REQUEST: {
            return {
                ...state,
                error: null,
                isLoading: true,
            };
        }
        case SIGNIN_SUCCESS: {
            return {
                currentUser: action.payload,
                error: null,
                isLoading: false,
            };
        }
        case SIGNIN_FAIL: {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        }
        case SIGNUP_REQUEST: {
            return {
                ...state,
                error: null,
                isLoading: true,
            };
        }
        case SIGNUP_SUCCESS: {
            return {
                currentUser: action.payload,
                error: null,
                isLoading: false,
            };
        }
        case SIGNUP_FAIL: {
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        }
        case SIGNOUT_REQUEST: {
            return {
                ...state,
                currentUser: null,
            };
        }
        default: {
            return state;
        }
    }
};

export default authReducer;
