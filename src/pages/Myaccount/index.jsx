import { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Input, Footer, Header } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import clerkAuthService from "../../clerk/auth.js";
import { logout } from "../../store/authSlice.js";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuLogOut } from "react-icons/lu";

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
    clerkAuthService.logout().then(() => {
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
          content="Access and manage your personal account details. Keep your information up-to-date for a personalized shopping experience."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-10">
        <Header />
        <div className="flex flex-col md:gap-[72px] gap-12 px-8">
          <div className="flex flex-col items-center mb-60">
            <div className="flex justify-center self-stretch">
              <div className="container flex self-end md:px-5">
                <h1 className="md:text-[48px] font-medium text-[38px]">
                  Settings
                </h1>
              </div>
            </div>
            <div className="container md:px-5">
              <div className="flex items-start gap-6 md:flex-row flex-col">
                <div className="flex md:w-[24%] flex-col gap-5 self-center rounded-[16px] border-2 border-solid shadow-2xl px-4 py-5 w-full">
                  <Link to="/myaccount">
                    <div className="flex items-center gap-2 rounded-lg bg-yellow-100 px-4 py-3">
                      <IoPersonOutline className="h-[20px] scale-125" />
                      <p className="text-[16px] font-normal">My account</p>
                    </div>
                  </Link>
                  <Link to="/myorder">
                    <div className="flex items-center gap-2 rounded-lg px-4 py-3">
                      <HiOutlineShoppingBag className="scale-125" />
                      <p className="text-[16px] font-normal">My order</p>
                    </div>
                  </Link>
                  <Link to="/wishlist">
                    <div className="flex items-center gap-2 rounded-lg px-4 py-3">
                      <CiHeart className="scale-150" />
                      <p className="text-[16px] font-normal">Wish list</p>
                    </div>
                  </Link>
                  <Link to="" onClick={logoutHandler}>
                    <div className="flex items-center gap-2 rounded-lg px-4 py-3">
                      <LuLogOut className="h-[20px] scale-125" />
                      <p className="text-[16px] font-normal">Log out</p>
                    </div>
                  </Link>
                </div>
                <div className="flex flex-1 flex-col gap-6 md:self-stretch">
                  <div className="flex w-full flex-col gap-[18px] rounded-[16px] border border-solid p-[18px] shadow-2xl">
                    <div className="flex items-center justify-between gap-5">
                      <h2 className="text-[20px] font-medium">
                        Personal Information
                      </h2>
                      <Button
                        className="self-stretch rounded-[24px] md:px-[34px] font-semibold px-5 text-white border-none text-base bg-blue-500 hover:bg-blue-700"
                        onClick={() => setIsEditingPersonal(!isEditingPersonal)}
                      >
                        {isEditingPersonal ? "Save" : "Edit"}
                      </Button>
                    </div>
                    <div className="flex justify-center gap-6">
                      <div className="flex flex-col items-start gap-4">
                        <p className="text-[14px] font-normal">First Name :</p>
                        <p className="text-[14px] font-normal">Last Name :</p>
                        <p className="text-[14px] font-normal">Birthday :</p>
                        <p className="text-[14px] font-normal">Gender :</p>
                      </div>
                      <div className="flex flex-1 flex-col items-start gap-4">
                        {isEditingPersonal ? (
                          <>
                            <Input
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              className="w-full h-6 rounded-none"
                            />
                            <Input
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              className="w-full h-6 rounded-none"
                            />
                            <Input
                              value={birthday}
                              onChange={(e) => setBirthday(e.target.value)}
                              className="w-full h-6 rounded-none"
                            />
                            <Input
                              value={gender}
                              onChange={(e) => setGender(e.target.value)}
                              className="w-full h-6 rounded-none"
                            />
                          </>
                        ) : (
                          <>
                            <p className="text-[14px] font-normal">
                              {firstName}
                            </p>
                            <p className="text-[14px] font-normal">
                              {lastName}
                            </p>
                            <p className="text-[14px] font-normal">
                              {birthday}
                            </p>
                            <p className="text-[14px] font-normal">{gender}</p>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex w-full flex-col gap-[18px] rounded-[16px] border border-solid shadow-2xl p-[18px]">
                    <div className="flex items-center justify-between gap-5">
                      <h2 className="text-[20px] font-medium">
                        Contact and Password
                      </h2>
                      <Button
                        className="self-stretch rounded-[24px] md:px-[34px] font-semibold px-5 text-base bg-blue-500 hover:bg-blue-700 text-white border-none"
                        onClick={() => setIsEditingContact(!isEditingContact)}
                      >
                        {isEditingContact ? "Save" : "Edit"}
                      </Button>
                    </div>
                    <div className="flex justify-center gap-6">
                      <div className="flex flex-col items-start gap-4">
                        <p className="text-[14px] font-normal">Email :</p>
                        <p className="text-[14px] font-normal">Mobile :</p>
                        <p className="text-[14px] font-normal">Password :</p>
                      </div>
                      <div className="flex flex-1 flex-col items-start gap-4">
                        {isEditingContact ? (
                          <>
                            <Input
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full h-6 rounded-none"
                            />
                            <Input
                              value={mobile}
                              onChange={(e) => setMobile(e.target.value)}
                              className="w-full h-6 rounded-none"
                            />
                            <Input
                              type="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              className="w-full h-6 rounded-none"
                            />
                          </>
                        ) : (
                          <>
                            <p className="text-[14px] font-normal">{email}</p>
                            <p className="text-[14px] font-normal">{mobile}</p>
                            <p className="text-[14px] font-normal">
                              {password}
                            </p>
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
