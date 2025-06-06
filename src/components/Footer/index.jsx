import React from "react";
import { Link } from "react-router-dom";
import { Text, Button, Input, Img, Heading } from "./..";

export default function Footer({ ...props }) {
  return (
    <footer
      {...props}
      className={`${props.className} flex py-4 border-gray-200_01 border-t border-solid`}
    >
      <div className="flex w-full flex-col items-center">
        <div className="container-xs flex flex-col gap-5 md:px-5">
          <div className="flex items-center justify-between gap-5 md:flex-col">
            <div className="flex w-[22%] flex-col gap-4 md:w-full">
              <Img
                src="images/img_brand_logo.png"
                alt="Brand Image"
                className="h-[40px] w-[190px] object-contain"
              />
              <div className="flex flex-col gap-4">
                <Text as="p" className="text-[16px] font-normal leading-6">
                  Worldwide furniture store since 2020. We sell over 1000+
                  branded products on our website
                </Text>
                <div className="mr-1.5 flex flex-col items-start gap-[18px] md:mr-0">
                  <div className="flex gap-2 self-stretch">
                    <Img
                      src="images/img_linkedin_gray_600_01.svg"
                      alt="location icon"
                      className="h-[20px]"
                    />
                    <Text as="p" className="self-end text-[16px] font-normal">
                      Telangana, India
                    </Text>
                  </div>
                  <div className="flex gap-2">
                    <Img
                      src="images/img_call_gray_600_01.svg"
                      alt="Phone Icon"
                      className="h-[20px]"
                    />
                    <Text as="p" className="text-[16px] font-normal">
                      1234567890
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-[40%] items-start justify-between gap-5 md:w-full sm:flex-col">
              <div
                className="flex w-[36%] flex-col items-start 
                            gap-[18px] sm:w-full"
              >
                <Heading
                  size="headingmd"
                  as="h6"
                  className="text-[18px] font-semibold"
                >
                  Sitemap
                </Heading>
                <ul className="flex flex-col items-start gap-5">
                  <li>
                    <Link to="/" rel="noreferrer">
                      <Text as="p" className="text-[16px] font-normal">
                        Product
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" rel="noreferrer">
                      <Text as="p" className="text-[16px] font-normal">
                        Services
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" rel="noreferrer">
                      <Text as="p" className="text-[16px] font-normal">
                        Article
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Text as="p" className="text-[16px] font-normal">
                        About Us
                      </Text>
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className="flex w-[40%] flex-col items-start 
                            gap-[18px] sm:w-full"
              >
                <Heading
                  size="headingmd"
                  as="h6"
                  className="text-[18px] font-semibold"
                >
                  Category
                </Heading>
                <ul className="flex flex-col items-start gap-5">
                  <li>
                    <Link to="/">
                      <Text as="p" className="text-[16px] font-normal">
                        Living Room
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Text as="p" className="text-[16px] font-normal">
                        Bed Room
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" rel="noreferrer">
                      <Text as="p" className="text-[16px] font-normal">
                        Kitchen
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Text as="p" className="text-[16px] font-normal">
                        Bath Room
                      </Text>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-start gap-[18px] w-[40%]">
                <Heading
                  size="headingmd"
                  as="h6"
                  className="text-[18px] font-semibold"
                >
                  Our Company
                </Heading>
                <ul className="!mr-2 flex flex-col items-start gap-5 md:mr-0">
                  <li>
                    <Link to="/">
                      <Text as="p" className="text-[16px] font-normal">
                        About us
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" rel="noreferrer">
                      <Text as="p" className="text-[16px] font-normal">
                        Vacancies
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link to="/Contact">
                      <Text as="p" className="text-[16px] font-normal">
                        Contact us
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link to="/" rel="noreferrer">
                      <Text as="p" className="text-[16px] font-normal">
                        Privacy
                      </Text>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <Text as="p" className="text-[16px] font-normal">
                        Returns policy
                      </Text>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex w-[20%] flex-col items-start justify-center gap-4 self-start md:w-full">
              <Heading
                size="headingmd"
                as="h6"
                className="text-[18px] font-semibold ml-2"
              >
                Stay Updated
              </Heading>
              <Input
                size="md"
                name="Email Input"
                className="text-[18px] gap-1 self-stretch rounded-[18px] px-2.5 !text-black-900"
                placeholder={`Enter your mail`}
                prefix={
                  <Img
                    src="images/img_checkmark_gray_500.svg"
                    alt="Checkmark"
                    className="h-[20px] w-[20px] object-contain"
                  />
                }
              />
              <Button
                size="xl"
                variant="fill"
                className="min-w-[90px] rounded-[14px] px-4 font-medium ml-2 active:bg-green-500"
              >
                Subscribe
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <div className="h-px w-full self-stretch bg-gray-200_01" />
            <Text size="textlg" as="p" className="text-[12px] font-normal">
              &copy; 2025 FurniStore. All Rights Reserved.
            </Text>
          </div>
        </div>
      </div>
    </footer>
  );
}
