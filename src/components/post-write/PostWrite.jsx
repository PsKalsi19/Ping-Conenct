/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../context/PostProvider";

const PostWrite = ({ post }) => {
    const [postText, setPostText] = useState("");
    const { handleAddPost, handleEditPost,setToggleDialog } = useContext(PostContext)

    const handlePostSubmit = () => {
    
        if (post && Object.keys(post).length > 0) {
            handleEditPost({ ...post, content: postText })
            setToggleDialog({
                showDialog: false,
                selectedPost: {}
            })
        }
        else {
            const data = {
                content: postText,
                bookmark: [],
                comments: []
            }
            handleAddPost(data)
        }

        setPostText("")
        document.querySelector('#post-text-area').style.height = 'auto'
    }

    useEffect(() => {
        if (post && Object.keys(post).length > 0) {
            setPostText(post.content)

        }
    }, [post])

    const handleTextArea = (e) => {
        setPostText(e.target.value)
        e.target.style.height = `${e.target.scrollHeight}px`;
    }
    return (
        <div className="w-full">
            <h3 className="text-lg font-bold tracking-tight text-gray-600 md:text-2xl">{post && Object.keys(post).length > 0?"Edit Post": "Create Post"}</h3>
            <textarea id="post-text-area" value={postText} onChange={handleTextArea} className="h-20 p-2 overflow-hidden text-gray-600 bg-transparent border-0 outline-none resize-none " placeholder="What's on your mind?" name="post" maxLength={280}  ></textarea>
            <div className="flex justify-between">
                <button type="button" disabled={postText === ""} onClick={handlePostSubmit} className="px-6 py-2 text-gray-100 bg-orange-400 rounded-md hover:bg-orange-500/80 disabled:cursor-not-allowed disabled:opacity-60">Post</button>
            </div>
        </div>
    );
};

export default PostWrite;