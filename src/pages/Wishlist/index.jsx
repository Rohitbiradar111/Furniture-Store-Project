import { useContext } from "react";
import { Helmet } from "react-helmet";
import { Button, Footer, Header } from "../../components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import clerkAuthService from "../../clerk/auth.js";
import { logout } from "../../store/authSlice.js";
import { CartContext } from "pages/Cart/CartContext";
import { WishlistContext } from "./WishlistContext.jsx";
import { CiHeart } from "react-icons/ci";
import { IoPersonOutline, IoCartOutline } from "react-icons/io5";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LuLogOut } from "react-icons/lu";

export default function Wishlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  const logoutHandler = () => {
    clerkAuthService.logout().then(() => {
      dispatch(logout());
      navigate("/login");
    });
  };

  return (
    <>
      <Helmet>
        <title>Wishlist - FurniStore</title>
        <meta
          name="description"
          content="Create your dream space with FurniStore's wishlist feature. Save your favorite furniture pieces, monitor price drops, and snag deals upto 30% off."
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
              <div className="container flex items-start gap-6 md:flex-row flex-col md:px-5">
                <div className="md:w-[24%] w-full">
                  <div className="flex flex-col gap-5 rounded-[16px] border border-solid shadow-2xl px-4 py-5">
                    <Link to="/myaccount">
                      <div className="flex items-center gap-2 rounded-lg px-4 py-3">
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
                      <div className="flex items-center gap-2 rounded-lg bg-yellow-100 px-4 py-3">
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
                <div className="flex flex-col gap-4">
                  {(wishlist?.length ?? 0) > 0 ? (
                    wishlist.map((product, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-4 shadow-2xl p-5"
                      >
                        <img
                          src={product.image_path}
                          alt={product.name}
                          className="md:h-[136px] md:w-full object-contain"
                          loading="lazy"
                          draggable="false"
                        />
                        <div className="flex flex-col md:self-stretch gap-9">
                          <div className="flex flex-col gap-1">
                            <div className="flex items-center justify-between">
                              <p className="text-[18px] font-normal">
                                {product.name}
                              </p>
                              <div className="flex flex-1 flex-wrap ml-10 justify-end">
                                <p className="text-[16px] font-medium mr-1">
                                  {`$${product.discount_price}`}
                                </p>
                                <p className="text-[16px] font-normal line-through">
                                  {`$${product.price}`}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-center">
                            <div className="flex flex-1 items-center gap-6 justify-between">
                              <Button
                                className="rounded-2xl px-2 border border-black"
                                title="Add to Cart"
                                onClick={() => addToCart(product)}
                              >
                                <IoCartOutline className="h-4 w-4 scale-125 text-gray-500" />
                              </Button>
                              <Button
                                className="rounded-2xl px-2 border border-black"
                                onClick={() =>
                                  removeFromWishlist(
                                    product?.id || product?._id
                                  )
                                }
                              >
                                Remove
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <>
                      <div className="ml-5 mt-8 md:ml-60">
                        <p className="flex text-[30px] font-semibold">
                          Your Wishlist is Empty.
                        </p>
                        <div className="flex justify-center mt-5 items-center text-center">
                          <Button
                            className="bg-blue-500 hover:bg-blue-700 text-white"
                            onClick={() => navigate("/allproducts")}
                          >
                            Start Shopping
                          </Button>
                        </div>
                      </div>
                    </>
                  )}
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
