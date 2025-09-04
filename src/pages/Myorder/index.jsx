import { Helmet } from "react-helmet";
import { Footer, Header } from "components/index.jsx";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import clerkAuthService from "../../clerk/auth.js";
import { logout } from "../../store/authSlice.js";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuLogOut } from "react-icons/lu";

export default function MyorderPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    clerkAuthService.logout().then(() => {
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
          content="Stay on top of your purchases with FurniStore. Track your upcoming order history."
        />
      </Helmet>
      <div className="flex w-full flex-col gap-10">
        <Header />
        <div className="flex flex-col md:gap-[72px] gap-12 px-8">
          <div className="flex flex-col gap-10 mb-60">
            <div className="flex justify-center self-stretch">
              <div className="container flex self-end md:px-5">
                <h1 className="md:text-[48px] font-medium text-[38px]">
                  Settings
                </h1>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="container flex items-start justify-center gap-6 md:flex-row flex-col md:px-5">
                <div className="md:w-[24%] self-center w-full">
                  <div className="flex flex-col gap-5 shadow-2xl rounded-[16px] border border-solid px-4 py-5">
                    <Link to="/myaccount">
                      <div className="flex items-center gap-2 rounded-lg px-4 py-3">
                        <IoPersonOutline className="h-[20px] scale-125" />
                        <p className="text-[16px] font-normal">My account</p>
                      </div>
                    </Link>
                    <Link to="/myorder">
                      <div className="flex items-center gap-2 rounded-lg bg-yellow-100 px-4 py-3">
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
                </div>
                <div className="flex flex-1 flex-col gap-2 md:self-stretch">
                  <h2 className="text-[20px] font-medium mb-6 underline underline-offset-8">
                    Upcoming Orders
                  </h2>
                  <div className="md:mr-[196px] flex flex-col gap-4 mr-0">
                    <div className="flex md:flex-row flex-col items-center self-stretch gap-[18px] flex-1 shadow-2xl p-5">
                      <img
                        src="images/img_paste_image.png"
                        alt="Wodden Chair"
                        className="md:h-[136px] md:w-[20%] object-contain"
                        loading="lazy"
                        draggable="false"
                      />
                      <div className="flex flex-1 flex-col md:gap-8 md:self-stretch gap-8">
                        <div className="flex flex-col items-start gap-0.5 md:gap-0.5">
                          <div className="flex flex-wrap justify-between gap-5 self-stretch">
                            <p className="text-[16px] font-normal">
                              Wodden Chair
                            </p>
                            <p className="text-[16px] font-medium">
                              Arriving 26 Dec, Friday
                            </p>
                          </div>
                          <p className="text-[16px] font-normal">
                            Color: Brown
                          </p>
                          <p className="text-[16px] font-normal">Qty: 1</p>
                        </div>
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
