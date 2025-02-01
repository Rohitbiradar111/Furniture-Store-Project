import React, { useState, useEffect, useRef } from "react";
import { Button, Img, Heading, Slider, Text } from "../../components";
import { useNavigate } from "react-router-dom";

export default function ShopBySection() {
    const [sliderState, setSliderState] = useState(0);
    const sliderRef = useRef(null);
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const categories = ["sofa", "chair", "table", "desk", "wardrobe"];
                let allProducts = [];

                for (let category of categories) {
                    const response = await fetch(
                        `https://furniture-api.fly.dev/v1/products?category=${category}&limit=2`
                    );
                    const data = await response.json();

                    if (data.success) {
                        allProducts = [...allProducts, ...data.data];
                    }
                }

                setProducts(allProducts);
            } catch (err) {
                console.error("Error fetching product data:", err);
                setError("An error occurred while fetching products.");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <Text size="text5xl" className="flex justify-center">Products are on the way...</Text>;
    }

    if (error) {
        return <Text size="text5xl" className="flex justify-center">{error}</Text>;
    }

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="container-xs flex flex-col items-center gap-8 md:px-5">
                    <div className="flex flex-col items-center justify-center gap-0.5">
                        <Heading as="h2" className="text-[48px] font-medium md:text-[44px] sm:text-[38px]">
                            Categories
                        </Heading>
                        <Text as="p" className="text-[16px] font-normal">
                            Crafted with love specially for you
                        </Text>
                    </div>
                    <div className="flex justify-end self-stretch md:flex-col">
                        <Button
                            size="lg"
                            className="min-w-[96px] gap-2 rounded-[14px] !border px-[15px] font-medium"
                            rightIcon={
                                <Img
                                    src="images/img_user_lime_900.svg"
                                    alt="User"
                                    className="h-[12px] w-[12px] object-contain"
                                />
                            }
                            onClick={() => navigate("/allproducts")}
                        >
                            View all
                        </Button>
                    </div>
                    <div className="flex flex-col items-center gap-7 self-stretch">
                        <div className="self-stretch">
                            <div className="mx-auto flex w-full gap-6 md:mx-0 md:flex-col">
                                <Slider
                                    autoPlay
                                    autoPlayInterval={2000}
                                    responsive={{
                                        0: { items: 1 },
                                        551: { items: 1 },
                                        1051: { items: 4 }
                                    }}
                                    disableDotsControls
                                    activeIndex={sliderState}
                                    onSlideChanged={(e) => {
                                        setSliderState(e?.item);
                                    }}
                                    ref={sliderRef}
                                    items={products.map((product) => (
                                        <React.Fragment key={product.id}>
                                            <div className="px-3">
                                                <div className="flex flex-col items-center justify-center gap-3.5">
                                                    <Img
                                                        src={product.image_path || "Product Image"}
                                                        alt={product.name}
                                                        className="h-[270px] w-full rounded-[16px] object-cover md:h-auto"
                                                    />
                                                    <Heading
                                                        size="text2xl"
                                                        as="h3"
                                                        className="text-[12px] font-medium text-center !text-black-900_01 md:text-[26px] sm:text-[24px]"
                                                    >
                                                        {product.name}
                                                    </Heading>
                                                    <Heading size="headings" as="h6" className="text-[16px] font-semibold !text-black-900_01">
                                                        ${product.discount_price}
                                                    </Heading>
                                                    <Text size="texts" as="p" className="text-[14px] font-normal line-through">
                                                        ${product.price}
                                                    </Text>
                                                </div>
                                            </div>
                                        </React.Fragment>
                                    ))}
                                />
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Button
                                color="white_A700"
                                size="4xl"
                                variant="fill"
                                shape="round"
                                onClick={() => {
                                    sliderRef?.current?.slidePrev();
                                }}
                                className="w-[48px] rounded-[24px] border border-solid border-gray-200_01 px-3.5">
                                <Img src="images/img_arrow_left_gray_600_01.svg" />
                            </Button>
                            <Button
                                color="white_A700"
                                size="4xl"
                                variant="fill"
                                shape="round"
                                onClick={() => {
                                    sliderRef?.current?.slideNext();
                                }}
                                className="w-[48px] rounded-[24px] border border-solid border-gray-200_01 px-3.5">
                                <Img
                                    src="images/img_arrow_right_gray_600_01.svg"
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
