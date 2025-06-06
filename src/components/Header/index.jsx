import React from "react";
import MegaMenu1 from "../MegaMenu1";
import { Img, Text } from "./..";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header({ ...props }) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header
      {...props}
      className={`${props.className} relative border-b border-solid border-gray-200_01 bg-white-a700`}
    >
      <div className="container mx-auto flex justify-between items-center py-2 px-14 sm:px-2">
        <Link to="/">
          <Img
            src="images/img_brand_logo.png"
            alt="brand logo"
            className="h-10 w-48 object-contain sm:h-8 sm:w-36"
          />
        </Link>
        <div className="flex items-center md:hidden">
          <ul className="flex items-center gap-12 sm:gap-6">
            <li>
              <Link to="/">
                <Text
                  size="texts"
                  as="p"
                  className="text-[16px] font-medium text-black-900 hover:text-lime-900"
                >
                  Home
                </Text>
              </Link>
            </li>
            <li
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <div className="flex items-center cursor-pointer gap-1">
                <Text
                  size="texts"
                  as="p"
                  className="text-[16px] font-normal hover:font-medium hover:text-lime-900"
                >
                  Shop
                </Text>
                <Img
                  src="images/img_arrow_down_gray_600_01_1.svg"
                  alt="Dropdown arrow"
                  className="h-5 w-4"
                />
              </div>
              {menuOpen && (
                <MegaMenu1 className="absolute top-full left-0 w-full z-10 bg-white-a700 shadow-lg" />
              )}
            </li>
            <li>
              <Link to="/contact">
                <Text
                  size="texts"
                  as="p"
                  className="text-[16px] font-normal hover:font-medium hover:text-lime-900"
                >
                  Contact Us
                </Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <Img
              title="Cart"
              src="images/img_thumbs_up_gray_600_01_1.svg"
              alt="cart icon"
              className="h-6 w-6 sm:h-5 sm:w-5"
            />
          </Link>
          <Link to="/myaccount">
            <Img
              title="Account"
              src="images/img_lock_gray_600_01.svg"
              alt="account icon"
              className="h-6 w-6 sm:h-5 sm:w-5"
            />
          </Link>
          <button
            className="md:block hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FaTimes
                className="h-6 w-6 sm:h-5 sm:w-5 text-gray-600"
                aria-label="Close menu"
              />
            ) : (
              <FaBars
                className="h-6 w-6 sm:h-5 sm:w-5 text-gray-600"
                aria-label="Open menu"
              />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:block hidden bg-white-a700 border-b border-gray-200_01">
          <div className="container mx-auto px-4 sm:px-2 py-4">
            <ul className="flex flex-col items-center gap-4">
              <li>
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <Text
                    size="texts"
                    as="p"
                    className="text-[16px] font-medium text-black-900 hover:text-lime-900"
                  >
                    Home
                  </Text>
                </Link>
              </li>
              <li>
                <div
                  className="flex items-center cursor-pointer gap-1"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <Text
                    size="texts"
                    as="p"
                    className="text-[16px] font-normal hover:font-medium hover:text-lime-900"
                  >
                    Shop
                  </Text>
                  <Img
                    src="images/img_arrow_down_gray_600_01_1.svg"
                    alt="Dropdown arrow"
                    className="h-5 w-4"
                  />
                </div>
                {menuOpen && (
                  <MegaMenu1 className="w-full mt-2 bg-white-a700 shadow-lg" />
                )}
              </li>
              <li>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <Text
                    size="texts"
                    as="p"
                    className="text-[16px] font-normal hover:font-medium hover:text-lime-900"
                  >
                    Contact Us
                  </Text>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
