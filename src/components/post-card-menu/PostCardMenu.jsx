import { Popover, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useContext } from 'react';
import { PostContext } from './../../context/PostProvider';
import { getUserFromLocalStorage } from '../../services/localstorage-service';
import { UserContext } from '../../context/UserProvider';

const PostCardMenu = ({ post }) => {
    const {username,_id}=post
    const { handleDeletePost,setToggleDialog } = useContext(PostContext);
    const {getUsersFollowersList, getUsersFollowingList}=useContext(UserContext)
    const followers = getUsersFollowersList(getUserFromLocalStorage())
    const following = getUsersFollowingList(getUserFromLocalStorage())
    const currentUser = getUserFromLocalStorage().username

    const {handleFollowRequest,handleUnfollowRequest,getUserIdByUsername}=useContext(UserContext)

    const handleFollow=()=>{
        handleFollowRequest(getUserIdByUsername(username))
    }

    const handleUnfollow=()=>{
        handleUnfollowRequest(getUserIdByUsername(username))
    }
    const handleEditPost=()=>{
        setToggleDialog({
            showDialog: true,
            selectedPost:post
        })
    }
    return (
        <Popover className="relative">
            <Popover.Button className="focus:outline-0"><EllipsisVerticalIcon title="Options" className="p-2 text-gray-600 rounded-full cursor-pointer w-9 h-9 hover:text-gray-800 hover:bg-orange-300/60 bg-orange-300/40" /></Popover.Button>
            <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
            >
                <Popover.Panel className="absolute right-0 w-32 py-4 space-y-2 text-gray-600 border border-gray-300 rounded-md shadow-sm bg-orange-50">
                    <div className='space-y-2 text-sm font-semibold'>
                       {username!==currentUser && !following.includes(username) && <Popover.Button onClick={()=>handleFollow(_id)} className='w-full px-6 pb-1 text-left border-gray-100 hover:text-gray-800'>{ followers.includes(username)?"Follow Back":"Follow"}</Popover.Button>}

                        {following.includes(username) && <Popover.Button onClick={handleUnfollow} className='w-full px-6 pb-1 text-left border-gray-100 hover:text-gray-800'>Unfollow</Popover.Button>}
                        {username === currentUser && <>

                            <Popover.Button onClick={handleEditPost} className='w-full px-6 pb-1 text-left hover:text-gray-800'>Edit</Popover.Button>

                            <Popover.Button onClick={()=>handleDeletePost(_id)} className='w-full px-6 pb-1 text-left border-gray-100 hover:text-gray-800'>Delete</Popover.Button>

                        </>}

                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
};

export default PostCardMenu;