import i18n from "i18n.js";
import { toast } from "react-toastify";
import { delay, join, put, spawn, takeLatest } from "redux-saga/effects";
import history from "routing/history";
import {
    createOrderFail,
    createOrderSuccess,
    CREATE_ORDER_REQUEST,
} from "redux/actions/ordersAction";
import ordersApi from "apis/ordersApi";
import { ORDER_PATH } from "constant/route";
import { deleteAllCart } from "redux/actions/cartAction";

function* createOrder(action) {
    try {
        const createTask = yield spawn(ordersApi.create, action.payload);
        yield delay(700);
        const response = yield join(createTask);
        yield put(createOrderSuccess());
        yield put(deleteAllCart());
        history.push(ORDER_PATH);
    } catch (error) {
        yield put(createOrderFail(error));
        toast.error(i18n.t("create order fail"));
    }
}
function* watchOrdersRequest() {
    yield takeLatest(CREATE_ORDER_REQUEST, createOrder);
}

export default watchOrdersRequest;
