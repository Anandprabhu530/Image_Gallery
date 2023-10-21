import React from "react";
import Image from "./Image";

const Displayimages = ({ Images, setImages }) => {
  return (
    <div className="w-[85%] mx-auto m-4">
      <div className="columns-1 md:columns-2 lg:columns-3">
        {Images.map((grp_img, ind) => (
          <Image {...grp_img} key={ind} />
        ))}
      </div>
    </div>
  );
};

export default Displayimages;
