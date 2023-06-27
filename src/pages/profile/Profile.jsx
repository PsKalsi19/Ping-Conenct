/* eslint-disable jsx-a11y/img-redundant-alt */

import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { PostContext } from "../../context/PostProvider";
import PostCard from "../../components/post-card/PostCard";
import { useState } from "react";
import Tabs from "../../components/tabs/Tabs";
import { UserContext } from "../../context/UserProvider";
import { useLocation } from "react-router-dom";
import RecommandedUsers from "../../components/recommanded-users/RecommandedUsers";
import NoDataAvailable from "../../components/no-data-available/NoDataAvailable";
const Profile = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const [selectedUser, setSelectedUser] = useState({});
  const location = useLocation();
  const {
    handleUnfollowRequest,
    handleFollowRequest,
    getUsersFollowingList,
    setToggleEditProfile,
    getUserByUsername,
    usersState:{
      disableButton
    }
  } = useContext(UserContext);
  useEffect(() => {
    document.title = "PROFILE | PING CONNECT";
    if (location?.state !== null) {
      setSelectedUser(getUserByUsername(location?.state?.username));
    } else {
      setSelectedUser(user);
    }
  }, [getUserByUsername, location?.state, user]);
  const {
    postsState: { posts },
  } = useContext(PostContext);
  const followingList = getUsersFollowingList(user);

  const currentUsersPosts = posts.filter(
    (post) => post?.username === selectedUser?.username
  );
  // For tabs set-up
  const [currentTab, setCurrentTab] = useState("posts");
  const tabTypes = ["posts", "followers", "following"];

  const handleTabChange = (e) => {
    switch (e) {
      case 0:
        setCurrentTab("posts");
        break;

      case 1:
        setCurrentTab("followers");
        break;

      case 2:
        setCurrentTab("following");
        break;

      default:
        break;
    }
  };

  const handleEditProfile = () => {
    setToggleEditProfile(true);
  };
  const handleProfileMainCTA = () => {
    if (selectedUser?.username === user?.username)
      return { title: "Edit Profile", cta: handleEditProfile };
    if (followingList.includes(selectedUser?.username))
      return { title: "Unfollow", cta: handleUnfollowRequest };
    return { title: "Follow", cta: handleFollowRequest };
  };

  return (
    <div className="relative ">
      <img
        className="w-full max-w-full rounded-md h-60"
        src={
          selectedUser?.banner === ""
            ? "https://source.unsplash.com/random/1080x720/?minimalistic"
            : selectedUser?.banner
        }
        alt="image description"
      />

      <div className="absolute flex items-center justify-between w-full p-6 top-40">
        <img
          className="bg-orange-100 border-4 border-orange-100 rounded-full h-28 w-28"
          src={
            selectedUser?.profilePic === ""
              ? "https://source.unsplash.com/random/900x700/?profile"
              : selectedUser.profilePic
          }
          alt="avatar"
        />
        <button 
        disabled={disableButton}
          onClick={() => handleProfileMainCTA().cta(selectedUser._id)}
          className={`px-4 py-2 text-sm font-medium text-center text-gray-100 bg-orange-400 rounded-md shadow hover:text-gray-100 hover:bg-orange-400/95 ${disableButton?' cursor-not-allowed':'cursor-pointer'}`}
        >
          {handleProfileMainCTA().title}
        </button>
      </div>

      <div className="flex flex-col px-6 mt-16">
        <p className="text-xl font-bold tracking-tight text-gray-700 uppercase">
          {selectedUser?.firstName} {selectedUser?.lastName}{" "}
        </p>
        <div className="flex justify-between">
          <p className="font-semibold text-gray-500">
            {selectedUser?.username}
          </p>
          {selectedUser.link !== "" && (
            <a
              href={selectedUser?.link}
              target="_blank"
              rel="noreferrer"
              className="flex flex-row items-center font-semibold text-gray-500 hover:underline"
            >
              <span className="mr-2 uppercase"> My website</span>
              <svg
                fill="none"
                className="w-4 h-4"
                stroke="currentColor"
                strokeWidth={4}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          )}
        </div>

        <p className="my-4 font-semibold text-gray-500">{selectedUser?.bio}</p>
        <Tabs tabTypes={tabTypes} handleTabChange={handleTabChange} />
      </div>
      {/* posts */}
      {currentTab === "posts" && (
        <div>
          <div className="flex flex-col items-center space-y-8">
            {posts &&
              posts.length > 0 &&
              currentUsersPosts.map((post) => (
                <PostCard post={post} key={post._id} />
              ))}
          </div>

          <div className="flex flex-col items-center space-y-8">
            {currentUsersPosts && currentUsersPosts.length === 0 && (
              <NoDataAvailable
                message={` Starting with an empty feed? Time to unleash your thoughts and
            let the world know what's on your mind!`}
              />
            )}
          </div>
        </div>
      )}
      {/* Followers */}
      {currentTab === "followers" && (
        <div className="block max-w-lg p-6 m-auto border border-gray-300 rounded-lg shadow-md hover:bg-orange-100 ">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 ">
            Followers
          </h5>
          {selectedUser?.followers &&
            selectedUser?.followers.length > 0 &&
            selectedUser?.followers.map((follower, index) => (
              <div
                key={follower._id}
                className={`grid grid-cols-4 py-2 gap-x-2 ${
                  index === selectedUser?.followers.length - 1
                    ? ""
                    : "border-gray-300 border-b"
                } `}
              >
                <RecommandedUsers
                  user={follower}
                  clickHandler={
                    followingList.includes(follower?.username)
                      ? handleUnfollowRequest
                      : handleFollowRequest
                  }
                  btnCTA={
                    followingList.includes(follower?.username)
                      ? "Unfollow"
                      : "Follow "
                  }
                />
              </div>
            ))}
          {selectedUser?.followers && selectedUser?.followers?.length === 0 && (
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-600 ">
              Nothing to show! 😪
            </h5>
          )}
        </div>
      )}
      {/* following */}
      {currentTab === "following" && (
        <div className="block max-w-lg p-6 m-auto border border-gray-300 rounded-lg shadow-md hover:bg-orange-100 ">
          <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 ">
            Followings
          </h5>
          {selectedUser?.following &&
            selectedUser?.following.length > 0 &&
            selectedUser?.following.map((followingUser, index) => (
              <div
                key={followingUser._id}
                className={`grid grid-cols-4 py-2   gap-x-2 ${
                  index === selectedUser?.following.length - 1
                    ? ""
                    : "border-gray-300 border-b"
                } `}
              >
                <RecommandedUsers
                  user={followingUser}
                  clickHandler={handleUnfollowRequest}
                  btnCTA={
                    followingList.includes(followingUser?.username)
                      ? "Unfollow"
                      : "Follow"
                  }
                />
              </div>
            ))}
          {selectedUser?.following && selectedUser?.following.length === 0 && (
            <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-600 ">
              Nothing to show! 😪
            </h5>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
