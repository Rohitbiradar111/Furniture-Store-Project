import React, { useContext } from "react";
import { CartContext } from "./CartContext.jsx";
import { Button, Heading, Text, Img } from "../../components";
import { ReactTable } from "../../components/ReactTable";
import { createColumnHelper } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";

export default function CartSection() {

    const { cart, removeFromCart, addToCart } = useContext(CartContext);
    const navigate = useNavigate();
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const handleIncrement = (product) => {
        const updatedQuantity = product.quantity + 1;
        addToCart({ ...product, quantity: updatedQuantity });
    };

    const handleDecrement = (product) => {
        const updatedQuantity = Math.max(product.quantity - 1, 1);
        addToCart({ ...product, quantity: updatedQuantity });
    };

    const tableColumns = React.useMemo(() => {

        const tableColumnHelper = createColumnHelper();

        return [
            tableColumnHelper.accessor("image_path", {
                cell: (info) => (
                    <div className="flex items-start gap-3">
                        <Img
                            src={info.row.original.image_path || "Image Not Found"}
                            alt="Product Image"
                            className="mt-2 h-[136px] w-full rounded-xl object-cover md:h-auto"
                        />
                    </div>
                ),
                header: () => <Text size="texts" as="p" className="text-[14px] font-normal uppercase !text-black-900 underline underline-offset-8">Product</Text>,
                meta: { width: "100px" },
            }),
            tableColumnHelper.accessor("name", {
                cell: (info) => (
                    <Text size="textsm" as="p" className=" ml-8 flex flex-wrap text-[16px] font-normal !text-black-900">
                        {info.getValue()}
                    </Text>
                ),
                header: () => <Text size="texts" as="p" className="ml-5 text-[14px] font-normal uppercase !text-black-900 underline underline-offset-8">Product Name</Text>,
                meta: { width: "150px" },
            }),
            tableColumnHelper.accessor("discount_price", {
                cell: (info) => (
                    <Text size="textxl" as="p" className="ml-10 text-[18px] font-normal !text-black-900">
                        ${info.getValue()}
                    </Text>
                ),
                header: () => <Text size="texts" as="p" className="text-[14px] font-normal uppercase !text-black-900 underline underline-offset-8">Price</Text>,
                meta: { width: "122px" }
            }),
            tableColumnHelper.accessor("quantity", {
                cell: (info) => (
                    <div className="flex items-center justify-center gap-4 rounded-[22px] border border-solid border-gray-200_01">
                        <Button
                            onClick={() => handleDecrement(info.row.original)}
                            className="flex-1 cursor-pointer"
                            variant="outline"
                            color="white_A700"
                        >
                            <Img
                                src="images/img_arrow_down_blue_gray_900_01.svg"
                                alt="Arrow Down"
                                className="h-[20px] cursor-pointer"
                            />
                        </Button>
                        <Heading
                            size="headingxs"
                            as="h1"
                            className="text-[18px] font-semibold !text-black-900 mr-5"
                        >
                            {info.row.original.quantity}
                        </Heading>
                        <Button
                            onClick={() => handleIncrement(info.row.original)}
                            className="cursor-pointer"
                            variant="outline"
                            color="white_A700"
                        >
                            <Img
                                src="images/img_plus_blue_gray_900_01.svg"
                                alt="Plus Image"
                                className="h-[20px]"
                            />
                        </Button>
                    </div>
                ),
                header: () => <Text size="texts" as="p" className="text-[14px] font-normal uppercase !text-black-900 underline underline-offset-8">Quantity</Text>,
                meta: { width: "148px" },
            }),
            tableColumnHelper.accessor("subtotalHeader", {
                cell: (info) => (
                    <div className="ml-5 mr-5 flex flex-col items-center">
                        <Text size="textxl" as="p" className="mb-3.5 text-[18px] font-normal !text-black-900">
                            ${(info.row.original.discount_price * info.row.original.quantity)}
                        </Text>
                    </div>
                ),
                header: () => <Text size="texts" as="p" className="text-[14px] font-normal uppercase !text-black-900 underline underline-offset-8">Subtotal</Text>,
                meta: { width: "72px" },
            }),
            {
                id: "remove",
                cell: (info) => (
                    <Button
                        size="2xl"
                        shape="round"
                        onClick={() => removeFromCart(info.row.original.id)}
                        className="ml-12 !text-black-900"
                    >
                        Remove
                    </Button>
                ),
                header: () => <Text size="texts" as="p" className="text-[14px] font-normal uppercase !text-black-900 underline underline-offset-8">Remove</Text>,
            },
        ];
    }, [addToCart, removeFromCart]);

    return (
        (
            cart.length === 0 ? (<div className="flex flex-col items-center mt-20 mb-20">
                <Text
                    size="text5xl"
                    as="p"
                    className="text-[20px] font-semibold !text-black-900"
                >
                    Your Cart is Empty
                </Text>
                <Button
                    size="5xl"
                    variant="fill"
                    shape="round"
                    className="mt-5 rounded-[24px] px-[34px] font-semibold sm:px-5"
                    onClick={() => navigate("/allproducts")}
                >
                    Start Shopping
                </Button>
            </div>) : (
                <>
                    <div className="flex flex-col items-center">
                        <div className="container-xs flex flex-col gap-[38px] md:px-5">
                            <div className="mx-[218px] flex items-center rounded-[16px] border border-solid border-gray-200_01 md:mx-0 md:flex-col">
                                <div className="flex w-full flex-wrap items-center gap-4 border-r border-solid border-gray-200_01 px-6 py-4 sm:px-5">
                                    <Text
                                        as="p"
                                        className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border-2 border-solid border-black-900 text-center text-[16px] font-medium !text-black-900"
                                    >
                                        01
                                    </Text>
                                    <Text size="texts" as="p" className="mb-2.5 self-end text-[14px] font-medium text-black-900">
                                        Shopping cart
                                    </Text>
                                </div>
                                <div className="flex w-full flex-wrap items-center justify-center gap-4 border-r border-solid border-gray-200_01 p-4">
                                    <Text
                                        as="p"
                                        className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border-2 border-solid border-gray-200_01 text-center text-[16px] font-medium"
                                    >
                                        02
                                    </Text>
                                    <Text size="texts" as="p" className="mb-2.5 self-end text-[14px] font-medium">
                                        Shipping address
                                    </Text>
                                </div>
                                <div className="flex w-full flex-wrap items-center gap-4 px-6 sm:px-5">
                                    <Text
                                        as="p"
                                        className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border-2 border-solid border-gray-200_01 text-center text-[16px] font-medium"
                                    >
                                        03
                                    </Text>
                                    <Text size="texts" as="p" className="mb-2.5 self-end text-[14px] font-medium">
                                        Payment info
                                    </Text>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 md:flex-col">
                                <ReactTable
                                    size="xs"
                                    bodyProps={{ className: "" }}
                                    className="flex-1 md:block md:overflow-x-auto md:whitespace-nowrap"
                                    columns={tableColumns}
                                    data={cart}
                                />
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
                                        className="rounded-[24px] font-semibold active:bg-orange-500 
                                        active:text-slate-50 sm:px-5"
                                        onClick={() => navigate("/allproducts")}>
                                        <span className="text-3xl">&#8592;</span>
                                        &nbsp; Go Back To All Products Section
                                    </Button>
                                    <Button
                                        size="5xl"
                                        variant="fill"
                                        shape="round"
                                        className="rounded-[24px] px-[34px] font-semibold active:bg-orange-500 active:text-slate-50 sm:px-5"
                                        onClick={() => navigate("/address")}>
                                        Go To Address Section &nbsp;
                                        <span className="text-3xl">&#8594;</span>
                                    </Button>
                                </div>
                            </div >
                        </div >
                    </div >
                </>
            )
        )
    );
} 
