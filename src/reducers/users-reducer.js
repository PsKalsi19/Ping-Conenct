import { USERS_ACTION } from "../constants/users-actions";

const usersReducer = (state, { type, payload }) => {
  switch (type) {
    case USERS_ACTION.SET_ALL_USERS:
      return { ...state, users: payload };

    case USERS_ACTION.UPDATE_USER:
      return { ...state, users: updateUsersData(payload, state.users) };

    case USERS_ACTION.DISABLE_FOLLOW_BUTTON:
      return { ...state, disableButton: payload };
    default:
      return state;
  }
};

export default usersReducer;

const updateUsersData = (payload, state) => {
  return state.map((ele) => {
    const foundObj = payload.find(({ _id }) => _id === ele._id);
    return foundObj ? foundObj : ele;
  });
};
