import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
        const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

        // Early Return
        if (!isMenuOpen) {
                return null;
        }

        return (
                <div className="w-48 p-5 shadow-lg text-left">
                        <ul>
                                <li>Music</li>
                                <li>Sports</li>
                                <li>Gaming</li>
                                <li>Movies</li>
                        </ul>

                        <h1 className="font-bold pt-5">Subscriptions</h1>
                        <ul>
                                <li>Music</li>
                                <li>Sports</li>
                                <li>Gaming</li>
                                <li>Movies</li>
                        </ul>

                        <h1 className="font-bold pt-5">Watch Later</h1>
                        <ul>
                                <li>Music</li>
                                <li>Sports</li>
                                <li>Gaming</li>
                                <li>Movies</li>
                        </ul>
                </div>
        );
};

export default Sidebar;
