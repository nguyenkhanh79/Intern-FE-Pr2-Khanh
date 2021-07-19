import {
    GET_ONE_USER_FAIL,
    GET_ONE_USER_REQUEST,
    GET_ONE_USER_SUCCESS,
} from "redux/actions/usersAction";

const initialState = {
    currentUser: null,
    data: [],
    isFetchingCurrentUser: false,
    isFetching: false,
    fetchCurrentUserError: null,
    fetchError: null,
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
        default: {
            return state;
        }
    }
};

export default usersReducer;
