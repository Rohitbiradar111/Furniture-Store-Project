import { useState, useContext } from "react";
import { Button } from "../../components";
import { CartContext } from "../Cart/CartContext.jsx";
import { useNavigate } from "react-router-dom";
import conf from "../../conf/conf.js";
import { TiTickOutline } from "react-icons/ti";

export default function PaymentSection() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const totalAmount = cart
    .reduce((sum, item) => sum + item.discount_price * item.quantity, 0)
    .toFixed(2);

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.exchangerate-api.com/v4/latest/USD"
      );
      if (!response.ok) throw new Error("Failed to fetch exchange rate");
      const data = await response.json();

      const conversionRate = data.rates.INR || 1;

      const amountInUSD = parseFloat(totalAmount);
      const amountInINR = (amountInUSD * conversionRate).toFixed(2);

      const amountInPaise = Math.round(amountInINR * 100);

      const options = {
        key: conf.razorpayKeyId,
        amount: amountInPaise,
        currency: "INR",
        name: "FurniStore",
        description: `Payment for Order ($${amountInUSD} USD ≈ ₹${amountInINR} INR)`,
        image: "/image/img_brand_logo.png",
        handler: function () {
          alert(
            `Payment of $${amountInUSD} (~ ₹${amountInINR}) is Successful!`
          );
          navigate("/allproducts");
        },
        prefill: {
          name: "John Doe",
          email: "john@example.com",
          contact: "1234567890",
        },
        notes: {
          conversion_rate: `1 USD ≈ ${conversionRate} INR`,
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error(error.message);
      alert("Payment failed, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col md:gap-[72px] gap-12">
        <div className="flex flex-col mb-40 gap-[38px]">
          <div className="flex justify-center">
            <div className="flex justify-center w-[45rem] md:px-14 px-5">
              <div className="flex items-center justify-center rounded-[16px] border border-solid w-full md:flex-row flex-col">
                <div className="flex w-full items-center gap-4 border-r border-solid md:px-6 py-4 px-5">
                  <div className="flex flex-col items-center justify-center rounded-[20px] bg-green-900 px-2.5 py-3">
                    <TiTickOutline className="text-white scale-150 w-6 h-4" />
                  </div>
                  <p className="mb-2.5 self-end text-[14px] font-medium">
                    Shopping cart
                  </p>
                </div>
                <div className="flex w-full flex-wrap items-center justify-start gap-4 border-r border-solid md:px-6 py-4 px-5">
                  <div className="flex flex-col items-center justify-center rounded-[20px] bg-green-900 px-2.5 py-3">
                    <TiTickOutline className="text-white scale-150 w-6 h-4" />
                  </div>
                  <p className="mb-2.5 self-end text-[14px] font-medium">
                    Shipping address
                  </p>
                </div>
                <div className="flex w-full flex-wrap items-center justify-center gap-4 border-r border-solid md:px-6 py-4 px-5">
                  <p className="flex h-[40px] w-[40px] items-center justify-center rounded-[20px] border-2 border-solid text-center text-[16px] font-medium">
                    03
                  </p>
                  <p className="mb-2.5 self-end text-[14px] font-medium">
                    Payment info
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center w-full gap-[30px] flex-col px-4">
            <div className="flex md:w-[32%] flex-col gap-[30px] self-center rounded-[16px] border border-solid px-4 py-[18px] w-full">
              <div className="flex flex-col items-start gap-3">
                <p className="text-[14px] font-normal uppercase">
                  Cart value :
                </p>
                <div className="flex flex-col gap-[18px] self-stretch">
                  <div className="h-px" />
                  <div className="flex flex-wrap items-center justify-between gap-5">
                    <p className="text-[16px] font-normal">Sub Total :</p>
                    <p className="text-[16px] font-medium">${totalAmount}</p>
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
                      ${totalAmount}
                    </h4>
                  </div>
                  <p className="flex justify-center text-center text-[16px] font-normal">
                    ( Please Note that the Price will be converted into INR )
                  </p>
                </div>
              </div>
              <Button
                className="font-semibold text-white bg-blue-500 hover:bg-blue-700"
                onClick={() => navigate("/address")}
              >
                <span className="text-3xl">&#8592;</span>
                &nbsp; Go Back To Address Section
              </Button>
              <Button
                className="font-semibold text-white bg-blue-500 hover:bg-blue-700"
                onClick={handlePayment}
                disabled={loading}
              >
                {loading ? "Processing..." : "Complete Your Payment"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
