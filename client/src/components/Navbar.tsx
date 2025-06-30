import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/transparent.png";
import SPC from "../assets/spc.jpg";
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

    const checkActiveMobile = (path: string): string => {
        const active =
            location.pathname == path ? "text-orange-400" : "bg-tranparent";
        return active;
    };

    return (
        <div className="fixed top-0 w-full h-18 md:h-24   bg-darkCream border-b-2 lg:border-2 border-gray-600 z-20">
            <div className="h-full flex justify-between items-center px-2 lg:px-0 lg:pl-10">
                <div className="logo-text flex gap-x-2 lg:gap-x-6 items-center ">
                    <div className="flex">
                        <img className="max-h-14 lg:max-h-20" src={Logo}></img>
                        <img className="max-h-14 lg:max-h-20" src={SPC}></img>
                    </div>

                    <h1 className="hidden lg:flex lg:text-4xl font-medium text-neutral">
                        LightScape
                    </h1>
                </div>
                <div className="links-menu h-full">
                    <div className=" lg:hidden flex items-center h-full">
                        <Cross
                            toggled={isOpen}
                            onToggle={setIsOpen}
                            color="#949494"
                        />
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
            <ul
                className={`mobile-nav flex flex-col gap-y-4 text-2xl items-center py-5  bg-darkCream border-b-2 shadow-md text-neutral transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <Link to="/">
                    <li className={`border-b-1 ${checkActiveMobile("/")}`}>Home</li>
                </Link>

                <Link to="/gallery">
                    <li className={`border-b-1 ${checkActiveMobile("/gallery")}`}>Gallery</li>
                </Link>
            </ul>
        </div>
    );
}
