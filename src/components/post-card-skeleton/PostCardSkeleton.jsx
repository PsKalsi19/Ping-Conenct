import {
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const PostCardSkeleton = () => {
  return (
    <div className="block w-full max-w-lg px-6 pt-6 pb-4 bg-orange-50 border border-gray-300 rounded-lg dark:border-stone-700 dark:bg-stone-800/40 sm:shadow ">
      <div className="flex justify-between mb-4">
        <div className="flex flex-row justify-center w-full">
          <div className="h-12 bg-gray-400 rounded-full dark:bg-stone-700 w-14 animate-pulse"></div>
          <div className="flex flex-col justify-center w-full ml-4">
            <p className="w-1/4 h-3 mb-3 leading-relaxed bg-gray-400 dark:bg-stone-700 animate-pulse"></p>
            <small className="w-1/3 h-3 leading-relaxed bg-gray-400 dark:bg-stone-700 animate-pulse "></small>
          </div>
        </div>
      </div>
      <p className="w-full h-3 mb-3 leading-relaxed bg-gray-400 dark:bg-stone-700 animate-pulse"></p>
      <p className="w-full h-3 mb-3 leading-relaxed bg-gray-400 dark:bg-stone-700 animate-pulse"></p>
      <p className="w-1/3 h-3 mb-3 leading-relaxed bg-gray-400 dark:bg-stone-700 animate-pulse"></p>

      <div className="flex mt-2">
        <div className="flex items-center group">
          <HeartIcon
            className={`p-2 text-gray-400 dark:text-stone-700 rounded-full cursor-pointer w-9 h-9  
             
            `}
          />
        </div>
        {/* <div className="flex items-center group">
          <ChatBubbleBottomCenterIcon className="p-2 ml-8 text-gray-400 rounded-full cursor-pointer dark:bg-stone-700 w-9 h-9" />
        </div> */}

        <BookmarkIcon
          className={`p-2 ml-8 text-gray-400 dark:text-stone-700 rounded-full cursor-pointer w-9 h-9 `}
        />
      </div>
    </div>
  );
};

export default PostCardSkeleton;
