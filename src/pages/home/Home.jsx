
import { useContext, useEffect } from 'react';
import PostCard from '../../components/post-card/PostCard';
import Tabs from './../../components/tabs/Tabs';
import { PostContext } from '../../context/PostProvider';
import PostWrite from '../../components/post-write/PostWrite';
import { getUserFromLocalStorage } from '../../services/localstorage-service';
import POSTS_ACTIONS from '../../constants/posts-actions';
const Home = () => {
    const { postsState: { currentUserFeed },postsDispatch } = useContext(PostContext);
    const profilePic = getUserFromLocalStorage().profilePic
    const handleTabChange = (e) => {
        e === 0 ? postsDispatch({ type: POSTS_ACTIONS.SET_SORT, payload: 'latest' }) : postsDispatch({ type: POSTS_ACTIONS.SET_SORT, payload: 'trending' })
      }
    const tabTypes=['Latest', 'Trending']
    useEffect(() => {
        document.title = "HOME | PING CONNECT"
    }, [])
    return (
        <div className='relative'>
            <div className="sticky z-10 bg-orange-100 top-24">
                <div className="flex p-4 mb-4 border border-gray-300 backdrop-blur-md bg-orange-100/80 rounded-xl">
                    <img className="mr-2 rounded-full w-14 h-14" src={profilePic} alt="avatar" />
                    <PostWrite /></div>
                <Tabs handleTabChange={handleTabChange} tabTypes={tabTypes} />
            </div>
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
    );
};

export default Home;