import { Popover, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { useContext } from 'react';
import { PostContext } from './../../context/PostProvider';
import { getUserFromLocalStorage } from '../../services/localstorage-service';

const PostCardMenu = ({ postedByUser }) => {
    const { getUsersFollowersList, getUsersFollowingList } = useContext(PostContext);
    const followers = getUsersFollowersList(getUserFromLocalStorage())
    const following = getUsersFollowingList(getUserFromLocalStorage())
    const currentUser = getUserFromLocalStorage().username
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
                <Popover.Panel className="absolute py-4 space-y-2 text-gray-600 bg-orange-100 border border-gray-300 rounded-md shadow-sm">
                    <div className='space-y-2 text-sm font-semibold'>
                       {postedByUser!==currentUser && !following.includes(postedByUser) && <Popover.Button className='w-full px-6 pb-1 text-left border-gray-100 hover:text-gray-800'>{ followers.includes(postedByUser)?"Follow Back":"Follow"}</Popover.Button>}

                        {following.includes(postedByUser) && <Popover.Button className='w-full px-6 pb-1 text-left border-gray-100 hover:text-gray-800'>Unfollow</Popover.Button>}
                        {postedByUser === currentUser && <>

                            <Popover.Button className='w-full px-6 pb-1 text-left hover:text-gray-800'>Edit</Popover.Button>

                            <Popover.Button className='w-full px-6 pb-1 text-left border-gray-100 hover:text-gray-800'>Delete</Popover.Button>

                        </>}

                    </div>
                </Popover.Panel>
            </Transition>
        </Popover>
    )
};

export default PostCardMenu;