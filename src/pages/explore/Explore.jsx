import { useContext } from "react";
import PostCard from "../../components/post-card/PostCard";
import { PostContext } from "../../context/PostProvider";
import { useEffect } from "react";

const Explore = () => {
    const {postsState:{posts}}=useContext(PostContext)

    useEffect(()=>{
        document.title="Explore | PING CONNECT"
    },[])

    return (
        <div className="flex flex-col items-center space-y-8">
        {posts && posts.length > 0 && posts.map(post => <PostCard post={post} key={post._id} />)}
    </div>
    );
};

export default Explore;