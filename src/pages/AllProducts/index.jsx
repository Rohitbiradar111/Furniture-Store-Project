import React from "react";
import { Helmet } from "react-helmet";
import { Header, Footer } from "components/index.jsx";
import AllProducts from "./AllProducts.jsx";
import { Link } from "react-router-dom";
import { BsChevronRight } from "react-icons/bs";

export default function ProductPage() {
  return (
    <>
      <Helmet>
        <title>All Products - FurniStore</title>
        <meta
          name="description"
          content="Explore FurniStore's All Products section to find the best furniture for your home."
        />
      </Helmet>
      <div className="flex w-full flex-col md:gap-[70px] gap-[47px]">
        <div>
          <div>
            <Header />

            <div className="flex justify-start items-center px-20 pt-8 gap-2">
              <Link to="/">
                <p className="hover:scale-125 text-base md:text-[18px] font-normal">
                  Home
                </p>
              </Link>
              <BsChevronRight className="scale-[1.3]" />
              <Link to="/allproducts">
                <p className="hover:scale-125 text-base md:text-[18px] font-normal">
                  Shop
                </p>
              </Link>
              <BsChevronRight className="scale-[1.3]" />
              <Link to="/allproducts">
                <p className="hover:scale-125 text-base md:text-[18px] font-normal">
                  All Products
                </p>
              </Link>
            </div>
          </div>
        </div>

        <AllProducts />

        <Footer />
      </div>
    </>
  );
}
