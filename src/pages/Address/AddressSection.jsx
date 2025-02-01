import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Heading, Text, Input, Img, SelectBox } from "../../components";
import UserProfile1 from "../../components/UserProfile1";
import metadata from "libphonenumber-js/metadata.full.json";
import { CartContext } from "../Cart/CartContext.jsx";

export default function AddressSection() {

    const [addresses, setAddresses] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const navigate = useNavigate();
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const [formData, setFormData] = useState({
        name: "",
        phonenumber: "",
        address: "",
        zipcode: "",
        type: "home"
    });

    useEffect(() => {
        const savedAddresses = localStorage.getItem("userAddresses");
        if (savedAddresses) {
            setAddresses(JSON.parse(savedAddresses));
        }
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const saveAddressesToLocalStorage = (updatedAddresses) => {
        localStorage.setItem("userAddresses", JSON.stringify(updatedAddresses));
    };

    const handleSaveAddress = () => {
        if (!formData.name || !formData.phonenumber || !formData.address || !formData.zipcode) {
            alert("Please fill all the fields");
            return;
        }

        let updatedAddresses;
        if (editIndex !== null) {
            updatedAddresses = [...addresses];
            updatedAddresses[editIndex] = { ...formData, name: formData.name.toUpperCase() };
            setEditIndex(null);
        } else {
            updatedAddresses = [...addresses, { ...formData, name: formData.name.toUpperCase() }];
        }

        setAddresses(updatedAddresses);
        saveAddressesToLocalStorage(updatedAddresses);

        setFormData({
            name: "",
            phonenumber: "",
            address: "",
            zipcode: "",
            type: "home",
        });
    };

    const handleEditAddress = (index) => {
        const addressToEdit = addresses[index];
        setFormData(addressToEdit);
        setEditIndex(index);
    };

    const countryOptions = React.useMemo(() => {
        return Object.entries(metadata.countries).map(([code, data]) => {
            const callingCode = `${data[0]}`;

            const display = {
                code,
                callingCode: `+${callingCode}`,
                imgSrc: `https://catamphetamine.github.io/country-flag-icons/3x2/${code}.svg`,
            };

            return {
                value: code,
                label: (
                    <>
                        <Img
                            src={display.imgSrc}
                            alt="Country Flag"
                            className="h-[24px]"
                        />
                        <Text
                            size="texts"
                            as="p"
                            className="ml-2 text-[14px] font-normal !text-black-900"
                        >
                            {display.callingCode}
                        </Text>
                    </>
                ),
            };
        });
    }, []);

    return (
        <>
            <div className="flex justify-center">
                <div className="container-xs flex items-start justify-center gap-6 md:flex-col md:px-5">
                    <div className="flex flex-1 flex-col gap-[46px] self-center md:self-stretch">
                        {
                            addresses.length > 0 && (
                                <div className="flex flex-col items-start gap-5">
                                    <Heading size="text3xl" as="h1" className="text-[24px] font-medium md:text-[22px]">
                                        Deliver to :
                                    </Heading>
                                    <div className="flex flex-wrap gap-6 self-stretch md:flex-col">
                                        {addresses.map((address, index) => (
                                            <div key={index} className="relative w-full">
                                                <UserProfile1
                                                    userName={`Name : ${address.name}`}
                                                    addressLabel="Address :"
                                                    addressText={`${address.address}, ${address.zipcode}`}
                                                    phoneLabel="Phone Number :"
                                                    phoneNumber={address.phonenumber}
                                                    className="border border-solid border-lime-900 p-[18px] rounded-[16px]"
                                                />
                                                <Button
                                                    size="3xl"
                                                    variant="fill"
                                                    shape="round"
                                                    className="mt-2 rounded-[24px] font-semibold active:bg-orange-500 active:text-slate-50 sm:px-5"
                                                    onClick={() => handleEditAddress(index)}
                                                >
                                                    Edit Address
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )
                        }
                        <div className="flex flex-col items-start gap-[18px]">
                            <Heading size="text3xl" as="h2" className="text-[24px] font-medium md:text-[22px]">
                                {editIndex !== null ? "Edit Address" : "Add New Address"} :
                            </Heading>
                            <div className="flex flex-col gap-3.5 self-stretch">
                                <div className="flex flex-col gap-3.5">
                                    <div className="flex gap-6 md:flex-col">
                                        <div className="flex w-full flex-col items-start gap-1.5">
                                            <Text size="texts" as="p" className="ml-4 text-[16px] font-normal !text-black-900 md:ml-0">
                                                Name :
                                            </Text>
                                            <Input
                                                shape="round"
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder={`Enter your name`}
                                                className="gap-1.5 self-stretch rounded-[24px] px-3.5 !text-black-900 text-[16px]"
                                                prefix={
                                                    < Img
                                                        src="images/img_lock_gray_500_1.svg"
                                                        alt="Lock"
                                                        className="h-[22px] w-[24px] object-contain"
                                                    />
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="flex gap-6 md:flex-col">
                                        <div className="flex w-full flex-col gap-1.5">
                                            <div className="flex px-4">
                                                <Text size="texts" as="p" className="text-[16px] font-normal !text-black-900">
                                                    Phone :
                                                </Text>
                                            </div>
                                            <div className="flex h-[48px] items-center justify-center rounded-[24px] bg-gray-200_03">
                                                <SelectBox
                                                    options={countryOptions}
                                                    defaultValue={countryOptions.find((option) => option.value === "IN")}
                                                    name="country"
                                                    className="max-h-[24px] flex-shrink-0 items-center justify-center bg-transparent"
                                                    indicator={
                                                        <Img
                                                            src="images\img_arrow_down_black_900_3.svg"
                                                            alt="Country Dropdown Icon"
                                                            className="pl-1 h-[16px] mb-1"
                                                        />
                                                    }
                                                />
                                                <div className="h-[24px] w-px bg-gray-500" />
                                                <Input
                                                    type="tel"
                                                    value={formData.phonenumber}
                                                    onChange={handleInputChange}
                                                    name="phonenumber"
                                                    placeholder="Enter your phone number"
                                                    className="rounded-[24px] text-[16px] !text-black-900 sm:pr-5"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-6 md:flex-col">
                                        <div className="flex w-full flex-col gap-1.5">
                                            <div className="flex w-full flex-col items-start justify-center gap-1.5">
                                                <Text size="texts" as="p" className="ml-4 text-[16px] font-normal !text-black-900 md:ml-0">
                                                    Address :
                                                </Text>
                                                <Input
                                                    shape="round"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    name="address"
                                                    placeholder={`Enter your address`}
                                                    className="self-stretch rounded-[24px] px-3.5 !text-black-900 text-[16px]" />
                                            </div>
                                            <div className="flex px-4 mt-2">
                                                <Text size="texts" as="p" className="text-[16px] font-normal !text-black-900">
                                                    Zip Code :
                                                </Text>
                                            </div>
                                            <Input
                                                shape="round"
                                                value={formData.zipcode}
                                                onChange={handleInputChange}
                                                type="number"
                                                name="zipcode"
                                                placeholder={`Enter your Zip Code`}
                                                className="rounded-[24px] px-3.5 !text-black-900 text-[16px]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Button
                                size="5xl"
                                shape="round"
                                className="min-w-[140px] rounded-[24px] !border px-[23px] font-semibold active:bg-orange-500 active:text-slate-50 sm:px-5"
                                onClick={handleSaveAddress}
                            >
                                {editIndex !== null ? "Update Address" : "Add Address"}
                            </Button>
                        </div>
                    </div>
                    <div className="flex w-[32%] flex-col gap-[30px] self-center rounded-[16px] border border-solid border-gray-200_01 px-4 py-[18px] md:w-full">
                        <div className="flex flex-col items-start gap-3">
                            <Text size="texts" as="p" className="text-[14px] font-normal uppercase !text-black-900">
                                Cart value :
                            </Text>
                            <div className="flex flex-col gap-[18px] self-stretch">
                                <div className="h-px bg-gray-200_01" />
                                <div className="flex flex-wrap items-center justify-between gap-5">
                                    <Text as="p" className="text-[16px] font-normal !text-black-900">
                                        Sub Total :
                                    </Text>
                                    <Text as="p" className="text-[16px] font-medium !text-black-900">
                                        ${cart.reduce((sum, item) => sum + item.discount_price * item.quantity, 0).toFixed(2)}
                                    </Text>
                                </div>
                                <div className="flex flex-wrap items-center justify-between gap-5">
                                    <Text as="p" className="text-[16px] font-normal !text-black-900">
                                        Total Products :
                                    </Text>
                                    <Text as="p" className="text-[16px] font-medium !text-black-900">
                                        {totalItems}
                                    </Text>
                                </div>
                                <div className="flex flex-wrap items-center justify-between gap-5">
                                    <Text as="p" className="text-[16px] font-normal !text-black-900">
                                        Shipping Cost :
                                    </Text>
                                    <Text as="p" className="text-[16px] font-medium !text-black-900">
                                        FREE
                                    </Text>
                                </div>
                                <div className="h-px bg-gray-200_01" />
                                <div className="flex flex-wrap items-center justify-between gap-5">
                                    <Text as="p" className="self-start text-[16px] font-normal !text-black-900">
                                        Total :
                                    </Text>
                                    <Heading size="headinglg" as="h4" className="text-[20px] font-semibold !text-black-900">
                                        ${cart.reduce((sum, item) => sum + item.discount_price * item.quantity, 0).toFixed(2)}
                                    </Heading>
                                </div>
                            </div>
                        </div>
                        <Button
                            size="5xl"
                            variant="fill"
                            shape="round"
                            className="rounded-[24px] font-semibold active:bg-orange-500 active:text-slate-50 sm:px-5"
                            onClick={() => navigate("/cart")}>
                            <span className="text-3xl">&#8592;</span>
                            &nbsp; Go Back To Cart Section
                        </Button>
                        <Button
                            size="5xl"
                            variant="fill"
                            shape="round"
                            className="rounded-[24px] font-semibold active:bg-orange-500 active:text-slate-50 sm:px-5"
                            onClick={() => navigate("/payment")}>
                            Go To Payment Section &nbsp;
                            <span className="text-3xl">&#8594;</span>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
