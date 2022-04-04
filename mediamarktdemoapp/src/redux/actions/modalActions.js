import { ActionTypes } from "../constants/action-types"

export const setDisplayDetailModal = (display) => {
    return {
        type: ActionTypes.DISPLAY_MODAL,
        payload: display
    }
}