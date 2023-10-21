import React, { useState } from "react";
import PopUp from "./PopUp";

const Image = (props) => {
  const [check, setcheck] = useState(false);
  const handleClose = () => {
    setcheck(false);
  };
  check
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <div>
      <div
        className="mb-4"
        onClick={() => {
          setcheck(true);
        }}
      >
        <img
          src={props.urls.full}
          alt={props.alt_description}
          loading="lazy"
          className="rounded-t-lg "
        />
        <div className="border-neutral-500 border-x border-b rounded-b-lg">
          <div className="flex flex-row justify-between">
            <div className="flex flex-row ">
              <div>
                <img
                  src={props.user.profile_image.medium}
                  alt="Profile_Image"
                  className="ml-4 rounded-full mt-3 w-[70%] h-[60%]"
                />
              </div>
              <div className="mt-2 ml-2 font-bold font-mono text-slate-800">
                {props.user.name}
                <div className="font-semibold italic text-slate-400">{`@${props.user.instagram_username}`}</div>
              </div>
            </div>
            <div className="flex flex-row mt-5 mr-4 gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
              </svg>
              <div className="font-bold text-slate-800">{props.likes}</div>
            </div>
          </div>
        </div>
      </div>
      <PopUp onClose={handleClose} toggle={check} temp={props} />
    </div>
  );
};

export default Image;
