import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import {
  addBookmark,
  deletePost,
  dislikePost,
  getAllPosts,
  likePost,
  removeBookmark,
} from "../services/post-service";
import { postInitialState } from "./initial-states/PostInitialState";
import postReducer from "../reducers/posts-reducer";
import { delayResult, errorHandler } from "../services/common-util";
import POSTS_ACTIONS from "../constants/posts-actions";
import { UserContext } from "./UserProvider";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";

export const PostContext = createContext();

const PostProvider = ({ children }) => {
  const [postsState, postsDispatch] = useReducer(postReducer, postInitialState);
  const [fileDetails, setFilesDetails] = useState();
  const { posts } = postsState;
  const {
    token, user
  } = useSelector(store => store.auth);
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
      toast.success("Post Liked");
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
      toast.success("Post Disliked");
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
      toast.success("Post Deleted");
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
      toast.success("Post Bookmarked");
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
      toast.success("Removed Bookmark");
      postsDispatch({ type: POSTS_ACTIONS.SET_BOOKMARKS, payload: bookmarks });
      postsDispatch({ type: POSTS_ACTIONS.DISABLE_POST_BUTTONS, payload: "" });
    } catch (error) {
      errorHandler(error);
      postsDispatch({ type: POSTS_ACTIONS.DISABLE_POST_BUTTONS, payload: "" });
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
        fileDetails,
        setFilesDetails,
        checkMediaType,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
export default PostProvider;
