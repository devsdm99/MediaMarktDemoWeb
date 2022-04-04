import { combineReducers } from "redux";
import {productsReducer, selectedProductsReducer } from "./productsReducer";
import { filterReducer } from "./filterReducer";
import { modalDetailReducer } from "./modalReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
  product: selectedProductsReducer,
  filter: filterReducer,
  displayDetailModal: modalDetailReducer,
});

export default reducers;