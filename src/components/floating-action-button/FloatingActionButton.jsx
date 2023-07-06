import { useContext } from "react";
import { PostContext } from "../../context/PostProvider";

const FloatingActionButton = () => {
    const { setToggleDialog } = useContext(PostContext);
    const handleWrite = () => {
      setToggleDialog((prevVal) => ({ ...prevVal, showDialog: true }));
    };
  return (
    <div className="fixed right-4 bottom-20 group">
      <button
      onClick={handleWrite}
        type="button"
        className="flex items-center justify-center text-white bg-orange-400 rounded-full dark:bg-stone-700 dark:hover:bg-stone-600 w-14 h-14 hover:bg-orange-700 focus:ring-4 dark:focus:ring-stone-500 focus:ring-orange-300 focus:outline-none "
      >
        <svg
          className="w-4 h-4 transition-transform group-hover:rotate-45"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 18 18"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 1v16M1 9h16"
          />
        </svg>
        <span className="sr-only">Open actions menu</span>
      </button>
    </div>
  );
};

export default FloatingActionButton;
