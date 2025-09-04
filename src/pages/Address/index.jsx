import { Helmet } from "react-helmet";
import { Footer, Header1 } from "components";
import AddressSection from "./AddressSection";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";

export default function AddressPage() {
  return (
    <>
      <Helmet>
        <title>Shipping Address - FurniStore</title>
        <meta
          name="description"
          content="Easily update your shipping address to ensure a smooth delivery experience. Add new addresses and manage your contact information for hassle free online shopping."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-10">
        <div>
          <Header1 />

          <div className="flex justify-start items-center px-20 pt-8 gap-2">
            <Link to="/">
              <p className="hover:scale-125 text-base md:text-[18px] font-normal">
                Home
              </p>
            </Link>
            <BsChevronRight className="scale-[1.3]" />
            <Link to="/cart">
              <p className="hover:scale-125 text-base md:text-[18px] font-normal">
                Cart
              </p>
            </Link>
            <BsChevronRight className="scale-[1.3]" />
            <Link to="/address">
              <p className="hover:scale-125 text-base md:text-[18px] font-normal">
                Address
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:gap-[72px] gap-12">
          <div className="flex flex-col mb-40 gap-[38px]">
            <div className="flex justify-center">
              <div className="flex justify-center w-[45rem] md:px-14 px-5">
                <div className="flex items-center justify-center rounded-[16px] border border-solid w-full md:flex-row flex-col">
                  <div className="flex w-full items-center gap-4 border-r border-solid md:px-6 py-4 px-5">
                    <div className="flex flex-col items-center justify-center rounded-[20px] bg-green-900 px-2.5 py-3">
                      <TiTickOutline className="text-white scale-150 w-6 h-4" />
                    </div>
                    <p className="mb-2.5 self-end text-[14px] font-medium">
                      Shopping cart
                    </p>
                  </div>
                  <div className="flex w-full flex-wrap items-center justify-center gap-4 border-r border-solid p-4">
                    <p className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border-2 border-solid text-center text-[16px] font-medium">
                      02
                    </p>
                    <p className="mb-2.5 self-end text-[14px] font-medium">
                      Shipping address
                    </p>
                  </div>
                  <div className="flex w-full flex-wrap items-center gap-4 border-r border-solid md:px-6 py-4 px-5">
                    <p className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border-2 border-solid text-center text-[16px] font-medium">
                      03
                    </p>
                    <p className="mb-2.5 self-end text-[14px] font-medium">
                      Payment info
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <AddressSection />
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}
