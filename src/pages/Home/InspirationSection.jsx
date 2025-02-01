import React from "react";
import { Button, Img, Heading, Text, Slider } from "../../components";
import { useNavigate } from "react-router-dom";

export default function InspirationSection() {

    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);
    const navigate = useNavigate();

    return (
        <>
            <div>
                <div className="flex justify-center bg-yellow-50 py-24 md:py-5">
                    <div className="container-xs flex items-center justify-center gap-10 md:flex-col md:px-5">
                        <div className="flex w-[34%] flex-col gap-16 md:w-full sm:gap-8">
                            <div className="flex flex-col gap-2">
                                <Heading as="h2" className="text-[48px] font-medium leading-[64px] md:text-[44px] 
                                sm:text-[38px]">
                                    Inspiration to kickstart your journey.
                                </Heading>
                                <Text as="p" className="text-[16px] font-normal leading-6">
                                    Our designer has crafted numerous stunning room prototypes to spark your imagination.
                                </Text>
                            </div>
                            <Button
                                size="5xl"
                                variant="fill"
                                shape="round"
                                className="self-stretch rounded-[24px] px-[34px] font-semibold sm:px-5"
                                onClick={() => navigate("/allproducts")}
                            >
                                Explore more
                            </Button>
                        </div>
                        <div className="flex w-[63%] flex-col items-center gap-4 md:w-full">
                            <div className="mx-auto flex w-full self-stretch">
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
                                            <div className="flex items-start gap-6 md:flex-col">
                                                <div className="flex-1 self-center md:self-stretch">
                                                    <div>
                                                        <Img
                                                            src="images/img_rectangle_24.png"
                                                            alt="Room Image"
                                                            className="h-[494px] w-full rounded-[20px] object-cover md:h-auto"
                                                        />
                                                        <div className="relative mx-4 mt-[-64px] flex flex-col items-start justify-center gap-2.5 rounded-[16px] bg-lime-900 px-4 py-3 md:mx-0">
                                                            <div className="flex items-center self-stretch">
                                                                <Text as="p" className="text-[16px] font-normal !text-orange-50">
                                                                    01
                                                                </Text>
                                                                <div className="ml-2 h-[16px] w-px bg-orange-50" />
                                                                <Text
                                                                    as="p"
                                                                    className="ml-1.5 self-end text-[16px] font-normal !text-orange-50">
                                                                    Study Room
                                                                </Text>
                                                            </div>
                                                            <Heading
                                                                size="text3xl"
                                                                as="h3"
                                                                className="text-[24px] font-normal text-orange-50 md:text-[22px]">
                                                                Stay Focused
                                                            </Heading>
                                                        </div>
                                                    </div>
                                                </div>
                                                <Img
                                                    src="images/img_rectangle_25.png"
                                                    alt="Secondary Image"
                                                    className="h-[494px] w-[50%] rounded-[20px] object-contain md:w-full"
                                                />
                                            </div>
                                        </React.Fragment>
                                    ))}
                                />
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
                                    className="w-[48px] rounded-[24px] px-3.5"
                                >
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
                                    className="w-[48px] rounded-[24px] px-3.5">
                                    <Img src="images/img_arrow_right_gray_600_01.svg" />
                                </Button>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    );
}