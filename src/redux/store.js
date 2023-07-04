import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import postReducer from './reducer/posts.reducer';
import selectedPostReducer from './reducer/selectedPost.reducer';

const rootReducer = combineReducers({
    posts: postReducer,
    selected: selectedPostReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;