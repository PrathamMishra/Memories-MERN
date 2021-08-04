import { FETCH_ALL, CREATE, DELETE, UPDATE } from "../constants/actionTypes";
import * as api from "../api";

export const getPosts = () => async (dispatch) =>{
    try {
        const { data } =await api.fetchPosts();
        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) =>{
    try {
        const {data} = await api.createPosts(post);
        dispatch({type: CREATE,payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const updatePost = (currentId, updatedPost) => async (dispatch) =>{
    try {
        const { data } = await api.updatePost(currentId,updatedPost);
        dispatch({type: UPDATE,payload: data});
    } catch (error) {
        console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({type: DELETE,payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);
        dispatch({type: UPDATE,payload: data});
    } catch (error) {
        console.log(error);
    }
}