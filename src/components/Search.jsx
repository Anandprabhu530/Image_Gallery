import React from "react";

const Search = ({ Images, setImages }) => {
  const handlechange = (e) => {
    console.log(e.target.value);
  };
  const handlesubmit = async (e) => {
    if (e.key === "Enter") {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?query=${e.target.value}&client_id=ew2YFXjUBjUnYZgD1Gdi9KEJbptMNyWKYxE6RsRjG8Y`
      ).then((response) => response.json());
      setImages(data.results);
    }
  };
  return (
    <div className="flex items-center py-[170px] bg-[url('https://images.unsplash.com/photo-1697325320142-28beaededbf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80')]">
      <div className="max-w-fit mx-auto w-full">
        <h1 className="grid  text-center text-4xl font-bold gap-y-4 text-slate-100">
          Download High Quality Images by Creators
          <label className="text-base font-normal text-slate-300">
            Over 2.4 million+ stock Images by our talented community
          </label>
          <input
            onChange={handlechange}
            onKeyDown={handlesubmit}
            type="text"
            className="bg-slate-100 border-none rounded-lg select-none outline-none text-base font-normal text-black p-[10px]"
            placeholder="Search high resolution Images, categories, wallpapers  "
          />
        </h1>
      </div>
    </div>
  );
};

export default Search;
