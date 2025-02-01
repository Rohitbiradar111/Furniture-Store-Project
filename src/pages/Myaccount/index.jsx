import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button, Input } from "../../components";
import Footer from "../../components/Footer";
import Header from "components/Header";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";

export default function MyaccountPage() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [firstName, setFirstName] = useState("Rohit");
    const [lastName, setLastName] = useState("Biradar");
    const [birthday, setBirthday] = useState("01/01/2001");
    const [gender, setGender] = useState("Male");
    const [isEditingPersonal, setIsEditingPersonal] = useState(false);

    const [email, setEmail] = useState("abcd@gmail.com");
    const [mobile, setMobile] = useState("123456789");
    const [password, setPassword] = useState("password");
    const [isEditingContact, setIsEditingContact] = useState(false);

    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout());
                navigate("/login");
            });
    };

    return (
        <>
            <Helmet>
                <title>Account - FurniStore</title>
                <meta
                    name="description"
                    content="Access and manage your personal account details, including payment methods, address book, and order history. Keep your information up-to-date for a personalized shopping experience."
                />
            </Helmet>
            <div className="flex w-full flex-col gap-10 bg-white-a700">
                <Header />
                <div className="flex flex-col gap-24 md:gap-[72px] sm:gap-12">
                    <div className="flex flex-col items-center gap-10">
                        <div className="flex justify-center self-stretch">
                            <div className="container-xs flex self-end md:px-5">
                                <Heading as="h1" className="text-[48px] font-medium md:text-[44px] sm:text-[38px]">
                                    Settings
                                </Heading>
                            </div>
                        </div>
                        <div className="container-xs md:px-5">
                            <div className="flex items-start gap-6 md:flex-col">
                                <div className="flex w-[24%] flex-col gap-5 self-center rounded-[16px] border border-solid border-gray-200_01 px-4 py-5 md:w-full">
                                    <Link to="/myaccount">
                                        <div className="flex items-center gap-2 rounded-lg bg-yellow-100 px-4 py-3">
                                            <Img src="images/img_lock_gray_600_01.svg" alt="Lock Icon" className="h-[20px]" />
                                            <Text as="p" className="text-[16px] font-normal !text-lime-900">
                                                My account
                                            </Text>
                                        </div>
                                    </Link>
                                    <Link to="/myorder">
                                        <div className="flex items-center gap-2 rounded-lg bg-white-a700 px-4 py-3">
                                            <Img src="images/img_my_order.svg" alt="Thumbs Up Icon" className="h-[20px]" />
                                            <Text as="p" className="text-[16px] font-normal">
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
                                <div className="flex flex-1 flex-col gap-6 md:self-stretch">
                                    <div className="flex w-full flex-col gap-[18px] rounded-[16px] border border-solid border-gray-200_01 p-[18px]">
                                        <div className="flex items-center justify-between gap-5">
                                            <Heading size="text2xl" as="h2" className="text-[20px] font-medium">
                                                Personal Information :
                                            </Heading>
                                            <Button
                                                size="2xl"
                                                shape="round"
                                                className="self-stretch rounded-[24px] px-[34px] font-semibold sm:px-5 text-base active:bg-lime-500"
                                                onClick={() => setIsEditingPersonal(!isEditingPersonal)}
                                            >
                                                {isEditingPersonal ? "Save" : "Edit"}
                                            </Button>
                                        </div>
                                        <div className="flex justify-center gap-6">
                                            <div className="flex flex-col items-start gap-3.5">
                                                <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                                                    First Name :
                                                </Text>
                                                <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                                                    Last Name :
                                                </Text>
                                                <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                                                    Birthday :
                                                </Text>
                                                <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                                                    Gender :
                                                </Text>
                                            </div>
                                            <div className="flex flex-1 flex-col items-start gap-3.5">
                                                {isEditingPersonal ? (
                                                    <>
                                                        <Input value={firstName} onChange={(e) => setFirstName(e.target.value)} className="rounded-[24px] text-[16px] !text-black-900" />
                                                        <Input value={lastName} onChange={(e) => setLastName(e.target.value)} className="rounded-[24px] text-[16px] !text-black-900" />
                                                        <Input value={birthday} onChange={(e) => setBirthday(e.target.value)} className="rounded-[24px] text-[16px] !text-black-900" />
                                                        <Input value={gender} onChange={(e) => setGender(e.target.value)} className="rounded-[24px] text-[16px] !text-black-900" />
                                                    </>
                                                ) : (
                                                    <>
                                                        <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                                                            {firstName}
                                                        </Text>
                                                        <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                                                            {lastName}
                                                        </Text>
                                                        <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                                                            {birthday}
                                                        </Text>
                                                        <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                                                            {gender}
                                                        </Text>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-full flex-col gap-[18px] rounded-[16px] border border-solid border-gray-200_01 p-[18px]">
                                        <div className="flex items-center justify-between gap-5">
                                            <Heading size="text2xl" as="h2" className="text-[20px] font-medium">
                                                Contact & Password :
                                            </Heading>
                                            <Button
                                                size="2xl"
                                                shape="round"
                                                className="self-stretch rounded-[24px] px-[34px] font-semibold sm:px-5 text-base active:bg-lime-500"
                                                onClick={() => setIsEditingContact(!isEditingContact)}
                                            >
                                                {isEditingContact ? "Save" : "Edit"}
                                            </Button>
                                        </div>
                                        <div className="flex justify-center gap-6">
                                            <div className="flex flex-col items-start gap-3.5">
                                                <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                                                    Email:
                                                </Text>
                                                <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                                                    Mobile:
                                                </Text>
                                                <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                                                    Password:
                                                </Text>
                                            </div>
                                            <div className="flex flex-1 flex-col items-start gap-3.5">
                                                {isEditingContact ? (<>
                                                    <Input value={email} onChange={(e) => setEmail(e.target.value)} className="rounded-[24px] text-[16px] !text-black-900" />
                                                    <Input value={mobile} onChange={(e) => setMobile(e.target.value)} className="rounded-[24px] text-[16px] !text-black-900" />
                                                    <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)}
                                                        className="rounded-[24px] text-[16px] !text-black-900" />
                                                </>
                                                ) : (<>
                                                    <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                                                        {email}
                                                    </Text>
                                                    <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                                                        {mobile}
                                                    </Text>
                                                    <Text size="texts" as="p" className="text-[14px] font-normal !text-black-900">
                                                        {password}
                                                    </Text>
                                                </>
                                                )}
                                            </div>
                                        </div>
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
