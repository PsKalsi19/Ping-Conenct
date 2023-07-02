import { XCircleIcon } from "@heroicons/react/24/outline";

const PostMedia = ({ mediaFile, mediaType,handleRemoveFile,height,width }) => {
  if (mediaFile === null) return;
  if (mediaType.includes("video")) {
    return (
      <div className={`"relative inline-flex ${height} ${width}"`}>
          <video className={`${height} ${width}`} controls>
            <source src={mediaFile} type={"video/mp4"} />
          </video>
      { handleRemoveFile &&  <XCircleIcon onClick={handleRemoveFile} className="w-6 h-6 text-red-600 cursor-pointer " />}
      </div>
    );
  } else if (mediaType.includes("image")) {
    return <div className={`"relative inline-flex ${height} ${width}"`}>
        <img className={`object-cover rounded-sm ${height} ${width}`} src={mediaFile} alt={"image_preview"} />
        
        { handleRemoveFile &&  <XCircleIcon onClick={handleRemoveFile} className="w-6 h-6 text-red-600 cursor-pointer " />}
        </div>;
  }
  return <p className="text-gray-600"> File type not supported.</p>;
};

export default PostMedia;

