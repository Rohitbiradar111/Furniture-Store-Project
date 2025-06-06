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
        <title>Home - FurniStore</title>
        <meta
          name="description"
          content="Shop FurniStore for high-quality furniture and home decor. Enjoy discounts on our summer collection, free shipping, and dedicated support. Transform your space today!"
        />
      </Helmet>
      <div className="flex w-full flex-col gap-16 bg-white-a700 md:gap-12 sm:gap-8">
        <div className="flex flex-col gap-8">
          <Header />

          <HomeShowcaseSection />

          <FeaturesSection />
        </div>

        <ShopBySection />

        <div className="relative h-[400px] sm:h-[300px] content-center">
          <div className="flex w-full">
            <Slider
              autoPlay
              autoPlayInterval={2000}
              responsive={{
                0: { items: 1 },
                551: { items: 1 },
                1051: { items: 1 },
              }}
              disableDotsControls
              activeIndex={sliderState}
              onSlideChanged={(e) => setSliderState(e?.item)}
              ref={sliderRef}
              items={[...Array(3)].map(() => (
                <React.Fragment key={Math.random()}>
                  <div className="flex h-[400px] sm:h-[300px] items-center bg-white-a700 bg-[url(/images/img_frame_125.png)] bg-cover bg-no-repeat py-12 sm:py-6">
                    <div className="container mx-auto flex justify-center px-4 sm:px-2">
                      <div className="w-full max-w-3xl">
                        <div className="flex flex-col items-start gap-6">
                          <div className="flex flex-col items-start gap-1">
                            <Text
                              size="text5xl"
                              as="p"
                              className="text-3xl font-light text-white-a700 sm:text-2xl"
                            >
                              Summer Collection
                            </Text>
                            <Heading
                              size="headingxl"
                              as="h2"
                              className="text-5xl font-bold text-white-a700 md:text-4xl sm:text-3xl"
                            >
                              FLAT 50% off
                            </Heading>
                          </div>
                          <Button
                            color="black_900"
                            size="5xl"
                            variant="fill"
                            shape="round"
                            className="w-50 sm:w-auto min-w-[200px] rounded-xl px-6 py-3 font-semibold text-base sm:text-sm hover:bg-gray-800"
                            onClick={() => navigate("/allproducts")}
                          >
                            Buy Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))}
            />
          </div>
          <div className="container mx-auto absolute bottom-0 left-0 right-0 top-0 my-auto flex h-max justify-between px-4 sm:px-2">
            <Button
              color="black_900_66"
              size="2xl"
              variant="fill"
              shape="round"
              onClick={() => sliderRef?.current?.slidePrev()}
              className="w-12 rounded-xl px-3 sm:w-10"
            >
              <Img
                src="images/img_refresh_white_a700.svg"
                className="h-6 sm:h-5"
              />
            </Button>
            <Button
              color="black_900_66"
              size="2xl"
              variant="fill"
              shape="round"
              onClick={() => sliderRef?.current?.slideNext()}
              className="w-12 rounded-xl px-3 sm:w-10"
            >
              <Img
                src="images/img_arrow_right_white_a700.svg"
                className="h-6 sm:h-5"
              />
            </Button>
          </div>
        </div>
        <NewArrivalsSection />
        <InspirationSection />
        <FurniStorePromotionSection />
        <CustomerTestimonialsSection />
        <Footer />
      </div>
    </>
  );
}
