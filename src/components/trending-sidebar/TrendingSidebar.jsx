import SearchBar from "../searchbar/Searchbar";

const TrendingSidebar = () => {
    return (
        <div className="hidden md:block">
            <div className="flex flex-col">

                <div
                    className="flex flex-col flex-1 h-[90vh]"
                >
                    <div className="sticky inset-x-0 top-24">
                        <SearchBar />
                    </div>
                    <div className="flex flex-col flex-1 pb-4 overflow-y-auto">
                        <nav className="flex-1 px-2 mt-5 space-y-1">

                            {/* Follow Suggestions */}
                            <div className="pt-8">
                                <div className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow-md hover:bg-orange-100 ">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 ">What's Happening</h5>
                                    <div className="pb-2 border-b border-gray-200 ">
                                        <small className="text-xs font-semibold text-gray-400">Sports</small>
                                        <p className="font-semibold text-gray-700">Cricket World Cup 2023</p>
                                    </div>
                                    <div className="pb-2 border-b border-gray-200 ">
                                        <small className="text-xs font-semibold text-gray-400">Entertainment</small>
                                        <p className="font-semibold text-gray-700">Oppenheimer Trailer Launch</p>
                                    </div>

                                    <div className="pb-2 ">
                                        <small className="text-xs font-semibold text-gray-400">Trending</small>
                                        <p className="font-semibold text-gray-700">Cyclone in Mumbai</p>
                                    </div>
                                </div>
                            </div>
                            {/*What's Happening  */}

                            <div className="pt-8">
                                <div className="block max-w-sm p-6 border border-gray-200 rounded-lg shadow-md hover:bg-orange-100 ">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 ">What's Happening</h5>
                                    <div className="pb-2 border-b border-gray-200 ">
                                        <small className="text-xs font-semibold text-gray-400">Sports</small>
                                        <p className="font-semibold text-gray-700">Cricket World Cup 2023</p>
                                    </div>
                                    <div className="pb-2 border-b border-gray-200 ">
                                        <small className="text-xs font-semibold text-gray-400">Entertainment</small>
                                        <p className="font-semibold text-gray-700">Oppenheimer Trailer Launch</p>
                                    </div>

                                    <div className="pb-2 ">
                                        <small className="text-xs font-semibold text-gray-400">Trending</small>
                                        <p className="font-semibold text-gray-700">Cyclone in Mumbai</p>
                                    </div>
                                </div>
                            </div>
                        </nav>

                    </div>


                </div>
            </div>
        </div>
    );
};

export default TrendingSidebar;