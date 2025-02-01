import React, { Suspense } from "react";
import { Img, Text, Heading } from "../../components";

const imagesGrid = [
    { image: "images/img_rectangle.png" },
    { image: "images/img_circle.png" },
    { image: "images/img_curve_left.png" },
    { image: "images/img_curve_right.png" },
    { image: "images/img_rectangle_168x224.png" },
    { image: "images/img_curve_left_168x224.png" },
    { image: "images/img_circle_168x168.png" },
    { image: "images/img_curve_right_168x224.png" },
    { image: "images/img_circle_1.png" },
    { image: "images/img_rectangle_1.png" },
    { image: "images/img_curve_left_1.png" },
];

export default function FurniStorePromotionSection() {
    return (
        <>
            <div>
                <div className="flex flex-col items-center justify-center gap-8 bg-yellow-50 py-[94px] md:py-5">
                    <div className="container-xs flex flex-col items-center px-14 md:px-5">
                        <div className="flex flex-col items-center gap-2">
                            <Heading as="h2" className="text-[48px] font-medium md:text-[44px] sm:text-[38px]">
                                #FurniStore
                            </Heading>
                            <Text as="p" className="text-[16px] font-normal">
                                Tag us on social media to get discount
                            </Text>
                        </div>
                    </div>
                    <div className="grid grid-cols-4 justify-center gap-[52px] gap-y-4 self-stretch px-[236px] md:grid-cols-2 md:px-5 sm:grid-cols-1">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {
                                imagesGrid.map((d, index) => (
                                    <Img
                                        key={"gridcurveleft" + index}
                                        src={d.image}
                                        alt="Image"
                                        className="h-[168px] w-full rounded-lg object-cover md:h-auto"
                                    />
                                ))
                            }
                        </Suspense>
                    </div>
                </div>
            </div>
        </>
    );
}