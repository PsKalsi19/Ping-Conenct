import POSTS_ACTIONS from "../constants/posts-actions";

const postReducer = (state, { type, payload }) => {
  switch (type) {
    case POSTS_ACTIONS.SET_POSTS:
      return { ...state, posts: payload };

    case POSTS_ACTIONS.SET_USER_FEED:
      return { ...state, currentUserFeed: payload };

    case POSTS_ACTIONS.SET_BOOKMARKS:
      return { ...state, bookmarks: payload };

    default:
      return state;
  }
};

export default postReducer;
