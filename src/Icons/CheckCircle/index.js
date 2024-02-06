import * as React from "react";

const CheckCircle = ({ size = 'default' }) => {
    const defaultSVG = (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_6400_4081)">
                <path d="M5.625 9L7.875 11.25L12.375 6.75M16.5 9C16.5 13.1421 13.1421 16.5 9 16.5C4.85786 16.5 1.5 13.1421 1.5 9C1.5 4.85786 4.85786 1.5 9 1.5C13.1421 1.5 16.5 4.85786 16.5 9Z" stroke="#A6D04F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_6400_4081">
                    <rect width="18" height="18" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );

    const bigSVG = (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="40" cy="40" r="40" fill="#B1D138" fill-opacity="0.15" />
            <circle cx="40.4004" cy="39.6001" r="34" fill="#B1D138" fill-opacity="0.25" />
            <path d="M29.4993 40L36.4994 47L50.4994 33M63.3327 40C63.3327 52.8866 52.886 63.3333 39.9994 63.3333C27.1127 63.3333 16.666 52.8866 16.666 40C16.666 27.1133 27.1127 16.6666 39.9994 16.6666C52.886 16.6666 63.3327 27.1133 63.3327 40Z" stroke="#4AA459" stroke-width="4.73333" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );

    return size === 'big' ? bigSVG : defaultSVG;
};

export default CheckCircle;
