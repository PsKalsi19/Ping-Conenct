import { Popover, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { PostContext } from "./../../context/PostProvider";
import { getUserFromLocalStorage } from "../../services/localstorage-service";
import { UserContext } from "../../context/UserProvider";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";

const PostCardMenu = ({ post }) => {
  const { username, _id } = post;
  const { handleDeletePost, setToggleDialog } = useContext(PostContext);
  const { getUsersFollowersList, getUsersFollowingList,handleFollowRequest, handleUnfollowRequest, getUserIdByUsername } =
    useContext(UserContext);
  const followers = getUsersFollowersList(getUserFromLocalStorage());
  const following = getUsersFollowingList(getUserFromLocalStorage());
  const currentUser = getUserFromLocalStorage().username;

  const handleFollow = () => {
    handleFollowRequest(getUserIdByUsername(username));
  };

  const handleUnfollow = () => {
    handleUnfollowRequest(getUserIdByUsername(username));
  };
  const handleEditPost = () => {
    setToggleDialog({
      showDialog: true,
      selectedPost: post,
    });
  };
  return (
    <Popover className="relative">
      <Popover.Button className="focus:outline-0">
        <EllipsisVerticalIcon
          title="Options"
          className="p-2 text-gray-600 rounded-full cursor-pointer dark:text-gray-100 w-9 h-9 hover:text-gray-800 dark:bg-stone-600 dark:hover:bg-stone-500 hover:bg-orange-200 bg-orange-100"
        />
      </Popover.Button>
      <Transition
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 relative z-[1] opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="absolute right-0 w-36 text-gray-600 bg-orange-50 border border-gray-300 rounded-md shadow-sm dark:border-stone-500 dark:text-gray-100 dark:bg-stone-900">
          <div className="text-sm font-semibold">
            {username !== currentUser && !following.includes(username) && (
              <Popover.Button
                onClick={() => handleFollow(_id)}
                className="flex w-full px-8 py-3 text-left text-gray-700 border-gray-100 rounded dark:text-gray-50 hover:bg-orange-200 dark:hover:bg-stone-700 dark:border-stone-700 hover:text-gray-800"
              >
                {followers.includes(username) ? "Follow Back" : "Follow"}
              </Popover.Button>
            )}

            {following.includes(username) && (
              <Popover.Button
                onClick={handleUnfollow}
                className="flex w-full px-8 py-3 text-left text-gray-700 border-gray-100 rounded dark:text-gray-50 hover:bg-orange-200 dark:hover:bg-stone-700 dark:border-stone-700 hover:text-gray-800"
              >
                Unfollow
              </Popover.Button>
            )}
            {username === currentUser && (
              <>
                <Popover.Button
                  onClick={handleEditPost}
                  className="flex items-center w-full px-8 py-3 text-gray-700 rounded dark:text-gray-50 hover:bg-orange-200 dark:hover:bg-stone-700 dark:border-stone-700 hover:text-gray-800"
                >
                  <PencilSquareIcon className="w-5 h-5 mr-1 text-gray-500" />
                  Edit
                </Popover.Button>

                <Popover.Button
                  onClick={() => handleDeletePost(_id)}
                  className="flex items-center w-full px-8 py-3 text-red-500 rounded hover:bg-orange-200 dark:hover:bg-stone-700 dark:border-stone-700 hover:text-red-600"
                >
                  <TrashIcon className="w-5 h-5 mr-1 text-red-500" />
                  Delete
                </Popover.Button>
              </>
            )}
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default PostCardMenu;
