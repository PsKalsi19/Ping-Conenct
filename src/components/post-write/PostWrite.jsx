import { PhotoIcon } from "@heroicons/react/24/outline";
import { FaceSmileIcon } from "@heroicons/react/24/outline";

import EmojiPicker, { SkinTones, Theme } from "emoji-picker-react";
/* eslint-disable no-undef */
import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../context/PostProvider";
import { toast } from "react-hot-toast";
import PostMedia from "./PostMedia";
import { useRef } from "react";
import { postImage, postVideo } from "../../services/post-service";
import { errorHandler } from "../../services/common-util";
import PostMenus from "../post-menu/PostMenus";
import POSTS_ACTIONS from "../../constants/posts-actions";

const PostWrite = ({ post }) => {
  const mediaRefForPreview = useRef(null);
  const textAreaRef = useRef(null);
  const [postText, setPostText] = useState("");

  const {
    handleAddPost,
    handleEditPost,
    setToggleDialog,
    fileDetails,
    setFilesDetails,
    checkMediaType,
    postsState,
    postsDispatch,
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

  const handlePostSubmit = () => {
    postsDispatch({ type: POSTS_ACTIONS.SHOW_LOADER_FOR_POST, payload: true });
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

  const onEmojiSelect = (emojiData) => {
    const textArea = textAreaRef.current;
    const startPos = textArea.selectionStart;
    const endPos = textArea.selectionEnd;
    setPostText((prevVal) => {
      return (
        prevVal.slice(0, startPos) + emojiData.emoji + prevVal.slice(endPos)
      );
    });
  };

  return (
    <div className="w-full">
      <h3 className="text-lg font-bold tracking-tight text-gray-600 dark:text-gray-100 md:text-2xl">
        {post && Object.keys(post).length > 0 ? "Edit Post" : "Create Post"}
      </h3>
      <textarea
        id="post-text-area"
        value={postText}
        ref={textAreaRef}
        onChange={handleTextArea}
        className="w-full h-10 overflow-hidden text-gray-600 bg-transparent border-0 outline-none resize-none dark:text-gray-100 "
        placeholder="What's on your mind?"
        name="post"
        maxLength={280}
      ></textarea>
      {fileDetails && (
        <PostMedia
          disableButton={postsState.postLoader}
          height={"h-40"}
          width={"w-60"}
          mediaFile={mediaRefForPreview.current}
          mediaType={fileDetails.type}
          handleRemoveFile={handleRemoveFile}
        />
      )}
      <div className="flex items-center justify-between">
        <div className="flex flex-row space-x-4">
          <label
            className={`rounded-full cursor-pointer ${
              postsState.postLoader ? "cursor-not-allowed" : ""
            } group`}
          >
            <PhotoIcon
              className={`w-6 h-6 text-gray-500 dark:text-gray-300${
                postsState.postLoader ? "cursor-not-allowed" : ""
              } group-hover:text-orange-400 dark:group-hover:text-stone-100`}
            />
            <input
              onClick={(event) => {
                event.target.value = null;
              }}
              disabled={postsState.postLoader}
              accept="video/*|image/*"
              onChange={handleFileChange}
              hidden
              type="file"
            />
          </label>
          <div className="hidden sm:block">
            <PostMenus
              disableButton={postsState.postLoader}
              menuIcon={
                <FaceSmileIcon
                  className={`w-6 h-6 text-gray-500 dark:text-gray-300${
                    postsState.postLoader ? " pointer-events-none" : ""
                  } hover:text-orange-400 dark:hover:text-stone-100`}
                />
              }
              elementRender={
                <EmojiPicker
                  onEmojiClick={onEmojiSelect}
                  autoFocusSearch={false}
                  theme={Theme.AUTO}
                  searchDisabled
                  height={350}
                  emojiVersion="0.5"
                  previewConfig={{
                    showPreview: false,
                  }}
                  skinTonesDisabled
                  defaultSkinTone={SkinTones.MEDIUM}
                />
              }
            />
          </div>
        </div>
        <button
          type="button"
          disabled={
            (postText === "" && mediaRefForPreview.current === null) ||
            postsState.postLoader
          }
          onClick={handlePostSubmit}
          className="px-6 py-2 text-gray-100 bg-orange-400 rounded-md dark:bg-stone-700 dark:hover:bg-stone-600 hover:bg-orange-500/80 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {postsState.postLoader && (
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-3 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#E5E7EB"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentColor"
              />
            </svg>
          )}
          {postsState.postLoader ? "Loading..." : "Post"}
        </button>
      </div>
    </div>
  );
};

export default PostWrite;
