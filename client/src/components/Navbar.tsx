import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/transparent.png";
import { Cross, Cross as Hamburger } from "hamburger-react";
import { useState } from "react";

export default function Navbar() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState<boolean>();

    const checkActive = (path: string): string => {
        const active =
            location.pathname == path ? "bg-neutral/10" : "bg-tranparent";
        return active;
    };

    return (
        <div className="fixed top-0 w-full bg-darkCream border-b-2 lg:border-2 border-gray-600">
            <div className="h-18 md:h-24 flex justify-between items-center px-2 lg:px-0 lg:pl-10">
                <div className="logo-text flex gap-x-2 lg:gap-x-6 items-center ">
                    <img className="max-h-14 lg:max-h-20" src={Logo}></img>
                    <h1 className="hidden lg:flex lg:text-4xl font-medium text-neutral">
                        LightsScape
                    </h1>
                </div>
                <div className="links-menu h-full">
                    <div className=" lg:hidden flex items-center h-full">
                        <Cross toggled={isOpen} color="#949494" />
                    </div>
                    <ul className="desktop-nav lg:flex text-2xl text-neutral h-full hidden">
                        <Link to="/">
                            <li
                                className={`flex items-center h-full border-2 border-y-0 px-8 hover:cursor-pointer hover:bg-white ${checkActive(
                                    "/"
                                )}`}
                            >
                                <p>Home</p>
                            </li>
                        </Link>

                        <Link to={"/gallery"}>
                            <li
                                className={`flex items-center h-full border-2 border-y-0 border-x-0 px-8 hover:cursor-pointer hover:bg-white ${checkActive(
                                    "/gallery"
                                )}`}
                            >
                                <p>Gallery</p>
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
}
