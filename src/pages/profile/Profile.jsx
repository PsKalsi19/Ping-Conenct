/* eslint-disable jsx-a11y/img-redundant-alt */

import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { PostContext } from "../../context/PostProvider";
import PostCard from "../../components/post-card/PostCard";
const Profile = () => {
    const { authState: { user } } = useContext(AuthContext)
    const { profilePic, firstName, lastName, bio, username, link, followers, following } = user
    const { postsState: { currentUserFeed } } = useContext(PostContext);


    return (
        <div className="relative  ">
            <img className="max-w-full rounded-md w-full  h-60" src="https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="image description" />

            <div className="absolute w-full p-6 justify-between top-40 items-center flex">
                <img className="h-28 w-28 bg-orange-100 border-4 border-orange-100 rounded-full" src={user.profilePic} alt="avatar" />
                <button className=" px-4 text-sm py-2 font-medium text-center text-gray-100 rounded-md shadow hover:text-gray-100 bg-orange-400 hover:bg-orange-400/95">Edit Profile</button>
            </div>

            <div className="mt-20 flex flex-col">
                <p className="text-gray-700 font-bold tracking-tight text-xl">{firstName} {lastName} </p>
                <p className="text-gray-500 font-semibold">{username}</p>
                <p className="text-gray-500 mt-4 font-semibold">{bio}.</p>
                <p className="text-gray-500 font-semibold space-x-8">
                    <span className="text-gray-700 ">{followers?.length}</span> Followers
                    <span className="text-gray-700 ">{following?.length}</span> Following
                </p>
                <p className="text-gray-500 font-semibold flex flex-row items-center">

                    <a href={link} className="hover:underline mr-2">  My website</a>
                    <ArrowUpRightIcon className="h-4 w-4 text-gray-500" />
                </p>
            </div>

            <div className="mt-4">
                <h3 className="text-xl text-gray-700 mt-8 mb-4 mx-6  font-extrabold">Your Posts</h3>
                <div className="flex flex-col items-center space-y-8">
                    {currentUserFeed && currentUserFeed.length > 0 && currentUserFeed.map(post => <PostCard post={post} key={post._id} />)}
                </div>

                <div className="flex flex-col items-center space-y-8">
                    {currentUserFeed && currentUserFeed.length === 0 &&

                        <div className="flex flex-col items-center">
                            <img src="https://ik.imagekit.io/pb97gg2as/Ping-Connnect/undraw_empty.svg?updatedAt=1687183185476" className=" w-60 h-60 md:w-80 md:h-80" alt="no_data" />
                            <h3 className="w-auto text-2xl font-extrabold tracking-tight text-center text-gray-600 md:text-3xl lg:text-4xl">Embarking on a social media adventure, starting with an empty feed? Time to unleash your creativity and let the world witness the magic! 🌟✨.   </h3></div>}
                </div>
            </div>

        </div>
    );
};

export default Profile;