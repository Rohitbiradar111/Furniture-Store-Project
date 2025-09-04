import React, { useContext } from "react";
import { CartContext } from "./CartContext.jsx";
import { Button, ReactTable } from "../../components";
import { createColumnHelper } from "@tanstack/react-table";
import { useNavigate } from "react-router-dom";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function CartSection() {
  const { cart, removeFromCart, addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleIncrement = (product) => {
    const updatedQuantity = product.quantity + 1;
    addToCart({ ...product, quantity: updatedQuantity });
  };

  const handleDecrement = (product) => {
    if (product.quantity === 1) return;
    const updatedQuantity = Math.max(product.quantity - 1, 1);
    addToCart({ ...product, quantity: updatedQuantity });
  };

  const tableColumns = React.useMemo(() => {
    const tableColumnHelper = createColumnHelper();

    return [
      tableColumnHelper.accessor("image_path", {
        cell: (info) => (
          <div className="flex items-start gap-3">
            <img
              src={info.row.original.image_path || "Image Not Found"}
              alt="Product Image"
              className="mt-2 w-full rounded-xl object-cover"
              loading="lazy"
              draggable="false"
            />
          </div>
        ),
        header: () => (
          <p className="text-[14px] font-semibold uppercase">Product</p>
        ),
        meta: { width: "100px" },
      }),

      tableColumnHelper.accessor("name", {
        cell: (info) => (
          <p className="flex flex-wrap justify-center text-[16px] font-normal">
            {info.getValue()}
          </p>
        ),
        header: () => (
          <p className="text-[14px] font-semibold uppercase">Product Name</p>
        ),
        meta: { width: "150px" },
      }),

      tableColumnHelper.accessor("discount_price", {
        cell: (info) => (
          <p className="mx-5 md:mx-auto text-[18px] font-normal">
            ${info.getValue()}
          </p>
        ),
        header: () => (
          <p className="mx-5 md:mx-auto text-[14px] font-semibold uppercase">
            Price
          </p>
        ),
        meta: { width: "122px" },
      }),

      tableColumnHelper.accessor("quantity", {
        cell: (info) => (
          <div className="flex items-center justify-center gap-4 rounded-[22px] border border-solid">
            <FiMinus
              onClick={() => handleDecrement(info.row.original)}
              className="cursor-pointer text-xl"
            />
            <h1 className="text-[18px] font-semibold p-2">
              {info.row.original.quantity}
            </h1>
            <FiPlus
              onClick={() => handleIncrement(info.row.original)}
              className="cursor-pointer text-xl"
            />
          </div>
        ),
        header: () => (
          <p className="text-[14px] font-semibold uppercase">Quantity</p>
        ),
        meta: { width: "148px" },
      }),

      tableColumnHelper.accessor("subtotalHeader", {
        cell: (info) => (
          <div className="ml-10 mr-10 flex flex-col items-center">
            <p className="mb-3.5 text-[18px] font-normal">
              ${info.row.original.discount_price * info.row.original.quantity}
            </p>
          </div>
        ),
        header: () => (
          <p className="text-[14px] font-semibold uppercase">Subtotal</p>
        ),
        meta: { width: "72px" },
      }),
      {
        id: "remove",
        cell: (info) => (
          <Button
            onClick={() => removeFromCart(info.row.original.id)}
            className="border border-solid rounded"
          >
            Remove
          </Button>
        ),
        header: () => (
          <p className="text-[14px] font-semibold uppercase">Remove Item</p>
        ),
      },
    ];
  }, [addToCart, removeFromCart]);

  return cart.length === 0 ? (
    <div className="flex justify-center items-center flex-col gap-5 mt-20 mb-60">
      <p className="flex text-[30px] font-semibold">Your Cart is Empty.</p>
      <div className="flex justify-center items-center text-center">
        <Button
          className="bg-blue-500 hover:bg-blue-700 text-white"
          onClick={() => navigate("/allproducts")}
        >
          Start Shopping
        </Button>
      </div>
    </div>
  ) : (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-[38px]">
          <div className="md:mx-[218px] flex items-center rounded-[16px] border mx-0 flex-col md:flex-row">
            <div className="flex w-full flex-wrap items-center justify-center gap-4 border-r border-solid p-4">
              <p className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border-2 border-solid text-center text-[16px] font-medium">
                01
              </p>
              <p className="mb-2.5 self-end text-[14px] font-medium">
                Shopping cart
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-4 border-r border-solid md:px-6 py-4 px-5">
              <p className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border-2 border-solid text-center text-[16px] font-medium">
                02
              </p>
              <p className="mb-2.5 self-end text-[14px] font-medium">
                Shipping address
              </p>
            </div>
            <div className="flex w-full flex-wrap items-center gap-4 border-r border-solid md:px-6 py-4 px-5">
              <p className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border-2 border-solid text-center text-[16px] font-medium">
                03
              </p>
              <p className="mb-2.5 self-end text-[14px] font-medium">
                Payment info
              </p>
            </div>
          </div>
          <div className="flex items-start gap-10 md:flex-row flex-col">
            <ReactTable
              className="w-80 py-2 px-3 md:w-[45rem] border border-solid block overflow-x-auto whitespace-nowrap text-center"
              columns={tableColumns}
              data={cart}
            />
            <div className="flex md:w-[35%] flex-col gap-[30px] self-center rounded-[16px] border border-solid px-4 py-[18px] w-full">
              <div className="flex flex-col items-start gap-3">
                <p className="text-[14px] font-normal uppercase">
                  Cart value :
                </p>
                <div className="flex flex-col gap-[18px] self-stretch">
                  <div className="h-px" />
                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <p className="text-[16px] font-normal">Sub Total :</p>
                    <p className="text-[16px] font-medium">
                      $
                      {cart
                        .reduce(
                          (sum, item) =>
                            sum + item.discount_price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <p className="text-[16px] font-normal">Total Products :</p>
                    <p className="text-[16px] font-medium">{totalItems}</p>
                  </div>
                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <p className="text-[16px] font-normal">Shipping Cost :</p>
                    <p className="text-[16px] font-medium">FREE</p>
                  </div>
                  <div className="h-px" />
                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <p className="self-start text-[16px] font-normal">
                      Total :
                    </p>
                    <h4 className="text-[20px] font-semibold">
                      $
                      {cart
                        .reduce(
                          (sum, item) =>
                            sum + item.discount_price * item.quantity,
                          0
                        )
                        .toFixed(2)}
                    </h4>
                  </div>
                </div>
              </div>
              <Button
                className="font-semibold bg-blue-500 hover:bg-blue-700 px-5 text-white"
                onClick={() => navigate("/allproducts")}
              >
                <span className="text-3xl">&#8592;</span>
                &nbsp; Go Back To All Products Section
              </Button>
              <Button
                className="font-semibold bg-blue-500 hover:bg-blue-700 px-5 text-white"
                onClick={() => navigate("/address")}
              >
                Go To Address Section &nbsp;
                <span className="text-3xl">&#8594;</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
