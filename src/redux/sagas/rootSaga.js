import { spawn } from "redux-saga/effects";

import categoriesSaga from "./categoriesSaga";
import productsSaga from "./productsSaga";
import addressSaga from "./addressSaga";

function* rootSaga() {
    yield spawn(categoriesSaga);
    yield spawn(productsSaga);
    yield spawn(addressSaga);
}

export default rootSaga;
