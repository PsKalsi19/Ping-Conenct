/* eslint-disable jsx-a11y/img-redundant-alt */
import { useContext, Fragment, useState } from "react";
import { Dialog, Popover, Transition } from "@headlessui/react";
import { AuthContext } from "../../context/AuthProvider";
import { CameraIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { UserContext } from "./../../context/UserProvider";
const avatarLinks = [
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_4191e98a-8aee-4200-b956-343faa6bef7c.jpg?updatedAt=1686940611518",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_523f7d9a-cacd-47f9-a49b-b9144254dabc.jpg?updatedAt=1686940611659",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_89075b06-2a3b-4655-b4a2-2c5a56e0ef6f.jpg?updatedAt=1686940612035",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_020d6743-7a2d-4329-8cf2-19e4fd779812.jpg?updatedAt=1686940612243",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_2db6717e-7690-46f0-8889-3a956c4adf0b.jpg?updatedAt=1687637106249",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_6febfdb1-ab38-4461-b747-1d8451ff6cc9.jpg?updatedAt=1686940612248",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d34ae410-3dd4-4516-8028-6407b2aa7d67.jpg?updatedAt=1686940614203",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_d890834a-37a5-4020-a6c0-5fe71d679bcb.jpg?updatedAt=1686940614856",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_521f5c1b-5361-49bc-9469-01f6fc0a5931.jpg?updatedAt=1686940612361",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_215c4292-ca7a-4b83-a757-4934f0433789.jpg?updatedAt=1687637106578",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_fee1c365-dd27-42d8-afed-6c67668d1343.jpg?updatedAt=1687637106506",
  "https://ik.imagekit.io/pb97gg2as/Ping-Connnect/Avatars/_5255bb06-06fc-4af9-88d6-0a62e43a8e96.jpg?updatedAt=1686940612286",
];

const EditProfile = () => {
  const {
    authState: { user },
  } = useContext(AuthContext);
  const { toggleEditProfile, setToggleEditProfile, handleEditUser } =
    useContext(UserContext);
  const [formState, setFormState] = useState(null);

  useEffect(() => {
    setFormState(user);
  }, [user]);
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditUser(formState);
    setToggleEditProfile(false);
  };

  const changeFileHandler = async (e) => {
    const file = e.target.files[0];
    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    let base64File = await toBase64(file);
    setFormState((prevVal) => ({ ...prevVal, [e.target.name]: base64File }));
  };

  const changeHandlerFn = (e) => {
    setFormState((prevVal) => ({
      ...prevVal,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <>
      <Transition appear show={toggleEditProfile} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setToggleEditProfile(false)}
        >
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
                  <div className="rounded-xl">
                    <form
                      className="space-y-4 md:space-y-6"
                      onSubmit={handleSubmit}
                    >
                      <h3 className="text-xl font-bold tracking-tight text-center text-gray-700">
                        Profile Details
                      </h3>
                      <div className="relative">
                        <img
                          className="w-full max-w-full rounded-md h-60"
                          src={formState?.banner}
                          alt="image description"
                        />
                        <label
                          htmlFor="dropzone-file-banner"
                          className="absolute top-0 flex flex-col items-center justify-center w-full max-w-full rounded-md cursor-pointer h-60 hover:bg-bray-800 bg-gray-600/40 hover:border-gray-500 hover:bg-gray-700/30"
                        >
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <CameraIcon className="w-10 h-10 text-gray-600" />
                          </div>
                          <input
                            onChange={changeFileHandler}
                            src={formState?.banner}
                            id="dropzone-file-banner"
                            accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
                            name="banner"
                            type="file"
                            className="hidden"
                          />
                        </label>

                        <Popover className="relative">
                          <Popover.Button className="absolute right-0 px-4 py-2 my-4 text-sm font-medium text-center text-gray-100 bg-orange-400 rounded-md shadow hover:text-gray-100 hover:bg-orange-400/95">
                            Choose Avatar
                          </Popover.Button>

                          <Popover.Panel className="absolute right-0 z-10 p-4 my-2 border-2 border-orange-200 rounded-md bg-orange-200/40 top-16">
                            <div className="grid grid-cols-4 gap-4">
                              {avatarLinks.map((avatar, index) => (
                                <Popover.Button
                                  key={index}
                                  onClick={() =>
                                    setFormState({
                                      ...formState,
                                      profilePic: avatar,
                                    })
                                  }
                                >
                                  <img
                                    className="w-16 h-16 rounded-full"
                                    src={avatar}
                                    alt="avatar"
                                  />
                                </Popover.Button>
                              ))}
                            </div>
                          </Popover.Panel>
                        </Popover>
                      </div>
                      <div className="absolute p-6 top-52">
                        <img
                          className="bg-orange-100 border-4 border-orange-100 rounded-full h-28 w-28"
                          src={formState?.profilePic}
                          alt="avatar"
                        />

                        <label
                          htmlFor="dropzone-file-avatar"
                          className="absolute flex flex-col items-center justify-center border-4 border-orange-100 rounded-full cursor-pointer top-6 h-28 w-28 hover:bg-bray-800 bg-gray-600/40 hover:bg-gray-700/30"
                        >
                          <div className="relative">
                            <CameraIcon className="absolute w-8 h-8 text-gray-600 top-4 left-4" />
                          </div>
                          <input
                            id="dropzone-file-avatar"
                            onChange={changeFileHandler}
                            src={formState?.profilePic}
                            accept="image/apng, image/avif, image/gif, image/jpeg, image/png, image/svg+xml, image/jpg,image/webp"
                            name="profilePic"
                            type="file"
                            className="hidden"
                          />
                        </label>
                      </div>

                      <div>
                        <label
                          htmlFor="bio"
                          className="block mt-20 mb-2 text-sm font-medium text-gray-700"
                        >
                          Bio
                        </label>
                        <textarea
                          onChange={changeHandlerFn}
                          placeholder="Something about yourself."
                          value={formState?.bio}
                          maxLength={250}
                          name="bio"
                          id="bio"
                          cols="30"
                          className="border sm:text-sm font-medium rounded-lg block w-full p-2.5 bg-orange-100 border-orange-200 placeholder-gray-500 text-gray-700 focus:ring-orange-200 focus:border-orange-200 resize-none"
                          rows="5"
                        ></textarea>
                      </div>
                      <div className="relative">
                        <label
                          htmlFor="link"
                          className="block mb-2 text-sm font-medium text-gray-700"
                        >
                          Website
                        </label>

                        <input
                          type="text"
                          onChange={changeHandlerFn}
                          value={formState?.link}
                          name="link"
                          id="link"
                          placeholder="www.example.com"
                          className="border sm:text-sm font-medium rounded-lg block w-full p-2.5 bg-orange-100 border-orange-200 placeholder-gray-500 text-gray-700 focus:ring-orange-200 focus:border-orange-200"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full px-5 py-2.5 text-sm lg:text-base font-medium text-center text-gray-700 rounded-lg border-1 border-gray-600 bg-orange-300 focus:ring-4 focus:outline-none hover:bg-orange-300 focus:ring-orange-200"
                      >
                        Save Changes
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditProfile;
