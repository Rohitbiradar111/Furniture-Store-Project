import React from "react";
import { Link } from "react-router-dom";
import { Text } from "../../components";

export default function MegaMenu1() {
    return (
        <div className="absolute top-auto z-[99] min-w-[200px] pt-3">
            <div className="w-full rounded-lg bg-white-a700 p-4 shadow-xs">
                <div className="flex justify-center">
                    <div className="flex justify-center flex-col items-start gap-3 sm:gap-3">
                        <div className="flex flex-col items-start gap-4 sm:gap-4">
                            <Link to="/allproducts"
                                className="self-center sm:text-[13px]">
                                <Text className="text-[18px] font-normal !text-black-600 hover:underline">
                                    All Products
                                </Text>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}