import React from "react";
import { Text, Heading, Button, Img } from "./..";

export default function ProductCard({
    productImage = "images/img_rectangle_31.png",
    productTitle = "Wooden Sofa",
    productDiscountedPrice = 0,
    productOriginalPrice = 0,
    onAddToCart = () => { },
    onAddToWishlist = () => { },
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex flex-col gap-3`}>
            <div className="relative h-[270px] content-center self-stretch">
                <Img
                    src={productImage}
                    alt={productTitle}
                    className="h-[270px] w-full flex-1 rounded-[16px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex-1 p-2">
                    <div className="flex flex-col items-start gap-48">
                        <Button
                            color="white_A700"
                            variant="fill"
                            shape="round"
                            className="w-[36px] self-end rounded-[18px] px-2 border border-gray-950"
                            title="Add to Cart"
                            onClick={onAddToCart}
                        >
                            <Img src="images/img_thumbs_up_gray_600_01_1.svg" />
                        </Button>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-2.5 self-stretch px-3">
                <div className="flex items-center justify-between gap-5">
                    <div className="flex flex-col items-start justify-center gap-0.5">
                        <Text as="p" className="text-[16px] font-normal !text-black-900_01">
                            {productTitle}
                        </Text>
                    </div>
                    <Button
                        color="gray_200_01"
                        className="w-[36px] rounded-lg px-2 border border-gray-950"
                        title="Add to Wishlist"
                        onClick={onAddToWishlist}
                    >
                        <Img src="images/img_favorite.svg" />
                    </Button>
                </div>
                <div className="flex items-center justify-center">
                    <div className="flex flex-1 flex-wrap items-center">
                        <Heading size="headings" as="h6" className="text-[16px] !text-black-900 mr-1">
                            ${productDiscountedPrice}
                        </Heading>
                        <Heading size="headings" as="h6" className="text-[16px] !text-black-900 line-through">
                            ${productOriginalPrice}
                        </Heading>
                    </div>
                </div>
            </div>
        </div>
    );
}
