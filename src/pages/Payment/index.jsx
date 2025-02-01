import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import PaymentBreadcrumbSection from "./PaymentBreadcrumbSection";
import PaymentSection from "./PaymentSection";
import Header1 from "../../components/Header1/index.jsx";

export default function PaymentPage() {
    return (
        <>
            <Helmet>
                <title>Payment - FurniStore</title>
                <meta
                    name="description"
                    content="Choose from a variety of secure payment options including credit/debit cards, PayPal, and net banking. Ensure a safe and convenient checkout process for your online purchases."
                />
            </Helmet>
            <div className="flex w-full flex-col gap-10 bg-white-a700">
                <div>
                    <Header1 />

                    <PaymentBreadcrumbSection />
                </div>
                <div className="flex flex-col gap-24 mb-40 md:gap-[72px] sm:gap-12">

                    <PaymentSection />

                </div>
                <Footer />
            </div>
        </>
    );
}