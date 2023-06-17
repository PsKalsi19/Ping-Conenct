import { USERS_ACTION } from "../constants/users-actions";

const usersReducer = (state, { type, payload }) => {
  switch (type) {
    case USERS_ACTION.SET_ALL_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};

export default usersReducer;
