import * as React from "react"
const ChevronLeft = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <path
            stroke="#0D0D2F"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="m12.5 15-5-5 5-5"
        />
    </svg>
)
export default ChevronLeft

