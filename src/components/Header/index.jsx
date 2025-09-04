import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative border-b">
      <div className="mx-auto flex justify-between items-center px-4 py-3 md:px-12">
        <Link to="/">
          <img
            src="images/img_brand_logo.png"
            alt="brand logo"
            className="h-8 w-36 object-contain"
            loading="lazy"
            draggable="false"
          />
        </Link>
        <div className="hidden items-center md:block">
          <ul className="flex items-center gap-6 md:gap-12">
            <li>
              <Link to="/">
                <p className="text-lg font-medium text-blue-500 hover:text-blue-700">
                  Home
                </p>
              </Link>
            </li>
            <li
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <div className="flex items-center cursor-pointer gap-1">
                <p className="text-lg font-medium text-blue-500 hover:text-blue-700">
                  Shop
                </p>
                <RiArrowDropDownLine className="scale-[2]" />
              </div>
              {menuOpen && (
                <div className="absolute top-auto z-[99] min-w-[200px] pt-3">
                  <div className="w-full rounded-lg bg-white border p-4 shadow-2xl">
                    <div className="flex justify-center">
                      <div className="flex justify-center flex-col items-start gap-3 md:gap-3">
                        <div className="flex flex-col items-start gap-4 md:gap-4">
                          <Link
                            to="/allproducts"
                            className="self-center text-[13px]"
                          >
                            <p className="text-lg font-normal hover:underline">
                              All Products
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to="/contact">
                <p className="text-lg font-medium text-blue-500 hover:text-blue-700">
                  Contact Us
                </p>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/cart">
            <IoCartOutline className="h-6 w-6 scale-125 text-gray-500" />
          </Link>
          <Link to="/myaccount">
            <IoPersonOutline className="h-6 w-6 text-gray-500" />
          </Link>
          <button
            className="block md:hidden focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FaTimes
                className="h-6 w-6 text-blue-500"
                aria-label="Close menu"
              />
            ) : (
              <FaBars
                className="h-6 w-6 text-blue-500"
                aria-label="Open menu"
              />
            )}
          </button>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="block md:hidden border-b border-gray-400">
          <div className="container mx-auto px-2 py-4">
            <ul className="flex flex-col items-center gap-4">
              <li>
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <p className="text-lg font-medium text-blue-500 hover:text-blue-700">
                    Home
                  </p>
                </Link>
              </li>
              <li>
                <div
                  className="flex items-center cursor-pointer gap-1"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <p className="text-lg font-medium text-blue-500 hover:text-blue-700">
                    Shop
                  </p>
                  <RiArrowDropDownLine className="scale-[2]" />
                </div>
                {menuOpen && (
                  <div className="absolute top-auto z-[99] min-w-[200px] pt-3">
                    <div className="w-full rounded-lg bg-white border p-4 shadow-2xl">
                      <div className="flex justify-center">
                        <div className="flex justify-center flex-col items-start gap-3 md:gap-3">
                          <div className="flex flex-col items-start gap-4 md:gap-4">
                            <Link
                              to="/allproducts"
                              className="self-center text-[13px]"
                            >
                              <p className="text-lg font-normal hover:underline">
                                All Products
                              </p>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </li>
              <li>
                <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                  <p className="text-lg font-medium text-blue-500 hover:text-blue-700">
                    Contact Us
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
