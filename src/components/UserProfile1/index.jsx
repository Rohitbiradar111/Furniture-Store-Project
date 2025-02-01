import React from "react";
import { Text, Img } from "./..";

export default function UserProfile1({
    userImage = "images/img_profile_pic.png",
    userName = "Mukul Swamy",
    homeLinkText = "Home",
    addressLabel = "Address:",
    addressText = "64, Jagat Heights, Pravin Nagar Jamnagar",
    phoneLabel = "Phone :",
    phoneNumber = "+91 7224999166",
    ...props
}) {
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col w-[50%] md:w-full 
            gap-[18px] p-[18px] border-solid rounded-[16px]`}
        >
            <div className="flex justify-between gap-5 self-stretch">
                <div className="flex flex-1 items-center gap-3">
                    <Img
                        src={userImage}
                        alt="User Image"
                        className="h-[24px]"
                    />
                    <Text size="textxl" as="p" className="text-[18px] font-medium !text-black-900">
                        {userName}
                    </Text>
                </div>
                <div className="flex items-center gap-[13px]">
                    <Text
                        size="textxs"
                        as="p"
                        className="flex items-center justify-center rounded bg-gray-200 p-0.5 text-[12px] font-normal !text-lime-900">
                        {homeLinkText}
                    </Text>
                </div>
            </div>
            <div className="flex flex-col gap-2.5 self-stretch">
                <div className="flex flex-col items-start gap-1">
                    <Text size="texts" as="p" className="text-[14px] font-normal">
                        {addressLabel}
                    </Text>
                    <Text size="texts" as="p" className="w-full text-[14px] font-normal leading-[22px] !text-black-900">
                        {addressText}
                    </Text>
                </div>
                <div className="flex flex-col items-start gap-1">
                    <Text size="texts" as="p" className="text-[14px] font-normal">
                        {phoneLabel}
                    </Text>
                    <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                        {phoneNumber}
                    </Text>
                </div>
            </div>
        </div >
    );
}