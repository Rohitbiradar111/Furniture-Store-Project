import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading } from "../../components";
import Footer from "../../components/Footer";
import Header from "components/Header";
import ProductDetails from "../../components/ProductDetails";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth.js";
import { logout } from "../../store/authSlice.js";
import { CartContext } from "pages/Cart/CartContext";
import { WishlistContext } from "../Wishlist/WishlistContext.jsx";

export default function Wishlist() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { addToCart } = useContext(CartContext);
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);


    const logoutHandler = () => {
        authService.logout().then(() => {
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
            <div className="flex w-full flex-col gap-10 bg-white-a700">
                <Header />
                <div className="flex flex-col gap-24 md:gap-[72px] sm:gap-12">
                    <div className="flex flex-col gap-10">
                        <div className="flex justify-center">
                            <div className="container-xs flex self-end md:px-5">
                                <Heading as="h1" className="text-[48px] font-medium md:text-[44px] sm:text-[38px]">
                                    Settings
                                </Heading>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="container-xs flex items-start gap-6 md:flex-col md:px-5">
                                <div className="w-[24%] md:w-full">
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
                                            <div className="flex items-center gap-2 rounded-lg bg-white-a700 px-4 py-3">
                                                <Img src="images/img_my_order.svg" alt="Thumbs Up Icon" className="h-[20px]" />
                                                <Text as="p" className="text-[16px] font-normal">
                                                    My order
                                                </Text>
                                            </div>
                                        </Link>
                                        <Link to="/wishlist">
                                            <div className="flex items-center gap-2 rounded-lg bg-yellow-100 px-4 py-3">
                                                <Button size="xs" shape="square" className="w-[20px] border-none">
                                                    <Img src="images/img_favorite_gray_600_01.svg" />
                                                </Button>
                                                <Text as="p" className="text-[16px] font-normal !text-lime-900">
                                                    Wish list
                                                </Text>
                                            </div>
                                        </Link>
                                        <Link to="" onClick={logoutHandler}>
                                            <div className="flex items-center gap-2 rounded-lg bg-white-a700 px-4 py-3">
                                                <Img
                                                    src="images/img_thumbs_up_gray_600_01_3.svg"
                                                    alt="Logout Icon"
                                                    className="h-[20px]"
                                                />
                                                <Text as="p" className="text-[16px] font-normal">
                                                    Log out
                                                </Text>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="mr-[196px] flex flex-1 flex-col gap-4 md:mr-0 md:self-stretch">
                                    {(wishlist?.length ?? 0) > 0 ? (
                                        wishlist.map((product) => (
                                            <ProductDetails
                                                key={product.id}
                                                productName={product.name}
                                                productImage={product.image_path}
                                                productColor={`Color: ${product?.productColor || "Not specified"}`}
                                                currentPrice={`$${product.discount_price}`}
                                                originalPrice={`$${product.price}`}
                                                onAddToCart={() => addToCart(product)}
                                                onRemove={() => removeFromWishlist(product?.id || product?._id)}
                                            />
                                        ))
                                    ) : (
                                        <>
                                            <Text size="5xl" as="p" className="text-center text-[30px] font-semibold !text-black-900">
                                                Your Wishlist is Empty.
                                            </Text>
                                            <div className="flex justify-center">
                                                <Button
                                                    size="5xl"
                                                    variant="fill"
                                                    shape="round"
                                                    className="rounded-[24px] px-[34px] font-semibold sm:px-5"
                                                    onClick={() => navigate("/allproducts")}
                                                >
                                                    Start Shopping
                                                </Button>
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
