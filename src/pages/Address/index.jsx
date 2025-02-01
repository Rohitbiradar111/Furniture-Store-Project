import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer/index.jsx";
import Header1 from "../../components/Header1";
import AddressSection from "./AddressSection";
import BreadcrumbSection from "./BreadcrumbSection";
import CheckoutStepsSection from "./CheckoutStepsSection";

export default function AddressPage() {
    return (
        <>
            <Helmet>
                <title>Shipping Address - FurniStore</title>
                <meta
                    name="description"
                    content="Easily update your shipping address to ensure a smooth delivery experience. Add new home or office addresses and manage your contact information for hassle-free online shopping."
                />
            </Helmet>
            <div className="flex w-full flex-col gap-10 bg-white-a700">
                <div>

                    <Header1 />

                    <BreadcrumbSection />

                </div>
                <div className="flex flex-col gap-24 md:gap-[72px] sm:gap-12">
                    <div className="flex flex-col mb-40 gap-[38px]">

                        <CheckoutStepsSection />

                        <AddressSection />

                    </div>

                    <Footer />
                </div>
            </div>
        </>
    );
}