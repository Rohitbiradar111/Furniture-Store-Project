import React from "react";
import { Text, Img } from "./..";

export default function PaymentStepWrapper({ cartText = "Shopping cart", ...props }) {
    return (
        <div
            {...props}
            className={`${props.className} flex items-center w-[50%] sm:w-full gap-4 px-6 py-4 sm:px-5 border-gray-200_01 border-r border-solid`}
        >
            <div className="flex flex-col items-center justify-center 
            rounded-[20px] bg-green-900 px-2.5 py-3">
                <Img
                    src="images/img_checkmark_white_a700_1.svg"
                    alt="Checkmark"
                    className="h-[12px]"
                />
            </div>
            <Text size="texts" as="p"
                className="mb-2.5 self-end text-[14px] font-medium !text-black-900">
                {cartText}
            </Text>
        </div >
    );
}