import { useContext } from "react";
import SearchBar from "../searchbar/Searchbar";
import { UserContext } from "../../context/UserProvider";
import { Link } from "react-router-dom";

const TrendingSidebar = () => {
    const { getUsersNotOnFollowingList, handleFollowRequest,usersState:{disableButton}} = useContext(UserContext)
    const whoToFollow = getUsersNotOnFollowingList()
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
                                <div className="block max-w-sm p-6 border border-gray-300 rounded-lg shadow-md w-92 hover:bg-orange-100 ">
                                    <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-700 ">Who to Follow</h5>
                                    {whoToFollow && whoToFollow.length > 0 && whoToFollow.map((followUser, index) => <div key={followUser._id} className={`grid grid-cols-5 py-2   gap-x-2 ${index === whoToFollow.length - 1 ? '' : 'border-gray-300 border-b'} `}>
                                        <div className="flex flex-row col-span-3 ">
                                            <Link to="/profile" state={followUser}><img className="w-10 h-10 rounded-full" src={followUser.profilePic} alt="avatar" /></Link>
                                            <div className="flex flex-col ml-4">
                                                <p className="font-semibold text-gray-700">{`${followUser.firstName} ${followUser.lastName}`}</p>
                                                <small className="text-xs font-semibold text-gray-500 ">{followUser.username}</small>
                                            </div>
                                        </div>
                                        <button disabled={disableButton} onClick={() => handleFollowRequest(followUser._id)} className={`inline-flex items-center justify-center w-24 col-span-2 px-2 text-sm font-medium text-center text-gray-700 rounded-md shadow hover:text-gray-100 bg-orange-50 hover:bg-orange-400/80 ${
                                            disableButton?' cursor-not-allowed':'cursor-pointer'
                                        }`}>Follow</button>
                                    </div>)}
                                    {
                                        whoToFollow && whoToFollow.length === 0 && <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-600 ">Nothing to show! 😪</h5>
                                    }
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