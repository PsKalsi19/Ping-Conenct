import {ArrowRightOnRectangleIcon} from "@heroicons/react/24/outline";
import { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import SearchBar from "./../searchbar/Searchbar";
import { UserContext } from "../../context/UserProvider";
import { USERS_ACTION } from "../../constants/users-actions";
import ThemeToggler from "../theme-toggler/ThemeToggler";

function Navbar() {
  const [top, setTop] = useState(true);
  const location = useLocation();
  const {
    handleUserLogout,
    authState: { user },
  } = useContext(AuthContext);
  const profilePic = user.profilePic;
  const { usersDispatch } = useContext(UserContext);
  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <nav
      className={`lg:hidden block sticky left-0 top-0 right-0 ${
        top
          ? "bg-orange-50 dark:bg-stone-900"
          : "bg-orange-50 dark:bg-stone-900/80  backdrop-blur-xl"
      } z-10`}
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <ThemeToggler />
          {location.pathname === "/explore" && <SearchBar />}
          {location.pathname !== "/explore" && (
            <NavLink
              href="/home"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md group"
            >
              <img
                className="w-32 h-10"
                src="https://res.cloudinary.com/dkay6uocg/image/upload/v1688300852/logo-no-background_phu1yy.png"
                alt="ping-connect"
              />
            </NavLink>
          )}

          <button
            className="block md:hidden"
            type="button"
            onClick={() =>
              usersDispatch({
                type: USERS_ACTION.TOGGLE_MOBILE_SIDEBAR,
                payload: true,
              })
            }
          >
            <img
              className="w-8 h-8 rounded-full"
              src={profilePic}
              alt="avatar"
            />
          </button>
          <div className="hidden  sm:block lg:hidden">
            <ArrowRightOnRectangleIcon
              onClick={handleUserLogout}
              className="w-8 h-8 text-gray-800 cursor-pointer dark:text-gray-100"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
