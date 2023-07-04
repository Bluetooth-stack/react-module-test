import { SELECTED_POST } from "../actions/actionTypes";

let initial = null;

const selectedPostReducer = (state = initial, action) => {
    switch (action.type) {
        case SELECTED_POST:
            return action.payload
        default:
            return state
    }
}

export default selectedPostReducer;