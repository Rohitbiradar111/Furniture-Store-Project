import React from "react";
import { Text, Img } from "./..";

export default function ProductOrderDetails({
    productName = "Wodden Chair",
    arrivalDate = "Arriving 26 May, Monday",
    productColor = "Color: Brown",
    quantity = "Qty: 1",
    trackingText = "",
    productImage = "images/img_paste_image.png",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex md:flex-col items-center self-stretch gap-[18px] flex-1`}>
            <Img src={productImage} alt="Product Image"
                className="h-[136px] w-[20%] object-contain" />
            <div className="flex flex-1 flex-col gap-8 md:self-stretch sm:gap-8">
                <div className="flex flex-col items-start gap-0.5 sm:gap-0.5">
                    <div className="flex flex-wrap justify-between gap-5 self-stretch">
                        <Text size="texts" as="p" className="text-[16px] font-normal !text-black-900">
                            {productName}
                        </Text>
                        <Text size="texts" as="p" className="text-[16px] font-medium !text-black-900">
                            {arrivalDate}
                        </Text>
                    </div>
                    <Text size="textxs" as="p" className="text-[16px] font-normal !text-black-900">
                        {productColor}
                    </Text>
                    <Text size="textxs" as="p" className="text-[16px] font-normal !text-black-900">
                        {quantity}
                    </Text>
                </div>
                <div>
                    <div className="flex">
                        <Text size="texts" as="p" className="text-[16px] font-medium !text-black-900">
                            {trackingText}
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    );
}