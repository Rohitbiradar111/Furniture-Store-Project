import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Heading, Text, Slider } from "../../components";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import CustomerTestimonialsSection from "./CustomerTestimonialsSection";
import FeaturesSection from "./FeaturesSection";
import HomeShowcaseSection from "./HomeShowcaseSection";
import InspirationSection from "./InspirationSection";
import NewArrivalsSection from "./NewArrivalsSection";
import ShopBySection from "./ShopBySection";
import FurniStorePromotionSection from "./FurniStorePromotionSection";
import { useNavigate } from "react-router-dom";

export default function Home() {

    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>
                    Home - FurniStore
                </title>
                <meta
                    name="description"
                    content="Shop FurniStore for high-quality furniture and home decor. Enjoy discounts on our summer collection, free shipping, and dedicated support. Transform your space today!"
                />
            </Helmet>
            <div className="flex w-full flex-col gap-[94px] bg-white-a700 
            md:gap-[70px] sm:gap-[47px]">
                <div className="flex flex-col gap-8">

                    <Header />

                    <HomeShowcaseSection />

                    <FeaturesSection />

                </div>

                <ShopBySection />

                <div className="relative h-[448px] content-center md:h-auto">
                    <div className="flex w-full">
                        <Slider
                            autoPlay
                            autoPlayInterval={2000}
                            responsive={{
                                0: { items: 1 },
                                551: { items: 1 },
                                1051: { items: 1 }
                            }}
                            disableDotsControls
                            activeIndex={sliderState}
                            onSlideChanged={(e) => {
                                setSliderState(e?.item);
                            }}
                            ref={sliderRef}
                            items={[...Array(3)].map(() => (
                                <React.Fragment key={Math.random()}>
                                    <div className="flex h-[448px] items-center bg-white-a700 bg-[url(/images/img_frame_125.png)] bg-cover bg-no-repeat 
                                    py-[114px] md:h-auto md:py-5">
                                        <div className="container-xs flex justify-center md:px-5">
                                            <div className="w-full">
                                                <div className="flex justify-center px-14 md:px-5">
                                                    <div className="flex w-[86%] flex-col items-start gap-10 md:w-full">
                                                        <div className="flex flex-col items-start 
                                                        gap-0.5 self-stretch">
                                                            <Text
                                                                size="text5xl"
                                                                as="p"
                                                                className="text-[44px] font-light !text-white-a700 md:text-[40px] sm:text-[34px]">
                                                                Summer Collection
                                                            </Text>
                                                            <Heading
                                                                size="headingxl"
                                                                as="h2"
                                                                className="
                                                                text-[60px] font-bold 
                                                                !text-white-a700 md:text-[52px] sm:text-[46px]"
                                                            >
                                                                FLAT 50% off
                                                            </Heading>
                                                        </div>
                                                        <Button
                                                            color="black_900"
                                                            size="5xl"
                                                            variant="fill"
                                                            shape="round"
                                                            className="
                                                            min-w-[392px] 
                                                            rounded-[24px] 
                                                            px-[34px] font-semibold sm:px-5"
                                                            onClick={() => navigate("/allproducts")}>
                                                            Buy Now
                                                        </Button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ))}
                        />
                    </div>
                    <div className="container-xs absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max justify-between gap-5 md:px-5">
                        <Button
                            color="black_900_66"
                            size="4xl"
                            variant="fill"
                            shape="round"
                            onClick={() => {
                                sliderRef?.current?.slidePrev();
                            }}
                            className="w-[48px] rounded-[24px] px-3">
                            <Img src="images/img_refresh_white_a700.svg" />
                        </Button>
                        <Button
                            color="black_900_66"
                            size="4xl"
                            variant="fill"
                            shape="round"
                            onClick={() => {
                                sliderRef?.current?.slideNext();
                            }}
                            className="w-[48px] rounded-[24px] px-3">
                            <Img src="images/img_arrow_right_white_a700.svg" />
                        </Button>
                    </div>
                </div >

                < NewArrivalsSection />

                < InspirationSection />

                < FurniStorePromotionSection />

                < CustomerTestimonialsSection />

                <Footer />
            </div >
        </>
    );
}