import { useContext, useEffect } from "react";
import { PostContext } from "../../context/PostProvider";
import PostCard from "../../components/post-card/PostCard";
import NoDataAvailable from "../../components/no-data-available/NoDataAvailable";
import { UserContext } from "./../../context/UserProvider";
import { USERS_ACTION } from "../../constants/users-actions";

const Bookmark = () => {
  const {
    postsState: { bookmarks, posts },
  } = useContext(PostContext);
  const {
    usersState: { selectedTheme },usersDispatch
  } = useContext(UserContext);
  const bookmarkedPosts = posts.filter(({ _id }) => bookmarks.includes(_id));
  useEffect(() => {
    document.title = "BOOKMARKS | PING CONNECT";
    usersDispatch({ type: USERS_ACTION.UPDATE_PAGE, payload: "bookmark" });
  }, [usersDispatch]);

  if (bookmarks && bookmarks.length === 0) {
    return (
      <NoDataAvailable
        message={`Save Posts for later, bookmark to see them again here. `}
      />
    );
  }

  return (
    <div className="flex flex-col items-center mt-2 space-y-8">
      {bookmarkedPosts.map((post) => (
        <PostCard post={post} key={post._id} />
      ))}
    </div>
  );
};

export default Bookmark;
