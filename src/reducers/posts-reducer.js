import POSTS_ACTIONS from "../constants/posts-actions";

const postReducer = (state, { type, payload }) => {
  switch (type) {
    case POSTS_ACTIONS.SET_POSTS:
      return { ...state, posts: payload };

    case POSTS_ACTIONS.SET_USER_FEED:
      return { ...state, currentUserFeed: payload };

    case POSTS_ACTIONS.SET_BOOKMARKS:
      return { ...state, bookmarks: payload };

      case POSTS_ACTIONS.SET_SORT:
        return {...state, current_sortby:payload}

    case POSTS_ACTIONS.SET_LOADING:
      return {...state,showLoader:payload}

    default:
      return state;
  }
};

export default postReducer;
