import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

export default function HomeShowcaseSection() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center">
      <div className="container flex items-center justify-center gap-6 px-4 md:px-10 flex-col md:flex-row">
        <div className="flex flex-1 md:py-20 flex-col md:gap-[46px] gap-8 self-stretch">
          <div className="flex flex-col items-start gap-1">
            <p className="md:text-[18px] font-normal text-gray-500 text-base">
              Discover quality, style, and comfort for every room
            </p>
            <h1 className="w-full md:w-[90%] md:text-[64px] font-medium md:leading-[76px] text-[48px] leading-tight">
              Enhance your Space with Timeless Furniture
            </h1>
          </div>
          <div className="flex gap-4 flex-col md:flex-row">
            <Button
              className="md:min-w-[200px] text-white rounded-[24px] md:px-[34px] md:text-base min-w-full px-5 text-sm bg-blue-500 hover:bg-blue-700"
              onClick={() => navigate("/allproducts")}
            >
              Buy Now
            </Button>
            <Button
              className="md:min-w-[200px] border-black rounded-[24px] border md:px-[33px] md:text-base min-w-full px-5 text-sm hover:bg-gray-100"
              onClick={() => window.scroll({ top: 700, behavior: "smooth" })}
            >
              View More
            </Button>
          </div>
          <div className="md:mr-[72px] flex text-center md:flex-row md:gap-6 mr-0 flex-col gap-4">
            <div className="md:w-[34%] w-full">
              <p className="text-[24px] font-normal">200+</p>
              <p className="text-[16px] font-normal">International Brands</p>
            </div>
            <div className="md:h-[54px] md:w-px bg-black h-px w-full" />
            <div className="md:w-[36%] w-full">
              <p className="text-[24px] font-normal">2,000+</p>
              <p className="text-[16px] font-normal">High Quality Products</p>
            </div>
            <div className="md:h-[54px] md:w-px bg-black h-px w-full" />
            <div className="md:w-[30%] w-full">
              <p className="text-[24px] font-normal">30,000+</p>
              <p className="text-[16px] font-normal">Happy Customers</p>
            </div>
          </div>
        </div>
        <div className="flex md:w-[44%] flex-col md:gap-5 w-full gap-4">
          <div>
            <img
              src="images/img_rectangle_4.png"
              alt="Product Image"
              className="md:h-[296px] w-full rounded-[16px] object-cover h-[240px]"
              loading="lazy"
              draggable="false"
            />
            <div className="relative md:ml-2.5 mt-[-46px] flex items-center justify-end gap-5 ml-0">
              <Button
                className="md:min-w-[102px] gap-2 rounded px-3.5 font-medium md:text-base min-w-[80px] text-sm bg-white text-black hover:bg-gray-100"
                onClick={() => navigate("/allproducts")}
              >
                Buy Now
              </Button>
            </div>
          </div>
          <div className="flex gap-5 md:flex-row">
            <div className="flex flex-col md:flex-row w-[50%] md:w-full">
              <div className="self-stretch">
                <img
                  src="images/img_rectangle_5.png"
                  alt="Product Image"
                  className="h-[294px] w-full rounded-[16px] object-cover"
                  loading="lazy"
                  draggable="false"
                />
                <div className="relative ml-2.5 mt-[-46px] flex items-center justify-end gap-5">
                  <Button
                    className="min-w-[102px] gap-2 rounded px-3.5 font-medium bg-white text-black hover:bg-gray-100"
                    onClick={() => navigate("/allproducts")}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row w-[50%] md:w-full">
              <div className="self-stretch">
                <img
                  src="images/img_rectangle_6.png"
                  alt="Product Image"
                  className="h-[294px] w-full rounded-[16px] object-cover"
                  loading="lazy"
                  draggable="false"
                />
                <div className="relative ml-2.5 mt-[-46px] flex items-center justify-end gap-5">
                  <Button
                    className="min-w-[102px] gap-2 rounded px-3.5 font-medium bg-white text-black hover:bg-gray-100"
                    onClick={() => navigate("/allproducts")}
                  >
                    Buy Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
