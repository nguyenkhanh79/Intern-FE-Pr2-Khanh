import usersApi from "apis/usersApi";
import { delay, join, put, spawn, takeLatest } from "redux-saga/effects";
import { signinSuccess } from "redux/actions/authAction";
import { getOneUserFail, getOneUserSuccess, GET_ONE_USER_REQUEST, updateUserFail, updateUserSuccess, UPDATE_USER_REQUEST } from "redux/actions/usersAction";
import i18n from "i18n.js";
import { toast } from "react-toastify";

function* fetchOneUser(action) {
    try {
        const fetchTask = yield spawn(usersApi.get, action.payload);
        yield delay(700);
        const response = yield join(fetchTask);
        yield put(getOneUserSuccess(response));
    } catch (error) {
        yield put(getOneUserFail(error));
    }
}

function* updateUser(action) {
    try {
        const updateTask = yield spawn(usersApi.update, action.payload);
        yield delay(700);
        const response = yield join(updateTask);
        yield put(updateUserSuccess(response));
        yield put(signinSuccess(response));
        toast.success(i18n.t("update profile success"));
    } catch(error) {
        yield put(updateUserFail(error))
        toast.error(i18n.t("update profile fail"));
    }
}

function* watchUsersRequest() {
    yield takeLatest(GET_ONE_USER_REQUEST, fetchOneUser);
    yield takeLatest(UPDATE_USER_REQUEST, updateUser);
}

export default watchUsersRequest;
