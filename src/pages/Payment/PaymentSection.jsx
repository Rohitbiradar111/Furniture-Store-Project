import React, { useContext, useState } from "react";
import { Button, Heading, Text } from "../../components";
import PaymentStepWrapper from "../../components/PaymentStepWrapper";
import { CartContext } from "../Cart/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import conf from "../../conf/conf.js";

export default function PaymentSection() {

    const { cart } = useContext(CartContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const totalAmount = cart.reduce((sum, item) => sum + item.discount_price * item.quantity, 0).toFixed(2);

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const handlePayment = async () => {
        setLoading(true);

        try {
            const response = await fetch("https://api.exchangerate-api.com/v4/latest/USD");
            if (!response.ok) throw new Error("Failed to fetch exchange rate");
            const data = await response.json();

            const conversionRate = data.rates.INR || 83;

            const amountInUSD = parseFloat(totalAmount);
            const amountInINR = (amountInUSD * conversionRate).toFixed(2);

            const amountInPaise = Math.round(amountInINR * 100);

            const options = {
                key: conf.razorpayKeyId,
                amount: amountInPaise,
                currency: "INR",
                name: "FurniStore",
                description: `Payment for Order ($${amountInUSD} USD ≈ ₹${amountInINR} INR)`,
                image: "/image/img_brand_logo.png",
                handler: function (response) {
                    console.log("Payment Successful:", response);
                    alert(`Payment of $${amountInUSD} (~ ₹${amountInINR}) Successful!`);
                    navigate("/allproducts");
                },
                prefill: {
                    name: "John Doe",
                    email: "john@example.com",
                    contact: "1234567890",
                },
                notes: {
                    conversion_rate: `1 USD ≈ ${conversionRate} INR`
                }
            };

            const razorpay = new window.Razorpay(options);
            razorpay.open();
        } catch (error) {
            console.error("Payment initiation failed:", error);
            alert("Payment failed, please try again.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div className="flex flex-col items-center">
                <div className="container-xs flex flex-col gap-[38px] md:px-5">
                    <div className="mx-[218px] flex items-center rounded-[16px] border border-solid border-gray-200_01 md:mx-0 md:flex-col">
                        <div className="flex flex-1 md:flex-row md:self-stretch sm:flex-col">
                            <PaymentStepWrapper cartText="Shopping cart" />
                            <PaymentStepWrapper cartText="Shipping address" />
                        </div>
                        <div className="flex w-[32%] flex-wrap items-center gap-4 px-6 md:w-full sm:px-5">
                            <Text
                                as="p"
                                className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border-2 border-solid border-black-900 text-center text-[16px] font-medium !text-black-900">
                                03
                            </Text>
                            <Text size="texts" as="p" className="mb-2.5 self-end text-[14px] font-medium text-black-900">
                                Payment info
                            </Text>
                        </div>
                    </div>
                    <div className="flex justify-center md:flex-col">
                        <div className="flex w-[32%] flex-col gap-[30px] self-center rounded-[16px] border border-solid border-gray-200_01 px-4 py-[18px] md:w-full">
                            <div className="flex flex-col items-start gap-3">
                                <Text size="texts" as="p" className="text-[14px] font-normal uppercase !text-black-900">
                                    Cart value :
                                </Text>
                                <div className="flex flex-col gap-[18px] self-stretch">
                                    <div className="h-px bg-gray-200_01" />
                                    <div className="flex flex-wrap items-center justify-between gap-5">
                                        <Text as="p" className="text-[16px] font-normal !text-black-900">
                                            Sub Total :
                                        </Text>
                                        <Text as="p" className="text-[16px] font-medium !text-black-900">
                                            ${totalAmount}
                                        </Text>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between gap-5">
                                        <Text as="p" className="text-[16px] font-normal !text-black-900">
                                            Total Products :
                                        </Text>
                                        <Text as="p" className="text-[16px] font-medium !text-black-900">
                                            {totalItems}
                                        </Text>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between gap-5">
                                        <Text as="p" className="text-[16px] font-normal !text-black-900">
                                            Shipping Cost :
                                        </Text>
                                        <Text as="p" className="text-[16px] font-medium !text-black-900">
                                            FREE
                                        </Text>
                                    </div>
                                    <div className="h-px bg-gray-200_01" />
                                    <div className="flex flex-wrap items-center justify-between gap-5">
                                        <Text as="p" className="self-start text-[16px] font-normal !text-black-900">
                                            Total :
                                        </Text>
                                        <Heading size="headinglg" as="h4" className="text-[20px] font-semibold !text-black-900">
                                            ${totalAmount}
                                        </Heading>
                                    </div>
                                    <Text as="p" className="flex justify-center text-[16px] font-normal !text-black-900">
                                        ( Please Note the Price will be converted into INR )
                                    </Text>
                                </div>
                            </div>
                            <Button
                                size="5xl"
                                variant="fill"
                                shape="round"
                                className="rounded-[24px] font-semibold active:bg-orange-500 active:text-slate-50 
                                sm:px-5"
                                onClick={() => navigate("/address")}>
                                <span className="text-3xl">&#8592;</span>
                                &nbsp; Go Back To Address Section
                            </Button>
                            <Button
                                size="5xl"
                                variant="fill"
                                shape="round"
                                className="rounded-[24px] px-[34px] font-semibold active:bg-orange-500 active:text-slate-50 sm:px-5"
                                onClick={handlePayment}
                                disabled={loading}
                            >
                                {loading ? "Processing..." : "Complete Your Payment"}
                            </Button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}
