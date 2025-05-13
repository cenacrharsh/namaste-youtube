import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
        const dispatch = useDispatch();

        const toggleMenuHandler = () => {
                dispatch(toggleMenu());
        };

        return (
                <div className="grid grid-flow-col p-5 m-2 shadow-lg">
                        <div className="flex col-span-1">
                                <img
                                        className="h-8 cursor-pointer"
                                        alt="icon"
                                        src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
                                        onClick={() => toggleMenuHandler()}
                                ></img>
                                <a href="/">
                                        <img
                                                className="h-8 mx-2"
                                                alt="logo"
                                                src="https://www.clipartmax.com/png/middle/294-2941508_youtube-icon-youtube-logo-png.png"
                                        ></img>
                                </a>
                        </div>
                        <div className="col-span-10 text-center px-10">
                                <input
                                        className="w-1/2 border border-gray-400 rounded-l-full p-2"
                                        type="text"
                                ></input>
                                <button className="border border-gray-400  rounded-r-full bg-gray-100 px-5 py-2">
                                        🔍
                                </button>
                        </div>
                        <div className="col-span-1">
                                <img
                                        className="h-8"
                                        alt="user"
                                        src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
                                ></img>
                        </div>
                </div>
        );
};

export default Head;
