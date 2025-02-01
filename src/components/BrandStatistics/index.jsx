import { Text, Heading } from "../index.jsx";
import React from "react";

export default function BrandStatistics({ brandCount = "200+", brandDescription = "International Brands", ...props }) {
    return (
        <div {...props} className={`${props.className} flex flex-col items-start justify-center md:w-full gap-1`}>
            <Heading
                size="text3xl"
                as="p"
                className="text-[24px] font-normal"
            >
                {brandCount}
            </Heading>
            <Text
                as="p"
                className="text-[16px] font-normal"
            >
                {brandDescription}
            </Text>
        </div>
    );
}

