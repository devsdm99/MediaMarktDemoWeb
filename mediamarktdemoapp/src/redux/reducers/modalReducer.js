import { ActionTypes } from "../constants/action-types"

const modalInitialState = {
    display: false
  };

  export const modalDetailReducer = (state = modalInitialState, { type, payload }) => {
    switch (type) {
      case ActionTypes.DISPLAY_MODAL:
        return { ...state, display: payload };
      default:
        return state;
    }
  };
