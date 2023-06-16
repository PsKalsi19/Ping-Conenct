import axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";

export const getAllPosts=()=>axios.get(ENDPOINTS.ALL_POSTS)