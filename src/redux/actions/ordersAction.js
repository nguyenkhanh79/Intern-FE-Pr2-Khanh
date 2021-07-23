export const CREATE_ORDER_REQUEST = "CREATE_ORDER_REQUEST";
export const CREATE_ORDER_SUCCESS = "CREATE_ORDER_SUCCESS";
export const CREATE_ORDER_FAIL = "CREATE_ORDER_FAIL";

export const createOrderRequest = (orderData) => {
    return {
        type: CREATE_ORDER_REQUEST,
        payload: orderData,
    };
};

export const createOrderSuccess = () => {
    return {
        type: CREATE_ORDER_SUCCESS,
    };
};

export const createOrderFail = (error) => {
    return {
        type: CREATE_ORDER_FAIL,
        payload: error
    };
};
