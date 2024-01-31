import * as React from "react"
const Close = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        viewBox="0 0 16 16"
        {...props}
    >
        <path
            stroke="#36455D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="m11.333 4.667-6.666 6.666m0-6.667 6.666 6.667"
        />
    </svg>
)
export default Close