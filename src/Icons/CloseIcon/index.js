import * as React from "react";
const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="white"
    {...props}
  >
    <path
      stroke="#36455D"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.167}
      d="m8.75 5.25-3.5 3.5m0-3.5 3.5 3.5M12.833 7A5.833 5.833 0 1 1 1.167 7a5.833 5.833 0 0 1 11.666 0Z"
    />
  </svg>
);
export default CloseIcon;
