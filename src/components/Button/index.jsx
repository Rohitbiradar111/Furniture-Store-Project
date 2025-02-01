import React from "react";
import PropTypes from "prop-types";

const shapes = {
    circle: "rounded-[50%]",
    square: "rounded-[0px]",
    round: "rounded-[24px]",
};

const variants = {
    outline: {
        black_900: "border-black-900 border border-solid text-black-900",
        lime_900: "border-lime-900 border border-solid text-lime-900",
        gray_200_01: "border-gray-200_01 border border-solid text-gray-600_01"
    },
    fill: {
        black_900_01: "bg-black-900_01",
        white_A700: "bg-white-a700",
        black_900: "bg-black-900 text-white-a700",
        black_900_66: "bg-black-900_66",
        gray_200_03: "bg-gray-200_03",
        lime_900: "bg-lime-900 text-orange-50",
        black_900_4c: "bg-black-900_4c text-white-a700"
    },
};

const sizes = {
    xs: "h-[20px]",
    sm: "h-[24px] px-1.5",
    md: "h-[26px] px-1.5 text-[14px]",
    lg: "h-[30px] px-4 text-[12px]",
    xl: "h-[36px] px-2",
    "2xl": "h-[40px] px-2.5",
    "3xl": "h-[40px] px-4 text-[15px]",
    "4xl": "h-[48px] px-3.5",
    "5xl": "h-[48px] px-[34px] text-[14px]",
    "6xl": "h-[52px] px-[34px] text-[16px]",
    "7xl": "h-[56px] px-3",
};

const Button = ({
    children,
    className = "",
    leftIcon,
    rightIcon,
    shape,
    variant = "outline",
    size = "xl",
    color = "lime_900",
    ...restProps
}) => {
    return (
        <button
            className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
            {...restProps}
        >
            {!!leftIcon && leftIcon}
            {children}
            {!!rightIcon && rightIcon}
        </button >
    );
};

Button.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    shape: PropTypes.oneOf(["circle", "square", "round"]),
    size: PropTypes.oneOf(["3xl", "md", "2xl", "6xl", "xs", "lg", "7xl", "4xl", "sm", "5xl", "xl"]),
    variant: PropTypes.oneOf(["outline", "fill"]),
    color: PropTypes.oneOf([
        "black_900",
        "lime_900",
        "gray_200_01",
        "black_900_01",
        "white_A700",
        "black_900_66",
        "gray_200_03",
        "black_900_4c",
    ])
};

export { Button };