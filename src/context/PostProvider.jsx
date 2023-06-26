import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  addBookmark,
  createPost,
  deletePost,
  dislikePost,
  editPost,
  getAllPosts,
  getPostsByUsername,
  likePost,
  removeBookmark,
} from "../services/post-service";
import { AuthContext } from "./AuthProvider";
import { postInitialState } from "./initial-states/PostInitialState";
import postReducer from "../reducers/posts-reducer";
import { errorHandler } from "../services/common-util";
import POSTS_ACTIONS from "../constants/posts-actions";
import { UserContext } from "./UserProvider";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(postReducer, postInitialState);
  const [toggleDialog, setToggleDialog] = useState({
    showDialog: false,
    selectedPost: {},
  });
  const { posts, current_sortby, currentUserFeed } = postsState;
  // Auth Provider
  const {
    authState: { token, user },
  } = useContext(AuthContext);
  // User Provider
  const { getUserAndFollowingsUsername } = useContext(UserContext);

  const getPosts = async () => {
    try {
      const {
        data: { posts },
      } = await getAllPosts();
      postsDispatch({ type: POSTS_ACTIONS.SET_POSTS, payload: posts });
    } catch (error) {
      errorHandler(error);
    }
  };

  const getPostsByUser = async () => {
    try {
      const data = await getPostsByUsername(user.username);
    } catch (error) {
      errorHandler(error);
    }
  };

  // Cards Actions
  const handlePostLike = async (postId) => {
    try {
      const {
        data: { posts },
      } = await likePost(postId, token);
      postsDispatch({ type: POSTS_ACTIONS.SET_POSTS, payload: posts });
    } catch (error) {
      errorHandler(error);
    }
  };

  const handlePostDislike = async (postId) => {
    try {
      const {
        data: { posts },
      } = await dislikePost(postId, token);
      postsDispatch({ type: POSTS_ACTIONS.SET_POSTS, payload: posts });
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleDeletePost = async (postId) => {
    try {
      const {
        data: { posts },
      } = await deletePost(postId);
      postsDispatch({ type: POSTS_ACTIONS.SET_POSTS, payload: posts });
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleAddToBookmark = async (postId) => {
    try {
      const {
        data: { bookmarks },
      } = await addBookmark(postId);
      postsDispatch({ type: POSTS_ACTIONS.SET_BOOKMARKS, payload: bookmarks });
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleRemoveFromBookmark = async (postId) => {
    try {
      const {
        data: { bookmarks },
      } = await removeBookmark(postId);
      postsDispatch({ type: POSTS_ACTIONS.SET_BOOKMARKS, payload: bookmarks });
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleAddPost = async (postData) => {
    try {
      const {
        data: { posts },
      } = await createPost(postData);
      postsDispatch({ type: POSTS_ACTIONS.SET_POSTS, payload: posts });
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleEditPost = async (postData) => {
    try {
      const {
        data: { posts },
      } = await editPost(postData);
      postsDispatch({ type: POSTS_ACTIONS.SET_POSTS, payload: posts });
    } catch (error) {
      errorHandler(error);
    }
  };

  useEffect(() => {
    if (token === null) return;
    getPosts();
  }, [token]);

  useEffect(() => {
    if (posts && posts.length > 0) {
      const filterAllUserPostFeed = () => {
        const filteredPosts = posts.filter((post) =>
          getUserAndFollowingsUsername(user).includes(post.username)
        );
        postsDispatch({
          type: POSTS_ACTIONS.SET_USER_FEED,
          payload: filteredPosts,
        });
      };
      filterAllUserPostFeed();
    }
  }, [getUserAndFollowingsUsername, posts, user]);

  useEffect(() => {
    const sortFeed = () => {
      let sortedFeed = [];
      if (currentUserFeed.length === 0) return;
      switch (current_sortby) {
        case "trending":
          sortedFeed = currentUserFeed.sort(
            (a, b) => b.likes.likeCount - a.likes.likeCount
          );
          break;
        case "latest":
          sortedFeed = currentUserFeed.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
          );
          break;
        default:
          sortedFeed = currentUserFeed;
          break;
      }
      postsDispatch({ type: POSTS_ACTIONS.SET_USER_FEED, payload: sortedFeed });
    };
    sortFeed();
  }, [currentUserFeed, current_sortby]);

  return (
    <PostContext.Provider
      value={{
        postsState,
        postsDispatch,
        getPostsByUser,
        handlePostLike,
        handlePostDislike,
        handleDeletePost,
        handleAddToBookmark,
        handleRemoveFromBookmark,
        // handleGetBookmarks,
        toggleDialog,
        setToggleDialog,
        handleAddPost,
        handleEditPost,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export default PostProvider;
