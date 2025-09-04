import { Helmet } from "react-helmet";
import { Footer, Header1 } from "components";
import PaymentSection from "./PaymentSection";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

export default function PaymentPage() {
  return (
    <>
      <Helmet>
        <title>Payment - FurniStore</title>
        <meta
          name="description"
          content="Choose from a variety of secure payment options including credit/debit cards, UPI, and net banking. Ensure a safe and convenient checkout process for your online purchases."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-10">
        <div>
          <Header1 />

          <div className="flex justify-start items-center px-12 pt-8 gap-2">
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
            <BsChevronRight className="scale-[1.3]" />
            <Link to="/payment">
              <p className="hover:scale-125 text-base md:text-[18px] font-normal">
                Payment
              </p>
            </Link>
          </div>
        </div>

        <div className="flex flex-col mb-40 md:gap-[72px] gap-12">
          <PaymentSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
