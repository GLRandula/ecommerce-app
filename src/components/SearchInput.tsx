'use client';
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const SearchInput = () => {

  const [search, setSearch] = useState("");

  return (
    <>
      <div className="w-full hidden md:inline-flex flex-1 h-12 relative">
        <CiSearch className="text-lg absolute left-2.5 mt-4 text-lightOrange" />
        <input
          type="text"
          placeholder="Search Products..."
          className="flex-1 h-full outline-none bg-transparent placeholder:text-lightText border-[1px] border-accent/30 rounded-sm pl-8 pr-48"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        {search && <IoMdClose className="text-accent/40 hover:text-lightRed hoverEffect cursor-pointer absolute right-36 top-4" onClick={() => setSearch("")} />}
        <button
          type="button"
          className="text-accentWhite bg-lightOrange absolute right-0 px-10 py-2 mr-1 text-sm rounded-sm hover:bg-darkOrange hoverEffect font-medium top-1.5"
        >
          Search
        </button>
      </div>
    </>
  );
};

export default SearchInput;
