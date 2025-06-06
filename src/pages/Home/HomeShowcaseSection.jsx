import React from "react";
import { Button, Img, Heading, Text } from "../../components";
import BrandStatistics from "../../components/BrandStatistics";
import UserProfile from "../../components/UserProfile";
import { useNavigate } from "react-router-dom";

export default function HomeShowcaseSection() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="container-xs flex items-center justify-center gap-6 px-5 sm:px-4 md:flex-col">
        <div className="flex flex-1 flex-col gap-[46px] sm:gap-8 md:self-stretch">
          <div className="flex flex-col items-start gap-1">
            <Text
              size="textxl"
              as="p"
              className="text-[18px] font-normal text-black-900 sm:text-base"
            >
              Discover quality, style, and comfort for every room
            </Text>
            <Heading
              size="text7xl"
              as="h1"
              className="w-[90%] text-[64px] font-medium leading-[76px] md:w-full md:text-[48px] sm:text-[36px] sm:leading-tight"
            >
              Enhance your space with timeless furniture
            </Heading>
          </div>
          <div className="flex gap-4 sm:flex-col">
            <Button
              size="5xl"
              variant="fill"
              shape="round"
              className="min-w-[200px] rounded-[24px] px-[34px] font-semibold text-base sm:min-w-full sm:px-5 sm:text-sm"
              onClick={() => navigate("/allproducts")}
            >
              Buy Now
            </Button>
            <Button
              size="5xl"
              shape="round"
              className="min-w-[200px] rounded-[24px] border px-[33px] font-semibold text-base sm:min-w-full sm:px-5 sm:text-sm"
              onClick={() => window.scroll({ top: 700, behavior: "smooth" })}
            >
              View More
            </Button>
          </div>
          <div className="mr-[72px] flex gap-6 sm:mr-0 md:flex-col sm:gap-4">
            <BrandStatistics className="w-[34%] md:w-full" />
            <div className="h-[54px] w-px bg-black-900_19 md:h-px md:w-full" />
            <BrandStatistics
              brandCount="2,000+"
              brandDescription="High-Quality Products"
              className="w-[36%] md:w-full"
            />
            <div className="h-[54px] w-px bg-black-900_19 md:h-px md:w-full" />
            <BrandStatistics
              brandCount="30,000+"
              brandDescription="Happy Customers"
              className="w-[30%] md:w-full"
            />
          </div>
        </div>
        <div className="flex w-[44%] flex-col gap-5 md:w-full sm:gap-4">
          <div className="bg-white-a700">
            <div>
              <Img
                src="images/img_rectangle_4.png"
                alt="Product Image"
                className="h-[296px] w-full rounded-[16px] object-cover md:h-[240px] sm:h-[200px]"
              />
              <div className="relative ml-2.5 mt-[-46px] flex items-center justify-between gap-5 sm:ml-0">
                <div className="mb-3 flex w-[10%] justify-center rounded-lg bg-black-900_66 sm:w-[12%]">
                  <div className="flex w-full items-center gap-1">
                    <div className="h-[10px] w-[10px] rounded-[5px] border border-solid border-white-a700 bg-white-a700 sm:h-2 sm:w-2" />
                    <div className="h-[6px] w-[6px] rounded-[3px] bg-gray-400 sm:h-1.5 sm:w-1.5" />
                    <div className="h-[6px] w-[6px] rounded-[3px] bg-gray-400 sm:h-1.5 sm:w-1.5" />
                    <div className="h-[6px] w-[6px] rounded-[3px] bg-gray-400 sm:h-1.5 sm:w-1.5" />
                  </div>
                </div>
                <Button
                  size="5xl"
                  variant="fill"
                  className="min-w-[102px] gap-2 rounded-br-[16px] rounded-tl-[16px] px-3.5 font-medium text-base sm:min-w-[80px] sm:text-sm"
                  rightIcon={
                    <Img
                      src="images/img_arrowleft.svg"
                      alt="Arrow Left"
                      className="mb-0.5 h-[12px] w-[12px] object-contain sm:h-2.5 sm:w-2.5"
                    />
                  }
                  onClick={() => navigate("/allproducts")}
                >
                  Buy Now
                </Button>
              </div>
            </div>
          </div>
          <div className="flex gap-5 md:flex-row sm:flex-col">
            <UserProfile onClick={() => navigate("/allproducts")} />
            <UserProfile
              userImage="images/img_rectangle_6.png"
              buyNowButton="Buy Now"
              onClick={() => navigate("/allproducts")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
