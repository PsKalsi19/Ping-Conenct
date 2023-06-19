import { createContext, useContext, useEffect, useReducer } from "react";
import { addBookmark, deletePost, dislikePost, getAllPosts, getBookmark, getPostsByUsername, likePost, removeBookmark } from "../services/post-service";
import { AuthContext } from "./AuthProvider";
import { postInitialState } from "./initial-states/PostInitialState";
import postReducer from '../reducers/posts-reducer';
import { errorHandler } from "../services/common-util";
import POSTS_ACTIONS from "../constants/posts-actions";

export const PostContext = createContext()

const PostProvider = ({ children }) => {
    const [postsState, postsDispatch] = useReducer(postReducer, postInitialState)
    const { posts } = postsState
    // Auth Provider
    const { authState: { token, user } } = useContext(AuthContext)

    const getPosts = async () => {
        try {
            const { data: { posts } } = await getAllPosts();
            postsDispatch({ type: POSTS_ACTIONS.SET_POSTS, payload: posts });
        }
        catch (error) {
            errorHandler(error)
        }
    }

    const getPostsByUser = async () => {
        try {
            const data = await getPostsByUsername(user.username)
        } catch (error) {
            errorHandler(error)
        }
    }

    const getUsersFollowersList = (user) => user?.followers?.map(({ username }) => username) ?? []

    const getUsersFollowingList = (user) => user?.following?.map(({ username }) => username) ?? []

    const getUserAndFollowingsUsername = (user) => user?.following?.reduce((acc, ele) => [...acc, ele.username], [user.username]) ?? [];


    // Cards Actions
    const handlePostLike = async (postId) => {
        try {
            const { data: { posts } } = await likePost(postId, token)
            postsDispatch({ type: POSTS_ACTIONS.SET_POSTS, payload: posts });
        } catch (error) {
            errorHandler(error)
        }
    }

    const handlePostDislike = async (postId) => {
        try {
            const { data: { posts } } = await dislikePost(postId, token)
            postsDispatch({ type: POSTS_ACTIONS.SET_POSTS, payload: posts });
        } catch (error) {
            errorHandler(error)
        }
    }

    const handleDeletePost = async (postId) => {
        try {
            const { data: { posts } } = await deletePost(postId)
            postsDispatch({ type: POSTS_ACTIONS.SET_POSTS, payload: posts });
        } catch (error) {
            errorHandler(error)
        }
    }

    const handleAddToBookmark = async (postId) => {
        try {
            const { data: {bookmarks} } = await addBookmark(postId)
            postsDispatch({ type: POSTS_ACTIONS.SET_BOOKMARKS, payload: bookmarks })
        } catch (error) {
            errorHandler(error)
        }
    }

    const handleRemoveFromBookmark = async (postId) => {
        try {
            const { data: {bookmarks} } = await removeBookmark(postId)
            postsDispatch({ type: POSTS_ACTIONS.SET_BOOKMARKS, payload: bookmarks })
        } catch (error) {
            errorHandler(error)
        }
    }

    const handleGetBookmarks=async()=>{
        try {
            const { data: {bookmarks} }= await getBookmark()
           postsDispatch({ type: POSTS_ACTIONS.SET_BOOKMARKS, payload: bookmarks })
        } catch (error) {
            errorHandler(error)
        }
    }

    useEffect(() => {
        if (token === null) return
        getPosts();
    }, [token])

    useEffect(() => {
        if (posts && posts.length > 0) {
            const filterAllUserPostFeed = () => {
                const filteredPosts = posts.filter((post) => getUserAndFollowingsUsername(user).includes(post.username))
                postsDispatch({ type: POSTS_ACTIONS.SET_USER_FEED, payload: filteredPosts })
            }
            filterAllUserPostFeed()
        }
    }, [posts, user])

    return (
        <PostContext.Provider
            value={{
                postsState,
                postsDispatch,
                getPostsByUser,
                getUsersFollowersList,
                getUsersFollowingList,
                handlePostLike,
                handlePostDislike,
                handleDeletePost,
                handleAddToBookmark,
                handleRemoveFromBookmark,
                // handleGetBookmarks
            }}>
            {children}
        </PostContext.Provider >
    )
}
export default PostProvider