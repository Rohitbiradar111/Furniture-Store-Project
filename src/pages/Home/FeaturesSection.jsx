import React from "react";

const qualityFeaturesList = [
  {
    productImage: "images/img_1.png",
    title: "Premium Quality",
    description: "Built to last",
  },
  {
    productImage: "images/img_2.png",
    title: "Eco-Friendly",
    description: "Sustainable materials",
  },
  {
    productImage: "images/img_3.png",
    title: "Modern Design",
    description: "Stylish Finish",
  },
  {
    productImage: "images/img_4.png",
    title: "Trusted Comfort",
    description: "Everyday ease",
  },
];

export default function FeaturesSection() {
  return (
    <>
      <div>
        <div className="flex justify-center items-center gap-[50px] bg-yellow-50 py-8 md:pl-[100px] md:pr-20 flex-col px-5 md:p-5 md:flex-row">
          {qualityFeaturesList.map((list, index) => (
            <div key={index} className="flex items-center gap-3">
              <img
                src={list.productImage}
                alt="Ticket Image"
                className="h-[110px]"
                loading="lazy"
                draggable="false"
              />
              <div className="flex flex-1 flex-col items-start justify-center gap-1.5">
                <p className="text-[18px] font-medium">{list.title}</p>
                <p className="text-[16px] font-normal">{list.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
