import { call, put, select, delay, fork, join, takeLatest } from "redux-saga/effects";
import {
    GET_ONE_PRODUCT_REQUEST,
    GET_PRODUCTS_REQUEST,
    CREATE_PRODUCT_REQUEST,
    getOneProductSuccess,
    getOneProductFail,
    getProductsSuccess,
    getProductsFail,
    createProductSuccess,
    createProductFail,
} from "./../actions/productsAction";
import productsApi from "./../../apis/productsApi";

function* fetchOneProduct(action) {
    try {
        const fetchTask = yield fork(productsApi.get, action.payload);
        yield delay(700);
        const response = yield join(fetchTask);
        yield put(getOneProductSuccess(response));
    } catch (error) {
        yield put(getOneProductFail(error));
    }
}

function* fetchProducts() {
    try {
        const fetchTask = yield fork(productsApi.getAll);
        yield delay(700);
        const response = yield join(fetchTask);
        yield put(getProductsSuccess(response));
    } catch (error) {
        yield put(getProductsFail(error));
    }
}

function* createProduct(action) {
    try {
        const createTask = yield fork(productsApi.create, action.payload);
        yield delay(700);
        const response = yield join(createTask);
        yield put(createProductSuccess(response));
    } catch (error) {
        yield put(createProductFail(error));
    }
}

function* watchProductsRequest() {
    yield takeLatest(GET_ONE_PRODUCT_REQUEST, fetchOneProduct);
    yield takeLatest(GET_PRODUCTS_REQUEST, fetchProducts);
    yield takeLatest(CREATE_PRODUCT_REQUEST, createProduct);
}

export default watchProductsRequest;
