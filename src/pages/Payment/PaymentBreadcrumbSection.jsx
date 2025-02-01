import React from "react";
import { Img, Text, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../../components";

export default function PaymentBreadcrumbSection() {
    return (
        <>
            <div>
                <Breadcrumb
                    separator={
                        <Img
                            src="images/img_frame_right_arrow.svg"
                            alt="Arrow Right"
                            className="h-[16px] w-[16px]"
                        />
                    }
                    className="flex flex-wrap items-center gap-1 bg-gray-200_03 
                            py-[22px] pl-36 pr-14 md:px-5 sm:p-5">
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">
                            <Text as="p" className="text-[16px] font-normal !text-black-900">
                                Home
                            </Text>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem >
                        <BreadcrumbLink href="/cart">
                            <Text as="p" className="text-[16px] font-normal !text-black-900">
                                Cart
                            </Text>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem >
                        <BreadcrumbLink href="/address">
                            <Text as="p" className="text-[16px] font-normal !text-black-900">
                                Address
                            </Text>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="/payment">
                            <Text as="p" className="text-[16px] font-normal">
                                Payment
                            </Text>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </div >
        </>
    );
}