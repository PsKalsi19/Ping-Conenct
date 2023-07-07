import { useContext, useEffect } from "react";
import PostCard from "../../components/post-card/PostCard";
import Tabs from "./../../components/tabs/Tabs";
import { PostContext } from "../../context/PostProvider";
import PostWrite from "../../components/post-write/PostWrite";
import POSTS_ACTIONS from "../../constants/posts-actions";
import NoDataAvailable from "../../components/no-data-available/NoDataAvailable";
import { delayResult } from "../../services/common-util";
import PostCardSkeleton from "../../components/post-card-skeleton/PostCardSkeleton";
import { AuthContext } from "../../context/AuthProvider";
import { UserContext } from "../../context/UserProvider";
import { USERS_ACTION } from "../../constants/users-actions";

const Home = () => {
  const {
    postsState: { currentUserFeed, showLoader },
    postsDispatch,
  } = useContext(PostContext);
  const {
    authState: { user },
  } = useContext(AuthContext);

  const { usersDispatch } = useContext(UserContext);

  const profilePic = user.profilePic;
  const handleTabChange = (e) => {
    e === 0
      ? postsDispatch({ type: POSTS_ACTIONS.SET_SORT, payload: "latest" })
      : postsDispatch({ type: POSTS_ACTIONS.SET_SORT, payload: "trending" });
  };
  const tabTypes = ["Latest", "Trending"];
  useEffect(() => {
    postsDispatch({ type: POSTS_ACTIONS.SET_LOADING, payload: true });
    delayResult(() => {
      postsDispatch({ type: POSTS_ACTIONS.SET_LOADING, payload: false });
    }, 3000);
    document.title = "HOME | PING CONNECT";
    usersDispatch({ type: USERS_ACTION.UPDATE_PAGE, payload: "home" });
  }, [postsDispatch, usersDispatch]);
  return (
    <div className="relative">
      <div className="sticky z-10 bg-orange-50 dark:bg-stone-900 top-16 md:top-20 lg:top-20">
        <div className="hidden p-4 mb-4 border border-gray-300 lg:flex backdrop-blur-md rounded-xl">
          <img
            className="mr-2 rounded-full w-14 h-14"
            src={profilePic}
            alt="avatar"
          />
          <PostWrite />
        </div>
        <Tabs handleTabChange={handleTabChange} tabTypes={tabTypes} />
      </div>
      <div className="flex flex-col items-center mt-2 space-y-4">
        {!showLoader &&
          currentUserFeed &&
          currentUserFeed.length > 0 &&
          currentUserFeed.map((post) => (
            <PostCard post={post} key={post._id} />
          ))}
        {showLoader && [1, 2, 3].map((ele) => <PostCardSkeleton key={ele} />)}
      </div>

      <div className="flex flex-col items-center mt-2 space-y-4">
        {!showLoader && currentUserFeed && currentUserFeed.length === 0 && (
          <NoDataAvailable
            message={`Starting with an empty
                feed? Time to unleash your thoughts and let the world
                know what's on your mind!`}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
