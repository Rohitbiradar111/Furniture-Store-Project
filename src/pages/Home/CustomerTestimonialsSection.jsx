import React from "react";
import { Button, Img, Text, RatingBar, Slider, Heading } from "../../components";

export default function CustomerTestimonialsSection() {

    const [sliderState, setSliderState] = React.useState(0);
    const sliderRef = React.useRef(null);

    const feedbacks = [
        {
            rating: 5,
            review: "Absolutely delighted with my recent furniture purchase! The sleek design and sturdy build perfectly complement my space.",
            customer: "Rohit Biradar"
        },
        {
            rating: 4,
            review: "Loved the quality of the furniture I ordered. The delivery was prompt and the customer service was excellent.",
            customer: "Sudhir Chaudhary"
        },
        {
            rating: 5,
            review: "The furniture I ordered was exactly as shown on the website. The quality is top-notch and the design is very modern.",
            customer: "Rajesh Kumar"
        }
    ];

    return (
        <>
            <div className="flex flex-col items-center">
                <div className="container-xs flex flex-col items-center gap-8 md:px-5 relative">
                    <div className="flex flex-col items-center justify-center gap-0.5">
                        <Heading as="h2" className="text-[48px] font-medium md:text-[44px] sm:text-[38px]">
                            Our Strength
                        </Heading>
                        <Text as="p" className="text-[16px] font-normal">
                            See what our satisfied customers have to say about their experience
                        </Text>
                    </div>
                    <div className="flex flex-col items-center gap-8 self-stretch">
                        <div className="mx-auto flex w-full gap-6 self-stretch md:mx-0 md:flex-col">
                            <Slider
                                autoPlay
                                autoPlayInterval={2000}
                                responsive={{
                                    0: { items: 1 },
                                    551: { items: 1 },
                                    1051: { items: 3 }
                                }}
                                disableDotsControls
                                activeIndex={sliderState}
                                onSlideChanged={(e) => {
                                    setSliderState(e?.item);
                                }}
                                ref={sliderRef}
                                items={feedbacks.map((feedback, index) => (
                                    <React.Fragment key={index}>
                                        <div className="px-3">
                                            <div className="flex flex-col gap-6 border-2 border-solid border-gray-200_01 bg-white-a700 p-6 sm:p-5">
                                                <div className="flex flex-col items-start justify-center gap-2">
                                                    <RatingBar
                                                        starCount={feedback.rating}
                                                        isEditable={false}
                                                        color="#ff9213"
                                                        activeColor="#ff9213"
                                                        size={30}
                                                        className="flex gap-2.5"
                                                    />
                                                    <Text
                                                        as="p"
                                                        className="w-full text-[16px] font-normal leading-[150%] !text-black-900"
                                                    >
                                                        {feedback.review}
                                                    </Text>
                                                    <Text as="p" className="text-[16px] font-normal"
                                                    >
                                                        {feedback.customer}
                                                    </Text>
                                                </div>
                                                <div className="flex gap-6">
                                                    <Img
                                                        src="images/img_rectangle_10.png"
                                                        alt="Main Image"
                                                        className="h-[264px] w-[50%] object-contain"
                                                    />
                                                    <div className="flex flex-1 flex-col gap-6">
                                                        <Img
                                                            src="images/img_rectangle_11.png"
                                                            alt="Thumbnail One"
                                                            className="h-[120px] object-cover"
                                                        />
                                                        <Img
                                                            src="images/img_rectangle_12.png"
                                                            alt="Thumbnail Two"
                                                            className="h-[120px] object-cover"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
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
                                onClick={() => sliderRef?.current?.slidePrev()}
                                className="w-[48px] rounded-[24px] border border-solid border-gray-200_01 px-3.5">
                                <Img src="images/img_arrow_left_gray_600_01.svg" />
                            </Button>
                            <Button
                                color="white_A700"
                                size="4xl"
                                variant="fill"
                                shape="round"
                                onClick={() => sliderRef?.current?.slideNext()}
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
