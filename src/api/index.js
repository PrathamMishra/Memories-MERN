import axios from "axios";

const API = axios.create({ baseURL: "https://localhost:5000" });

API.interceptors.request.use((req)=>{
    req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem("profile"))?.token}`;

    return req;
})

export const fetchPosts = () => API.get("/posts");
export const createPosts = (newPost) => API.post("/posts",newPost);
export const updatePost = (currentId, updatedPost) => API.patch(`posts/${currentId}`, updatedPost);
export const deletePost = (id)=> API.delete(`posts/${id}`);
export const likePost = (id) => API.patch(`posts/${id}/likePost`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);