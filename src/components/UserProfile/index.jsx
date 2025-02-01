import React from "react";
import { Button, Img } from "./..";

export default function UserProfile({ userImage = "images/img_rectangle_5.png", buyNowButton = "Buy Now", ...props }) {
    return (
        <div {...props} className={`${props.className} flex flex-col w-[50%] sm:w-full`}>
            <div className="self-stretch">
                <Img src={userImage} alt="Product Image" className="h-[294px] w-full rounded-[16px] object-cover" />
                <div className="relative ml-2.5 mt-[-46px] flex items-center justify-between gap-5">
                    <div className="mb-2.5 flex w-[22%] justify-center self-end rounded-lg bg-black-900_66">
                        <div className="flex w-full items-center gap-1">
                            <div className="h-[10px] w-[10px] rounded-[5px] border border-solid border-white-a700 bg-white-a700" />
                            <div className="h-[6px] w-[6px] rounded-[3px] bg-gray-400" />
                            <div className="h-[6px] w-[6px] rounded-[3px] bg-gray-400" />
                            <div className="h-[6px] w-[6px] rounded-[3px] bg-gray-400" />
                        </div>
                    </div>
                    <Button
                        size="5xl"
                        variant="fill"
                        rightIcon={
                            <Img
                                src="images/img_arrowleft.svg"
                                alt="Arrow Left"
                                className="mb-0.5 h-[12px] w-[12px] object-contain" />
                        }
                        className="min-w-[102px] gap-2 rounded-br-[16px] rounded-tl-[16px] px-3.5 font-medium"
                    >
                        {buyNowButton}
                    </Button>
                </div>
            </div >
        </div >
    );
}