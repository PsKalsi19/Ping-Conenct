import axios from "axios";
import { ENDPOINTS } from "../constants/endpoints";

export const getAllUsersList=()=>axios.get(ENDPOINTS.ALL_USERS)