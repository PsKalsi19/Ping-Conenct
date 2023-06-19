import axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";
import { DEFAULT_HEADERS } from "./common-util";

export const getAllPosts = () => axios.get(ENDPOINTS.POSTS);

export const getPostsByUsername = (username) =>
  axios.get(`${ENDPOINTS.POSTS_BY_USER}/${username}`);

export const likePost = (postId) =>
  axios.post(`${ENDPOINTS.LIKE_POST}/${postId}`, {}, DEFAULT_HEADERS());

export const dislikePost = (postId) =>
  axios.post(`${ENDPOINTS.DISLIKE_POST}/${postId}`, {}, DEFAULT_HEADERS());

export const deletePost = (postId) =>
  axios.delete(`${ENDPOINTS.POSTS}/${postId}`, DEFAULT_HEADERS());

// Bookmarks
export const addBookmark = (postId) =>
  axios.post(`${ENDPOINTS.BOOKMARK}/${postId}`, {}, DEFAULT_HEADERS());

export const removeBookmark = (postId) =>
  axios.post(`${ENDPOINTS.REMOVE_BOOKMARK}/${postId}`,{}, DEFAULT_HEADERS());

export const getBookmark = () => axios.get(ENDPOINTS.BOOKMARK, DEFAULT_HEADERS());
