import React from "react";
import Select from "react-select";

export default function SelectBox({ options = [], className = "", ...rest }) {
  return (
    <Select
      options={options}
      className={`flex md:px-8 md:py-5 px-5 py-2 ${className}`}
      {...rest}
    />
  );
}
