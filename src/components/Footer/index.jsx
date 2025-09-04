import React from "react";
import { Link } from "react-router-dom";
import { Button, Input } from "./..";
import { RiPhoneFill } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="flex py-4 border-gray-300 border-t border-solid">
      <div className="flex w-full flex-col items-center">
        <div className="flex flex-col gap-5 md:px-10 px-8">
          <div className="flex items-center justify-between gap-5 md:flex-row flex-col">
            <div className="flex justify-center items-center md:w-[22%] flex-col gap-4 w-full">
              <Link to="/">
                <img
                  src="images/img_brand_logo.png"
                  alt="Brand Image"
                  className="h-[40px] w-[190px] object-contain"
                  loading="lazy"
                  draggable="false"
                />
              </Link>
              <div className="flex text-center justify-center items-center flex-col gap-4">
                <p className="text-[16px] font-normal leading-6">
                  Worldwide furniture store since 2020. We sell over 1000+
                  branded products on our website
                </p>
                <div className="mr-1.5 flex flex-col items-start gap-[18px] md:mr-0">
                  <div className="flex gap-2 self-stretch">
                    <FaLocationDot className="self-center" />
                    <p className="self-end text-[16px] font-normal">India</p>
                  </div>
                  <div className="flex gap-2">
                    <RiPhoneFill className="self-center scale-105" />
                    <p className="text-[16px] font-normal">1234567890</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 justify-center items-center md:px-5 text-center md:w-[40rem]">
              <div className="flex md:w-[36%] flex-col items-start gap-[18px] w-full">
                <h6 className="text-[18px] font-semibold">Sitemap</h6>
                <ul className="flex flex-col items-start gap-5">
                  <li>
                    <Link to="/">
                      <p className="text-[16px] font-normal">Product</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className="text-[16px] font-normal">Services</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className="text-[16px] font-normal">Article</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className="text-[16px] font-normal">About Us</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex md:w-[50%] flex-col items-start gap-[18px] w-full">
                <h6 className="text-[18px] font-semibold">Category</h6>
                <ul className="flex flex-col items-start gap-5">
                  <li>
                    <Link to="/">
                      <p className="text-[16px] font-normal">Living Room</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className="text-[16px] font-normal">Bed Room</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className="text-[16px] font-normal">Kitchen</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className="text-[16px] font-normal">Bath Room</p>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-[18px] w-full md:w-[60%]">
                <h6 className="text-[18px] font-semibold">Company</h6>
                <ul className="flex flex-col items-start gap-5">
                  <li>
                    <Link to="/">
                      <p className="text-[16px] font-normal">About us</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className="text-[16px] font-normal">Careers</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contact">
                      <p className="text-[16px] font-normal">Contact us</p>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <p className="text-[16px] font-normal">Privacy</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex mt-5 md:w-[20%] flex-col items-center justify-center gap-4 w-full">
              <h6 className="text-[18px] font-semibold">Stay Updated</h6>
              <Input
                name="Email Input"
                className="text-[18px] text-black"
                placeholder="Enter your mail"
                prefix={
                  <IoMailOutline className="md:h-5 md:w-6 object-contain mr-2 h-4 w-5 text-gray-400 scale-105" />
                }
              />
              <Button className="min-w-[90px] rounded-[14px] px-4 font-medium ml-2 bg-blue-500 text-white hover:bg-blue-700">
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="h-px w-full self-stretch bg-gray-300" />
            <p className="text-[16px] font-normal">
              &copy; 2025 FurniStore. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
