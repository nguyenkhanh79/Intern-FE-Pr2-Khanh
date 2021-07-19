import usersApi from "apis/usersApi";
import { delay, join, put, spawn, takeLatest } from "redux-saga/effects";
import { getOneUserFail, getOneUserSuccess, GET_ONE_USER_REQUEST } from "redux/actions/usersAction";

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

function* watchUsersRequest() {
    yield takeLatest(GET_ONE_USER_REQUEST, fetchOneUser);
}

export default watchUsersRequest;
