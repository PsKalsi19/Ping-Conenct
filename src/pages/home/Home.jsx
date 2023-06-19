
import { useContext } from 'react';
import PostCard from '../../components/post-card/PostCard';
import Tabs from './../../components/tabs/Tabs';
import { PostContext } from '../../context/PostProvider';
import { useLocation } from 'react-router';
const Home = () => {
    const location=useLocation();
    const {postsState:{posts,currentUserFeed}}=useContext(PostContext);
    return (
        <div className='relative'>
            <div className="sticky z-40 top-24"><Tabs/></div>
        <div className="flex flex-col items-center space-y-8">
           { currentUserFeed && currentUserFeed.length>0 && currentUserFeed.map(post=> <PostCard post={post} key={post._id}/>)}
        </div>
        </div>
    );
};

export default Home;