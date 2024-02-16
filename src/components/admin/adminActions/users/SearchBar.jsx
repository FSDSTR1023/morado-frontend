/* eslint-disable no-unused-vars */
import React from 'react';
import { FiSearch } from "react-icons/fi";

export default function SearchBasicExample() {
    return (
            <div className="mb-3 md:w-96">
                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                        type="search"
                        className="relative shadow-md  m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none "
                        placeholder="Search"
                        aria-label="Search"
                        aria-describedby="button-addon1" />

                    {/* <!--Search button--> */}
                    <button
                        className="flex items-center rounded-r bg-primary px-5 shadow-md transition duration-150 ease-in-out hover:bg-primary-700 focus:bg-primary-700 focus:outline-none focus:ring-0 active:bg-primary-800"
                        type="button"
                        id="button-addon1">
                            <FiSearch />
                    </button>
                </div>
            </div>
    );
}