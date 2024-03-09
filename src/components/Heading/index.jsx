import React from "react";

const sizes = {
  s: "text-sm font-bold leading-[17px]",
  md: "text-xl font-bold leading-6",
  xs: "text-xs font-bold",
  lg: "text-[22px] font-bold",
};

const Heading = ({ children, className = "", size = "md", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-gray-700_01 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
