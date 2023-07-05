import { CgProfile } from "react-icons/cg";
import { MdOutlineExplore } from "react-icons/md";
import { HiOutlineHome, HiOutlineBookmark } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { PostContext } from "../../context/PostProvider";
const Sidebar = () => {
  const {
    handleUserLogout,
    authState: { user },
  } = useContext(AuthContext);
  const { setToggleDialog } = useContext(PostContext);
  const { firstName, lastName, username, profilePic } = user;
  const handleWrite = () => {
    setToggleDialog((prevVal) => ({ ...prevVal, showDialog: true }));
  };
  return (
    <div className="hidden h-screen md:block">
      <div className="flex flex-col h-full">
        <div className="flex-1 space-y-1">
        <NavLink
              href="/home"
              className="flex items-center px-2 pt-4 text-sm font-medium text-gray-900 rounded-md group"
            >
              <img
                className="w-32 h-10"
                src="https://res.cloudinary.com/dkay6uocg/image/upload/v1688300937/Ping%20Connect/logo-no-background_mzrqxn.png"
                alt="ping-connect"
              />
            </NavLink>
          {/* Nav Links */}
          <div className="pt-4">
        
            <NavLink
              to="/home"
              className={({ isActive }) =>
                `flex px-2 py-4 ${
                  isActive
                    ? "bg-orange-200/40 font-medium"
                    : "font-medium text-gray-700"
                } space-x-4 text-xl rounded-md hover:bg-orange-200/80 group`
              }
            >
              <HiOutlineHome className="w-8 h-8 text-gray-700" />
              <p>Home</p>
            </NavLink>
            <NavLink
              to="/explore"
              className={({ isActive }) =>
                `flex px-2 py-4 ${
                  isActive
                    ? "bg-orange-200/40 font-medium"
                    : "font-medium text-gray-700"
                } space-x-4 text-xl rounded-md hover:bg-orange-200/80 group`
              }
            >
              <MdOutlineExplore className="w-8 h-8 text-gray-700" />
              <p>Explore</p>
            </NavLink>
            <NavLink
              to="/bookmark"
              className={({ isActive }) =>
                `flex px-2 py-4 ${
                  isActive
                    ? "bg-orange-200/40 font-medium"
                    : "font-medium text-gray-700"
                } space-x-4 text-xl rounded-md hover:bg-orange-200/80 group`
              }
            >
              <HiOutlineBookmark className="w-8 h-8 text-gray-700" />
              <p>Bookmarks</p>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `flex px-2 py-4 ${
                  isActive
                    ? "bg-orange-200/40 font-medium"
                    : "font-medium text-gray-700"
                } space-x-4 text-xl rounded-md hover:bg-orange-200/80 group`
              }
            >
              <CgProfile className="w-8 h-8 text-gray-700" />
              <p>Profile</p>
            </NavLink>

            <button
              onClick={handleWrite}
              type="button"
              className="inline-flex items-center justify-center w-full px-2 py-4 mt-4 space-x-4 text-xl font-medium text-center text-gray-700 rounded-lg bg-gradient-to-r from-red-200 via-orange-200 to-orange-300 group"
            >
              Write
            </button>
          </div>
        </div>

        <div className="px-4 pt-8 pb-4 border-t border-gray-300 ">
          <div className="flex items-center justify-between w-full ">
            <div className="flex items-center justify-center space-x-2">
              <img
                className="rounded-full w-14 h-14"
                src={profilePic}
                alt="avatar"
              />
              <div className="flex flex-col items-start justify-start">
                <p className="text-base font-semibold leading-5 text-gray-900 cursor-pointer">{`${firstName} ${lastName}`}</p>
                <p className="text-xs font-medium leading-3 text-gray-800 cursor-pointer">
                  {username}
                </p>
              </div>
            </div>
            <ArrowRightOnRectangleIcon
              onClick={handleUserLogout}
              className="w-6 h-6 text-gray-800 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
