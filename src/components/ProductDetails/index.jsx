import React from "react";
import { Text, Button, Img } from "./..";

export default function ProductDetails({
    productName = "Wodden Chair",
    currentPrice = "$150",
    originalPrice = "$200",
    productColor = "Color: Brown",
    productImage = "images/img_paste_image.png",
    onAddToCart = () => { },
    onRemove = () => { },
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex md:flex-col items-center self-stretch gap-4 flex-1`}>
            <Img
                src={productImage}
                alt="Product Image"
                className="h-[136px] w-[20%] object-contain"
            />
            <div className="flex flex-1 flex-col gap-9 md:self-stretch sm:gap-9">
                <div className="flex flex-col gap-1 sm:gap-1">
                    <div className="flex items-center justify-center">
                        <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                            {productName}
                        </Text>
                        <div className="flex flex-1 flex-wrap justify-end">
                            <Text size="texts" as="p" className="text-[14px] font-medium !text-black-900_01 mr-1">
                                {currentPrice}
                            </Text>
                            <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900_01 line-through">
                                {originalPrice}
                            </Text>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-5">
                        <Text size="textxs" as="p" className="text-[12px] font-normal !text-black-900">
                            {productColor}
                        </Text>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-1 items-center gap-6">
                        <Button
                            color="gray_200_01"
                            className="w-[36px] rounded-lg !border px-2"
                            title="Add to Cart"
                            onClick={onAddToCart}
                        >
                            <Img src="images/img_thumbs_up_gray_600_01_1.svg" />
                        </Button>
                        <Button
                            size="md"
                            shape="round"
                            className="rounded-[24px] px-[20px] font-semibold sm:px-5"
                            onClick={onRemove}
                        >
                            Remove
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
