import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import TrendingSidebar from "./../../components/trending-sidebar/TrendingSidebar";
import MobileNavigation from "../../components/mobile-navigation/MobileNavigation";
import FloatingActionButton from "../../components/floating-action-button/FloatingActionButton";
import { useContext } from "react";
import { UserContext } from "../../context/UserProvider";
import MobileSidebar from "../../components/mobile-sidebar/MobileSidebar";

const PrimaryLayout = () => {
  const {
    usersState: { selectedTheme, currentPage },
  } = useContext(UserContext);
  return (
    <div className="min-h-screen">
      <div className="mx-auto md:max-w-2xl lg:max-w-7xl">
        <Navbar />
        <main className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-8 grid-rows-1 lg:gap-8">
            <div className="relative hidden lg:block sm:col-span-2">
              <aside
                aria-label="Sidebar"
                className="fixed lg:w-64 sm:translate-x-0"
              >
                <Sidebar />
              </aside>
            </div>
            <div className="col-span-8 sm:col-span-4 sm:col-start-3">
                <h2 className="sticky top-0 z-10 hidden px-4 pt-4 pb-8 text-3xl font-extrabold text-gray-700 capitalize bg-orange-100 lg:block">{currentPage}</h2>
              <div className="pb-4 mb-20 lg:px-4 lg:mb-0 sm:mt-12 lg:-mt-2">
                <MobileSidebar/>
                <Outlet />
              </div>
            </div>
            <div className="relative hidden lg:block sm:col-span-2 sm:col-start-7">
              <aside
                aria-label="Trending-Sidebar"
                className="fixed sm:translate-x-0"
              >
                <TrendingSidebar />
              </aside>
            </div>
          </div>
        </main>
        <footer className="sm:hidden">
          <MobileNavigation/>
          <FloatingActionButton/>
        </footer>
      </div>
    </div>
  );
};

export default PrimaryLayout;
