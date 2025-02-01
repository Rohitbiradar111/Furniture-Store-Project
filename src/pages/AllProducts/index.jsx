import React from "react";
import { Helmet } from "react-helmet";
import { Img, Text, BreadcrumbLink, Breadcrumb, BreadcrumbItem } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AllProducts from "./AllProducts.jsx";

export default function ProductPage() {

    const sliderRef = React.useRef(null);

    return (
        <>
            <Helmet>
                <title>All Products - FurniStore</title>
                <meta
                    name="description"
                    content="Explore FurniStore's All Products section to find the best furniture for your home."
                />
            </Helmet>
            <div className="flex w-full flex-col gap-[94px] bg-white-a700 
            md:gap-[70px] sm:gap-[47px]">
                <div>
                    <div>

                        <Header />

                        <Breadcrumb
                            separator={
                                <Img
                                    onClick={() => {
                                        sliderRef?.current?.slidePrev();
                                    }}
                                    src="images/img_frame_right_arrow.svg"
                                    alt="Arrow Right"
                                    className="h-[16px] w-[16px] cursor-pointer"
                                />
                            }
                            className="flex flex-wrap items-center gap-1 bg-gray-200_03 py-[22px] pl-36 pr-14 md:px-5 sm:p-5">
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">
                                    <Text as="p" className="text-[16px] font-normal !text-black-900">
                                        Home
                                    </Text>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/allproducts" className="self-end">
                                    <Text as="p" className="text-[16px] font-normal !text-black-900">
                                        Shop
                                    </Text>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbItem isCurrentPage>
                                <BreadcrumbLink href="/allproducts">
                                    <Text as="p" className="text-[16px] font-normal !text-gray-500">
                                        All Products
                                    </Text>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div >

                < AllProducts />

                <Footer />
            </div >
        </>
    );
}