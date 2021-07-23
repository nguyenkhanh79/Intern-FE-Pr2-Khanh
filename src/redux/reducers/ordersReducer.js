const {
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    CREATE_ORDER_FAIL,
} = require("redux/actions/ordersAction");

const initialState = {
    isCreating: false,
    createError: null,
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
        default: {
            return state;
        }
    }
};

export default ordersReducer;
