import { ActionTypes } from "../constants/action-types"

const initialState = {
    loading: false,
    product: {},
    products: [],
    displayAddModal: false
}

export const selectedProductsReducer = (state = {}, { type, payload }) => {
    switch (type) {
      case ActionTypes.SELECTED_PRODUCT:
        return { ...state, ...payload };
      case ActionTypes.REMOVE_SELECTED_PRODUCT:
        return {};
      default:
        return state;
    }
  };

  export const productsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_PRODUCTS:
        return { ...state, products: payload };
      default:
        return state;
    }
  };
  

  export const loading = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.LOADING:
        return { ...state, products: payload };
      default:
        return state;
    }
  };
