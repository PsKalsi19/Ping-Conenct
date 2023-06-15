import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";



const SearchBar = () => {

const [searchTerm,setSearchTerm]=useState(null)

// Only to resolve errors
const searchProductsHandler=()=>{
return []
}
const handleItemSelect=()=>{
    
}


  return (
          <Combobox onChange={handleItemSelect}>
            <div className="relative">
              <div className="relative w-full overflow-hidden text-left rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 sm:text-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <Combobox.Input
                  className="block w-full p-3 pl-10 text-sm text-gray-700 placeholder-gray-600 border border-gray-200 rounded-lg focus:ring-orange-200 focus:border-orange-200 bg-orange-50"
                  displayValue={(person) => person.name}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setSearchTerm("")}
              >
                <Combobox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg bg-orange-50 max-h-60 ring-1 ring-orange-100 ring-opacity-5 focus:outline-none sm:text-sm">
                  {searchProductsHandler().length === 0 && searchTerm !== "" ? (
                    <div className="relative px-4 py-2 text-gray-700 cursor-default select-none">
                      Nothing found.
                    </div>
                  ) : (
                    searchProductsHandler().map((product) => (
                      <Combobox.Option
                        key={product.id}
                        className={({ active }) =>
                          `relative flex h-20 items-center  text-gray-700 cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-orange-200" : "bg-orange-100"
                          }`
                        }
                        value={product}
                      >
                        {({ selected }) => (
                          <>
                            <img
                              src={product.imgUrl}
                              alt={product.title}
                              className="w-12 h-16 mr-4"
                            />
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {product.title}
                            </span>
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
  );
};

export default SearchBar;
