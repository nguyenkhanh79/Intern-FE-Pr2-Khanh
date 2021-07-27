import { UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS } from "redux/actions/usersAction";

const {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
    GET_USER_ORDERS_REQUEST,
    GET_USER_ORDERS_SUCCESS,
    GET_USER_ORDERS_FAIL,
    REMOVE_ORDER_REQUEST,
    REMOVE_ORDER_SUCCESS,
    REMOVE_ORDER_FAIL,
    UPDATE_ORDER_FAIL,
} = require("redux/actions/ordersAction");

const initialState = {
    isCreating: false,
    createError: null,
    userOrders: [],
    isFetchingUserOrders: false,
    fetchUserOrdersFail: null,
    isRemoving: false,
    removeError: null,
    isUpdating: false,
    updateError: null
};

const ordersReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER_REQUEST: {
            return { ...state, isCreating: true, createError: null };
        }
        case CREATE_ORDER_SUCCESS: {
            return { ...state, isCreating: false };
        }
        case CREATE_ORDER_FAIL: {
            return { ...state, isCreating: false, createError: action.payload };
        }
        case GET_USER_ORDERS_REQUEST: {
            return {...state, isFetchingUserOrders: true, fetchUserOrdersFail: null}
        }
        case GET_USER_ORDERS_SUCCESS: {
            return {...state, isFetchingUserOrders: false, userOrders: action.payload}
        }
        case GET_USER_ORDERS_FAIL: {
            return {...state, isFetchingUserOrders: false, fetchUserOrdersFail: action.payload}
        }
        case REMOVE_ORDER_REQUEST: {
            return {...state, isRemoving: true, removeError: null}
        }
        case REMOVE_ORDER_SUCCESS: {
            return {...state, isRemoving: false}
        }
        case REMOVE_ORDER_FAIL: {
            return {...state, isRemoving: false, removeError: action.payload}
        }
        case UPDATE_USER_REQUEST: {
            return {...state, isUpdating: true, updateError: null}
        }
        case UPDATE_USER_SUCCESS: {
            return {...state, isUpdating: false}
        }
        case UPDATE_ORDER_FAIL: {
            return {...state, isUpdating: false, updateError: action.payload}
        }
        default: {
            return state;
        }
    }
};

export default ordersReducer;
