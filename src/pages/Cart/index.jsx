import { Helmet } from "react-helmet";
import { Footer, Header1 } from "components";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";
import CartSection from "./CartSection";

export default function CartPage() {
  return (
    <>
      <Helmet>
        <title>Cart - FurniStore</title>
        <meta
          name="description"
          content="Review your shopping cart and proceed to secure checkout."
        />
      </Helmet>
      <div className="flex w-full flex-col md:gap-8 gap-6">
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
          </div>
        </div>

        <div className="flex flex-col md:mb-24 md:gap-12 gap-8 mb-16">
          <CartSection />
        </div>

        <Footer />
      </div>
    </>
  );
}
