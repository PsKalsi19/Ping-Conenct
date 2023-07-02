import { useContext, useRef, useState } from "react";
import PostCard from "../../components/post-card/PostCard";
import { PostContext } from "../../context/PostProvider";
import { useEffect } from "react";
import POSTS_ACTIONS from "../../constants/posts-actions";
import { delayResult } from "../../services/common-util";
import PostCardSkeleton from "../../components/post-card-skeleton/PostCardSkeleton";
import NoDataAvailable from "../../components/no-data-available/NoDataAvailable";

const Explore = () => {
  const {
    postsState: { posts, showLoader },
    postsDispatch,
  } = useContext(PostContext);

  const [allPosts, setAllPosts] = useState([]);
  const observerTarget = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          postsDispatch({ type: POSTS_ACTIONS.SET_LOADING, payload: true });
          delayResult(() => {
            postsDispatch({ type: POSTS_ACTIONS.SET_LOADING, payload: false });
            setAllPosts((prevState) => [...prevState, ...posts]);
          },3000);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, posts, postsDispatch]);

  useEffect(() => {
    document.title = "EXPLORE | PING CONNECT";
  }, []);

  return (
    <div className="flex flex-col items-center space-y-8">
      {allPosts &&
        allPosts.length > 0 &&
        allPosts.map((post, index) => (
          <PostCard post={post} key={post._id + index} />
        ))}
      <div ref={observerTarget}></div>
      {showLoader && <PostCardSkeleton />}
      {!showLoader && posts && posts.length === 0 && (
        <NoDataAvailable
          message={`Remember, a simple follow or a post can lead to remarkable
          connections and delightful experiences. So, go ahead and make that
          move right now.`}
        />
      )}
    </div>
  );
};

export default Explore;
