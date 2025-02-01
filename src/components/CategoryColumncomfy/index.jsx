import React from "react";
import { Text, Heading, Img } from "./..";

export default function CategoryColumncomfy({ product, ...props }) {

    const imagePath = product?.image_path || "Product Image";
    const name = product?.name || "Product Name";
    const description = product?.description?.slice(0, 50) || "No description available.";
    const price = product?.discount_price || product?.price || "Product Discount Price";
    const oldPrice = product?.price || "Product Price";

    return (
        <div {...props} className={`${props.className} flex flex-col w-full gap-3`}>
            <div className="relative h-[270px] content-center self-stretch">
                <Img
                    src={imagePath}
                    alt={name}
                    className="h-[270px] w-full flex-1 rounded-[16px] object-cover"
                />
            </div>
            <div className="flex flex-col gap-2.5 self-stretch px-3">
                <div className="flex items-center justify-between gap-5">
                    <div className="flex flex-col items-start justify-center gap-0.5">
                        <Text as="p" className="text-[16px] font-normal !text-black-900_01">
                            {name}
                        </Text>
                        <Text size="texts" as="p" className="text-[14px] font-normal">
                            {description}...
                        </Text>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-1 flex-wrap items-center">
                        <Heading size="headings" as="h6" className="text-[16px] font-semibold !text-black-900_01 mr-2">
                            ${price}
                        </Heading>
                        {oldPrice > 0 && (
                            <Text size="texts" as="p" className="text-[14px] font-normal line-through">
                                ${oldPrice}
                            </Text>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
