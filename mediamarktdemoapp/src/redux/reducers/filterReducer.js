import { ActionTypes } from "../constants/action-types"

const initialState = {
    filter: "",

}
export const filterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.SET_FILTER:
        return { ...state, filteredText: payload };    
      default:
        return state;
    }
  };

