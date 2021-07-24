export const GET_ONE_USER_REQUEST = "GET_ONE_USER_REQUEST";
export const GET_ONE_USER_SUCCESS = "GET_ONE_USER_SUCCESS";
export const GET_ONE_USER_FAIL = "GET_ONE_USER_FAIL";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAIL = "UPDATE_USER_FAIL";

export const getOneUserRequest = () => {
    return {
        type: GET_ONE_USER_REQUEST,
    }
}

export const getOneUserSuccess = (userData) => {
    return {
        type: GET_ONE_USER_SUCCESS,
        payload: userData
    }
}

export const getOneUserFail = (error) => {
    return {
        type: GET_ONE_USER_FAIL,
        payload: error
    }
}

export const updateUserRequest = (userData) => {
    return {
        type: UPDATE_USER_REQUEST,
        payload: userData
    }
}
export const updateUserSuccess = () => {
    return {
        type: UPDATE_USER_SUCCESS,
    }
}
export const updateUserFail = (error) => {
    return {
        type: UPDATE_USER_FAIL,
        payload: error
    }
}