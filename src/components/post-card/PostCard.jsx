import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { HeartIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
// import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { getUserFromLocalStorage } from "../../services/localstorage-service";
import PostCardMenu from "../post-card-menu/PostCardMenu";
import { PostContext } from "../../context/PostProvider";
import { Link } from "react-router-dom";
import PostMedia from "../post-write/PostMedia";

const PostCard = ({ post }) => {
  const {
    username,
    content,
    likes: { likeCount, likedBy },
    // comments,
    _id,
    media,
  } = post;
  const { getUserByUsername } = useContext(UserContext);
  const {
    handlePostLike,
    handlePostDislike,
    handleAddToBookmark,
    handleRemoveFromBookmark,
    checkMediaType,
    postsState: { bookmarks, disableCurrentButton },
  } = useContext(PostContext);
  const currentUser = getUserFromLocalStorage().username;
  const likedByCurrentUser = likedBy
    .map((ele) => ele.username)
    .includes(currentUser);
  const { firstName, lastName, profilePic } = getUserByUsername(username);
  const isBookmarked = bookmarks.includes(_id);
  return (
    <div className="block w-full max-w-lg px-6 pt-6 pb-4 bg-orange-200 border border-gray-300 rounded-lg sm:shadow ">
      <div className="flex justify-between mb-4">
        <div className="flex flex-row">
          <Link to="/profile" state={post}>
            <img
              className="w-12 h-12 rounded-full"
              src={profilePic}
              alt="avatar"
            />
          </Link>
          <div className="flex flex-col ml-4">
            <p className="font-semibold text-gray-700">{`${firstName} ${lastName}`}</p>
            <small className="text-xs font-semibold text-gray-500 ">
              {username}
            </small>
          </div>
        </div>
        <PostCardMenu post={post} />
      </div>
      <p className="pb-2 font-semibold text-gray-600 ">{content}</p>
      {media !== "" && (
        <PostMedia
          mediaFile={media}
          mediaType={checkMediaType(media).type}
          height={"h-full"}
          width={"w-full"}
        />
      )}
      <div className="flex mt-2">
        <div className="flex items-center group">
          <button
            disabled={disableCurrentButton === _id}
            title={likedByCurrentUser ? "Dislike" : "Like"}
            className={
              disableCurrentButton === _id ? " cursor-not-allowed" : ""
            }
            onClick={
              likedByCurrentUser
                ? () => handlePostDislike(_id)
                : () => handlePostLike(_id)
            }
            type="button"
          >
            <HeartIcon
              className={`p-2 text-gray-600 rounded-full  w-9 h-9 hover:bg-pink-300/60 hover:fill-pink-500 group-hover:text-pink-600 ${
                likedByCurrentUser ? "fill-pink-500 text-pink-600" : ""
              }  ${
                disableCurrentButton === _id
                  ? " cursor-not-allowed"
                  : "cursor-pointer"
              } `}
            />
          </button>
          <p
            className={`ml-1 text-gray-600 group-hover:text-pink-600 text-normal ${
              likedByCurrentUser ? "fill-pink-500 text-pink-600" : ""
            }`}
          >
            {likeCount}
          </p>
        </div>
        {/* <div className="flex items-center group">
          <ChatBubbleBottomCenterIcon className="p-2 ml-8 text-gray-600 rounded-full cursor-pointer w-9 h-9 hover:bg-orange-300/60 hover:fill-orange-500 hover:text-orange-600 " />
          <p className="ml-1 text-gray-600 group-hover:text-orange-600 text-normal">
            {comments.length}
          </p>
        </div> */}

        <button
          onClick={
            isBookmarked
              ? () => handleRemoveFromBookmark(_id)
              : () => handleAddToBookmark(_id)
          }
          disabled={disableCurrentButton === _id}
          className={disableCurrentButton === _id ? " cursor-not-allowed" : ""}
          title={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
          type="button"
        >
          <BookmarkIcon
            className={`p-2 ml-8 text-gray-600 rounded-full w-9 h-9 hover:bg-orange-300/60 hover:fill-orange-500 hover:text-orange-600  ${
              isBookmarked ? "fill-orange-500 text-orange-600" : ""
            }  
            ${
              disableCurrentButton === _id
                ? " cursor-not-allowed"
                : "cursor-pointer"
            }
            `}
          />
        </button>
      </div>
    </div>
  );
};

export default PostCard;
