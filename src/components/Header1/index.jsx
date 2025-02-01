import React from "react";
import MegaMenu1 from "../MegaMenu1";
import { Img, Text } from "./..";
import { Link } from "react-router-dom";

export default function Header1({ ...props }) {

    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <header {...props} className={`${props.className} relative`}>
            <div className="flex justify-center self-stretch border-b border-solid border-gray-200_01 bg-white-a700 py-3">
                <div className="container-xs flex items-center justify-between gap-5 md:flex-col md:px-5">
                    <Link to="/">
                        <Img
                            src="images\img_brand_logo.png"
                            alt="brand logo"
                            className="h-[40px] w-[190px] object-contain"
                        />
                    </Link>
                    <div className="flex">
                        <ul className="flex items-center gap-12 sm:flex-col">
                            <li>
                                <Link to="/">
                                    <Text size="texts" as="p"
                                        className="text-[16px] font-medium hover:font-medium hover:text-black-900">
                                        Home
                                    </Text>
                                </Link>
                            </li>
                            <li
                                onMouseLeave={() => {
                                    setMenuOpen(false);
                                }}
                                onMouseEnter={() => {
                                    setMenuOpen(true);
                                }}
                            >
                                <div className="flex cursor-pointer">
                                    <Text
                                        size="texts"
                                        as="p"
                                        className="cursor-pointer text-[16px] font-normal hover:font-medium hover:text-black-900">
                                        Shop
                                    </Text>
                                    <Img
                                        src="images/img_arrow_down_gray_600_01_1.svg"
                                        alt="Dropdownarrow"
                                        className="h-[20px] w-[16px]"
                                    />
                                </div>
                                {
                                    menuOpen ? <MegaMenu1 /> : null
                                }
                            </li>
                            <li>
                                <Link to="/contact" className="cursor-pointer">
                                    <Text size="texts" as="p"
                                        className="text-[16px] font-normal hover:font-medium hover:text-black-900">
                                        Contact Us
                                    </Text>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex pl-60 w-[25%] md:w-full">
                        <Link to="/myaccount">
                            <Img
                                title="Your Account"
                                src="images/img_lock_gray_600_01.svg"
                                alt="account icon"
                                className="h-[25px] mr-2" />
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}