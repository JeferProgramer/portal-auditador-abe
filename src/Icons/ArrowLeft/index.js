import * as React from "react";

const ArrowLeft = ({ width = 27, height = 27, ...props }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        fill="none"
        viewBox="0 0 17 17"
        {...props}
    >
        <path
            fill="#36455D"
            fillRule="evenodd"
            d="M10.277 4.386a.795.795 0 0 1 0 1.124L7.66 8.127l2.617 2.617a.795.795 0 0 1-1.124 1.124l-3.179-3.18a.795.795 0 0 1 0-1.123l3.18-3.179a.795.795 0 0 1 1.123 0Z"
            clipRule="evenodd"
        />
    </svg>
);

export default ArrowLeft;
