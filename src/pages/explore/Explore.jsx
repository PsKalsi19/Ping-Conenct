import { useContext } from "react";
import PostCard from "../../components/post-card/PostCard";
import { PostContext } from "../../context/PostProvider";
import { useEffect } from "react";

const Explore = () => {
    const { postsState: { posts } } = useContext(PostContext)

    useEffect(() => {
        document.title = "EXPLORE | PING CONNECT"
    }, [])

    return (
        <div className="flex flex-col items-center space-y-8">
            {posts && posts.length > 0 && posts.map(post => <PostCard post={post} key={post._id} />)}
            {<div className="flex flex-col items-center">
                <img src="https://ik.imagekit.io/pb97gg2as/Ping-Connnect/undraw_empty.svg?updatedAt=1687183185476" className=" w-60 h-60 md:w-80 md:h-80" alt="no_data" />
                <h3 className="w-auto text-2xl font-extrabold tracking-tight text-center text-gray-600 md:text-3xl lg:text-4xl">Remember, a simple follow or a post can lead to remarkable connections and delightful experiences. So, go ahead and make that move right now 🌟✨.   </h3></div>}
        </div>
    );
};

export default Explore;