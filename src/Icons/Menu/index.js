import * as React from "react"
const Menu = ({ color = '#C7C7C7' }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
    >
        <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.929}
            d="M2.25 9h13.5M2.25 4.5h13.5m-13.5 9h13.5"
        />
    </svg>
)
export default Menu
