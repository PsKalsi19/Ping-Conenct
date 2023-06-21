
import { useContext, useEffect } from 'react';
import PostCard from '../../components/post-card/PostCard';
import Tabs from './../../components/tabs/Tabs';
import { PostContext } from '../../context/PostProvider';
import PostWrite from '../../components/post-write/PostWrite';
import { getUserFromLocalStorage } from '../../services/localstorage-service';
const Home = () => {
    const { postsState: {  currentUserFeed } } = useContext(PostContext);
    const profilePic=getUserFromLocalStorage().profilePic

    useEffect(()=>{
        document.title="HOME | PING CONNECT"
    },[])
    return (
        <div className='relative'>
            <div className="sticky z-10 top-24">
                <div className="flex p-4 mb-4 border border-gray-300 backdrop-blur-md bg-orange-100/80 rounded-xl">
                    <img className="mr-2 rounded-full w-14 h-14" src={profilePic} alt="avatar" />
                    <PostWrite /></div>
                <Tabs />
            </div>
            <div className="flex flex-col items-center space-y-8">
                {currentUserFeed && currentUserFeed.length > 0 && currentUserFeed.map(post => <PostCard post={post} key={post._id} />)}
            </div>
        </div>
    );
};

export default Home;