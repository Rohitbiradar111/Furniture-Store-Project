import React, { Suspense } from "react";
import QualityTicketDisplay from "../../components/QualityTicketDisplay/index.jsx";

const qualityFeaturesList = [
    {
        ticketImageSrc: "images/img_1.png",
        titleText: "High quality",
        descriptionText: "crafted from top materials"
    },
    {
        ticketImageSrc: "images/img_2.png",
        titleText: "High quality",
        descriptionText: "crafted from top materials"
    },
    {
        ticketImageSrc: "images/img_3.png",
        titleText: "High quality",
        descriptionText: "crafted from top materials"
    },
    {
        ticketImageSrc: "images/img_4.png",
        titleText: "High quality",
        descriptionText: "crafted from top materials"
    }
];

export default function FeaturesSection() {
    return (
        <>
            <div>
                <div className="flex gap-[50px] bg-yellow-50 py-8 pl-[100px] pr-20 md:flex-col md:px-5 sm:p-5">
                    <Suspense fallback={<div>Loading feed...</div>}>
                        {
                            qualityFeaturesList.map((d, index) => (
                                <QualityTicketDisplay
                                    {...d}
                                    key={"listhigh" + index}
                                    className="w-[24%] md:w-full"
                                />
                            ))
                        }
                    </Suspense>
                </div>
            </div>
        </>
    );
}