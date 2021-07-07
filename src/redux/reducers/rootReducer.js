import {combineReducers} from 'redux';
import categoriesReducer from './categoriesReducer';
import productsReducer from './productsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  categories: categoriesReducer,
  products: productsReducer,
  cart: cartReducer
});
