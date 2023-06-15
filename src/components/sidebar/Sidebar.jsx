import { CgProfile } from "react-icons/cg";
import { MdOutlineExplore } from "react-icons/md";
import { HiPencil, HiOutlineHome, HiOutlineBookmark } from "react-icons/hi";
import { NavLink } from 'react-router-dom';
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";
const Sidebar = () => {
    return (
        <div className="hidden h-screen md:block">
            <div className="flex flex-col h-[90vh]">

                <div className="flex-1 mt-5 space-y-1 ">

                    {/* Nav Links */}
                    <div>
                        <NavLink
                            href="#"
                            className="flex px-2 py-4 space-x-4 text-xl font-medium text-gray-700 rounded-md hover:bg-orange-100 group"
                        >
                            <HiOutlineHome className="w-8 h-8 text-gray-700" />
                            <p>Home</p>
                        </NavLink>
                        <NavLink
                            href="#"
                            className="flex px-2 py-4 space-x-4 text-xl font-medium text-gray-700 rounded-md hover:bg-orange-100 group"
                        >
                            <MdOutlineExplore className="w-8 h-8 text-gray-700" />
                            <p>Explore</p>
                        </NavLink>
                        <NavLink
                            href="#"
                            className="flex px-2 py-4 space-x-4 text-xl font-medium text-gray-700 rounded-md hover:bg-orange-100 group"
                        >
                            <HiOutlineBookmark className="w-8 h-8 text-gray-700" />
                            <p>Bookmark</p>
                        </NavLink>
                        <NavLink
                            href="#"
                            className="flex px-2 py-4 space-x-4 text-xl font-medium text-gray-700 rounded-md hover:bg-orange-100 group"
                        >
                            <CgProfile className="w-8 h-8 text-gray-700" />
                            <p>Profile</p>
                        </NavLink>


                    </div>
                </div>
                <button type="button"
                    className="inline-flex items-center justify-center w-full px-2 py-4 space-x-4 text-xl font-medium text-center text-gray-700 rounded-lg bg-gradient-to-r from-red-200 to-orange-200 hover:bg-orange-100 group"
                >
                    <HiPencil className="w-6 h-6 text-gray-700" />
                    Write
                </button>
                <div className="p-4 border-t border-gray-200 ">

                    <div className="flex items-center justify-between w-full ">
                        <div className="flex items-center justify-center space-x-2">
                            <div>
                                <img className="rounded-full w-14 h-14" src="https://source.unsplash.com/random/900x700/?fruit" alt="avatar" />
                            </div>
                            <div className="flex flex-col items-start justify-start">
                                <p className="text-sm leading-5 text-gray-900 cursor-pointer">Alexis Enache</p>
                                <p className="text-xs leading-3 text-gray-800 cursor-pointer">alexis81@gmail.com</p>
                            </div>
                        </div>
                        <ArrowRightOnRectangleIcon className="w-6 h-6 text-gray-800" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;