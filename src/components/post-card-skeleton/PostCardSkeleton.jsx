import {
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const PostCardSkeleton = () => {
  return (
    <div className="block w-full max-w-lg px-6 pt-6 pb-4 bg-orange-200/50 border border-gray-300 rounded-lg shadow ">
      <div className="flex justify-between mb-4">
        <div className="flex w-full justify-center flex-row">
          <div className="w-14 h-12 animate-pulse bg-gray-400 rounded-full"></div>
          <div className="flex flex-col justify-center w-full ml-4">
            <p className="leading-relaxed mb-3 w-1/4 h-3 animate-pulse bg-gray-400"></p>
            <small className="leading-relaxed  w-1/3 h-3 animate-pulse bg-gray-400 "></small>
          </div>
        </div>
      </div>
      <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
      <p className="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
      <p className="leading-relaxed mb-3 w-1/3 h-3 animate-pulse bg-gray-400"></p>

      <div className="flex mt-2">
        <div className="flex items-center group">
          <HeartIcon
            className={`p-2 text-gray-400 rounded-full cursor-pointer w-9 h-9  
             
            `}
          />
        </div>
        <div className="flex items-center group">
          <ChatBubbleBottomCenterIcon className="p-2 ml-8 text-gray-400 rounded-full cursor-pointer w-9 h-9" />
        </div>

        <BookmarkIcon
          className={`p-2 ml-8 text-gray-400 rounded-full cursor-pointer w-9 h-9 `}
        />
      </div>
    </div>
  );
};

export default PostCardSkeleton;
