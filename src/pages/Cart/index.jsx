import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header1 from "../../components/Header1";
import BreadcrumbSection from "./BreadcrumbSection";
import CartSection from "./CartSection";

export default function CartPage() {
  return (
    <>
      <Helmet>
        <title>Cart - FurniStore</title>
        <meta
          name="description"
          content="Review your shopping cart and proceed to secure checkout. Choose from free shipping, express, or pickup options. Apply coupons for additional savings on your quality furniture selections."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-8 bg-white-a700 sm:gap-6">
        <div>
          <Header1 />
          <BreadcrumbSection />
        </div>
        <div className="flex flex-col gap-16 mb-24 md:gap-12 sm:gap-8 sm:mb-16">
          <CartSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
