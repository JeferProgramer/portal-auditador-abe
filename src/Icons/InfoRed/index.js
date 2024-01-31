import * as React from "react"
const InfoRed = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={15}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                stroke="#FF0B0B"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.167}
                d="M7.378 9.41V7.075m0-2.333h.006m5.827 2.333a5.833 5.833 0 1 1-11.666 0 5.833 5.833 0 0 1 11.666 0Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M.378.076h14v14h-14z" />
            </clipPath>
        </defs>
    </svg>
)
export default InfoRed
