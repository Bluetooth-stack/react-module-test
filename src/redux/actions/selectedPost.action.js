import { SELECTED_POST } from "./actionTypes";

export const selectedPost = (post) => {
    return {
        type: SELECTED_POST,
        payload: post
    }
}