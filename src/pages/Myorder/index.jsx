import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";
import Footer from "../../components/Footer/index.jsx";
import Header from "../../components/Header/index.jsx";
import ProductOrderDetails from "../../components/ProductOrderDetails";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";

export default function MyorderPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
            navigate("/login");
        });
    };

    return (
        <>
            <Helmet>
                <title>My Order - FurniStore</title>
                <meta
                    name="description"
                    content="Stay on top of your purchases with FurniStore. Track upcoming deliveries, manage cancellations, and view your order history. Sign up now for a 10% discount on your first order."
                />
            </Helmet>
            <div className="flex w-full flex-col gap-10 bg-white-a700">
                <Header />
                <div className="flex flex-col gap-24 md:gap-[72px] sm:gap-12">
                    <div className="flex flex-col gap-10">
                        <div className="flex justify-center">
                            <div className="container-xs flex md:px-5">
                                <Heading
                                    as="h1"
                                    className="text-[48px] font-medium md:text-[44px] sm:text-[38px]"
                                >
                                    Settings
                                </Heading>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="container-xs flex items-start justify-center gap-6 md:flex-col md:px-5">
                                <div className="w-[24%] self-center md:w-full">
                                    <div className="flex flex-col gap-5 rounded-[16px] border border-solid border-gray-200_01 px-4 py-5">
                                        <Link to="/myaccount">
                                            <div className="flex items-center gap-2 rounded-lg bg-white-a700 px-4 py-3">
                                                <Img src="images/img_lock_gray_600_01.svg" alt="Lock Icon" className="h-[20px]" />
                                                <Text as="p" className="text-[16px] font-normal">
                                                    My account
                                                </Text>
                                            </div>
                                        </Link>
                                        <Link to="/myorder">
                                            <div className="flex items-center gap-2 rounded-lg bg-yellow-100 px-4 py-3">
                                                <Img src="images/img_my_order.svg" alt="Cart Icon" className="h-[20px]" />
                                                <Text as="p" className="text-[16px] font-normal !text-lime-900">
                                                    My order
                                                </Text>
                                            </div>
                                        </Link>
                                        <Link to="/wishlist">
                                            <div className="flex items-center gap-2 rounded-lg bg-white-a700 px-4 py-3">
                                                <Button size="xs" shape="square" className="w-[20px] border-none">
                                                    <Img src="images/img_favorite_gray_600_01.svg" />
                                                </Button>
                                                <Text as="p" className="text-[16px] font-normal">
                                                    Wish list
                                                </Text>
                                            </div>
                                        </Link>
                                        <Link to="" onClick={logoutHandler}>
                                            <div className="flex items-center gap-2 rounded-lg bg-white-a700 px-4 py-3">
                                                <Img
                                                    src="images/img_thumbs_up_gray_600_01_3.svg" alt="Logout Icon"
                                                    className="h-[20px]" />
                                                <Text as="p" className="text-[16px] font-normal">
                                                    Log out
                                                </Text>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col gap-2 md:self-stretch">
                                    <Heading
                                        as="h2"
                                        size="text2xl"
                                        className="text-[20px] font-medium mb-6 underline underline-offset-8"
                                    >
                                        Upcoming Orders
                                    </Heading>
                                    <div className="mr-[196px] flex flex-col gap-4 md:mr-0">
                                        <ProductOrderDetails />
                                        <ProductOrderDetails
                                            productName="Elegant Chair"
                                            productImage="images/img_2.png"
                                            productColor="Color: Black"
                                            arrivalDate="Arriving 22 June, Sunday"
                                            quantity="Qty: 2"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
            </div>
        </>
    );
}