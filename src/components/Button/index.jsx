import React from "react";

const Button = ({ children, className = "", leftIcon, rightIcon, ...rest }) => {
  return (
    <button
      className={`flex items-center justify-center gap-2 rounded-3xl px-4 py-2  text-base font-medium  ${className}`}
      {...rest}
    >
      {leftIcon && <span>{leftIcon}</span>}
      {children}
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  );
};

export default Button;
