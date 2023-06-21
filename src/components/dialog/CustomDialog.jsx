import { useContext } from "react";
import { PostContext } from "../../context/PostProvider";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import PostWrite from "../post-write/PostWrite";
import { getUserFromLocalStorage } from "../../services/localstorage-service";

const CustomDialog = () => {
  const { toggleDialog: { showDialog,selectedPost }, setToggleDialog } = useContext(PostContext)
  const profilePic = getUserFromLocalStorage().profilePic
  return (
    <>
      <Transition appear show={showDialog} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setToggleDialog((prevVal) => ({ ...prevVal, showDialog: false }))}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-xl p-6 overflow-hidden text-left align-middle transition-all transform bg-orange-100 shadow-xl rounded-2xl">

                  <div className="flex rounded-xl">
                    <img className="mr-2 rounded-full w-14 h-14" src={profilePic} alt="avatar" />
                    <PostWrite post={selectedPost} /></div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CustomDialog;