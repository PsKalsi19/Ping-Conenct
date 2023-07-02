import { Popover, Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/outline";
function Navbar() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.scrollY > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);
  return (
    <nav className={`sticky left-0 top-0 right-0 z-10 bg-orange-100`}>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <NavLink
              href="/"
              className="flex items-center px-2 py-2 text-sm font-medium text-gray-900 rounded-md group"
            >
              <img
                className="w-32 h-10"
                src="https://res.cloudinary.com/dkay6uocg/image/upload/v1688300937/Ping%20Connect/logo-no-background_mzrqxn.png"
                alt="ping-connect"
              />
            </NavLink>
          </div>

          <div className="hidden md:block">
            {/* <div className="flex items-baseline ml-10 space-x-4">
              {NAVIGATION_LINKS.map(({ name, link }) => <NavLink
                key={name}
                to={link}
                className={({ isActive }) => isActive ? 'bg-secondary hover:text-secondary text-gray-800 px-3 py-2 text-base font-medium rounded-md hover:bg-gray-200' : 'px-3 py-2 text-base font-medium rounded-md text-secondary hover:bg-gray-200'
                }>
                {name}
              </NavLink>)}
            </div> */}
            <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-700 md:text-2xl">
              Home
            </h2>
          </div>
          <div className="flex -mr-2 md:hidden">
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button className="focus:outline-0">
                    {open ? (
                      <XMarkIcon className="w-6 h-6 text-gray-500" />
                    ) : (
                      <Bars3BottomRightIcon className="w-6 h-6 text-gray-500" />
                    )}
                  </Popover.Button>
                  <Popover.Overlay className="fixed inset-0 bg-gray-700 top-16 opacity-30" />
                  <div className="fixed left-0 right-0 z-10">
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Popover.Panel className="p-4 mt-4 mb-8 bg-gray-50">
                        <div className="grid">
                          {/* {NAVIGATION_LINKS.map(({ name, link }) =>
                            <Popover.Button
                              as={NavLink}
                              key={name}
                              to={link}
                              className="block px-3 py-2 text-xl font-medium rounded-md text-secondary hover:bg-gray-200"
                            >

                              {name}
                            </Popover.Button>
                          )} */}

                          <Popover.Button
                            className="block px-3 py-2 text-xl font-medium rounded-md text-secondary hover:bg-gray-200"
                            as={NavLink}
                          >
                            Customise My Plan
                          </Popover.Button>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </div>
                </>
              )}
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
