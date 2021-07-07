import { spawn } from "redux-saga/effects";

import categoriesSaga from "./categoriesSaga";
import productsSaga from "./productsSaga";
import addressSaga from "./addressSaga";
import authSaga from "./authSaga";

function* rootSaga() {
    yield spawn(categoriesSaga);
    yield spawn(productsSaga);
    yield spawn(addressSaga);
    yield spawn(authSaga);
}

export default rootSaga;
