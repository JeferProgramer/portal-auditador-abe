import * as React from "react"
const ChevronRight = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="none"
        {...props}
    >
        <path
            stroke="#36455D"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.333}
            d="m6 12 4-4-4-4"
        />
    </svg>
)
export default ChevronRight
