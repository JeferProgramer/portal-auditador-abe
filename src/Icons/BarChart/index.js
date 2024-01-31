import React from 'react'

const BarChart = (props) => {
    if (props.iconTitle) {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={33}
                height={32}
                fill="none"
                {...props}
            >
                <path
                    stroke="#A6D04F"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.667}
                    d="M16.394 4h5.6c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748c.436.856.436 1.976.436 4.216v11.2c0 2.24 0 3.36-.436 4.216a4 4 0 0 1-1.748 1.748c-.856.436-1.976.436-4.216.436h-11.2c-2.24 0-3.36 0-4.216-.436a4 4 0 0 1-1.748-1.748c-.436-.855-.436-1.976-.436-4.216V16m6.667 1.334v5.333m10.666-8v8M16.395 9.334v13.333m-9.333-12v-8m-4 4h8"
                />
            </svg>
        )
    } else {
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                fill="none"
                {...props}
            >
                <path
                    stroke="#36455D"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.667}
                    d="M10 2.5h3.5c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.093 1.092C17.5 4.4 17.5 5.1 17.5 6.5v7c0 1.4 0 2.1-.272 2.635a2.5 2.5 0 0 1-1.093 1.093c-.535.272-1.235.272-2.635.272h-7c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.092-1.093C2.5 15.6 2.5 14.9 2.5 13.5V10m4.167.834v3.333m6.666-5v5M10 5.834v8.333m-5.833-7.5v-5m-2.5 2.5h5"
                />
            </svg>
        )
    }
}

export default BarChart
