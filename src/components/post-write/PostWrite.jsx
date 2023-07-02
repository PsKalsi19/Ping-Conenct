import { PhotoIcon } from "@heroicons/react/24/outline";
/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../context/PostProvider";
import { toast } from "react-hot-toast";
import PostMedia from "./PostMedia";
import { useRef } from "react";
import { postImage, postVideo } from "../../services/post-service";
import { errorHandler } from "../../services/common-util";
import EmojiMenu from "./EmojiMenu";
const PostWrite = ({ post }) => {
  const mediaRefForPreview = useRef(null);
  const postTextAreaRef=useRef(null)
  const [postText, setPostText] = useState("");
  const {
    handleAddPost,
    handleEditPost,
    setToggleDialog,
    fileDetails,
    setFilesDetails,
    checkMediaType,
  } = useContext(PostContext);

  useEffect(() => {
    if (post && Object.keys(post).length > 0) {
      setPostText(post.content);
      mediaRefForPreview.current = post.media;
      setFilesDetails(checkMediaType(post.media));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [post, setFilesDetails]);

  // Whenever fileChanges
  const handleFileChange = (e) => {
    const currentlySelectedFile = e.target.files[0];

    if (!currentlySelectedFile) return;
    if (
      currentlySelectedFile.type.includes("image") &&
      (currentlySelectedFile.size / (1024 * 1024)).toFixed(2) > 5
    )
      return toast.error("Image size should be below 5MB.");

    if (
      currentlySelectedFile.type.includes("video") &&
      (currentlySelectedFile.size / (1024 * 1024)).toFixed(2) > 10
    )
      return toast.error("Video size should be below 10MB.");

    const reader = new FileReader();
    reader.onload = () => {
      mediaRefForPreview.current = reader.result;
      setFilesDetails(currentlySelectedFile);
    };
    reader.readAsDataURL(currentlySelectedFile);
  };

  // all post submit scenarios
  /*
   * 1. I am just posting a new content without media.
   * 2. I am posting a new content with media.
   * 3. I am editing my content which has media.
   * 4. I am editing my content and media.
   * 5.
   */

  const handlePostSubmit = () => {
    handleFileUploadToCloud()
      .then((mediaData) => {
        if (post && Object.keys(post).length > 0) {
          handleEditPost({ ...post, content: postText, ...mediaData });
        } else {
          const data = {
            content: postText,
            ...mediaData,
            bookmark: [],
            comments: [],
          };
          handleAddPost(data);
        }

        setPostText("");
        handleRemoveFile();
        document.querySelector("#post-text-area").style.height = "auto";
        setToggleDialog({
          showDialog: false,
          selectedPost: {},
        });
      })
      .catch((error) => errorHandler(error));
  };

  const handleFileUploadToCloud = async () => {
    if (!mediaRefForPreview.current || mediaRefForPreview.current === "")
      return {
        mediaAlt: "",
        media: "",
      };
    if (
      mediaRefForPreview.current.includes("https://") ||
      mediaRefForPreview.current.includes("http://")
    )
      return {
        mediaAlt: post.mediaAlt,
        media: mediaRefForPreview.current,
      };

    const formData = new FormData();
    formData.append("file", mediaRefForPreview.current);
    formData.append(
      "upload_preset",
      process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
    );
    try {
      const data = fileDetails.type.includes("video")
        ? await postVideo(formData)
        : await postImage(formData);
      const parsedData = await data.json();
      return {
        mediaAlt: fileDetails.name,
        media: parsedData.secure_url,
      };
    } catch (error) {
      errorHandler(error);
    }
  };

  const handleRemoveFile = () => {
    mediaRefForPreview.current = null;
    setFilesDetails(null);
  };

  const handleTextArea = (e) => {
    setPostText(e.target.value);
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-bold tracking-tight text-gray-600 md:text-2xl">
        {post && Object.keys(post).length > 0 ? "Edit Post" : "Create Post"}
      </h3>
      <textarea
        id="post-text-area"
        value={postText}
        ref={postTextAreaRef}
        onChange={handleTextArea}
        className="h-20 p-2 overflow-hidden text-gray-600 bg-transparent border-0 outline-none resize-none "
        placeholder="What's on your mind?"
        name="post"
        maxLength={280}
      ></textarea>
      {fileDetails && (
        <PostMedia
          height={"h-40"}
          width={"w-60"}
          mediaFile={mediaRefForPreview.current}
          mediaType={fileDetails.type}
          handleRemoveFile={handleRemoveFile}
        />
      )}
      <div className="flex items-center justify-between">
        <div className="flex flex-row space-x-4">
          <label className="rounded-full cursor-pointer group ">
            <PhotoIcon className="w-6 h-6 text-gray-500 group-hover:text-orange-400" />
            <input
              onClick={(event) => {
                event.target.value = null;
              }}
              accept="video/*|image/*"
              onChange={handleFileChange}
              hidden
              type="file"
            />
          </label>
          <div className="hidden sm:block">
            <EmojiMenu textAreaRef={postTextAreaRef} setPostText={setPostText} />
          </div>
        </div>
        <button
          type="button"
          disabled={postText === "" && mediaRefForPreview.current === null}
          onClick={handlePostSubmit}
          className="px-6 py-2 text-gray-100 bg-orange-400 rounded-md hover:bg-orange-500/80 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default PostWrite;
