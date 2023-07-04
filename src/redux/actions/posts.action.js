import { FETCH_POST_FAILURE, FETCH_POST_SUCCESS, FETCH_POST_REQUEST } from "./actionTypes";
import axios from 'axios'


export const fetchPostRequest = ()=>{
    return{
        type: FETCH_POST_REQUEST
    }
}

export const fetchPostSuccess = (data)=>{
    return{
        type: FETCH_POST_SUCCESS,
        payload: data
    }
}

export const fetchPostFailure = (error) =>{
    return{
        type: FETCH_POST_FAILURE,
        payload: error
    }
}



export const fetchData = ()=>{
    return async (dispatch)=>{
        dispatch(fetchPostRequest())
        try{
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            dispatch(fetchPostSuccess(response.data));
        }
        catch(err){
            dispatch(fetchPostFailure(err.message));
        }
    }
}