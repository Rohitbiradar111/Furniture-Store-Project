import React from "react";

const images = [
  { image: "images/img_rectangle.png" },
  { image: "images/img_circle.png" },
  { image: "images/img_curve_left.png" },
  { image: "images/img_curve_right.png" },
  { image: "images/img_rectangle_168x224.png" },
  { image: "images/img_curve_left_168x224.png" },
  { image: "images/img_circle_168x168.png" },
  { image: "images/img_curve_right_168x224.png" },
  { image: "images/img_circle_1.png" },
  { image: "images/img_rectangle_1.png" },
  { image: "images/img_curve_left_1.png" },
];

export default function FurniStorePromotionSection() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center gap-8 bg-yellow-50 md:py-[94px] py-5">
          <div className="container flex flex-col items-center md:px-14 px-5">
            <div className="flex flex-col items-center gap-2">
              <h2 className="text-[38px] font-medium md:text-[44px]">
                #FurniStore
              </h2>
              <p className="text-[16px] md:text-[20px] font-normal">
                Tag us on social media to get discount
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-4 justify-center gap-[52px] gap-y-4 self-stretch md:px-[236px] grid-cols-2 px-5">
            {images.map((img, index) => (
              <img
                key={index}
                src={img.image}
                alt="Image"
                className="h-[168px] w-full object-cover md:h-auto"
                loading="lazy"
                draggable="false"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
