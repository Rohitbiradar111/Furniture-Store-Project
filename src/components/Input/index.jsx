import React from "react";

const Input = React.forwardRef(
  (
    {
      type = "text",
      name = "",
      placeholder = "",
      className = "",
      prefix,
      suffix,
      ...rest
    },
    ref
  ) => {
    return (
      <div
        className={`flex items-center w-full rounded-3xl border border-gray-300 px-3 py-2 ${className}`}
      >
        {prefix && <span className="">{prefix}</span>}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          className="border-none outline-none bg-transparent w-full text-base text-black text-left focus:outline-none focus:border-none focus:ring-0"
          {...rest}
        />
        {suffix && <span className="">{suffix}</span>}
      </div>
    );
  }
);

export default Input;
