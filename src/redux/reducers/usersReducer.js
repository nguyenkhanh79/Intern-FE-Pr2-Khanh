import {
    GET_ONE_USER_FAIL,
    GET_ONE_USER_REQUEST,
    GET_ONE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
} from "redux/actions/usersAction";

const initialState = {
    currentUser: null,
    data: [],
    isFetchingCurrentUser: false,
    isFetching: false,
    fetchCurrentUserError: null,
    fetchError: null,
    isUpdating: false,
    updateError: null
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ONE_USER_REQUEST: {
            return {
                ...state,
                isFetchingCurrentUser: true,
                fetchCurrentUserError: null,
            };
        }
        case GET_ONE_USER_SUCCESS: {
            return {
                ...state,
                currentUser: action.payload,
                isFetchingCurrentUser: false,
                fetchCurrentUserError: null,
            };
        }
        case GET_ONE_USER_FAIL: {
            return {
                ...state,
                isFetchingCurrentUser: false,
                fetchCurrentUserError: action.payload,
            };
        }
        case UPDATE_USER_REQUEST: {
            return {
                ...state,
                isUpdating: true,
                updateError: null
            }
        }
        case UPDATE_USER_SUCCESS: {
            return {
                ...state,
                isUpdating: false,
            }
        }
        case UPDATE_USER_FAIL: {
            return {
                ...state,
                isUpdating: false,
                updateError: action.payload
            }
        }
        default: {
            return state;
        }
    }
};

export default usersReducer;
