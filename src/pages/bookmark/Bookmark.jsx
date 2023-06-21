import { useContext } from "react";
import { PostContext } from "../../context/PostProvider";
import PostCard from "../../components/post-card/PostCard";

const Bookmark = () => {
    const { postsState: { bookmarks, posts } } = useContext(PostContext)
    const bookmarkedPosts = posts.filter(({ _id }) => bookmarks.includes(_id))



    if (bookmarks && bookmarks.length === 0) {
        return (
            <div className="flex flex-col items-center">
                <img src="https://ik.imagekit.io/pb97gg2as/Ping-Connnect/undraw_empty.svg?updatedAt=1687183185476" className=" w-60 h-60 md:w-80 md:h-80" alt="no_data" />
                <h3 className="w-auto text-2xl font-extrabold tracking-tight text-center text-gray-600 md:text-3xl lg:text-4xl">Save Posts for later, bookmark to see them again here.  </h3></div>)
    }

    return (
        <div className="flex flex-col items-center space-y-8">
            {bookmarkedPosts.map(post => <PostCard post={post} key={post._id} />)}
        </div>
    );
};

export default Bookmark;