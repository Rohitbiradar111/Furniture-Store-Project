import React from "react";
import PropTypes from "prop-types";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[24px]",
};

const variants = {
    fill: {
        white_A700: "bg-white-a700 text-gray-500",
        gray_200_03: "bg-gray-200_03 text-gray-500",
    },
};

const sizes = {
    xs: "h-[16px] px-3 text-[14px]",
    sm: "h-[36px] px-2.5 text-[12px]",
    md: "h-[48px] px-3.5 text-[14px]",
};

const Input = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            type = "text",
            label = "",
            prefix,
            suffix,
            onChange,
            shape,
            variant = "fill",
            size = "md",
            color = "gray_200_03",
            ...restProps
        },
        ref,
    ) => {
        return (
            <label
                className={`${className} flex items-center justify-center cursor-text ${shape && shapes[shape]} ${variant && (variants[variant]?.[color] || variants[variant])} ${size && sizes[size]}`}
            >
                {!!label && label}
                {!!prefix && prefix}
                <input ref={ref} type={type} name={name} placeholder={placeholder} onChange={onChange} {...restProps} />
                {!!suffix && suffix}
            </label >
        );
    },
);

Input.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    prefix: PropTypes.node,
    suffix: PropTypes.node,
    shape: PropTypes.oneOf(["square", "round"]),
    size: PropTypes.oneOf(["xs", "sm", "md"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["white_A700", "gray_200_03"])
};

export { Input };