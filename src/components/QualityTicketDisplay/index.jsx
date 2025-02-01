import React from "react";
import { Text, Img } from "./..";

export default function QualityTicketDisplay({
    ticketImageSrc = "images/defaultNoData.png",
    titleText = "High quality",
    descriptionText = "crafted from top materials",
    ...props
}) {
    return (
        <div {...props} className={`${props.className} flex items-center gap-3`}>
            <Img src={ticketImageSrc} alt="Ticket Image" className="h-[110px]" />
            <div className="flex flex-1 flex-col items-start justify-center 
            gap-1.5">
                <Text size="textxl" as="p" className="text-[18px] font-medium !text-black-900">
                    {titleText}
                </Text>
                <Text as="p" className="text-[16px] font-normal">
                    {descriptionText}
                </Text>
            </div>
        </div>
    );
}