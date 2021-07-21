import i18n from "i18n.js";
import { toast } from "react-toastify";
import { delay, join, put, spawn, takeLatest, call } from "redux-saga/effects";
import productsApi from "./../../apis/productsApi";
import {
    createProductFail,
    createProductSuccess,
    CREATE_PRODUCT_REQUEST,
    deleteProductFail,
    deleteProductSuccess,
    DELETE_PRODUCT_REQUEST,
    getOneProductFail,
    getOneProductSuccess,
    getProductsFail,
    getProductsSuccess,
    GET_ONE_PRODUCT_REQUEST,
    GET_PRODUCTS_REQUEST,
    updateProductFail,
    updateProductSuccess,
    UPDATE_PRODUCT_REQUEST,
} from "./../actions/productsAction";

function* fetchOneProduct(action) {
    try {
        const fetchTask = yield spawn(productsApi.get, action.payload);
        const response = yield join(fetchTask);
        yield put(getOneProductSuccess(response));
    } catch (error) {
        yield put(getOneProductFail(error));
    }
}

function* fetchProducts() {
    try {
        const fetchTask = yield spawn(productsApi.getAll);
        yield delay(700);
        const response = yield join(fetchTask);
        yield put(getProductsSuccess(response));
    } catch (error) {
        yield put(getProductsFail(error));
    }
}

function* createProduct(action) {
    try {
        const createTask = yield spawn(productsApi.create, action.payload);
        yield delay(700);
        const response = yield join(createTask);
        yield put(createProductSuccess(response));
        toast.success(i18n.t("create product success"));
    } catch (error) {
        yield put(createProductFail(error));
        toast.error(i18n.t("create product fail"));
    }
}

function* updateProduct(action) {
    try {
        const updateTask = yield spawn(productsApi.update, action.payload);
        yield delay(700);
        const response = yield join(updateTask);
        yield put(updateProductSuccess(response));
        toast.success(i18n.t("update product success"));
    } catch (error) {
        yield put(updateProductFail(error));
        toast.error(i18n.t("update product fail"));
    }
}

function* deleteProduct(action) {
    try {
        yield call(productsApi.remove, action.payload);
        yield put(deleteProductSuccess());
        toast.success(i18n.t("delete product success"));
    } catch (error) {
        yield put(deleteProductFail(error));
        toast.error(i18n.t("delete product fail"));
    }
}

function* watchProductsRequest() {
    yield takeLatest(GET_ONE_PRODUCT_REQUEST, fetchOneProduct);
    yield takeLatest(GET_PRODUCTS_REQUEST, fetchProducts);
    yield takeLatest(CREATE_PRODUCT_REQUEST, createProduct);
    yield takeLatest(UPDATE_PRODUCT_REQUEST, updateProduct);
    yield takeLatest(DELETE_PRODUCT_REQUEST, deleteProduct);
}

export default watchProductsRequest;
