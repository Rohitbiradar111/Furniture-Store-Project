import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

const shapes = {
    round: "rounded-[24px]",
};

const variants = {
    fill: {
        gray_200_03: "bg-gray-200_03 text-black-900",
    },
};

const sizes = {
    xs: "h-[48px] px-3.5 text-[14px]",
};

const SelectBox = React.forwardRef(
    (
        {
            children,
            className = "",
            options = [],
            isSearchable = false,
            isMulti = false,
            indicator,
            shape,
            variant = "fill",
            size = "xs",
            color = "gray_200_03",
            ...restProps
        },
        ref,
    ) => {
        return (
            <>
                <Select
                    ref={ref}
                    options={options}
                    className={`${className} flex ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
                    isSearchable={isSearchable}
                    isMulti={isMulti}
                    components={{
                        IndicatorSeparator: () => null,
                        ...(indicator && { DropdownIndicator: () => indicator }),
                    }}
                    styles={{
                        indicatorsContainer: (provided) => ({
                            ...provided,
                            padding: undefined,
                            flexShrink: undefined,
                            width: "max-content",
                            "& > div": { padding: 0 },
                        }),
                        container: (provided) => ({
                            ...provided,
                            zIndex: 0,
                            alignItems: "center",
                        }),
                        control: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                            border: "0 !important",
                            boxShadow: "none !important",
                            minHeight: "auto",
                            width: "100%",
                            flexWrap: undefined,
                            "&:hover": {
                                border: "0 !important",
                            },
                        }),
                        input: (provided) => ({
                            ...provided,
                            color: "inherit",
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            display: "flex",
                            minWidth: "max-content",
                            width: "100%",
                            backgroundColor: state.isSelected ? "#774000" : "transparent",
                            color: state.isSelected ? "#ffecd5" : "inherit",
                            "&:hover": {
                                backgroundColor: "#774000",
                                color: "#ffecd5"
                            }
                        }),
                        singleValue: (provided) => ({
                            ...provided,
                            display: "flex",
                            marginLeft: undefined,
                            marginRight: undefined,
                        }),
                        valueContainer: (provided) => ({
                            ...provided,
                            padding: 0,
                            display: "flex",
                            flexWrap: undefined,
                        }),
                        placeholder: (provided) => ({
                            ...provided,
                            margin: 0,
                        }),
                        menuPortal: (base) => ({ ...base, zIndex: 999999 }),
                        menu: (base) => ({ ...base, minWidth: "max-content", width: "max-content" }),
                    }}
                    menuPortalTarget={document.body}
                    closeMenuOnScroll={(event) => {
                        return event.target.id === "scrollContainer";
                    }}
                    {...restProps}
                />
                {children}
            </>
        );
    },
);

SelectBox.propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    isSearchable: PropTypes.bool,
    isMulti: PropTypes.bool,
    onChange: PropTypes.func,
    value: PropTypes.string,
    indicator: PropTypes.node,
    shape: PropTypes.oneOf(["round"]),
    size: PropTypes.oneOf(["xs"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["gray_200_03"])
};

export { SelectBox };