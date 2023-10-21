import React from "react";

const Header = ({ Images, setImages }) => {
  // const handlechange = (e) => {
  //   console.log(e.target.value);
  // };
  const handlesubmit = async (e) => {
    if (e.key === "Enter") {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?query=${e.target.value}&client_id=ew2YFXjUBjUnYZgD1Gdi9KEJbptMNyWKYxE6RsRjG8Y`
      ).then((response) => response.json());
      setImages(data.results);
      console.log(data.results);
    }
  };
  return (
    <div className="p-6">
      <div className="md:flex flex-row gap-10 justify-evenly w-[85%] mx-auto">
        <div className="font-design font-black text-3xl">Image Gallery</div>
        <input
          // onChange={handlechange}
          onKeyDown={handlesubmit}
          type="text"
          className="invisible md:visible border-1 border-slate-400 grow rounded-lg pl-2 ml-10 mr-4 bg-slate-100 shadow-inner outline-none"
          placeholder="Search Images Here"
        ></input>
        <div className="hidden md:flex flex-row gap-10">
          <div className="font-semibold">Explore</div>
          <div className="font-semibold">Collection</div>
          <div className="font-semibold">Community</div>
        </div>
        <div className="font-semibold">Dark Mode</div>
      </div>
    </div>
  );
};

export default Header;
