import React from "react";

const sizes = {
    textxs: "text-[12px] font-normal",
    texts: "text-[14px] font-normal",
    textlg: "text-[16px] font-normal sm:text-[13px]",
    textxl: "text-[18px] font-normal sm:text-[15px]",
    text5xl: "text-[44px] font-light md:text-[40px] sm:text-[37px]"
};

const Text = ({
    children, className = "", as, size = "textlg", ...restProps }) => {
    const Component = as || "p";
    return (
        <Component
            className={`text-gray-600_01 ${className} ${sizes[size]} `}
            {...restProps}
        >
            {children}
        </Component >
    );
};

export { Text };