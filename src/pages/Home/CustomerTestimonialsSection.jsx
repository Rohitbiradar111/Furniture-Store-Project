import React, { useState, useRef } from "react";
import { Button, Slider } from "../../components";
import ReactStars from "react-rating-stars-component";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function CustomerTestimonialsSection() {
  const [sliderState, setSliderState] = useState(0);
  const sliderRef = useRef(null);

  const feedbacks = [
    {
      rating: 5,
      review:
        "Absolutely delighted with my recent furniture purchase! The sleek design and sturdy build perfectly complement my space.",
      customerName: "Rohit Biradar",
    },
    {
      rating: 4,
      review:
        "Loved the quality of the furniture I ordered. The delivery was on time and the customer service was good.",
      customerName: "Sudhir Chaudhary",
    },
    {
      rating: 5,
      review:
        "The furniture I ordered was exactly as shown on the website. The quality is top-notch and the design is very modern.",
      customerName: "Rajesh Kumar",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container flex flex-col items-center gap-8 md:px-5 relative">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="text-[38px] font-medium md:text-[44px]">
              Our Strength
            </h2>
            <p className="text-[16px] md:text-[20px] font-normal text-center">
              See what our customers have to say about their experience
            </p>
          </div>
          <div className="flex flex-col items-center gap-8 self-stretch">
            <div className="mx-auto flex w-full gap-6 self-stretch md:mx-0 md:flex-col">
              <Slider
                autoPlay
                autoPlayInterval={2000}
                responsive={{
                  0: { items: 1 },
                  551: { items: 1 },
                  1051: { items: 3 },
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
                      <div className="flex flex-col gap-6 border-2 border-solid border-gray-300 rounded-3xl md:p-6 p-5">
                        <div className="flex flex-col items-start justify-center gap-2">
                          <ReactStars
                            edit={false}
                            classNames="flex gap-2.5"
                            count={feedback.rating}
                            isHalf={false}
                            color="#ff9213"
                            activeColor="#ff9213"
                            size={30}
                          />
                          <p className="w-full text-[16px] leading-[150%]">
                            {feedback.review}
                          </p>
                          <p className="text-[16px]">{feedback.customerName}</p>
                        </div>
                        <div className="flex gap-6">
                          <img
                            src="images/img_rectangle_10.png"
                            alt="Main Image"
                            className="h-[264px] w-[50%] object-contain"
                            loading="lazy"
                            draggable="false"
                          />
                          <div className="flex flex-1 flex-col gap-6">
                            <img
                              src="images/img_rectangle_11.png"
                              alt="Thumbnail One"
                              className="h-[120px] object-cover"
                              loading="lazy"
                              draggable="false"
                            />
                            <img
                              src="images/img_rectangle_12.png"
                              alt="Thumbnail Two"
                              className="h-[120px] object-cover"
                              loading="lazy"
                              draggable="false"
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
                onClick={() => sliderRef?.current?.slidePrev()}
                className="w-[48px] rounded-[24px] border border-solid border-gray-300 px-3.5"
              >
                <FaAngleLeft className="scale-150" />
              </Button>
              <Button
                onClick={() => sliderRef?.current?.slideNext()}
                className="w-[48px] rounded-[24px] border border-solid border-gray-300 px-3.5"
              >
                <FaAngleRight className="scale-150" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
