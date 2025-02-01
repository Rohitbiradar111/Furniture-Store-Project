import React from "react";
import { Text, Img } from "../../components";

export default function CheckoutStepsSection() {
    return (
        <>
            <div className="flex justify-center">
                <div className="container-xs flex justify-center px-14 md:px-5">
                    <div className="flex w-[68%] items-center justify-center rounded-[16px] border border-solid border-gray-200_01 md:w-full md:flex-col">
                        <div className="flex w-full items-center gap-4 border-r border-solid border-gray-200_01 px-6 py-4 sm:px-5">
                            <div className="flex flex-col items-center justify-center rounded-[20px] bg-green-900 px-2.5 py-3">
                                <Img src="images/img_checkmark_white_a700_1.svg" alt="Checkmark Image" className="h-[12px]" />
                            </div>
                            <Text size="texts" as="p" className="mb-2.5 self-end text-[14px] font-medium !text-black-900">
                                Shopping cart
                            </Text>
                        </div>
                        <div className="flex w-full flex-wrap items-center justify-center gap-4 border-r border-solid border-gray-200_01 p-4">
                            <Text
                                as="p"
                                className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border-2 border-solid border-black-900 text-center 
                                text-[16px] font-medium !text-black-900">
                                02
                            </Text>
                            <Text size="texts" as="p" className="mb-2.5 self-end text-[14px] font-medium !text-black-900">
                                Shipping address
                            </Text>
                        </div>
                        <div className="flex w-full flex-wrap items-center gap-4 px-6 sm:px-5">
                            <Text
                                as="p"
                                className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border-2 border-solid border-gray-200_01 text-center 
                                text-[16px] font-medium">
                                03
                            </Text>
                            <Text size="texts" as="p" className="mb-2.5 self-end text-[14px] font-medium">
                                Payment info
                            </Text>
                        </div>
                    </div>
                </div>
            </div >
        </>
    );
}