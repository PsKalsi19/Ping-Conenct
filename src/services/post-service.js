import axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";

export const getAllPosts = () => axios.get(ENDPOINTS.ALL_POSTS);

export const getPostsByUsername = (username) => {
 return axios.get(`${ENDPOINTS.POSTS_BY_USER}/${username}`);
};
