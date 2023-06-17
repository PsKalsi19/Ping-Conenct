import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import { HeartIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon } from "@heroicons/react/24/outline";
import { ArrowPathRoundedSquareIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { getUserFromLocalStorage } from "../../services/localstorage-service";
import PostCardMenu from "../post-card-menu/PostCardMenu";

const PostCard = ({ post }) => {
    const { username, content,likes:{likeCount,likedBy},comments } = post
    console.log(post);
    const currentUser = getUserFromLocalStorage().username
    const { getUserByUsername } = useContext(UserContext)
    const { firstName, lastName, profilePic } = getUserByUsername(username)
    return (
        <div className="block w-full max-w-lg px-6 pt-6 pb-4 bg-orange-200 border border-gray-200 rounded-lg shadow ">
            <div className="flex justify-between mb-4">
                <div className="flex flex-row">
                    <img className="w-12 h-12 rounded-full" src={profilePic} alt="avatar" />
                    <div className="flex flex-col ml-4">
                        <p className="font-semibold text-gray-700">{`${firstName} ${lastName}`}</p>
                        <small className="text-xs font-normal tracking-tight text-gray-600 ">{username}</small>
                    </div>
                </div>
                <PostCardMenu postedByUser={username} />
            </div>
            <p className="pb-2 font-semibold text-gray-600 ">{content}</p>
            <div className="flex mt-2">
                <div className="flex items-center group">
                    <HeartIcon title="Like" className={`p-2 text-gray-600 rounded-full cursor-pointer w-9 h-9 hover:bg-pink-300/60 hover:fill-pink-500 group-hover:text-pink-600 ${likedBy.includes(currentUser)?'fill-pink-500 text-pink-600':''}`} />
                    <p className={`ml-1 text-gray-600 group-hover:text-pink-600 text-normal ${likedBy.includes(currentUser)?'fill-pink-500 text-pink-600':''}`}>{likeCount}</p>
                </div>
                <div className="flex items-center group">
                <ChatBubbleBottomCenterIcon className="p-2 ml-8 text-gray-600 rounded-full cursor-pointer w-9 h-9 hover:bg-orange-300/60 hover:fill-orange-500 hover:text-orange-600 " />
                    <p className="ml-1 text-gray-600 group-hover:text-orange-600 text-normal">{comments.length}</p>
                </div>
                <BookmarkIcon title="bookmark" className="p-2 ml-8 text-gray-600 rounded-full cursor-pointer w-9 h-9 hover:bg-orange-300/60 hover:fill-orange-500 hover:text-orange-600 " />

            </div>
        </div>
    );
};

export default PostCard;