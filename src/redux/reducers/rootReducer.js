import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import addressReducer from "./addressReducer";
import authReducer from "./authReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
    key: "auth",
    storage: storage,
    blacklist: ["error"],
};

export default combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    cart: cartReducer,
    address: addressReducer,
    auth: persistReducer(authPersistConfig, authReducer),
});
