export const GET_ONE_USER_REQUEST = "GET_ONE_USER_REQUEST";
export const GET_ONE_USER_SUCCESS = "GET_ONE_USER_SUCCESS";
export const GET_ONE_USER_FAIL = "GET_ONE_USER_FAIL";

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