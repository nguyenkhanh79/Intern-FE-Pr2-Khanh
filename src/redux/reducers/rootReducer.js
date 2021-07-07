import {combineReducers} from 'redux';
import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';
import addressReducer from './addressReducer';

export default combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer,
  address: addressReducer
});
