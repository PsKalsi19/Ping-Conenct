import axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";

export const getLoginUser=(payload)=> axios.post(ENDPOINTS.LOGIN,payload)

export const getSignUpUser=(payload)=> axios.post(ENDPOINTS.SIGNUP,payload)