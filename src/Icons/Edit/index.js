import * as React from "react"
const Edit = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={18}
        height={18}
        fill="none"
        {...props}
    >
        <g clipPath="url(#a)">
            <path
                stroke="#9197B3"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M8.25 3H5.1c-1.26 0-1.89 0-2.371.245a2.25 2.25 0 0 0-.984.983C1.5 4.71 1.5 5.34 1.5 6.6v6.3c0 1.26 0 1.89.245 2.371.216.424.56.768.984.984.48.245 1.11.245 2.371.245h6.3c1.26 0 1.89 0 2.371-.245a2.25 2.25 0 0 0 .984-.984C15 14.791 15 14.16 15 12.9V9.75M6 12h1.256c.367 0 .55 0 .723-.041.153-.037.3-.098.433-.18.152-.093.282-.223.54-.482l7.173-7.172a1.591 1.591 0 0 0-2.25-2.25L6.703 9.047c-.26.26-.39.39-.482.54a1.5 1.5 0 0 0-.18.434C6 10.194 6 10.377 6 10.744V12Z"
            />
        </g>
        <defs>
            <clipPath id="a">
                <path fill="#fff" d="M0 0h18v18H0z" />
            </clipPath>
        </defs>
    </svg>
)
export default Edit
