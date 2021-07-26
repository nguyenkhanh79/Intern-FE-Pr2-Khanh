import { spawn } from "redux-saga/effects";

import categoriesSaga from "./categoriesSaga";
import productsSaga from "./productsSaga";
import addressSaga from "./addressSaga";
import authSaga from "./authSaga";
import ordersSaga from "./ordersSaga";

function* rootSaga() {
    yield spawn(categoriesSaga);
    yield spawn(productsSaga);
    yield spawn(addressSaga);
    yield spawn(authSaga);
    yield spawn(ordersSaga)
}

export default rootSaga;
