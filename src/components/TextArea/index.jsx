import React from "react";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[16px]",
};

const variants = {
    tarFillGray20003: "bg-gray-200_03",
};

const sizes = {
    xs: "h-[164px] p-3.5 text-[14px]",
};

const TextArea = React.forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            shape,
            size = "xs",
            variant = "tarFillGray20003",
            onChange,
            ...restProps
        },
        ref,
    ) => {
        const handleChange = (e) => {
            if (onChange) onChange(e?.target?.value);
        };
        return (
            <textarea
                ref={ref}
                className={`
                    ${className} 
                    ${shape && shapes[shape]} 
                    ${size && sizes[size]} 
                    ${variant && variants[variant]}`
                }
                name={name}
                onChange={handleChange}
                placeholder={placeholder}
                {...restProps}
            />
        );
    },
);

TextArea.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["tarFillGray20003"]),
};

export { TextArea };