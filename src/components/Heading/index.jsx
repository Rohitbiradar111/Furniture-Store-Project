import React from "react";

const sizes = {
    textmd: "text-[15px] font-medium",
    text2xl: "text-[20px] font-medium sm:text-[17px]",
    text3xl: "text-[24px] font-medium md:text-[22px] sm:text-[20px]",
    text4xl: "text-[28px] font-medium md:text-[26px] sm:text-[23px]",
    text6xl: "text-[48px] font-medium md:text-[44px] sm:text-[40px]",
    text7xl: "text-[64px] font-medium md:text-[48px]",
    headingxs: "text-[14px] font-semibold",
    headings: "text-[16px] font-semibold sm:text-[13px]",
    headingmd: "text-[18px] font-semibold sm:text-[15px]",
    headinglg: "text-[20px] font-semibold sm:text-[17px]",
    headingxl: "text-[60px] font-bold md:text-[52px] sm:text-[51px]"
};

const Heading = ({ children, className = "", size = "text6xl", as, ...restProps }) => {
    const Component = as || "h6";

    return (
        <Component
            className={`text-black-900 ${className} ${sizes[size]}`}
            {...restProps}
        >
            {children}
        </Component>
    );
};

export { Heading };