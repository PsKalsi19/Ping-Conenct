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
  likePost,
  removeBookmark,
} from "../services/post-service";
import { AuthContext } from "./AuthProvider";
import { postInitialState } from "./initial-states/PostInitialState";
import postReducer from "../reducers/posts-reducer";
import { delayResult, errorHandler } from "../services/common-util";
import POSTS_ACTIONS from "../constants/posts-actions";
import { UserContext } from "./UserProvider";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(postReducer, postInitialState);
  const [toggleDialog, setToggleDialog] = useState({
    showDialog: false,
    selectedPost: {},
  });
  const [fileDetails, setFilesDetails] = useState();
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

  // Cards Actions
  const handlePostLike = async (postId) => {
    postsDispatch({
      type: POSTS_ACTIONS.DISABLE_POST_BUTTONS,
      payload: postId,
    });
    try {
      const {
        data: { posts },
      } = await likePost(postId, token);
      postsDispatch({ type: POSTS_ACTIONS.SET_POSTS, payload: posts });
      delayResult(() => {
        postsDispatch({
          type: POSTS_ACTIONS.DISABLE_POST_BUTTONS,
          payload: "",
        });
      }, 500);
    } catch (error) {
      errorHandler(error);
      delayResult(() => {
        postsDispatch({
          type: POSTS_ACTIONS.DISABLE_POST_BUTTONS,
          payload: "",
        });
      }, 500);
    }
  };

  const handlePostDislike = async (postId) => {
    postsDispatch({
      type: POSTS_ACTIONS.DISABLE_POST_BUTTONS,
      payload: postId,
    });
    try {
      const {
        data: { posts },
      } = await dislikePost(postId, token);
      postsDispatch({ type: POSTS_ACTIONS.SET_POSTS, payload: posts });
      postsDispatch({ type: POSTS_ACTIONS.DISABLE_POST_BUTTONS, payload: "" });
    } catch (error) {
      errorHandler(error);
      postsDispatch({ type: POSTS_ACTIONS.DISABLE_POST_BUTTONS, payload: "" });
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
    postsDispatch({
      type: POSTS_ACTIONS.DISABLE_POST_BUTTONS,
      payload: postId,
    });
    try {
      const {
        data: { bookmarks },
      } = await addBookmark(postId);
      postsDispatch({ type: POSTS_ACTIONS.SET_BOOKMARKS, payload: bookmarks });
      postsDispatch({ type: POSTS_ACTIONS.DISABLE_POST_BUTTONS, payload: "" });
    } catch (error) {
      errorHandler(error);
      postsDispatch({ type: POSTS_ACTIONS.DISABLE_POST_BUTTONS, payload: "" });
    }
  };

  const handleRemoveFromBookmark = async (postId) => {
    postsDispatch({
      type: POSTS_ACTIONS.DISABLE_POST_BUTTONS,
      payload: postId,
    });
    try {
      const {
        data: { bookmarks },
      } = await removeBookmark(postId);
      postsDispatch({ type: POSTS_ACTIONS.SET_BOOKMARKS, payload: bookmarks });
      postsDispatch({ type: POSTS_ACTIONS.DISABLE_POST_BUTTONS, payload: "" });
    } catch (error) {
      errorHandler(error);
      postsDispatch({ type: POSTS_ACTIONS.DISABLE_POST_BUTTONS, payload: "" });
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

  const checkMediaType = (mediaLink) => {
    if (mediaLink.includes("/image/")) return { type: "image" };
    if (mediaLink.includes("/video/")) return { type: "video" };
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
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
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
        handlePostLike,
        handlePostDislike,
        handleDeletePost,
        handleAddToBookmark,
        handleRemoveFromBookmark,
        toggleDialog,
        setToggleDialog,
        handleAddPost,
        handleEditPost,
        fileDetails,
        setFilesDetails,
        checkMediaType
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export default PostProvider;
