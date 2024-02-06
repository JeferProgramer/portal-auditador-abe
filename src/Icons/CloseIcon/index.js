import * as React from "react";
const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={19}
    fill="none"
    {...props}
  >
    <path
      stroke="#9197B3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m11.25 7.25-4.5 4.5m0-4.5 4.5 4.5M16.5 9.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
    />
  </svg>
);
export default CloseIcon;
