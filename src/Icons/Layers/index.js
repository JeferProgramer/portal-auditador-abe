import * as React from "react"
const Layers = ({ stroke }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={19}
        height={18}
        fill="none"
    >
        <path
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M5.75 7.125 2 9l7.232 3.616c.098.049.147.074.199.083a.374.374 0 0 0 .138 0c.052-.01.1-.034.2-.083L17 9l-3.75-1.875m-7.5 3.75L2 12.75l7.232 3.616c.098.049.147.074.199.083a.374.374 0 0 0 .138 0c.052-.01.1-.034.2-.083L17 12.75l-3.75-1.875M2 5.25l7.232-3.616a.815.815 0 0 1 .199-.083.375.375 0 0 1 .138 0c.052.01.1.034.2.083L17 5.25 9.768 8.866c-.098.049-.147.074-.199.083a.375.375 0 0 1-.138 0c-.052-.01-.1-.034-.2-.083L2 5.25Z"
        />
    </svg>
)
export default Layers

