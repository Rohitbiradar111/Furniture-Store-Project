import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input, SelectBox, UserProfile } from "../../components";
import metadata from "libphonenumber-js/metadata.full.json";
import { CartContext } from "../Cart/CartContext.jsx";
import { IoPersonOutline } from "react-icons/io5";

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
    if (
      !formData.name ||
      !formData.phonenumber ||
      !formData.address ||
      !formData.zipcode
    ) {
      alert("Please fill all the fields");
      return;
    }

    let updatedAddresses;
    if (editIndex !== null) {
      updatedAddresses = [...addresses];
      updatedAddresses[editIndex] = {
        ...formData,
        name: formData.name.toUpperCase(),
      };
      setEditIndex(null);
    } else {
      updatedAddresses = [
        ...addresses,
        { ...formData, name: formData.name.toUpperCase() },
      ];
    }

    setAddresses(updatedAddresses);
    saveAddressesToLocalStorage(updatedAddresses);

    setFormData({
      name: "",
      phonenumber: "",
      address: "",
      zipcode: "",
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
          <div className="flex">
            <img
              src={display.imgSrc}
              alt="Country Flag"
              className="h-[24px]"
              loading="lazy"
              draggable="false"
            />
            <p className="ml-2 text-[14px] font-normal">
              {display.callingCode}
            </p>
          </div>
        ),
      };
    });
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="container flex items-start justify-center gap-6 md:flex-row flex-col px-5">
          <div className="flex flex-1 flex-col gap-[46px] self-center md:self-stretch">
            {addresses.length > 0 && (
              <div className="flex flex-col items-start gap-5">
                <h1 className="md:text-[24px] font-medium text-[22px]">
                  Deliver to :
                </h1>
                <div className="flex flex-wrap gap-6 self-stretch md:flex-row flex-col">
                  {addresses.map((address, index) => (
                    <div key={index} className="relative w-full">
                      <UserProfile
                        userName={address.name}
                        address={`${address.address}, ${address.zipcode}`}
                        phoneNumber={address.phonenumber}
                        className="border border-black p-[18px] rounded-[16px] w-full"
                      />
                      <Button
                        className="mt-2 bg-blue-500 hover:bg-blue-700 text-white px-5"
                        onClick={() => handleEditAddress(index)}
                      >
                        Edit Address
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className="flex flex-col items-start gap-[18px]">
              <h2 className="md:text-[24px] font-medium text-[22px]">
                {editIndex !== null ? "Edit Address" : "Add New Address"} :
              </h2>
              <div className="flex flex-col gap-3.5 self-stretch">
                <div className="flex flex-col gap-3.5">
                  <div className="flex gap-6 md:flex-row flex-col">
                    <div className="flex w-full flex-col items-start gap-1.5">
                      <p className="text-[16px] font-normal">Name :</p>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className="gap-1.5 self-stretch rounded-[24px] px-3.5 text-[16px] border"
                        prefix={
                          <IoPersonOutline className="h-[22px] w-[24px] object-contain" />
                        }
                      />
                    </div>
                  </div>
                  <div className="flex gap-6 md:flex-col">
                    <div className="flex w-full flex-col gap-1.5">
                      <div className="flex px-4">
                        <p className="text-[16px] font-normal">Phone :</p>
                      </div>
                      <div className="flex h-[48px] items-center justify-center rounded-[24px]">
                        <SelectBox
                          options={countryOptions}
                          defaultValue={countryOptions.find(
                            (option) => option.value === "IN"
                          )}
                          name="country"
                          className="max-h-[24px] flex-shrink-0 items-center justify-center bg-transparent"
                        />
                        <Input
                          type="tel"
                          value={formData.phonenumber}
                          onChange={handleInputChange}
                          name="phonenumber"
                          placeholder="Enter your phone number"
                          className="rounded-[24px] text-[16px] border"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-6 md:flex-col">
                    <div className="flex w-full flex-col gap-1.5">
                      <div className="flex w-full flex-col items-start justify-center gap-1.5">
                        <p className="text-[16px] font-normal">Address :</p>
                        <Input
                          value={formData.address}
                          onChange={handleInputChange}
                          name="address"
                          placeholder="Enter your address"
                          className="self-stretch rounded-[24px] border px-3.5 text-[16px]"
                        />
                      </div>
                      <div className="flex px-4 mt-2">
                        <p className="text-[16px] font-normal">Zip Code :</p>
                      </div>
                      <Input
                        value={formData.zipcode}
                        onChange={handleInputChange}
                        type="number"
                        name="zipcode"
                        placeholder="Enter your Zip Code"
                        className="rounded-[24px] px-3.5 text-[16px] border"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="min-w-[140px] text-white md:px-[23px] bg-blue-500 hover:bg-blue-700 px-5"
                onClick={handleSaveAddress}
              >
                {editIndex !== null ? "Update Address" : "Add Address"}
              </Button>
            </div>
          </div>
          <div className="flex md:w-[32%] flex-col gap-[30px] self-center rounded-[16px] border border-solid px-4 py-[18px] w-full">
            <div className="flex flex-col items-start gap-3">
              <p className="text-[14px] font-normal uppercase">Cart value :</p>
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
                  <p className="self-start text-[16px] font-normal">Total :</p>
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
              className="font-semibold text-white bg-blue-500 hover:bg-blue-700 px-5"
              onClick={() => navigate("/cart")}
            >
              <span className="text-3xl">&#8592;</span>
              &nbsp; Go Back To Cart Section
            </Button>
            <Button
              className="font-semibold text-white bg-blue-500 hover:bg-blue-700 px-5"
              onClick={() => navigate("/payment")}
            >
              Go To Payment Section &nbsp;
              <span className="text-3xl">&#8594;</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
