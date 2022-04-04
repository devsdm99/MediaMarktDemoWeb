import { ActionTypes } from "../constants/action-types"

export const setFilterText = (filter) => {
    return {
        type: ActionTypes.SET_FILTER,
        payload: filter
    }
}
