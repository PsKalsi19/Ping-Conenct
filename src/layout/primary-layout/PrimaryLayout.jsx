import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from './../../components/navbar/Navbar';
import TrendingSidebar from './../../components/trending-sidebar/TrendingSidebar';

const PrimaryLayout = () => {
    return (
        <div className="min-h-screen">
                <div className="mx-auto md:max-w-2xl lg:max-w-7xl">
                 <Navbar/>
                    <main className="relative px-4 mx-auto mt-18 max-w-7xl sm:px-6 lg:px-8">
                        <div className="grid grid-cols-8 grid-rows-1 gap-8">
                            <div className="relative sm:col-span-2"> 
                            <aside
                                aria-label="Sidebar"
                                className="fixed lg:w-64 lg:top-16 sm:translate-x-0"
                            >
                                <Sidebar />
                            </aside>
                            </div>
                            <div className="col-span-8 sm:col-span-4 sm:col-start-3">
                                
                                <div className="px-4 pb-4 sm:mt-12 lg:mt-0">
                                   
                                <Outlet />
                            </div></div>
                            <div className="relative sm:col-span-2 sm:col-start-7">
                              
                              <aside
                                aria-label="Trending-Sidebar"
                                className="fixed lg:top-16 sm:translate-x-0"
                            >
                                <TrendingSidebar />
                            </aside></div>
                        </div>


                    </main>
                </div>
        </div>
    );
};

export default PrimaryLayout;